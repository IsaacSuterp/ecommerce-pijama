// src/components/MiniCart.tsx

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import { images } from '../assets/images'; // Importamos nosso índice de imagens
import { X } from 'lucide-react';

const panelVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { type: 'spring', stiffness: 400, damping: 40 } },
  exit: { x: '100%', transition: { type: 'tween', duration: 0.3 } },
};

const MiniCart = () => {
  useLockBodyScroll();
  const { cartItems, cartTotal, closeCart, removeFromCart } = useCart();

  return (
    <motion.div
      className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-2xl"
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 className="text-xl font-serif text-graphite">Seu Carrinho</h2>
        <button onClick={closeCart} className="p-1 rounded-full hover:bg-gray-100">
          <X className="h-6 w-6 text-graphite" />
        </button>
      </div>

      {cartItems.length > 0 ? (
        <div className="flex flex-1 flex-col overflow-y-auto">
          <ul role="list" className="divide-y divide-gray-200 p-6 space-y-4">
            {cartItems.map((item) => {
              // A CORREÇÃO ESTÁ AQUI 👇: Convertemos o nome da imagem na imagem local real
              const imageUrl = item.images.length > 0 ? images[item.images[0]] : '';
              return (
                <li key={`${item.id}-${item.size}`} className="flex py-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                    <img src={imageUrl} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-graphite">
                        <h3><Link to={`/produto/${item.id}`} onClick={closeCart}>{item.name}</Link></h3>
                        <p className="ml-4">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Tamanho: {item.size}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Qtd: {item.quantity}</p>
                      <button onClick={() => removeFromCart(item.id, item.size)} type="button" className="font-medium text-soft-gold hover:text-soft-gold/80">Remover</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="border-t border-gray-200 p-6 mt-auto bg-gray-50">
            <div className="flex justify-between text-base font-medium text-graphite">
              <p>Subtotal</p>
              <p>R$ {cartTotal.toFixed(2).replace('.', ',')}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">Frete será calculado no checkout.</p>
            <div className="mt-6 flex flex-col gap-3">
              <Link to="/carrinho" onClick={closeCart} className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-graphite shadow-sm hover:bg-gray-100">
                Ver Carrinho
              </Link>
              <Link to="/checkout" onClick={closeCart} className="flex items-center justify-center rounded-md bg-navy-deep px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-navy-deep/90 uppercase">
                Finalizar Compra
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center p-6 text-center">
          <div>
            <p className="text-lg text-graphite">Seu carrinho está vazio.</p>
            <button onClick={closeCart} className="mt-4 text-soft-gold font-medium">Continuar comprando</button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default MiniCart;