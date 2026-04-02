import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const SignatureExperiences: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="wizard" className="py-24 md:py-32 bg-[#0A1A16] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1A3C34]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles size={14} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold">Portfólio de Experiências</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">
              Celebrações <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4EBD0]">Inesquecíveis</span>
            </h2>
          </div>
          <p className="text-white/60 font-light max-w-md text-base md:text-lg leading-relaxed">
            Cada projeto é uma obra de arte única, desenhada para transcender expectativas e criar memórias que duram para sempre.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
        >
          {/* Casamentos - Large Left */}
          <motion.div variants={itemVariants} className="md:col-span-7 relative group overflow-hidden rounded-sm h-[450px] md:h-[650px] cursor-pointer">
             <img 
               src="https://i.imgur.com/PA1YDG1.jpeg" 
               alt="Casamentos"
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A16] via-[#0A1A16]/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
             
             <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold mb-3 block">01 — Casamentos</span>
                <h3 className="text-3xl md:text-5xl font-serif italic text-white mb-4">O Início do Para Sempre</h3>
                <div className="overflow-hidden">
                  <p className="text-white/70 font-light text-sm md:text-base max-w-md transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    Cenários românticos e monumentais que transformam o seu grande dia em um conto de fadas real, com alta curadoria floral.
                  </p>
                </div>
             </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
            {/* 15 Anos - Top Right */}
            <motion.div variants={itemVariants} className="relative group overflow-hidden rounded-sm h-[350px] md:h-[309px] cursor-pointer">
               <img 
                 src="https://i.imgur.com/iLYsMuc.jpeg" 
                 alt="15 Anos"
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A16] via-[#0A1A16]/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
               
               <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block">02 — 15 Anos</span>
                  <h3 className="text-2xl md:text-3xl font-serif italic text-white mb-3">A Magia da Descoberta</h3>
                  <div className="overflow-hidden">
                    <p className="text-white/70 font-light text-sm transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      Jardins secretos e decorações vibrantes que refletem a personalidade única de cada debutante.
                    </p>
                  </div>
               </div>
            </motion.div>

            {/* Bodas & Corporativo - Bottom Right */}
            <motion.div variants={itemVariants} className="relative group overflow-hidden rounded-sm h-[350px] md:h-[309px] cursor-pointer">
               <img 
                 src="https://i.imgur.com/RvYM7IY.jpeg" 
                 alt="Eventos de Luxo"
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A16] via-[#0A1A16]/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
               
               <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block">03 — Eventos de Luxo</span>
                  <h3 className="text-2xl md:text-3xl font-serif italic text-white mb-3">Celebrações de Prestígio</h3>
                  <div className="overflow-hidden">
                    <p className="text-white/70 font-light text-sm transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      Sofisticação e impacto visual para marcar momentos históricos e conquistas inesquecíveis.
                    </p>
                  </div>
               </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <a 
            href="#contact" 
            className="group flex items-center gap-4 text-white hover:text-[#D4AF37] transition-colors"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold">Iniciar meu Projeto</span>
            <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-[#D4AF37] flex items-center justify-center transition-colors">
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SignatureExperiences;
