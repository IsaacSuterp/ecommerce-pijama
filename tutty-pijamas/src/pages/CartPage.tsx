// src/pages/CartPage.tsx

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { images } from '../assets/images';
import { X } from 'lucide-react';
import type { CartItem } from '../types'; // Esta importação agora funcionará.

function CartPage() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center text-center bg-white min-h-[60vh] px-4"
      >
        <h1 className="text-4xl font-serif text-graphite mb-4">Seu carrinho está vazio.</h1>
        <p className="text-graphite text-opacity-70 mb-8">
          Parece que você ainda não adicionou nenhum pijama dos sonhos ao seu carrinho.
        </p>
        <Link 
          to="/" 
          className="bg-navy-deep text-white font-bold uppercase py-3 px-8 rounded-md hover:bg-navy-deep/90 transition-colors"
        >
          Ver Coleções
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-center text-graphite mb-12">Meu Carrinho</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ul role="list" className="divide-y divide-gray-200">
              {cartItems.map((item: CartItem) => {
                const imageUrl = item.images.length > 0 ? images[item.images[0]] : '';
                return (
                  <li key={`${item.id}-${item.size}`} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img src={imageUrl} alt={item.name} className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-graphite">
                          <h3><Link to={`/produto/${item.id}`}>{item.name}</Link></h3>
                          <p className="ml-4">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Tamanho: {item.size}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border border-gray-200 rounded-md">
                          <button onClick={() => decreaseQuantity(item.id, item.size)} className="px-3 py-1 text-lg leading-none hover:bg-gray-100">-</button>
                          <span className="px-4 py-1 text-center w-12">{item.quantity}</span>
                          <button onClick={() => increaseQuantity(item.id, item.size)} className="px-3 py-1 text-lg leading-none hover:bg-gray-100">+</button>
                        </div>
                        <div className="flex">
                          <button 
                            onClick={() => removeFromCart(item.id, item.size)}
                            type="button" 
                            className="font-medium text-soft-gold hover:text-soft-gold/80 flex items-center gap-1"
                          >
                            <X className="h-4 w-4" /> Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-lg font-medium text-graphite mb-6">Resumo do Pedido</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-graphite">Subtotal</dt>
                  <dd className="text-sm font-medium text-graphite">R$ {cartTotal.toFixed(2).replace('.', ',')}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-graphite">Frete</dt>
                  <dd className="text-sm font-medium text-graphite">a calcular</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-graphite">Total</dt>
                  <dd className="text-base font-medium text-graphite">R$ {cartTotal.toFixed(2).replace('.', ',')}</dd>
                </div>
              </div>
              <Link
                to="/checkout"
                className="mt-6 block w-full text-center bg-navy-deep text-white font-bold uppercase py-3 px-6 rounded-md hover:bg-navy-deep/90 transition-colors"
              >
                Finalizar Compra
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CartPage;