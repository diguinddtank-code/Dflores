import React from 'react';
import { motion as m } from 'framer-motion';
import { Coffee, PencilRuler, Hammer, PartyPopper } from 'lucide-react';

const motion = m as any;

const STEPS = [
  {
    id: 1,
    icon: Coffee,
    title: "Imersão & Conceito",
    description: "Tudo começa com um café em nosso ateliê ou uma videochamada. Ouvimos seus sonhos, entendemos a alma do evento e definimos a paleta de sentimentos que guiaremos.",
    align: "left"
  },
  {
    id: 2,
    icon: PencilRuler,
    title: "Curadoria & Projeto",
    description: "Nossa equipe de arquitetos florais cria croquis e moodboards exclusivos. Apresentamos a volumetria das árvores gigantes e a seleção botânica exata.",
    align: "right"
  },
  {
    id: 3,
    icon: Hammer,
    title: "Escultura & Pré-Montagem",
    description: "Semanas antes, iniciamos a construção das estruturas monumentais em nosso galpão. Cada galho é posicionado manualmente para garantir o realismo.",
    align: "left"
  },
  {
    id: 4,
    icon: PartyPopper,
    title: "O Grande Dia",
    description: "Nossa equipe logística transporta e finaliza a instalação no local com precisão cirúrgica. O cenário está pronto para encantar seus convidados.",
    align: "right"
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">A Jornada</span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1A3C34] italic">Do Sonho à Execução</h2>
        </motion.div>

        <div className="relative">
          {/* Linha Central (Desktop) / Lateral (Mobile) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#1A3C34]/10 transform md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {STEPS.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0 ${step.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Ícone/Marcador Central */}
                <div className="absolute left-8 md:left-1/2 top-0 w-16 h-16 md:w-20 md:h-20 -translate-x-1/2 flex items-center justify-center bg-white border border-[#D4AF37]/30 rounded-full z-10 shadow-lg">
                  <step.icon size={24} className="text-[#D4AF37]" strokeWidth={1.5} />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1A3C34] rounded-full text-white text-[10px] flex items-center justify-center font-bold">
                    {step.id}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${step.align === 'left' ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
                  <h3 className="text-xl md:text-2xl font-serif text-[#1A3C34] mb-3">{step.title}</h3>
                  <p className="text-[#1A3C34]/60 font-light text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Espaço Vazio para manter o grid */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;