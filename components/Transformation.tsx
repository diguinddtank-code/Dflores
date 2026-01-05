import React, { useState, useRef, useEffect } from 'react';
import { motion as m, useScroll, useTransform } from 'framer-motion';
import { MoveHorizontal, Sparkles } from 'lucide-react';

const motion = m as any;

const Transformation: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Parallax leve no conteúdo
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Sketch Image: A artistic drawing representing the concept
  const sketchImage = "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80&w=1920"; 
  // Real Image: The actual luxury result
  const realImage = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920"; 

  const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as MouseEvent).clientX;
    }

    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section 
      id="transformation-section" 
      ref={sectionRef} 
      className="relative pb-32 pt-10 bg-[#0A1A16] overflow-hidden z-10"
    >
      {/* Elemento de conexão sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />

      <motion.div style={{ y: yContent }} className="container mx-auto px-6 mb-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-6 opacity-60">
           <Sparkles size={12} className="text-[#D4AF37]" />
           <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold">A Promessa D'Flores</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif text-white italic leading-tight">Do Esboço à <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4EBD0]">Realidade</span></h2>
        <p className="mt-6 text-white/50 font-light max-w-xl mx-auto text-lg leading-relaxed">
          Arraste para ver como materializamos o imaginário. Onde o croqui do artista se torna uma estrutura monumental tangível.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        ref={containerRef}
        className="relative w-full max-w-6xl mx-auto h-[50vh] md:h-[70vh] cursor-ew-resize select-none overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-[#D4AF37]/10 rounded-sm"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Layer 1: The Sketch (Background) */}
        <div className="absolute inset-0">
          <img 
            src={sketchImage} 
            alt="Sketch Concept" 
            className="w-full h-full object-cover grayscale contrast-125 brightness-110 blur-[1px]" 
            draggable={false}
          />
          <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full">
            <span className="text-white uppercase tracking-widest text-[10px] font-bold">Conceito (Sketch)</span>
          </div>
        </div>

        {/* Layer 2: The Reality (Clipped Foreground) */}
        <div 
          className="absolute inset-0 overflow-hidden will-change-[width]"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={realImage} 
            alt="Real Execution" 
            className="w-full h-full object-cover max-w-none" 
            style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
            draggable={false}
          />
           <div className="absolute top-8 right-8 bg-[#D4AF37] px-6 py-3 rounded-full shadow-lg">
            <span className="text-[#1A3C34] uppercase tracking-widest text-[10px] font-bold">Execução Real</span>
          </div>
          
          {/* Shadow na borda do corte para profundidade */}
          <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-black/50 to-transparent opacity-50 pointer-events-none" />
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-[2px] bg-[#D4AF37] z-20 shadow-[0_0_30px_#D4AF37]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.3)] border border-[#D4AF37]">
             <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#1A3C34]">
                <MoveHorizontal size={18} />
             </div>
          </div>
        </div>
      </motion.div>
      
      <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('wizard')?.scrollIntoView({behavior:'smooth'})} 
            className="text-white/60 border-b border-[#D4AF37]/30 pb-1 text-[10px] uppercase tracking-[0.4em] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-500"
          >
            Quero meu projeto exclusivo
          </button>
      </div>
    </section>
  );
};

export default Transformation;