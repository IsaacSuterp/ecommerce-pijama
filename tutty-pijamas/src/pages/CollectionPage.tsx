// src/pages/CollectionPage.tsx

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchProducts } from '../api/mock';
import type { Product } from '../components/ProductCard';
import ProductCard from '../components/ProductCard';

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

function CollectionPage() {
  const { slug } = useParams<{ slug: string }>();
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [collectionName, setCollectionName] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      setAllProducts(products);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    if (slug && allProducts.length > 0) {
      const productsOfCollection = allProducts.filter(p => p.collectionSlug === slug);
      setFilteredProducts(productsOfCollection);
      const name = slug.charAt(0).toUpperCase() + slug.slice(1);
      setCollectionName(name);
    }
  }, [slug, allProducts]);

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
        {filteredProducts.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            variants={gridContainerVariants}
            initial="hidden"
            animate="show"
          >
            {filteredProducts.map((product) => (
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

// GARANTA QUE ESTA LINHA EXISTA NO FINAL DO SEU ARQUIVO 👇
export default CollectionPage;