import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const motion = m as any;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-[#1A3C34]/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-[70] text-2xl font-serif tracking-[0.4em] font-light text-white cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
          }}
        >
          D'FLORES
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {menuItems.map(item => (
              <a key={item.name} href={item.href} className="text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-[#D4AF37] transition-colors relative group">
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden text-white relative z-[70] p-2"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0A1A16]/98 backdrop-blur-xl z-[60] flex flex-col pt-32 px-8 pb-10"
          >
            <div className="flex flex-col gap-8 h-full">
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
                    <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]" size={24} />
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto space-y-6">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center gap-6 text-white/30 pt-4 border-t border-white/5"
                >
                  <span className="text-[10px] uppercase tracking-widest">Instagram</span>
                  <span className="text-[10px] uppercase tracking-widest">Facebook</span>
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