
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A1A16]">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity, backgroundImage: "url('https://i.imgur.com/cgZwpy4.png')" }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
      >
        {/* Deep Scrim Overlays for maximum legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A16]/80 via-[#0A1A16]/30 to-[#0A1A16]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A16]/60 via-transparent to-[#0A1A16]/90" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="h-[1px] w-8 md:w-12 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold drop-shadow-sm">
              Design Autoral & Monumental
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-[#D4AF37]" />
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white mb-10 leading-[1.1] font-light tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            Transformamos Sonhos em <br /> 
            <span className="italic font-normal text-[#D4AF37] block mt-2">Cenários Mágicos</span>
          </h1>

          <p className="text-white/80 text-sm md:text-lg font-light max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md">
            Especialistas em criar experiências visuais que transcendem a realidade através de árvores gigantes e arquitetura floral de luxo.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.a 
              href="#wizard" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D4AF37] text-white px-12 py-5 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-[#1A3C34] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex items-center gap-4"
            >
              Simular meu Cenário
              <ArrowRight size={16} />
            </motion.a>
            <a href="#atelier" className="text-white hover:text-[#D4AF37] text-[11px] uppercase tracking-[0.4em] border-b border-white/20 pb-2 transition-all duration-500 font-medium group">
              Explorar Ateliê
              <span className="block h-[1px] w-0 group-hover:w-full bg-[#D4AF37] transition-all duration-500" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40 cursor-pointer hover:text-[#D4AF37] transition-colors"
        onClick={() => document.getElementById('atelier')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[8px] uppercase tracking-[0.5em] font-bold rotate-90 mb-4 origin-left translate-x-1">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        <ChevronDown size={24} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;
