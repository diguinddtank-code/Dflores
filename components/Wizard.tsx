
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wand2, Loader2, Heart, Star, Flower2, Moon, Sun, MessageCircle, Image as ImageIcon, ChevronRight, Check, ArrowRight } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";

const WIZARD_DATA = {
  events: [
    { id: 'wedding', label: 'Casamento', subtitle: 'A união de duas almas', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600' },
    { id: 'debutante', label: '15 Anos', subtitle: 'O despertar da primavera', img: 'https://images.unsplash.com/photo-1561582294-8a4736f87533?auto=format&fit=crop&q=80&w=600' },
    { id: 'social', label: 'Corporativo', subtitle: 'Excelência e Prestígio', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600' },
  ],
  vibes: [
    { id: 'classic', label: 'Royal Classic', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400', description: 'Onde a tradição encontra a opulência.' },
    { id: 'boho', label: 'Boho Luxury', image: 'https://images.unsplash.com/photo-1507504031981-723e284297dc?auto=format&fit=crop&q=80&w=400', description: 'Natureza orgânica com acabamento premium.' },
    { id: 'modern', label: 'Modern Art', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400', description: 'Minimalismo impactante e arquitetônico.' },
  ]
};

const Wizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    event: '',
    vibe: '',
    preferences: ''
  });
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Iniciando processo criativo...");
  const [result, setResult] = useState<{ title: string; description: string; colors: string[]; imageUrl?: string } | null>(null);

  const simulateLoadingSteps = () => {
    const steps = [
      "Consultando arquivos de design...",
      "Harmonizando paleta de cores...",
      "Esculpindo estrutura floral...",
      "Renderizando iluminação cênica...",
      "Finalizando sua obra de arte..."
    ];
    let i = 0;
    const interval = setInterval(() => {
      setLoadingText(steps[i]);
      i++;
      if (i >= steps.length) clearInterval(interval);
    }, 1500);
  };

  const handleSelection = (key: 'event' | 'vibe', value: string, nextStep: number) => {
    setSelections(prev => ({ ...prev, [key]: value }));
    // Pequeno delay para permitir que o usuário veja a animação de seleção
    setTimeout(() => {
      setStep(nextStep);
    }, 450);
  };

  const handleGenerate = async () => {
    setLoading(true);
    simulateLoadingSteps();
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const textPrompt = `Atue como Diretor Criativo da D'Flores (Luxo Monumental).
      Crie um conceito para ${selections.event} estilo ${selections.vibe}.
      Detalhe extra: "${selections.preferences}".
      Foco: Árvores Gigantes e impacto visual.
      JSON: { "title": "Nome Poético", "description": "Texto curto e sedutor (max 3 linhas)", "colors": ["#hex", "#hex", "#hex", "#hex"] }`;

      const textResponse = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: textPrompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              colors: { type: Type.ARRAY, items: { type: Type.STRING } }
            }
          }
        }
      });

      const conceptData = JSON.parse(textResponse.text || '{}');

      const imagePrompt = `Architectural digest photo of luxury ${selections.event}, style ${selections.vibe}. 
      Centerpiece: Giant floral tree decoration. Cinematic lighting. No people. 
      Concept: ${conceptData.title}. Palette: ${conceptData.colors.join(", ")}. 
      Ultra-realistic, 8k, wide angle.`;

      const imageResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: [{ text: imagePrompt }],
        config: { imageConfig: { aspectRatio: "16:9" } }
      });

      let imageUrl = '';
      for (const part of imageResponse.candidates[0].content.parts) {
        if (part.inlineData) imageUrl = `data:image/png;base64,${part.inlineData.data}`;
      }

      setResult({ ...conceptData, imageUrl });
      setStep(4);
    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setLoading(false);
    }
  };

  const contactConsultant = () => {
    const message = `Olá! Acabei de gerar o conceito "${result?.title}" no ateliê digital. Gostaria de saber como torná-lo real!`;
    window.open(`https://wa.me/5521987654321?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Variantes de animação
  const stepVariants = {
    initial: { opacity: 0, x: 20, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -20, scale: 0.95 },
  };
  
  const transitionProps = { duration: 0.5, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] };

  return (
    <section id="wizard" className="py-24 bg-[#FAF9F6] border-t border-[#1A3C34]/5 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1A3C34]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold block mb-4 flex items-center justify-center gap-2">
            <Sparkles size={12} /> Ateliê Digital
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#1A3C34] italic">Crie sua Assinatura</h2>
          <p className="mt-6 text-[#1A3C34]/60 font-light max-w-xl mx-auto text-lg">
            Uma experiência interativa para esboçar a atmosfera do seu próximo grande momento.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="bg-white shadow-2xl border border-white/50 relative min-h-[500px] flex flex-col rounded-sm overflow-hidden"
        >
          {/* Progress Bar */}
          <div className="w-full h-1 bg-[#FAF9F6] flex">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: `${(step / 4) * 100}%` }} 
              className="h-full bg-[#D4AF37]" 
            />
          </div>
          
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="s1" 
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={transitionProps}
                className="p-6 md:p-16 flex-1 flex flex-col justify-center"
              >
                <h3 className="text-3xl font-serif text-[#1A3C34] text-center italic mb-4 md:mb-12">O que vamos celebrar?</h3>
                
                {/* Mobile Hint */}
                <div className="md:hidden text-center mb-6 flex items-center justify-center gap-2 text-[#D4AF37] text-[10px] uppercase tracking-widest animate-pulse">
                   <span>Deslize</span> <ArrowRight size={12} />
                </div>

                {/* Horizontal Scroll Container for Mobile / Grid for Desktop */}
                <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
                  {WIZARD_DATA.events.map((ev, index) => {
                    const isSelected = selections.event === ev.label;
                    return (
                      <motion.button 
                        key={ev.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleSelection('event', ev.label, 2)} 
                        className={`group relative min-w-[80vw] md:min-w-0 snap-center h-[400px] md:h-96 overflow-hidden cursor-pointer transition-all duration-500 rounded-sm ${isSelected ? 'ring-4 ring-[#D4AF37] ring-offset-2 shadow-2xl scale-[0.98] md:scale-[1.02]' : 'hover:shadow-xl md:hover:-translate-y-2'}`}
                      >
                        <img 
                          src={ev.img} 
                          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isSelected ? 'scale-110 grayscale-0' : 'scale-100 md:group-hover:scale-110 md:grayscale md:group-hover:grayscale-0'}`} 
                          alt={ev.label} 
                        />
                        {/* Overlay Gradients */}
                        <div className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/20 to-transparent ${isSelected ? 'opacity-90' : 'opacity-70 md:opacity-60 md:group-hover:opacity-80'}`} />
                        
                        {/* Border Frame Decoration */}
                        <div className={`absolute inset-4 border border-white/20 transition-all duration-500 ${isSelected ? 'scale-95 opacity-100 border-[#D4AF37]' : 'scale-100 opacity-50 md:opacity-0 md:group-hover:opacity-50'}`} />

                        <div className="absolute inset-0 p-8 flex flex-col justify-end items-center md:items-start text-white text-center md:text-left z-10">
                          <div className="w-full">
                                <span className={`text-4xl md:text-3xl font-serif italic mb-2 block transition-all duration-500 ${isSelected ? 'text-[#D4AF37] translate-y-0' : 'text-white translate-y-2 md:translate-y-4 md:group-hover:translate-y-0'}`}>{ev.label}</span>
                                <span className={`text-[10px] uppercase tracking-widest transition-opacity duration-500 delay-100 ${isSelected ? 'opacity-100 text-white/90' : 'opacity-80 md:opacity-0 md:group-hover:opacity-100'}`}>{ev.subtitle}</span>
                          </div>
                          
                          {isSelected && (
                             <div className="absolute top-6 right-6 w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#1A3C34] shadow-lg animate-in zoom-in spin-in-90 duration-300">
                               <Check size={20} />
                             </div>
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Mobile Pagination Dots */}
                <div className="md:hidden flex justify-center gap-2 mt-2">
                   {WIZARD_DATA.events.map((_, idx) => (
                      <div key={idx} className={`w-2 h-2 rounded-full transition-colors duration-300 ${selections.event === WIZARD_DATA.events[idx].label ? 'bg-[#D4AF37]' : 'bg-[#1A3C34]/20'}`} />
                   ))}
                </div>

              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="s2" 
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={transitionProps}
                className="p-8 md:p-16 flex-1 flex flex-col justify-center"
              >
                <button onClick={() => setStep(1)} className="absolute top-8 left-8 text-xs uppercase tracking-widest text-[#1A3C34]/40 hover:text-[#1A3C34]">← Voltar</button>
                <h3 className="text-3xl font-serif text-[#1A3C34] text-center italic mb-12">Qual a alma do evento?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {WIZARD_DATA.vibes.map((v, i) => {
                    const isSelected = selections.vibe === v.label;
                    return (
                      <motion.button 
                        key={v.id} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => handleSelection('vibe', v.label, 3)} 
                        className="text-left group relative"
                      >
                        <div className={`overflow-hidden aspect-[3/4] mb-6 relative transition-all duration-300 ${isSelected ? 'ring-4 ring-[#D4AF37] ring-offset-4 shadow-2xl scale-[1.02]' : ''}`}>
                           <img 
                             src={v.image} 
                             alt={v.label} 
                             className={`w-full h-full object-cover transition-transform duration-700 ${isSelected ? 'scale-110' : 'group-hover:scale-105'}`} 
                           />
                           <div className={`absolute inset-0 transition-colors duration-500 mix-blend-overlay ${isSelected ? 'bg-[#D4AF37]/30' : 'bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/20'}`} />
                           {isSelected && (
                             <div className="absolute top-4 right-4 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#1A3C34] shadow-lg animate-in zoom-in">
                               <Check size={16} />
                             </div>
                           )}
                        </div>
                        <h4 className={`text-xl font-serif mb-2 transition-colors ${isSelected ? 'text-[#D4AF37]' : 'text-[#1A3C34] group-hover:text-[#D4AF37]'}`}>{v.label}</h4>
                        <p className="text-sm font-light text-[#1A3C34]/60 leading-relaxed">{v.description}</p>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="s3" 
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={transitionProps}
                className="p-8 md:p-16 flex-1 flex flex-col justify-center items-center"
              >
                <button onClick={() => setStep(2)} className="absolute top-8 left-8 text-xs uppercase tracking-widest text-[#1A3C34]/40 hover:text-[#1A3C34]">← Voltar</button>
                <h3 className="text-3xl font-serif text-[#1A3C34] text-center italic mb-4">O toque final</h3>
                <p className="text-[#1A3C34]/50 font-light mb-10 text-center max-w-md">Descreva algum desejo específico. Uma cor, uma flor, uma sensação...</p>
                
                <div className="w-full max-w-2xl relative">
                  <textarea 
                    className="w-full h-48 p-8 bg-[#FAF9F6] border border-[#1A3C34]/10 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/50 font-serif text-xl italic text-[#1A3C34] resize-none transition-all"
                    placeholder="Sonho com uma entrada repleta de velas e uma árvore branca monumental..."
                    value={selections.preferences}
                    onChange={(e) => setSelections({...selections, preferences: e.target.value})}
                  />
                  <div className="absolute bottom-4 right-4 text-[10px] text-[#1A3C34]/30 uppercase tracking-widest">D'Flores AI Studio</div>
                </div>

                <div className="mt-12">
                  <button 
                    disabled={loading}
                    onClick={handleGenerate}
                    className="bg-[#1A3C34] text-white px-12 py-5 text-xs uppercase tracking-[0.3em] font-bold flex items-center gap-4 hover:bg-[#D4AF37] transition-all duration-500 shadow-xl disabled:cursor-wait w-full md:w-auto justify-center"
                  >
                    {loading ? (
                      <div className="flex items-center gap-3">
                         <Loader2 className="animate-spin" size={16} />
                         <span>{loadingText}</span>
                      </div>
                    ) : (
                      <>
                        Materializar Conceito <Wand2 size={16} />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && result && (
              <motion.div 
                key="s4" 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col md:flex-row h-full"
              >
                <div className="w-full md:w-2/3 relative min-h-[400px] md:h-auto bg-[#1A3C34]">
                   {result.imageUrl ? (
                     <motion.img 
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        src={result.imageUrl} 
                        className="absolute inset-0 w-full h-full object-cover"
                     />
                   ) : (
                     <div className="absolute inset-0 flex items-center justify-center text-white/20"><ImageIcon size={48} /></div>
                   )}
                   <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                   <div className="absolute bottom-8 left-8 right-8 text-white">
                      <div className="inline-block px-3 py-1 border border-[#D4AF37] text-[#D4AF37] text-[9px] uppercase tracking-widest font-bold mb-4">Conceito Exclusivo</div>
                      <h3 className="text-3xl md:text-5xl font-serif italic">{result.title}</h3>
                   </div>
                </div>

                <div className="w-full md:w-1/3 p-10 bg-white flex flex-col justify-between border-l border-[#1A3C34]/5">
                   <div>
                     <h4 className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold mb-6 flex items-center gap-2"><Sparkles size={14}/> Curadoria IA</h4>
                     <p className="font-serif text-[#1A3C34] text-lg leading-relaxed italic mb-8">"{result.description}"</p>
                     
                     <div className="space-y-4 mb-8">
                       <span className="text-[10px] uppercase tracking-widest text-[#1A3C34]/40 font-bold block">Paleta Cromática</span>
                       <div className="flex gap-4">
                         {result.colors.map((c, i) => (
                           <motion.div 
                              key={i} 
                              initial={{ scale: 0 }} 
                              animate={{ scale: 1 }} 
                              transition={{ delay: i * 0.1 }}
                              className="w-12 h-12 rounded-full shadow-lg border-2 border-white ring-1 ring-[#1A3C34]/10" 
                              style={{ backgroundColor: c }} 
                           />
                         ))}
                       </div>
                     </div>
                   </div>

                   <div className="space-y-4">
                     <button onClick={contactConsultant} className="w-full bg-[#1A3C34] text-white py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#D4AF37] transition-all shadow-lg flex justify-center items-center gap-3">
                       Solicitar Orçamento <ChevronRight size={14} />
                     </button>
                     <button onClick={() => setStep(1)} className="w-full py-3 text-[10px] uppercase tracking-widest text-[#1A3C34]/40 hover:text-[#1A3C34] transition-colors">
                       Criar Novo Conceito
                     </button>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Wizard;
