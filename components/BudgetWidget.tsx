
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Calculator, Calendar, User, ClipboardList, HelpCircle } from 'lucide-react';

const Tooltip: React.FC<{ text: string }> = ({ text }) => (
  <div className="group relative inline-block ml-2">
    <HelpCircle size={12} className="text-[#1A3C34]/30 hover:text-[#D4AF37] cursor-help transition-colors" />
    <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-[#1A3C34] text-white text-[9px] leading-relaxed uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-opacity z-50 shadow-2xl rounded-sm">
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#1A3C34]" />
    </div>
  </div>
);

const BudgetWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-6 w-[320px] md:w-[380px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)] border border-[#1A3C34]/10 p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#D4AF37]" />
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#1A3C34]/30 hover:text-[#1A3C34] transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-8">
              <h4 className="text-xl font-serif text-[#1A3C34] italic">Orçamento Exclusivo</h4>
              <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold mt-1">Atendimento Premium</p>
            </div>

            <div className="space-y-5">
              <div className="relative">
                <User size={14} className="absolute left-0 top-3 text-[#D4AF37]" />
                <input type="text" placeholder="Seu Nome" className="w-full bg-transparent border-b border-[#1A3C34]/10 py-2 pl-6 text-sm focus:outline-none focus:border-[#D4AF37] font-light" />
              </div>
              
              <div className="relative flex items-center">
                <Calendar size={14} className="absolute left-0 top-3 text-[#D4AF37]" />
                <input type="text" placeholder="Data do Evento" className="w-full bg-transparent border-b border-[#1A3C34]/10 py-2 pl-6 text-sm focus:outline-none focus:border-[#D4AF37] font-light" />
                <div className="absolute right-0 top-3">
                  <Tooltip text="A data nos ajuda a verificar disponibilidade em nossa agenda de montagens monumentais." />
                </div>
              </div>

              <div className="relative flex items-center">
                <ClipboardList size={14} className="absolute left-0 top-3 text-[#D4AF37]" />
                <select className="w-full bg-transparent border-b border-[#1A3C34]/10 py-2 pl-6 pr-8 text-sm focus:outline-none focus:border-[#D4AF37] font-light appearance-none cursor-pointer">
                  <option disabled selected>Tipo de Evento</option>
                  <option>Casamento</option>
                  <option>15 Anos</option>
                  <option>Evento Social</option>
                </select>
                <div className="absolute right-0 top-3">
                  <Tooltip text="Cada celebração exige técnicas específicas; selecione para direcionarmos seu consultor especialista." />
                </div>
              </div>

              <button 
                onClick={scrollToContact}
                className="w-full bg-[#1A3C34] text-white py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-3 mt-4 shadow-lg"
              >
                Prosseguir Consultoria <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-3 px-8 py-4 text-white font-bold group overflow-hidden shadow-[0_20px_50px_rgba(184,138,68,0.3)] transition-all duration-500 rounded-sm"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#B88A44] via-[#D4AF37] to-[#A27933] group-hover:bg-gradient-to-tl transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute -left-[100%] top-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[100%] transition-all duration-1000 ease-in-out" />

        <div className="relative flex items-center gap-3">
          <Calculator size={20} className="drop-shadow-sm" />
          <span className="text-[10px] uppercase tracking-[0.3em] whitespace-nowrap drop-shadow-sm">
            {isOpen ? 'Fechar' : 'Solicitar Orçamento'}
          </span>
        </div>
      </motion.button>
    </div>
  );
};

export default BudgetWidget;
