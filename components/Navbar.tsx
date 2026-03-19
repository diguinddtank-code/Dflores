import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const motion = m as any;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Simulador', href: '#wizard' },
    { name: 'Portfolio', href: '#gallery' },
    { name: 'O Ateliê', href: '#atelier' },
    { name: 'Vídeo', href: '#video-experience' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#1A3C34]/95 backdrop-blur-md py-3 shadow-xl' : 'bg-gradient-to-b from-[#0A1A16]/80 to-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo - Ajustado para ser grande mas proporcional no mobile */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-[70] cursor-pointer flex-shrink-0"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
          }}
        >
          <img 
            src="https://i.imgur.com/APXOSOf.png" 
            alt="D'FLORES" 
            className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-12 md:h-20' : 'h-16 md:h-28'}`}
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {menuItems.map(item => (
              <a key={item.name} href={item.href} className="text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-[#D4AF37] transition-colors relative group py-2">
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Toggle - Melhor área de toque */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden text-white relative z-[70] p-2 -mr-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={32} className="text-white" /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ type: "spring", damping: 25, stiffness: 100 }}
            className="fixed inset-0 bg-[#0A1A16] z-[60] flex flex-col pt-32 px-8 pb-10"
          >
            {/* Background Texture Decoration */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

            <div className="flex flex-col gap-8 h-full relative z-10">
              <nav className="flex flex-col gap-6">
                {menuItems.map((item: any, idx: number) => (
                  <motion.a 
                    key={item.name} 
                    href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (idx * 0.1) }}
                    className="flex items-center justify-between text-white text-3xl font-serif font-light hover:text-[#D4AF37] transition-colors group border-b border-white/5 pb-4"
                  >
                    {item.name}
                    <ChevronRight className="opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-[#D4AF37]" size={24} />
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto space-y-8">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                    <p className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold">Contato Rápido</p>
                    <p className="text-white/60 font-light">+55 (31) 7562-1548</p>
                    <p className="text-white/60 font-light">contato@dflores.com.br</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex justify-start gap-8 text-white/30 pt-6 border-t border-white/10"
                >
                  <a href="#" className="text-[10px] uppercase tracking-widest hover:text-white transition-colors">Instagram</a>
                  <a href="#" className="text-[10px] uppercase tracking-widest hover:text-white transition-colors">Facebook</a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;