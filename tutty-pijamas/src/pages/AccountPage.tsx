// src/pages/AccountPage.tsx

import { motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { Package, User, MapPin, LogOut } from 'lucide-react';

// Dados de exemplo para o usuário
const user = {
  name: 'Ana Silva',
  email: 'ana.silva@email.com',
};

// Itens de navegação para a barra lateral
const navItems = [
  { name: 'Meus Pedidos', href: '/conta/pedidos', icon: Package },
  { name: 'Meus Dados', href: '/conta/dados', icon: User },
  { name: 'Endereços', href: '/conta/enderecos', icon: MapPin },
];

function AccountPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-graphite">Minha Conta</h1>
          <p className="mt-2 text-lg text-graphite text-opacity-70">
            Olá, {user.name}!
          </p>
        </div>

        <div className="mt-12 lg:grid lg:grid-cols-4 lg:gap-12">
          {/* Coluna de Navegação (Sidebar) */}
          <aside className="lg:col-span-1">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  // O NavLink nos dá o 'isActive' para estilizarmos o link ativo
                  className={({ isActive }) =>
                    `group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-soft-gold text-white'
                        : 'text-graphite hover:bg-gray-200'
                    }`
                  }
                >
                  <item.icon className="mr-3 h-6 w-6 flex-shrink-0" />
                  <span className="truncate">{item.name}</span>
                </NavLink>
              ))}
              <Link
                to="/"
                className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-graphite hover:bg-gray-200 transition-colors"
              >
                <LogOut className="mr-3 h-6 w-6 flex-shrink-0" />
                <span>Sair</span>
              </Link>
            </nav>
          </aside>

          {/* Coluna de Conteúdo Principal */}
          <main className="lg:col-span-3 mt-12 lg:mt-0">
            <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-lg min-h-[40vh]">
              <h2 className="text-2xl font-serif text-graphite">Bem-vinda ao seu painel!</h2>
              <p className="mt-4 text-base text-graphite text-opacity-70 leading-relaxed">
                A partir do painel de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento e editar sua senha e detalhes da conta.
              </p>
              <p className="mt-2 text-base text-graphite text-opacity-70 leading-relaxed">
                Selecione uma das opções ao lado para começar.
              </p>
            </div>
          </main>
        </div>
      </div>
    </motion.div>
  );
}

export default AccountPage;