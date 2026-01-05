import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Transformation from './components/Transformation';
import Wizard from './components/Wizard';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import VirtualConcierge from './components/WhatsAppWidget';
import { motion as m, useScroll, useSpring, useTransform } from 'framer-motion';
import { TreePine, Flower, Send, Star } from 'lucide-react';
import Lenis from 'lenis';

const motion = m as any;
type Variants = any;

// Variantes de animação reutilizáveis para consistência visual
const fadeInRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const atelierRef = useRef<HTMLElement>(null);

  // Parallax suave para o container branco subir
  const { scrollYProgress: atelierProgress } = useScroll({
    target: atelierRef,
    offset: ["start end", "start center"]
  });
  
  // Efeito de "Slide Up" suave da seção branca sobre a escura
  const whiteSectionY = useTransform(atelierProgress, [0, 1], [100, 0]);
  const atelierImageY = useTransform(atelierProgress, [0, 1], [100, -50]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Mais lento para sensação de peso/luxo
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

    const handleResize = () => lenis.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A1A16] selection:bg-[#D4AF37] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-[#D4AF37] z-[100] origin-left" style={{ scaleX }} />

      <Navbar />
      
      {/* Grupo Dark: Hero e Transformation fluem juntos */}
      <div className="relative z-0">
        <Hero />
        <Transformation />
      </div>

      {/* Grupo Light: Atelier, Wizard, etc. Sobem como um card sobre o Dark */}
      <motion.div 
        style={{ y: whiteSectionY }}
        className="relative z-10 -mt-24 md:-mt-32 bg-white rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-50px_100px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        {/* Section: Atelier / Value Prop */}
        <section id="atelier" ref={atelierRef} className="py-24 md:py-32 bg-white relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FAF9F6] -z-10" />
          
          {/* Elemento decorativo de transição */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-lg border border-[#D4AF37]/20 z-20">
             <Star className="text-[#D4AF37] fill-[#D4AF37]/20" size={24} />
          </div>

          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInRight} className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#D4AF37]" />
                <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold">A Essência D'Flores</span>
              </motion.div>
              
              <motion.h2 variants={fadeInRight} className="text-4xl md:text-6xl font-serif text-[#1A3C34] mb-8 italic leading-[1.1]">
                Onde o monumental <br/>encontra o <span className="text-[#D4AF37]">delicado.</span>
              </motion.h2>
              
              <motion.p variants={fadeInRight} className="text-[#1A3C34]/70 leading-relaxed font-light mb-12 text-lg md:text-xl">
                Somos pioneiros na criação de árvores decorativas gigantes e estruturas florais que transformam ambientes comuns em experiências sensoriais inesquecíveis. Cada projeto é uma obra de arte autoral.
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp} className="space-y-4 p-8 border border-[#1A3C34]/5 hover:border-[#D4AF37] transition-all duration-500 bg-[#FAF9F6] hover:bg-white hover:shadow-xl group rounded-sm">
                  <TreePine className="text-[#1A3C34] group-hover:text-[#D4AF37] transition-colors" size={32} strokeWidth={1.5} />
                  <div>
                    <h4 className="font-serif text-[#1A3C34] text-xl mb-2">Árvores Gigantes</h4>
                    <p className="text-[10px] uppercase text-[#1A3C34]/50 tracking-wider font-bold">Técnica exclusiva</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="space-y-4 p-8 border border-[#1A3C34]/5 hover:border-[#D4AF37] transition-all duration-500 bg-[#FAF9F6] hover:bg-white hover:shadow-xl group rounded-sm">
                  <Flower className="text-[#1A3C34] group-hover:text-[#D4AF37] transition-colors" size={32} strokeWidth={1.5} />
                  <div>
                    <h4 className="font-serif text-[#1A3C34] text-xl mb-2">Design Floral</h4>
                    <p className="text-[10px] uppercase text-[#1A3C34]/50 tracking-wider font-bold">Curadoria Nobre</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <div className="relative mt-10 md:mt-0">
              <motion.div 
                 style={{ y: atelierImageY }}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1, ease: "easeOut" }}
                 viewport={{ once: true }}
                 className="relative z-10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1544274411-a7af6de9a96d?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-[400px] md:h-[600px] object-cover shadow-[0_50px_100px_-20px_rgba(26,60,52,0.3)]"
                  alt="Atelier"
                />
                {/* Moldura decorativa deslocada */}
                <div className="absolute top-10 -right-6 md:-right-10 w-full h-full border border-[#D4AF37] -z-10 hidden md:block" />
              </motion.div>
            </div>
          </div>
        </section>

        <Wizard />
        <Gallery />
        <VideoSection />
        
        {/* Section: Contact / Quote Form - Integrado ao final da área branca */}
        <section id="contact" className="py-24 bg-[#1A3C34] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
          
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-5 gap-0 bg-[#0A1A16] shadow-2xl overflow-hidden border border-white/10 rounded-sm"
            >
              
              <div className="md:col-span-2 relative min-h-[300px] md:min-h-full group overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-60" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800')" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A16] to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-4xl font-serif italic mb-3">Vamos conversar?</h3>
                  <div className="h-[1px] w-12 bg-[#D4AF37] mb-4" />
                  <p className="text-white/60 text-sm font-light">Sua celebração merece a grandiosidade que só a D'Flores pode oferecer.</p>
                </div>
              </div>

              <div className="md:col-span-3 p-8 md:p-16">
                <div className="mb-10">
                  <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] font-bold">Inicie seu Projeto</span>
                  <h2 className="text-3xl font-serif mt-2 text-white">Reserve sua Data</h2>
                </div>

                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                      <label className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold group-focus-within:text-[#D4AF37] transition-colors">Nome</label>
                      <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 px-0 focus:bg-transparent focus:border-[#D4AF37] focus:outline-none transition-colors font-light text-lg" placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold group-focus-within:text-[#D4AF37] transition-colors">Contato</label>
                      <input type="tel" className="w-full bg-transparent border-b border-white/10 py-3 px-0 focus:bg-transparent focus:border-[#D4AF37] focus:outline-none transition-colors font-light text-lg" placeholder="(DD) 99999-9999" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 group">
                    <label className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold group-focus-within:text-[#D4AF37] transition-colors">Data Prevista</label>
                    <input type="date" className="w-full bg-transparent border-b border-white/10 py-3 px-0 focus:bg-transparent focus:border-[#D4AF37] focus:outline-none transition-colors font-light invert-0 text-white/80 text-lg" />
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-bold group-focus-within:text-[#D4AF37] transition-colors">Detalhes do Sonho</label>
                    <textarea className="w-full bg-transparent border-b border-white/10 py-3 px-0 focus:bg-transparent focus:border-[#D4AF37] focus:outline-none transition-colors font-light resize-none h-24 text-lg" placeholder="Conte-nos sobre sua visão..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[#D4AF37] text-white py-5 text-xs uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-[#1A3C34] transition-all flex items-center justify-center gap-3 mt-4">
                    Solicitar Concierge
                    <Send size={14} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </motion.div>

      <VirtualConcierge />
    </div>
  );
};

export default App;