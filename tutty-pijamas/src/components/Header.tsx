// src/components/Header.tsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import { useCart } from '../context/CartContext';
import SearchOverlay from './SearchOverlay';
import Portal from './Portal';
import MiniCart from './MiniCart';
import { Search, User, ShoppingBag, Menu, X, Instagram, Facebook } from 'lucide-react';

// --- Variantes de Animação para o Painel Lateral do Menu ---
const panelVariants: Variants = {
  hidden: { x: '100%', transition: { type: 'tween', duration: 0.3, ease: 'easeOut' } },
  visible: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0, transition: { duration: 0.3 } },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};


// --- Componente Interno para o Menu Móvel (Código completo incluído) ---
const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  useLockBodyScroll();

  const navLinks = [
    { title: 'Sobre', href: '/sobre' },
    { title: 'Login / Cadastro', href: '/login' },
  ];

  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      {/* Backdrop (fundo escurecido) */}
      <motion.div
        className="fixed inset-0 bg-black/30 z-50"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={closeMenu}
      />

      {/* Painel do Menu que desliza */}
      <motion.div
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white p-6 shadow-2xl"
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="flex items-center justify-between">
          <Link to="/" onClick={closeMenu} className="font-serif text-2xl font-medium text-graphite">
            Tutty Pijamas
          </Link>
          <motion.button type="button" onClick={closeMenu} className="-m-2.5 rounded-md p-2.5 text-graphite" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <span className="sr-only">Fechar menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </motion.button>
        </div>
        
        <div className="mt-8 flow-root">
          <div className="divide-y divide-gray-500/10">
            <div className="space-y-4 py-6">
              {navLinks.map((link) => (
                <Link key={link.title} to={link.href} onClick={closeMenu} className="-mx-3 block rounded-lg px-3 py-2 text-base font-sans font-semibold leading-7 text-graphite hover:bg-gray-50">
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Link to="/carrinho" onClick={closeMenu} className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-sans font-semibold leading-7 text-graphite hover:bg-gray-50">Carrinho</Link>
            </div>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-center space-x-6 pt-6">
          <a href="#" className="text-graphite hover:text-soft-gold"><Instagram /></a>
          <a href="#" className="text-graphite hover:text-soft-gold"><Facebook /></a>
        </div>
      </motion.div>
    </div>
  );
};


// --- Componente Principal do Header ---
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartItems, isCartOpen, openCart } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-off-white bg-opacity-95 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 font-serif text-2xl font-medium text-graphite">
            Tutty Pijamas
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/sobre" className="text-sm font-sans font-semibold leading-6 text-graphite hover:text-soft-gold transition-colors">Sobre</Link>
        </div>
        <div className="flex items-center justify-end lg:flex-1">
          <div className="hidden lg:flex lg:items-center lg:gap-x-6">
            <button onClick={() => setIsSearchOpen(true)} type="button" className="text-graphite hover:text-soft-gold transition-colors">
              <Search className="h-6 w-6" />
            </button>
            <Link to="/login" className="text-graphite hover:text-soft-gold transition-colors"><User className="h-6 w-6" /></Link>
            <button onClick={openCart} type="button" className="relative text-graphite hover:text-soft-gold transition-colors">
              <ShoppingBag className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-soft-gold text-xs font-bold text-white">{totalItems}</span>
              )}
            </button>
          </div>
          <div className="flex items-center gap-x-4 lg:hidden">
            <button onClick={() => setIsSearchOpen(true)} type="button" className="text-graphite hover:text-soft-gold transition-colors">
              <Search className="h-6 w-6" />
            </button>
            <Link to="/login" className="text-graphite hover:text-soft-gold transition-colors"><User className="h-6 w-6" /></Link>
            <button onClick={openCart} type="button" className="relative text-graphite hover:text-soft-gold transition-colors">
              <ShoppingBag className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-soft-gold text-xs font-bold text-white">{totalItems}</span>
              )}
            </button>
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-graphite" onClick={() => setIsMenuOpen(true)}>
              <span className="sr-only">Abrir menu principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <Portal selector="#menu-root">
        <AnimatePresence>
          {isMenuOpen && <MobileMenu closeMenu={() => setIsMenuOpen(false)} />}
        </AnimatePresence>
        <AnimatePresence>
          {isSearchOpen && <SearchOverlay closeSearch={() => setIsSearchOpen(false)} />}
        </AnimatePresence>
        <AnimatePresence>
          {isCartOpen && <MiniCart />}
        </AnimatePresence>
      </Portal>
    </header>
  );
}

export default Header;