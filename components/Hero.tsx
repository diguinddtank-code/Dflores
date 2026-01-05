
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section id="hero" className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#0A1A16] z-0">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity, backgroundImage: "url('https://i.imgur.com/cgZwpy4.png')" }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
      >
        {/* Camada 1: Wash Escuro Global */}
        <div className="absolute inset-0 bg-[#0A1A16]/30 mix-blend-multiply" />
        
        {/* Camada 2: Gradiente Linear Inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A16] via-[#0A1A16]/40 to-transparent opacity-90" />
        
        {/* Camada 3: Radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0A1A16]/20 to-[#0A1A16]/80" />
      </motion.div>

      <motion.div 
        style={{ y: textY }}
        className="relative z-10 text-center px-4 md:px-6 max-w-6xl mt-0 md:mt-0 flex flex-col items-center justify-center h-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 md:gap-4 mb-6 md:mb-10 overflow-hidden">
            <motion.div 
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-[1px] w-8 md:w-12 bg-[#D4AF37]" 
            />
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-[9px] md:text-xs font-bold drop-shadow-md whitespace-nowrap">
              Design Autoral & Monumental
            </span>
            <motion.div 
              initial={{ scaleX: 0, originX: 1 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-[1px] w-8 md:w-12 bg-[#D4AF37]" 
            />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-serif text-white mb-6 md:mb-10 leading-[1.1] md:leading-[1.05] font-light tracking-tight drop-shadow-2xl">
            <span className="block overflow-hidden">
               <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="block">Transformamos</motion.span>
            </span>
            <span className="block overflow-hidden">
                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }} className="block italic text-[#F4EBD0] mix-blend-screen opacity-90 pb-2 md:pb-4">Sonhos em Arte</motion.span>
            </span>
          </h1>

          <p className="text-white/80 text-sm md:text-lg font-light max-w-lg md:max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed drop-shadow-lg text-shadow-sm antialiased px-4">
            Especialistas em criar experiências visuais que transcendem a realidade através de árvores gigantes e arquitetura floral de luxo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center w-full sm:w-auto">
            <motion.a 
              href="#wizard" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto group bg-[#D4AF37] text-white px-8 md:px-10 py-4 md:py-5 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-[#1A3C34] transition-all duration-500 shadow-[0_20px_50px_rgba(212,175,55,0.2)] flex items-center justify-center gap-4 rounded-sm"
            >
              Simular meu Cenário
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="#atelier" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-white/70 hover:text-[#D4AF37] text-[10px] md:text-[11px] uppercase tracking-[0.3em] border-b border-white/10 hover:border-[#D4AF37] pb-2 transition-all duration-500 font-medium group"
            >
              Explorar Ateliê
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30 cursor-pointer hover:text-[#D4AF37] transition-colors z-20 mix-blend-difference"
        onClick={() => {
           const transformSection = document.getElementById('transformation-section');
           transformSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] font-medium hidden md:block">Scroll</span>
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </motion.div>
    </section>
  );
};

export default Hero;
