
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';

const Transformation: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Sketch Image: A artistic drawing representing the concept
  const sketchImage = "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80&w=1920"; // Placeholder for a sketch/drawing look
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
    <section className="py-24 bg-[#0A1A16] relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">A Promessa D'Flores</span>
        <h2 className="text-3xl md:text-5xl font-serif text-white italic">Do Esboço à Realidade</h2>
        <p className="mt-4 text-white/50 font-light max-w-2xl mx-auto">
          Arraste para ver como materializamos o imaginário. Onde o croqui do artista se torna uma estrutura monumental tangível.
        </p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full max-w-6xl mx-auto h-[50vh] md:h-[70vh] cursor-ew-resize select-none overflow-hidden shadow-2xl border border-[#D4AF37]/20"
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
          <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-4 py-2">
            <span className="text-[#1A3C34] uppercase tracking-widest text-[10px] font-bold">Conceito (Sketch)</span>
          </div>
        </div>

        {/* Layer 2: The Reality (Clipped Foreground) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={realImage} 
            alt="Real Execution" 
            className="w-full h-full object-cover max-w-none" 
            style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }} // Keep aspect ratio logic simple
            draggable={false}
          />
           <div className="absolute top-8 right-8 bg-[#D4AF37] px-4 py-2">
            <span className="text-[#1A3C34] uppercase tracking-widest text-[10px] font-bold">Execução Real</span>
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-[#D4AF37] z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.5)] border-2 border-[#D4AF37]">
            <MoveHorizontal size={20} className="text-[#1A3C34]" />
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12">
          <button onClick={() => document.getElementById('wizard')?.scrollIntoView({behavior:'smooth'})} className="text-white border-b border-[#D4AF37] pb-1 text-xs uppercase tracking-[0.3em] hover:text-[#D4AF37] transition-colors">
            Quero meu projeto exclusivo
          </button>
      </div>
    </section>
  );
};

export default Transformation;
