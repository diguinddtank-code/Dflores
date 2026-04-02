import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Star, Heart } from 'lucide-react';

const AnimatedShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 bg-[#0A1A16] overflow-hidden z-10"
    >
      {/* Elemento de conexão sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          style={{ opacity, scale }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 opacity-60">
             <Sparkles size={12} className="text-[#D4AF37]" />
             <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold">Experiência Sensorial</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-white italic leading-tight">
            A Arte de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4EBD0]">Encantar</span>
          </h2>
          <p className="mt-6 text-white/50 font-light max-w-2xl mx-auto text-lg leading-relaxed">
            Cada detalhe é meticulosamente planejado para criar uma atmosfera única, onde a beleza floral encontra a sofisticação em sua forma mais pura.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Coluna 1 - Sobe */}
          <motion.div style={{ y: y1 }} className="space-y-8">
            <div className="relative group overflow-hidden rounded-sm">
              <img 
                src="https://i.imgur.com/RvYM7IY.jpeg" 
                alt="Decoração Floral" 
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A16] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6">
                <Star className="text-[#D4AF37] mb-2" size={20} />
                <h3 className="text-white font-serif text-xl">Design Exclusivo</h3>
              </div>
            </div>
          </motion.div>

          {/* Coluna 2 - Centro (Fixo/Escala) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-20"
          >
            <div className="relative group overflow-hidden rounded-sm border border-[#D4AF37]/30 p-2">
              <img 
                src="https://i.imgur.com/8GhqEJW.jpeg" 
                alt="Arranjo Principal" 
                className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-black/40 backdrop-blur-md inline-block px-8 py-4 border border-[#D4AF37]/50"
                >
                  <p className="text-[#D4AF37] font-serif text-2xl italic">Elegância</p>
                  <p className="text-white text-xs uppercase tracking-[0.3em] mt-1">Em cada pétala</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Coluna 3 - Desce */}
          <motion.div style={{ y: y2 }} className="space-y-8">
            <div className="relative group overflow-hidden rounded-sm">
              <img 
                src="https://i.imgur.com/vPrh116.jpeg" 
                alt="Detalhes" 
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A16] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6">
                <Heart className="text-[#D4AF37] mb-2" size={20} />
                <h3 className="text-white font-serif text-xl">Momentos Inesquecíveis</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedShowcase;
