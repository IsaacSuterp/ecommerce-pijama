// src/pages/RegistrationPage.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function RegistrationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 flex items-center justify-center py-20 md:py-28 px-4"
    >
      <div className="w-full max-w-md">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 border border-gray-200 rounded-lg shadow-lg"
        >
          <div className="text-center">
            <h1 className="text-4xl font-serif text-graphite">Criar sua Conta</h1>
            <p className="mt-2 text-sm text-graphite text-opacity-70">
              Junte-se a nós e descubra um novo nível de conforto.
            </p>
          </div>

          <form className="mt-8 space-y-6">
            {/* Campo de Nome Completo */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-graphite">
                Nome completo
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-soft-gold focus:border-soft-gold"
                />
              </div>
            </div>

            {/* Campo de Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-graphite">
                E-mail
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-soft-gold focus:border-soft-gold"
                />
              </div>
            </div>

            {/* Campo de Senha */}
            <div>
              <label htmlFor="password"className="block text-sm font-medium text-graphite">
                Senha
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-soft-gold focus:border-soft-gold"
                />
              </div>
            </div>

            {/* Botão de Criar Conta */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-navy-deep hover:bg-navy-deep/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-deep/50 uppercase"
              >
                Criar Conta
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Já tem uma conta?{' '}
            <Link to="/login" className="font-medium text-soft-gold hover:text-soft-gold/80">
              Faça login
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default RegistrationPage;