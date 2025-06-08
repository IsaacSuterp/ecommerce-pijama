// src/AppRoutes.tsx

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import AccountPage from './pages/AccountPage'; // 1. Importamos a nova página da Conta

// Não precisamos mais do PageTemplate para as páginas de conta
const PageTemplate = ({ title }: { title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.4 }}
    className="flex min-h-96 items-center justify-center bg-white"
  >
    <h1 className="text-center font-serif text-4xl text-graphite">{title}</h1>
  </motion.div>
);

const AppRoutes = () => {
  const location = useLocation();
  return (
    <>
      <Toaster position="bottom-right" />
      <ScrollToTop />
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/colecoes/:slug" element={<ProductsByCategoryPage />} />
            <Route path="/produto/:id" element={<ProductDetailPage />} />
            <Route path="/carrinho" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cadastro" element={<RegistrationPage />} />
            
            {/* 2. Substituímos o placeholder pela nossa nova página da Conta */}
            <Route path="/conta" element={<AccountPage />} />
            {/* No futuro, poderíamos criar sub-rotas como /conta/pedidos */}
            
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

export default AppRoutes;