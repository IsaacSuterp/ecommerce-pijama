// src/components/SearchOverlay.tsx

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import { fetchProducts } from '../api/products'; // <-- A CORREÇÃO ESTÁ AQUI
import type { Product } from '../types';
import { Search, X } from 'lucide-react';

interface SearchOverlayProps {
  closeSearch: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: "-50%", opacity: 0, transition: { type: 'tween', duration: 0.2 } },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 400, damping: 40 } },
  exit: { y: "-50%", opacity: 0, transition: { type: 'tween', duration: 0.2 } },
};

const resultsVariants = {
  hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SearchOverlay: React.FC<SearchOverlayProps> = ({ closeSearch }) => {
  useLockBodyScroll();
  const [searchTerm, setSearchTerm] = useState('');
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      setAllProducts(products);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]); return;
    }
    const results = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, allProducts]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[15vh] md:pt-[20vh]"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={closeSearch}
    >
      <motion.div
        className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <header className="flex items-center gap-4">
            <Search className="h-6 w-6 text-graphite text-opacity-50" />
            <input
              type="text"
              placeholder="Buscar por pijamas..."
              className="w-full bg-transparent text-xl text-graphite placeholder:text-graphite/40 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            <button onClick={closeSearch} className="text-graphite">
              <X className="h-6 w-6" />
            </button>
          </header>
          <div className="mt-6 border-t border-gray-200 pt-6 max-h-[50vh] overflow-y-auto">
            {searchTerm && searchResults.length > 0 && (
              <motion.ul variants={resultsVariants} initial="hidden" animate="visible" className="space-y-4">
                {searchResults.map(product => (
                  <motion.li key={product.id} variants={itemVariants}>
                    <Link to={`/produto/${product.id}`} onClick={closeSearch} className="flex items-center gap-4 p-2 -m-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <img src={product.images[0]} alt={product.name} className="h-16 w-16 rounded-md object-cover" />
                      <div>
                        <p className="font-serif text-lg text-graphite">{product.name}</p>
                        <p className="text-sm text-graphite text-opacity-70">R$ {product.price.toFixed(2).replace('.', ',')}</p>
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
            {searchTerm && searchResults.length === 0 && (<p className="text-center text-graphite text-opacity-60">Nenhum resultado encontrado.</p>)}
            {!searchTerm && (<p className="text-center text-graphite text-opacity-60">Digite para buscar em nosso catálogo.</p>)}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SearchOverlay;