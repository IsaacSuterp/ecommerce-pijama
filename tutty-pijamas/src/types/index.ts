// src/types/index.ts

// 1. Importamos o tipo 'Product' de sua única fonte da verdade.
import type { Product } from '../components/ProductCard';

// 2. Re-exportamos o tipo para que outros componentes possam pegá-lo daqui se precisarem.
export type { Product };

// 3. Usamos 'Product' para criar e exportar 'CartItem'.
export interface CartItem extends Product {
  size: string;
  quantity: number;
}

// 4. E, finalmente, criamos e exportamos o tipo do nosso contexto.
export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, size: string, quantity: number) => void;
  removeFromCart: (productId: number, size: string) => void;
  increaseQuantity: (productId: number, size: string) => void;
  decreaseQuantity: (productId: number, size: string) => void;
  cartTotal: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}