// src/pages/ProductDetailPage.tsx

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// AQUI ESTÁ A MUDANÇA 👇: Importamos a nova função
import { fetchProductById } from '../api/products';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import { images } from '../assets/images';
import { ChevronRight } from 'lucide-react';

const detailsVariants = {
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { staggerChildren: 0.07 } },
};

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  // AQUI ESTÁ A MUDANÇA 👇: O useEffect agora é muito mais simples.
  useEffect(() => {
    // Verificamos se o 'id' existe antes de buscar
    if (id) {
      const loadProduct = async () => {
        setLoading(true);
        const currentProduct = await fetchProductById(id);
        setProduct(currentProduct);
        if (currentProduct && currentProduct.sizes.length > 0) {
          setSelectedSize(currentProduct.sizes[0]);
        }
        setLoading(false);
      };
      loadProduct();
    }
  }, [id]);

  if (loading) {
    return <div className="text-center py-40 bg-white">Carregando...</div>;
  }

  if (!product) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-40 bg-white">
        <h2 className="font-serif text-2xl">Produto não encontrado.</h2>
        <Link to="/" className="text-sm text-soft-gold hover:underline mt-2">Voltar para a Home</Link>
      </motion.div>
    );
  }

  const mainImageUrl = product.images.length > 0 ? images[product.images[0]] : '';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center text-sm font-sans mb-8">
          <Link to="/" className="text-graphite opacity-60 hover:opacity-100">Home</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link to={`/colecoes/${product.collectionSlug}`} className="text-graphite opacity-60 hover:opacity-100 capitalize">{product.collectionSlug}</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-graphite">{product.name}</span>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.7 } }}>
            <div className="aspect-square w-full overflow-hidden rounded-lg shadow-lg">
              <img src={mainImageUrl} alt={product.name} className="h-full w-full object-cover" />
            </div>
          </motion.div>
          <motion.div variants={detailsVariants} initial="hidden" animate="visible">
            <motion.h1 variants={detailsVariants} className="text-4xl lg:text-5xl font-serif text-graphite">{product.name}</motion.h1>
            <motion.p variants={detailsVariants} className="mt-4 text-3xl text-graphite">R$ {product.price.toFixed(2).replace('.', ',')}</motion.p>
            <motion.p variants={detailsVariants} className="mt-6 text-base text-graphite text-opacity-70 leading-relaxed">{product.description}</motion.p>
            <motion.div variants={detailsVariants} className="mt-8">
              <h3 className="text-sm font-medium text-graphite">Tamanho</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.sizes.map(size => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${selectedSize === size ? 'bg-graphite text-white border-graphite' : 'bg-white text-graphite border-gray-300 hover:bg-gray-100'}`}>
                    {size}
                  </button>
                ))}
              </div>
            </motion.div>
            <motion.div variants={detailsVariants} className="mt-8 flex items-center gap-6">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-2 text-lg leading-none">-</button>
                <span className="px-4 py-2 text-center w-12">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-2 text-lg leading-none">+</button>
              </div>
              <button onClick={() => { if (product && selectedSize) { addToCart(product, selectedSize, quantity); } else { alert('Por favor, selecione um tamanho.'); } }} className="flex-1 bg-navy-deep text-white font-bold uppercase py-3 px-6 rounded-md hover:bg-navy-deep/90 transition-colors">
                Adicionar ao Carrinho
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductDetailPage;