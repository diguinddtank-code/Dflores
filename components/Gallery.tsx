import React, { useState, useEffect, useMemo } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS } from '../constants';
import { Maximize2, X, Calendar, Tag, ArrowUpDown } from 'lucide-react';
import { GalleryItem } from '../types';

const motion = m as any;
type Variants = any;

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [sortOrder, setSortOrder] = useState<'default' | 'asc' | 'desc'>('default');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(GALLERY_ITEMS.map(item => item.category));
    return ['Todos', ...Array.from(cats)];
  }, []);

  // Filter and Sort Logic
  const filteredItems = useMemo(() => {
    let items = [...GALLERY_ITEMS];

    if (activeCategory !== 'Todos') {
      items = items.filter(item => item.category === activeCategory);
    }

    if (sortOrder === 'asc') {
      items.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === 'desc') {
      items.sort((a, b) => b.title.localeCompare(a.title));
    }

    return items;
  }, [activeCategory, sortOrder]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

  // Animation Variants for Scroll Trigger
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
  };

  return (
    <section id="gallery" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Curadoria Exclusiva</span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1A3C34] mb-4 uppercase tracking-wider">Nossa Arte</h2>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-[#1A3C34]/60 max-w-2xl mx-auto font-light italic text-sm md:text-base px-2">
            Explore nossa curadoria de projetos reais. Cada árvore, cada arranjo é desenhado para criar uma atmosfera de puro encantamento.
          </p>
        </motion.div>

        {/* Filter & Sort Bar */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-[#1A3C34]/10 pb-4 gap-6 sticky top-20 z-40 bg-[#FAF9F6]/95 backdrop-blur-sm md:static md:bg-transparent -mx-4 px-4 md:mx-0 md:px-0"
        >
          <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
             <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-6 md:gap-8 px-2 min-w-max">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all relative pb-2 whitespace-nowrap ${
                      activeCategory === cat ? 'text-[#1A3C34]' : 'text-[#1A3C34]/40 hover:text-[#D4AF37]'
                    }`}
                  >
                    {cat}
                    {activeCategory === cat && (
                      <motion.div 
                        layoutId="activeCategory"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37]"
                      />
                    )}
                  </button>
                ))}
             </div>
          </div>

          <div className="flex items-center gap-2 relative group cursor-pointer w-full md:w-auto justify-end px-2">
            <span className="text-[10px] uppercase tracking-widest text-[#1A3C34]/60">Ordenar:</span>
            <button 
              onClick={() => setSortOrder(prev => prev === 'default' ? 'asc' : prev === 'asc' ? 'desc' : 'default')}
              className="flex items-center gap-2 text-[#1A3C34] text-[10px] uppercase tracking-widest font-bold hover:text-[#D4AF37] transition-colors"
            >
              {sortOrder === 'default' ? 'Padrão' : sortOrder === 'asc' ? 'A - Z' : 'Z - A'}
              <ArrowUpDown size={14} />
            </button>
          </div>
        </motion.div>

        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                variants={itemVariants}
                onClick={() => setSelectedItem(item)}
                className="relative group cursor-pointer overflow-hidden bg-white shadow-lg break-inside-avoid rounded-sm"
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34] via-[#1A3C34]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.category}</span>
                  <h3 className="text-white text-xl font-serif mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h3>
                  <div className="flex items-center gap-2 text-white/80 text-[10px] uppercase tracking-widest font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    Explorar Obra <Maximize2 size={14} className="text-[#D4AF37]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <button className="border border-[#1A3C34]/20 text-[#1A3C34] px-12 py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#1A3C34] hover:text-white transition-all duration-500">
            Carregar Mais Inspirações
          </button>
        </motion.div>
      </div>

      {/* Gallery Modal Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-0 md:p-8 bg-[#0A1A16]/95 backdrop-blur-xl"
            onClick={() => setSelectedItem(null)}
          >
            {/* Botão de fechar ATUALIZADO: Fundo escuro, ícone dourado, alta visibilidade */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-[130] p-3 rounded-full bg-[#1A3C34]/90 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A3C34] backdrop-blur-md border border-[#D4AF37]/30 transition-all shadow-2xl"
              onClick={(e) => { e.stopPropagation(); setSelectedItem(null); }}
            >
              <X size={24} strokeWidth={2} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full h-full md:h-auto max-h-[100dvh] md:max-h-[90vh] bg-white flex flex-col md:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden rounded-sm"
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
            >
              {/* Image Section */}
              <div className="w-full md:w-2/3 h-[40vh] md:h-[85vh] overflow-hidden bg-black relative group">
                <img 
                  src={selectedItem.url} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A16]/60 to-transparent opacity-60 md:hidden" />
              </div>

              {/* Details Section - Scrollable */}
              <div className="w-full md:w-1/3 p-6 md:p-12 flex flex-col bg-white h-auto md:h-auto overflow-y-auto relative">
                <div className="mb-6 md:mb-8 mt-4 md:mt-0">
                  <div className="flex items-center gap-2 text-[#D4AF37] mb-4">
                    <Tag size={12} />
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold">{selectedItem.category}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-[#1A3C34] leading-tight mb-4 md:mb-6">{selectedItem.title}</h3>
                  <div className="h-[1px] w-16 bg-[#D4AF37]/30 mb-6 md:mb-8" />
                  <p className="text-[#1A3C34]/60 font-light leading-relaxed italic text-sm md:text-base">
                    Uma composição autoral D'Flores, onde a arquitetura floral monumental redefine a percepção de luxo e sofisticação no cenário de eventos de alto padrão. Cada detalhe foi pensado para criar uma imersão sensorial única.
                  </p>
                </div>

                <div className="space-y-4 pt-6 md:pt-8 border-t border-[#1A3C34]/5 mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#D4AF37]">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-[#1A3C34]/40 font-bold">Ano do Projeto</p>
                      <p className="text-sm text-[#1A3C34] font-medium">2023 / 2024</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setSelectedItem(null);
                    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}
                  className="mt-8 w-full bg-[#1A3C34] text-white py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#D4AF37] hover:text-[#0A1A16] transition-all shadow-xl mb-4 md:mb-0"
                >
                  Desejo este conceito
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;