// src/pages/HomePage.tsx

import { motion } from 'framer-motion';
import CollectionCard from '../components/CollectionCard';
import { images } from '../assets/images';

// A CORREÇÃO ESTÁ AQUI 👇: Acessamos as imagens usando a chave como texto.
const collections = [
  { name: 'Malha', href: '/colecoes/malha', imageUrl: images['colecao-malha'] },
  { name: 'Liganete', href: '/colecoes/liganete', imageUrl: images['colecao-liganete'] },
  { name: 'Camisola', href: '/colecoes/camisola', imageUrl: images['colecao-camisola'] },
  { name: 'Curto', href: '/colecoes/curto', imageUrl: images['colecao-curto'] },
  { name: 'Modal', href: '/colecoes/modal', imageUrl: images['colecao-modal'] },
  { name: 'Plush', href: '/colecoes/plush', imageUrl: images['colecao-plush'] },
];

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <motion.section 
        className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black">
          {/* A CORREÇÃO ESTÁ AQUI TAMBÉM 👇 */}
          <img src={images['sobre-hero']} alt="Ambiente de quarto aconchegante" className="w-full h-full object-cover opacity-60"/>
        </div>
        <div className="relative z-10 p-8">
          <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight">O conforto que você merece.</h1>
          <p className="mt-4 text-lg md:text-xl font-sans font-light max-w-2xl mx-auto">Descubra coleções exclusivas de pijamas feitos com os tecidos mais nobres para noites de sono perfeitas.</p>
        </div>
      </motion.section>
      <section className="bg-off-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <motion.h2 className="text-3xl font-serif text-center text-graphite mb-12" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.8 }} variants={cardVariants}>
            Nossas Coleções
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {collections.map((collection) => (
              <CollectionCard
                key={collection.name}
                name={collection.name}
                href={collection.href}
                imageUrl={collection.imageUrl}
                variants={cardVariants}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default HomePage;