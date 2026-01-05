import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { X, Send, ChevronRight } from 'lucide-react';

const motion = m as any;

const VirtualConcierge: React.FC = () => {
  const [stage, setStage] = useState<'hidden' | 'typing' | 'active' | 'minimized'>('hidden');

  useEffect(() => {
    // Sequência de ativação mais natural
    const startTimer = setTimeout(() => setStage('typing'), 2500);
    const activeTimer = setTimeout(() => setStage(prev => prev === 'typing' ? 'active' : prev), 5500);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(activeTimer);
    };
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setStage('minimized');
  };

  const handleOpenChat = () => {
    window.open("https://wa.me/5521987654321?text=Olá Ana! Vi o site da D'Flores e gostaria de verificar disponibilidade para meu evento.", "_blank");
    setStage('minimized');
  };

  const handleRestore = () => {
    if (stage === 'minimized') {
      setStage('active');
    } else {
      handleOpenChat();
    }
  };

  return (
    <div className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-[999] flex flex-col items-end pointer-events-none font-sans">
      <AnimatePresence>
        {stage === 'active' && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] mb-4 rounded-2xl border border-[#1A3C34]/5 w-[300px] md:w-[360px] pointer-events-auto overflow-hidden"
          >
            {/* Header do Widget */}
            <div className="bg-[#1A3C34] p-4 flex justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full border-2 border-[#D4AF37] p-[2px]">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" 
                      alt="Ana Concierge" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#1A3C34] rounded-full"></div>
                </div>
                <div>
                  <p className="text-white text-sm font-serif italic">Ana • D'Flores</p>
                  <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest font-bold">Concierge Online</p>
                </div>
              </div>
              <button onClick={handleClose} className="text-white/50 hover:text-white transition-colors relative z-10">
                <X size={16} />
              </button>
            </div>

            {/* Corpo da Mensagem */}
            <div className="p-6 bg-[#FAF9F6]">
              <div className="bg-white p-4 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl shadow-sm border border-[#1A3C34]/5 mb-4">
                <p className="text-[#1A3C34] text-sm font-light leading-relaxed">
                  "Olá! Sou a Ana, sua Curadora de Sonhos. <br/><br/>
                  Notei que você tem bom gosto. Posso verificar se sua data ainda está disponível em nossa agenda exclusiva?"
                </p>
                <div className="flex justify-end mt-2">
                  <span className="text-[9px] text-[#1A3C34]/40 font-bold uppercase tracking-wider">Agora</span>
                </div>
              </div>

              <button 
                onClick={handleOpenChat}
                className="group w-full bg-[#1A3C34] hover:bg-[#D4AF37] text-white py-3.5 rounded-sm text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg transition-all duration-500 flex items-center justify-center gap-3"
              >
                Sim, verificar data
                <Send size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-auto cursor-pointer" onClick={handleRestore}>
        <div className="relative flex flex-col items-end">
           {/* Typing Bubble */}
          <AnimatePresence>
            {stage === 'typing' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="mb-3 bg-white px-4 py-2.5 rounded-2xl rounded-br-none shadow-lg border border-[#1A3C34]/5 mr-2 flex items-center gap-2"
              >
                <span className="text-[10px] font-bold uppercase text-[#1A3C34]/50 tracking-wider">Ana digitando</span>
                <div className="flex gap-1">
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Button (Avatar Only) */}
          <motion.div
            layout
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
             {/* Glow Effect */}
             <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
             
             <div className="w-16 h-16 rounded-full bg-white border border-[#D4AF37]/30 p-1 shadow-[0_10px_30px_rgba(0,0,0,0.15)] relative z-10 overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" 
                 alt="Concierge" 
                 className="w-full h-full rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               
               {/* Icon Overlay on Hover (Optional, subtle) */}
               <div className="absolute inset-0 bg-[#1A3C34]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6 invert brightness-0" alt="WA" />
               </div>
             </div>

             {/* Notification Badge */}
             {stage === 'minimized' && (
               <motion.div 
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 className="absolute -top-1 -right-1 w-6 h-6 bg-[#C41E3A] text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white shadow-sm z-20"
                >
                 1
               </motion.div>
             )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VirtualConcierge;