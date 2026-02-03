import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const motion = m as any;

const FAQS = [
  {
    question: "Atendem fora de Belo Horizonte?",
    answer: "Sim. A D'Flores atua em toda a região de BH e também em território nacional. Para eventos fora da Grande BH, nossa equipe de logística desenvolve um plano especial de transporte das árvores cenográficas e estruturas, garantindo a mesma imponência onde quer que seja seu evento."
  },
  {
    question: "Com quanto tempo de antecedência devo reservar?",
    answer: "Devido à exclusividade de nossa agenda e à complexidade artesanal de cada projeto monumental, recomendamos uma antecedência mínima de 8 a 12 meses. Projetos muito complexos podem exigir até 18 meses de planejamento."
  },
  {
    question: "As flores das árvores são naturais ou permanentes?",
    answer: "Utilizamos uma técnica híbrida exclusiva. Os troncos são naturais (tratados e esculpidos), enquanto a copa utiliza flores permanentes de seda importada de altíssima fidelidade ('Real Touch'), misturadas com folhagens naturais preservadas. O resultado é indistinguível visualmente e garante que o cenário permaneça perfeito do início ao fim da festa."
  },
  {
    question: "Vocês fazem apenas a decoração floral?",
    answer: "Nosso foco é a Arquitetura Floral e Cenografia Monumental (Árvores, Jardins Suspensos, Túneis). Trabalhamos em parceria harmônica com seu decorador geral ou cerimonialista para integrar nossas peças ao design global do evento."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#FAF9F6] border-t border-[#1A3C34]/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Dúvidas Frequentes</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1A3C34] italic">Curiosidades do Ateliê</h2>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-[#1A3C34]/5 rounded-sm overflow-hidden hover:border-[#D4AF37]/30 transition-colors duration-300"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <span className={`font-serif text-lg md:text-xl transition-colors ${openIndex === index ? 'text-[#D4AF37]' : 'text-[#1A3C34]'}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 p-2 rounded-full transition-colors ${openIndex === index ? 'bg-[#D4AF37] text-white' : 'bg-[#FAF9F6] text-[#1A3C34]/40'}`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-0">
                      <p className="text-[#1A3C34]/70 font-light leading-relaxed text-sm md:text-base border-l-2 border-[#D4AF37]/20 pl-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;