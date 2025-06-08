// src/context/CartContext.tsx

import { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';
import type { ReactNode } from 'react';
import toast from 'react-hot-toast';
import type { CartContextType, CartItem, Product } from '../types';

const CART_STORAGE_KEY = 'tutty_pijamas_cart';

const CartContext = createContext<CartContextType>({} as CartContextType);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const storedItems = window.localStorage.getItem(CART_STORAGE_KEY);
      return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
      console.error("Erro ao carregar o carrinho do localStorage:", error);
      return [];
    }
  });

  // Novo estado para controlar a visibilidade do mini-carrinho
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error("Erro ao salvar o carrinho no localStorage:", error);
    }
  }, [cartItems]);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const addToCart = useCallback((product: Product, size: string, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id && item.size === size);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, size, quantity }];
    });
    toast.success(`"${product.name}" adicionado ao carrinho!`);
    openCart(); // Abre o mini-carrinho automaticamente ao adicionar um item
  }, [openCart]);

  const removeFromCart = useCallback((productId: number, size: string) => {
    setCartItems(prevItems => prevItems.filter(item => !(item.id === productId && item.size === size)));
  }, []);

  const increaseQuantity = useCallback((productId: number, size: string) => {
    setCartItems(prevItems => prevItems.map(item => item.id === productId && item.size === size ? { ...item, quantity: item.quantity + 1 } : item));
  }, []);

  const decreaseQuantity = useCallback((productId: number, size: string) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId && item.size === size);
      if (existingItem?.quantity === 1) {
        return prevItems.filter(item => !(item.id === productId && item.size === size));
      }
      return prevItems.map(item => item.id === productId && item.size === size ? { ...item, quantity: item.quantity - 1 } : item);
    });
  }, []);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
    isCartOpen,
    openCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};