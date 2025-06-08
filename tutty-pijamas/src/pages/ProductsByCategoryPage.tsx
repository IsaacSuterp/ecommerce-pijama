// src/pages/ProductsByCategoryPage.tsx

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
// AQUI ESTÁ A MUDANÇA 👇: Importamos a nova função específica
import { fetchProductsByCollection } from '../api/products';
import type { Product } from '../types';
import ProductCard from '../components/ProductCard';

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

function ProductsByCategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  // AQUI ESTÁ A MUDANÇA 👇: Simplificamos os estados. Não precisamos mais de 'allProducts'.
  const [products, setProducts] = useState<Product[]>([]);
  const [collectionName, setCollectionName] = useState('');
  const [loading, setLoading] = useState(true);

  // AQUI ESTÁ A MUDANÇA 👇: O useEffect agora busca apenas os produtos da coleção correta.
  useEffect(() => {
    if (slug) {
      const loadCollectionProducts = async () => {
        setLoading(true);
        const collectionProducts = await fetchProductsByCollection(slug);
        setProducts(collectionProducts);
        
        const name = slug.charAt(0).toUpperCase() + slug.slice(1);
        setCollectionName(name);
        setLoading(false);
      };
      loadCollectionProducts();
    }
  }, [slug]); // O efeito agora depende do 'slug' da URL.

  if (loading) {
    return <div className="text-center py-40 bg-white">Carregando coleção...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-4xl font-serif text-center text-graphite mb-12">
          Coleção {collectionName}
        </h1>
        {products.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            variants={gridContainerVariants}
            initial="hidden"
            animate="show"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} variants={cardVariants} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center text-graphite text-opacity-70">
            <p>Nenhum produto encontrado nesta coleção no momento.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ProductsByCategoryPage;