import React, { useState, useEffect, useMemo } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS } from '../constants';
import { Maximize2, X, Calendar, Tag, Filter, ArrowUpDown } from 'lucide-react';
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

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; // Explicitly set to auto to ensure scrollability
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedItem]);

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
  };

  return (
    <section id="gallery" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Curadoria Exclusiva</span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1A3C34] mb-4 uppercase tracking-wider">Nossa Arte em Detalhes</h2>
          <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-[#1A3C34]/60 max-w-2xl mx-auto font-light italic">
            Explore nossa curadoria de projetos reais. Cada árvore, cada arranjo é desenhado para criar uma atmosfera de puro encantamento.
          </p>
        </motion.div>

        {/* Filter & Sort Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-[#1A3C34]/10 pb-6 gap-6 sticky top-20 z-40 bg-[#FAF9F6]/95 backdrop-blur-sm md:static md:bg-transparent">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all relative pb-2 ${
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

          <div className="flex items-center gap-2 relative group cursor-pointer">
            <span className="text-[10px] uppercase tracking-widest text-[#1A3C34]/60">Ordenar:</span>
            <button 
              onClick={() => setSortOrder(prev => prev === 'default' ? 'asc' : prev === 'asc' ? 'desc' : 'default')}
              className="flex items-center gap-2 text-[#1A3C34] text-[10px] uppercase tracking-widest font-bold hover:text-[#D4AF37] transition-colors"
            >
              {sortOrder === 'default' ? 'Padrão' : sortOrder === 'asc' ? 'A - Z' : 'Z - A'}
              <ArrowUpDown size={14} />
            </button>
          </div>
        </div>

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
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 bg-[#0A1A16]/95 backdrop-blur-xl"
            onClick={() => setSelectedItem(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-[#D4AF37] transition-colors z-[120]"
              onClick={() => setSelectedItem(null)}
            >
              <X size={40} strokeWidth={1} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-6xl w-full bg-white flex flex-col md:flex-row overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] max-h-[90vh] md:max-h-auto overflow-y-auto md:overflow-y-visible"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Section */}
              <div className="w-full md:w-2/3 h-[40vh] md:h-[80vh] overflow-hidden bg-black sticky top-0 md:relative">
                <img 
                  src={selectedItem.url} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details Section */}
              <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-white">
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-[#D4AF37] mb-4">
                    <Tag size={12} />
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold">{selectedItem.category}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-[#1A3C34] leading-tight mb-6">{selectedItem.title}</h3>
                  <div className="h-[1px] w-16 bg-[#D4AF37]/30 mb-8" />
                  <p className="text-[#1A3C34]/60 font-light leading-relaxed italic text-sm">
                    Uma composição autoral D'Flores, onde a arquitetura floral monumental redefine a percepção de luxo e sofisticação no cenário de eventos de alto padrão.
                  </p>
                </div>

                <div className="space-y-4 pt-8 border-t border-[#1A3C34]/5">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#D4AF37]">
                      <Calendar size={14} />
                    </div>
                    <div>
                      <p className="text-[8px] uppercase tracking-widest text-[#1A3C34]/40 font-bold">Ano do Projeto</p>
                      <p className="text-xs text-[#1A3C34] font-medium">2023 / 2024</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setSelectedItem(null);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-12 w-full bg-[#1A3C34] text-white py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#D4AF37] transition-all shadow-xl"
                >
                  Desejo algo semelhante
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