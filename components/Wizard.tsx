import React, { useState, useRef, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Sparkles, Wand2, Loader2, Check, ArrowRight, ChevronLeft, Image as ImageIcon } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";

const motion = m as any;

const WIZARD_DATA = {
  events: [
    { id: 'wedding', label: 'Casamento', subtitle: 'A união de duas almas', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200' },
    { id: 'debutante', label: '15 Anos', subtitle: 'O despertar da primavera', img: 'https://i.imgur.com/iLYsMuc.jpeg' },
  ],
  vibes: [
    { id: 'classic', label: 'Royal Classic', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800', description: 'Onde a tradição encontra a opulência.' },
    { id: 'boho', label: 'Boho Luxury', image: 'https://images.unsplash.com/photo-1507504031981-723e284297dc?auto=format&fit=crop&q=80&w=800', description: 'Natureza orgânica com acabamento premium.' },
    { id: 'modern', label: 'Modern Art', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800', description: 'Minimalismo impactante e arquitetônico.' },
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
    setTimeout(() => {
      setStep(nextStep);
    }, 400);
  };

  const handleGenerate = async () => {
    setLoading(true);
    simulateLoadingSteps();
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
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
    window.open(`https://wa.me/553175621548?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="wizard" className="py-20 md:py-32 bg-[#0A1A16] relative overflow-hidden text-white">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#D4AF37] blur-[150px] opacity-20"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#1A3C34] blur-[120px] opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold mb-6 flex items-center justify-center gap-3">
            <Sparkles size={16} /> Ateliê Digital IA
          </span>
          <h2 className="text-4xl md:text-6xl font-serif italic mb-6">Crie sua Assinatura</h2>
          <p className="text-white/60 font-light max-w-2xl mx-auto text-lg md:text-xl">
            Uma experiência interativa guiada por inteligência artificial para esboçar a atmosfera do seu próximo grande momento.
          </p>
        </motion.div>

        {/* Wizard Container */}
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl min-h-[600px] flex flex-col">
          {/* Progress Indicator */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5 z-50">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#D4AF37]/50 to-[#D4AF37]"
              initial={{ width: 0 }}
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          <div className="flex-1 relative p-6 md:p-12 flex flex-col">
            <AnimatePresence mode="wait">
              {/* STEP 1 */}
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 flex flex-col h-full"
                >
                  <h3 className="text-3xl md:text-4xl font-serif italic text-center mb-10">O que vamos celebrar?</h3>
                  <div className="flex flex-col md:flex-row gap-6 flex-1 h-full">
                    {WIZARD_DATA.events.map((ev, idx) => {
                      const isSelected = selections.event === ev.label;
                      return (
                        <motion.button
                          key={ev.id}
                          onClick={() => handleSelection('event', ev.label, 2)}
                          className={`group relative flex-1 rounded-xl overflow-hidden min-h-[250px] md:min-h-[400px] border transition-all duration-500 ${isSelected ? 'border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.2)]' : 'border-white/10 hover:border-[#D4AF37]/50'}`}
                          whileHover={{ scale: 0.98 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <img 
                            src={ev.img} 
                            alt={ev.label} 
                            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${isSelected ? 'scale-110 opacity-100' : 'group-hover:scale-110 opacity-60 group-hover:opacity-100'}`}
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t from-[#0A1A16] via-[#0A1A16]/40 to-transparent transition-opacity duration-500 ${isSelected ? 'opacity-60' : 'opacity-80 group-hover:opacity-60'}`} />
                          
                          <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
                            <h4 className={`text-4xl md:text-5xl font-serif italic mb-3 transform transition-transform duration-500 ${isSelected ? 'text-[#D4AF37] translate-y-0' : 'text-white translate-y-4 group-hover:translate-y-0'}`}>{ev.label}</h4>
                            <p className={`text-[#D4AF37] uppercase tracking-[0.3em] text-xs transform transition-all duration-500 delay-100 ${isSelected ? 'opacity-100 translate-y-0' : 'opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0'}`}>{ev.subtitle}</p>
                          </div>
                          
                          {isSelected && (
                            <div className="absolute top-6 right-6 w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#0A1A16] shadow-lg animate-in zoom-in duration-300">
                              <Check size={20} />
                            </div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 flex flex-col"
                >
                  <button onClick={() => setStep(1)} className="absolute top-6 left-6 md:top-12 md:left-12 text-white/50 hover:text-white flex items-center gap-2 transition-colors z-20">
                    <ChevronLeft size={20} /> <span className="text-xs uppercase tracking-widest hidden md:inline">Voltar</span>
                  </button>
                  <h3 className="text-3xl md:text-4xl font-serif italic text-center mb-10 mt-10 md:mt-0">Qual a alma do evento?</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                    {WIZARD_DATA.vibes.map((vibe, idx) => {
                      const isSelected = selections.vibe === vibe.label;
                      return (
                        <motion.button
                          key={vibe.id}
                          onClick={() => handleSelection('vibe', vibe.label, 3)}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.15, duration: 0.5 }}
                          className={`group relative rounded-xl overflow-hidden min-h-[200px] md:min-h-full border transition-all duration-500 ${isSelected ? 'border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.2)]' : 'border-white/10 hover:border-[#D4AF37]/50'}`}
                        >
                          <img 
                            src={vibe.image} 
                            alt={vibe.label} 
                            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${isSelected ? 'scale-110 opacity-80' : 'group-hover:scale-110 opacity-50 group-hover:opacity-80'}`}
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t from-[#0A1A16] to-transparent transition-opacity duration-500 ${isSelected ? 'opacity-70' : 'opacity-90'}`} />
                          
                          <div className="absolute inset-0 p-6 flex flex-col justify-end text-left">
                            <h4 className="text-2xl md:text-3xl font-serif italic text-[#D4AF37] mb-2">{vibe.label}</h4>
                            <p className={`text-white/70 text-sm font-light leading-relaxed transform transition-all duration-500 ${isSelected ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>{vibe.description}</p>
                          </div>

                          {isSelected && (
                            <div className="absolute top-4 right-4 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#0A1A16] shadow-lg animate-in zoom-in duration-300">
                              <Check size={16} />
                            </div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto w-full"
                >
                  <button onClick={() => setStep(2)} className="absolute top-6 left-6 md:top-12 md:left-12 text-white/50 hover:text-white flex items-center gap-2 transition-colors z-20">
                    <ChevronLeft size={20} /> <span className="text-xs uppercase tracking-widest hidden md:inline">Voltar</span>
                  </button>
                  
                  <h3 className="text-3xl md:text-4xl font-serif italic text-center mb-4 mt-10 md:mt-0">O toque final</h3>
                  <p className="text-white/50 text-center mb-10">Descreva algum desejo específico. Uma cor, uma flor, uma sensação...</p>

                  <div className="w-full relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/30 to-[#D4AF37]/0 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                    <textarea 
                      value={selections.preferences}
                      onChange={(e) => setSelections(prev => ({ ...prev, preferences: e.target.value }))}
                      placeholder="Ex: Sonho com uma entrada repleta de velas e uma árvore branca monumental..."
                      className="relative w-full h-48 bg-[#0A1A16]/80 border border-white/20 rounded-xl p-6 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none font-serif text-lg italic"
                    />
                  </div>

                  <motion.button
                    onClick={handleGenerate}
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-10 bg-gradient-to-r from-[#D4AF37] to-[#B49020] text-[#0A1A16] px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm flex items-center gap-4 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto justify-center"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        {loadingText}
                      </>
                    ) : (
                      <>
                        Materializar Conceito <Wand2 size={20} />
                      </>
                    )}
                  </motion.button>
                </motion.div>
              )}

              {/* STEP 4: RESULT */}
              {step === 4 && result && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 flex flex-col md:flex-row gap-8 md:gap-12"
                >
                  {/* Image Reveal */}
                  <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden bg-[#0A1A16] border border-white/10 min-h-[300px] md:min-h-full flex items-center justify-center group">
                    {result.imageUrl ? (
                      <motion.img 
                        initial={{ scale: 1.2, filter: 'blur(10px)' }}
                        animate={{ scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src={result.imageUrl}
                        alt={result.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <ImageIcon size={48} className="text-white/20" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A16] via-transparent to-transparent opacity-80" />
                    
                    {/* Floating Particles Effect over image */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-screen" />
                  </div>

                  {/* Content Reveal */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center py-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-widest mb-6">
                        <Sparkles size={14} /> Conceito Exclusivo
                      </span>
                      <h3 className="text-4xl md:text-5xl font-serif italic text-white mb-6 leading-tight">{result.title}</h3>
                      <p className="text-white/70 text-lg font-light leading-relaxed mb-10">"{result.description}"</p>

                      <div className="mb-12">
                        <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Paleta Cromática</h4>
                        <div className="flex gap-4">
                          {result.colors.map((color: string, i: number) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -45 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: 0.8 + (i * 0.1), type: "spring" }}
                              className="w-12 h-12 rounded-full shadow-2xl border-2 border-white/10 relative group cursor-pointer"
                              style={{ backgroundColor: color }}
                            >
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                {color}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                          onClick={contactConsultant}
                          className="flex-1 bg-[#D4AF37] text-[#0A1A16] px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white transition-colors"
                        >
                          Tornar Realidade <ArrowRight size={16} />
                        </button>
                        <button 
                          onClick={() => {
                            setStep(1);
                            setResult(null);
                            setSelections({ event: '', vibe: '', preferences: '' });
                          }}
                          className="flex-1 border border-white/20 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors"
                        >
                          Novo Conceito
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wizard;
