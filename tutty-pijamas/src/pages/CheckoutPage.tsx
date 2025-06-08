// src/pages/CheckoutPage.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center text-center bg-white min-h-[60vh] px-4"
    >
      <h1 className="text-4xl font-serif text-graphite mb-4">Checkout</h1>
      <p className="text-graphite text-opacity-70 mb-8 max-w-md">
        Esta é a página de finalização da compra. Em um site real, aqui estariam os campos para endereço, frete e pagamento.
      </p>
      <Link 
        to="/" 
        className="bg-navy-deep text-white font-bold uppercase py-3 px-8 rounded-md hover:bg-navy-deep/90 transition-colors"
      >
        Voltar para a Home
      </Link>
    </motion.div>
  );
};

export default CheckoutPage;