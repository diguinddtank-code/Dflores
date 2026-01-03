
import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Transformation from './components/Transformation';
import Wizard from './components/Wizard';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import VirtualConcierge from './components/WhatsAppWidget';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { TreePine, Flower, Send } from 'lucide-react';
import Lenis from 'lenis';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const atelierRef = useRef<HTMLElement>(null);

  // Parallax for Atelier section
  const { scrollYProgress: atelierProgress } = useScroll({
    target: atelierRef,
    offset: ["start end", "end start"]
  });
  
  const atelierY = useTransform(atelierProgress, [0, 1], [50, -50]);
  const atelierImageY = useTransform(atelierProgress, [0, 1], [100, -100]);

  useEffect(() => {
    // Inicialização do Lenis com setup padrão (mais robusto)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Atualiza o layout do Lenis se houver mudanças no DOM
    const handleResize = () => lenis.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white selection:bg-[#D4AF37] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-[#D4AF37] z-[60] origin-left" style={{ scaleX }} />

      <Navbar />
      
      <main>
        <Hero />
        
        <Transformation />

        {/* Section: Atelier / Value Prop */}
        <section id="atelier" ref={atelierRef} className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FAF9F6] -z-10" />
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
              style={{ y: atelierY }}
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
            >
              <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">A Essência D'Flores</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1A3C34] mb-8 italic">Onde o monumental encontra o delicado.</h2>
              <p className="text-[#1A3C34]/60 leading-relaxed font-light mb-10 text-lg">
                Somos pioneiros na criação de árvores decorativas gigantes e estruturas florais que transformam ambientes comuns em experiências sensoriais inesquecíveis. Cada projeto é uma obra de arte autoral, desenhada para refletir a exclusividade do seu momento.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4 p-6 border border-[#1A3C34]/5 hover:border-[#D4AF37]/50 transition-colors bg-white shadow-sm group">
                  <TreePine className="text-[#D4AF37] group-hover:scale-110 transition-transform" size={32} />
                  <div>
                    <h4 className="font-serif text-[#1A3C34] text-xl mb-2">Árvores Gigantes</h4>
                    <p className="text-[10px] uppercase text-[#1A3C34]/50 tracking-wider font-bold">Técnica exclusiva</p>
                  </div>
                </div>
                <div className="space-y-4 p-6 border border-[#1A3C34]/5 hover:border-[#D4AF37]/50 transition-colors bg-white shadow-sm group">
                  <Flower className="text-[#D4AF37] group-hover:scale-110 transition-transform" size={32} />
                  <div>
                    <h4 className="font-serif text-[#1A3C34] text-xl mb-2">Design Floral</h4>
                    <p className="text-[10px] uppercase text-[#1A3C34]/50 tracking-wider font-bold">Curadoria Nobre</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <div className="absolute top-4 -left-4 w-full h-full border border-[#D4AF37] z-0" />
              <motion.img 
                style={{ y: atelierImageY }}
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1544274411-a7af6de9a96d?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-[600px] object-cover shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative z-10"
              />
            </div>
          </div>
        </section>

        <Wizard />

        <Gallery />

        <VideoSection />

        {/* Section: Contact / Quote Form */}
        <section id="contact" className="py-24 bg-[#1A3C34] text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
          
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <div className="grid md:grid-cols-5 gap-12 bg-[#0A1A16] shadow-2xl overflow-hidden border border-white/10">
              
              <div className="md:col-span-2 relative min-h-[300px] md:min-h-full">
                <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Decoration" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A16] to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-serif italic mb-2">Vamos conversar?</h3>
                  <p className="text-white/60 text-sm font-light">Sua celebração merece a grandiosidade que só a D'Flores pode oferecer.</p>
                </div>
              </div>

              <div className="md:col-span-3 p-10 md:p-16">
                <div className="mb-8">
                  <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] font-bold">Inicie seu Projeto</span>
                  <h2 className="text-3xl font-serif mt-2">Reserve sua Data</h2>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold">Nome</label>
                      <input type="text" className="w-full bg-white/5 border-b border-white/10 py-3 px-0 focus:bg-transparent focus:border-[#D4AF37] focus:outline-none transition-colors font-light" placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold">Contato</label>
                      <input type="tel" className="w-full bg-white/5 border-b border-white/10 py-3 px-0 focus:bg-transparent focus:border-[#D4AF37] focus:outline-none transition-colors font-light" placeholder="(DD) 99999-9999" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold">Data Prevista</label>
                    <input type="date" className="w-full bg-white/5 border-b border-white/10 py-3 px-0 focus:bg-transparent focus:border-[#D4AF37] focus:outline-none transition-colors font-light invert-0 text-white/80" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold">Detalhes do Sonho</label>
                    <textarea className="w-full bg-white/5 border-b border-white/10 py-3 px-0 focus:bg-transparent focus:border-[#D4AF37] focus:outline-none transition-colors font-light resize-none h-24" placeholder="Conte-nos sobre sua visão..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[#D4AF37] text-white py-5 text-xs uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-[#1A3C34] transition-all flex items-center justify-center gap-3 mt-4">
                    Solicitar Concierge
                    <Send size={14} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <VirtualConcierge />
    </div>
  );
};

export default App;
