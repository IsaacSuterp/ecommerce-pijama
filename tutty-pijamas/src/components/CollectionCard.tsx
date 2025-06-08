// src/components/CollectionCard.tsx

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

// Definimos as propriedades que cada card de coleção receberá
interface CollectionCardProps {
  name: string;
  imageUrl: string;
  href: string;
  variants?: Variants; // Para a animação de entrada (stagger)
}

const CollectionCard: React.FC<CollectionCardProps> = ({ name, imageUrl, href, variants }) => {
  // Variantes para a animação do texto de sobreposição
  const overlayVariants = {
    hover: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Fica um pouco mais escuro no hover
    },
    initial: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    }
  };

  const textVariants = {
    hover: {
      y: 0, // O texto sobe para a posição 0
      opacity: 1,
    },
    initial: {
      y: 10, // O texto começa um pouco para baixo
      opacity: 0,
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden rounded-lg shadow-lg"
    >
      <Link to={href} className="block w-full h-full">
        {/* Usamos motion.div para poder animar o card inteiro no hover */}
        <motion.div
          className="w-full h-full"
          whileHover="hover" // Ativa a variante 'hover' nos filhos quando o mouse está sobre este elemento
          initial="initial"
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {/* Imagem de fundo com efeito de zoom no hover */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            variants={{
                hover: { scale: 1.1 },
                initial: { scale: 1 }
            }}
          />

          {/* Sobreposição escura para legibilidade do texto */}
          <motion.div
            className="absolute inset-0"
            variants={overlayVariants}
            transition={{ duration: 0.3 }}
          />

          {/* Textos da coleção */}
          <div className="relative flex h-full w-full flex-col items-center justify-center text-center text-white p-4">
            <h3 className="font-serif text-3xl md:text-4xl font-medium leading-tight">
              {name}
            </h3>
            {/* O texto "Ver Coleção" aparece no hover */}
            <motion.p
              className="mt-2 font-sans tracking-wider uppercase text-sm"
              variants={textVariants}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              Ver Coleção
            </motion.p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default CollectionCard;