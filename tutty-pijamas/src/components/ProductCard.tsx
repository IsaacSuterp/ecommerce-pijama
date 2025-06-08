// src/components/ProductCard.tsx

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { images } from '../assets/images';

export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  tag: string | null;
  collectionSlug: string;
  description: string;
  sizes: string[];
}

interface ProductCardProps {
  product: Product;
  variants?: Variants; 
}

const ProductCard: React.FC<ProductCardProps> = ({ product, variants }) => {
  const imageUrl = product.images.length > 0 ? images[product.images[0]] : '';

  return (
    <Link to={`/produto/${product.id}`}>
      <motion.div
        className="relative cursor-pointer"
        variants={variants}
        initial="hidden"
        animate="show"
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {product.tag && (
          <div className="absolute top-4 left-4 bg-white bg-opacity-80 text-graphite font-sans text-xs font-bold uppercase px-3 py-1 z-10">
            {product.tag}
          </div>
        )}
        <div className="aspect-[3/4] w-full overflow-hidden bg-gray-200 shadow-lg">
          <motion.img
            src={imageUrl}
            alt={product.name}
            className="h-full w-full object-cover object-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-md font-serif text-graphite">{product.name}</h3>
          </div>
          <p className="text-md font-sans font-medium text-graphite">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export default ProductCard;