// src/components/Footer.tsx

import { Instagram, Facebook } from 'lucide-react';

function Footer() {
  return (
    // O elemento <footer> ocupa toda a largura disponível (width: 100%)
    <footer className="bg-white border-t border-pearl-gray">

      {/* Este <div> é o container que CENTRALIZA todo o conteúdo */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-6 lg:px-8">
        
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Seção da Marca e Newsletter */}
          <div className="space-y-8 xl:col-span-1">
            <h2 className="font-serif text-2xl font-medium text-graphite">Tutty Pijamas</h2>
            <p className="text-graphite text-opacity-80 text-sm max-w-xs">
              Receba novidades e ofertas exclusivas diretamente no seu e-mail.
            </p>
            <form className="flex gap-2">
              <label htmlFor="email-address" className="sr-only">Endereço de e-mail</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border border-pearl-gray bg-white px-4 py-2 text-base text-graphite placeholder-gray-500 shadow-sm focus:border-soft-gold focus:outline-none focus:ring-1 focus:ring-soft-gold"
                placeholder="Seu e-mail"
              />
              <button
                type="submit"
                className="flex-shrink-0 rounded-md bg-navy-deep px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-navy-deep/90 focus:outline-none"
              >
                Inscrever
              </button>
            </form>
          </div>

          {/* Seção de Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-graphite font-sans">Institucional</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-graphite text-opacity-70 hover:text-graphite">Sobre Nós</a></li>
                  <li><a href="#" className="text-sm leading-6 text-graphite text-opacity-70 hover:text-graphite">Blog</a></li>
                  <li><a href="#" className="text-sm leading-6 text-graphite text-opacity-70 hover:text-graphite">Trabalhe Conosco</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-graphite font-sans">Ajuda</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-graphite text-opacity-70 hover:text-graphite">Contato</a></li>
                  <li><a href="#" className="text-sm leading-6 text-graphite text-opacity-70 hover:text-graphite">Trocas e Devoluções</a></li>
                  <li><a href="#" className="text-sm leading-6 text-graphite text-opacity-70 hover:text-graphite">FAQ</a></li>
                  <li><a href="#" className="text-sm leading-6 text-graphite text-opacity-70 hover:text-graphite">Guia de Tamanhos</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Seção Inferior do Rodapé com Copyright e Redes Sociais */}
        <div className="mt-16 border-t border-pearl-gray pt-8 sm:mt-20 lg:mt-24 flex items-center justify-between">
          <p className="text-xs leading-5 text-graphite text-opacity-60">&copy; {new Date().getFullYear()} Tutty Pijamas. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-graphite text-opacity-60 hover:text-graphite"><span className="sr-only">Instagram</span><Instagram className="h-5 w-5" /></a>
            <a href="#" className="text-graphite text-opacity-60 hover:text-graphite"><span className="sr-only">Facebook</span><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;