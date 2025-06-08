// src/pages/AboutPage.tsx

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Diamond, Clock } from 'lucide-react';
import { images } from '../assets/images';

const fadeInVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-graphite"
    >
      {/* A CORREÇÃO ESTÁ AQUI 👇 */}
      <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${images['sobre-hero']})` }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="text-white text-5xl md:text-7xl font-serif text-center">
            Nossa História
          </motion.h1>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
          <motion.div variants={fadeInVariants}>
            <h2 className="font-serif text-4xl leading-tight">Feito com amor, para sonhar.</h2>
            <p className="mt-6 text-base text-graphite text-opacity-70 leading-relaxed">A Tutty Pijamas nasceu de um desejo simples: transformar o ato de dormir em um ritual de autocuidado e conforto. Acreditamos que o bem-estar começa em casa, nos momentos de pausa e descanso.</p>
            <p className="mt-4 text-base text-graphite text-opacity-70 leading-relaxed">Cada peça é pensada nos mínimos detalhes, desde a escolha dos tecidos mais nobres até o design atemporal que une elegância e aconchego. Nossa jornada é tecer sonhos e entregar, em cada pijama, uma experiência única de conforto.</p>
          </motion.div>
          <motion.div variants={fadeInVariants} className="aspect-square w-full overflow-hidden rounded-lg shadow-xl">
            {/* A CORREÇÃO ESTÁ AQUI TAMBÉM 👇 */}
            <img src={images['sobre-detalhe']} alt="Detalhe de tecido" className="h-full w-full object-cover" />
          </motion.div>
        </motion.div>
      </div>
      <div className="bg-off-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }} variants={fadeInVariants} className="text-4xl font-serif text-center mb-16">
            Nossos Pilares
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
            <motion.div variants={fadeInVariants} className="flex flex-col items-center"><Heart className="h-10 w-10 text-soft-gold mb-4" /><h3 className="text-xl font-serif mb-2">Conforto Inigualável</h3><p className="text-graphite text-opacity-70 text-sm leading-relaxed">Selecionamos apenas tecidos que acariciam a pele, proporcionando uma sensação de bem-estar absoluto.</p></motion.div>
            <motion.div variants={fadeInVariants} className="flex flex-col items-center"><Diamond className="h-10 w-10 text-soft-gold mb-4" /><h3 className="text-xl font-serif mb-2">Qualidade Artesanal</h3><p className="text-graphite text-opacity-70 text-sm leading-relaxed">Cada costura e acabamento são feitos com o máximo de cuidado para garantir durabilidade e perfeição.</p></motion.div>
            <motion.div variants={fadeInVariants} className="flex flex-col items-center"><Clock className="h-10 w-10 text-soft-gold mb-4" /><h3 className="text-xl font-serif mb-2">Design Atemporal</h3><p className="text-graphite text-opacity-70 text-sm leading-relaxed">Criamos peças clássicas e elegantes que transcendem tendências, para você se sentir bem hoje e sempre.</p></motion.div>
          </motion.div>
        </div>
      </div>
      <div className="bg-white text-center py-20 md:py-28">
        <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }} variants={fadeInVariants} className="text-3xl font-serif">
          Descubra sua próxima noite de sono perfeita.
        </motion.h3>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }} variants={fadeInVariants}>
          <Link to="/" className="mt-8 inline-block bg-navy-deep text-white font-bold uppercase py-3 px-8 rounded-md hover:bg-navy-deep/90 transition-colors">
            Explorar Coleções
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutPage;