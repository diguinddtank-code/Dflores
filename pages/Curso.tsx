import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Star, BookOpen, Users, ChevronDown, ShieldCheck, CreditCard, Smartphone, ArrowRight, Heart, TrendingUp, Sparkles, Flower2, Crown, Gem, Palette, Camera, Scissors, Droplets, Leaf, Sun, XCircle, Check, AlertTriangle, Store, Quote } from 'lucide-react';

const MODULES = [
  { icon: Sparkles, title: "Módulo 1: Introdução e Nossa História", content: "Conheça a trajetória da D'Flores e o propósito de transformar eventos em experiências inesquecíveis com afeto e criatividade." },
  { icon: Flower2, title: "Módulo 2: A Magia e Linguagem das Flores", content: "Entenda como as flores se comunicam, a energia que transmitem e como escolher a flor certa para despertar as emoções desejadas no seu cliente." },
  { icon: Palette, title: "Módulo 3: Formas e Flores", content: "Aprenda a classificar e utilizar flores redondas, espigadas, multidirecionais, tropicais e folhagens para criar volume, movimento e pontos focais." },
  { icon: Sun, title: "Módulo 4: Sazonalidade e Época das Flores", content: "Domine o calendário floral. Saiba como lidar com a disponibilidade das espécies, fazer substituições inteligentes e orientar seus clientes." },
  { icon: Droplets, title: "Módulo 5: Compra, Conservação e Armazenamento", content: "Os segredos para escolher as melhores flores no fornecedor, técnicas de hidratação, corte em bisel e prevenção de bactérias para máxima durabilidade." },
  { icon: Scissors, title: "Módulo 6: Ferramentas Indispensáveis", content: "O kit completo do florista profissional: do podão e espuma floral até a tela de galinheiro e kenzan. Tudo o que você precisa para começar." },
  { icon: Crown, title: "Módulo 7: Amarração e Preparo do Floral", content: "Técnicas corretas para hidratar a espuma floral sem criar bolhas de ar e métodos de amarração seguros para estruturas de grande porte." },
  { icon: Gem, title: "Módulo 8: Teoria das Cores e Círculo Cromático", content: "Crie paletas harmoniosas usando esquemas monocromáticos, análogos, complementares e tríades. O segredo para arranjos visualmente impactantes." },
  { icon: Star, title: "Módulo 9: Estilos Florais, Prática e Precificação", content: "Aprenda na prática os estilos Formal, Assimétrico, Vegetativo e Ikebana. Além disso, uma aula completa sobre como precificar seus arranjos com lucro e segurança." },
];

const FAQS = [
  { q: "Para quem é este curso?", a: "Para iniciantes que desejam entrar no mercado de decoração floral, e para profissionais que buscam aprimorar suas técnicas e precificação." },
  { q: "Por quanto tempo terei acesso?", a: "Você terá acesso vitalício a todo o conteúdo do curso, incluindo futuras atualizações." },
  { q: "Preciso ter experiência prévia?", a: "Não! O curso ensina desde o básico (ferramentas e compras) até técnicas avançadas de montagem e precificação." },
  { q: "Como funciona a garantia?", a: "Você tem 7 dias para testar o curso. Se achar que não é para você, devolvemos 100% do seu dinheiro, sem perguntas." },
  { q: "O curso tem certificado?", a: "Sim! Ao concluir todas as aulas, você recebe um certificado de conclusão exclusivo da D'Flores." },
  { q: "Quais as formas de pagamento?", a: "Aceitamos Pix, cartão de crédito em até 12x e boleto bancário." },
];

const Curso: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 500;
      setShowSticky(window.scrollY > heroHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leaves = useMemo(() => {
    return [...Array(25)].map(() => ({
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 15 + 10}px`,
      height: `${Math.random() * 15 + 10}px`,
      animationDuration: `${Math.random() * 20 + 20}s`,
      animationDelay: `-${Math.random() * 40}s`,
      opacity: Math.random() * 0.2 + 0.1
    }));
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF8F5] font-dmsans selection:bg-[#C9A84C] selection:text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-dmsans { font-family: 'DM Sans', sans-serif; }
        
        .bg-wine { background-color: #7B1F4A; }
        .text-wine { color: #7B1F4A; }
        .border-wine { border-color: #7B1F4A; }
        
        .bg-gold { background-color: #C9A84C; }
        .text-gold { color: #C9A84C; }
        .border-gold { border-color: #C9A84C; }
        
        .bg-cream { background-color: #FDF8F5; }
        .text-cream { color: #FDF8F5; }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(201, 168, 76, 0.3);
        }
        
        .bg-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .leaf {
          position: absolute;
          background: #C9A84C;
          border-radius: 150% 0 150% 0;
          animation: fall linear infinite;
          filter: blur(1px);
        }
        
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg) translateX(0); opacity: 0; }
          10% { opacity: var(--leaf-opacity, 0.3); }
          90% { opacity: var(--leaf-opacity, 0.3); }
          100% { transform: translateY(110vh) rotate(720deg) translateX(100px); opacity: 0; }
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Topbar */}
      <div className="bg-wine text-cream text-center py-2.5 text-xs md:text-sm font-medium tracking-wide sticky top-0 z-50 px-4 flex items-center justify-center gap-2">
        🌸 Oferta especial ativa — <span className="text-gold font-bold">Economize R$300</span> nas próximas horas · Vagas limitadas
      </div>

      {/* Hero */}
      <section id="hero" className="relative bg-black pt-6 pb-20 lg:pt-24 lg:pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="https://i.imgur.com/JvXeAtg.jpeg" alt="Background" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black"></div>
        </div>

        {/* Falling Leaves Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {leaves.map((style, i) => (
            <div key={i} className="leaf" style={{ ...style, '--leaf-opacity': style.opacity } as React.CSSProperties} />
          ))}
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-2 lg:pt-0">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start w-full text-center lg:text-left"
          >
            {/* Elegant Logo */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative flex items-center justify-center lg:justify-start mb-4 md:mb-8 w-full max-w-[180px] sm:max-w-[200px] md:max-w-[240px] self-center lg:self-start"
            >
              {/* Soft glow behind logo */}
              <div className="absolute inset-0 bg-gold/20 blur-[60px] rounded-full"></div>
              <img 
                src="https://i.imgur.com/APXOSOf.png" 
                alt="D'Flores" 
                className="w-full h-auto object-contain relative z-10 opacity-95 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" 
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-gold/40 rounded-full px-5 py-2 mb-6 bg-gradient-to-r from-[#C9A84C]/10 via-[#7B1F4A]/10 to-[#C9A84C]/10 self-center lg:self-start backdrop-blur-md shadow-[0_0_20px_rgba(201,168,76,0.2)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              <span className="text-gold text-[10px] md:text-xs font-bold tracking-widest uppercase">Curso 100% Online • Começa Hoje</span>
            </motion.div>
            
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-white font-bold leading-[1.1] mb-6 max-w-2xl w-full">
              Da paixão por flores <br className="hidden md:block" />
              <span className="text-gold italic font-light">à profissão dos seus</span><br />
              <span className="text-gold italic font-light">sonhos</span><br />
              <span className="text-white/90 font-light tracking-wide">começa aqui.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-white/80 mb-8 max-w-xl leading-relaxed font-light w-full">
              Aprenda floricultura do absoluto zero. Técnica profissional, teoria de cores, precificação e como <strong className="text-white font-bold">montar um negócio real</strong> — tudo no seu ritmo, de onde você estiver.
            </p>

            {/* Floral Divider */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8 w-full opacity-70">
              <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent to-[#C9A84C]/60"></div>
              <Flower2 size={14} className="text-[#C9A84C]/80" strokeWidth={1.5} />
              <Flower2 size={18} className="text-[#C9A84C]" strokeWidth={1.5} />
              <Flower2 size={14} className="text-[#C9A84C]/80" strokeWidth={1.5} />
              <div className="h-[1px] w-16 md:w-24 bg-gradient-to-l from-transparent to-[#C9A84C]/60 lg:bg-gradient-to-r lg:from-[#C9A84C]/60 lg:to-transparent"></div>
            </div>

            {/* Avatars */}
            <div className="flex flex-col md:flex-row items-center lg:items-start gap-4 mb-10 w-full justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {['AM', 'CS', 'PR', 'JF', 'LM'].map((initials, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-[#8A5A44] border-2 border-black flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    {initials}
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex gap-1 text-gold mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-white/80 text-xs sm:text-sm text-center lg:text-left">
                  <strong className="text-white">+500 alunas</strong> já transformaram<br className="hidden md:block" /> suas vidas
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start w-full">
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} 
                className="w-full md:w-auto bg-[#C9A84C] text-white font-black text-sm md:text-base tracking-widest uppercase px-8 md:px-10 py-4 rounded-xl shadow-[0_10px_40px_rgba(201,168,76,0.3)] hover:bg-[#b5953f] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
              >
                QUERO COMEÇAR AGORA 
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight size={14} />
                </div>
              </button>
              <div className="flex items-center gap-2 mt-4 text-white/60 text-xs">
                <ShieldCheck size={14} />
                <span>Pagamento seguro · Garantia de 7 dias</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Pricing Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative w-full max-w-md mx-auto lg:max-w-none lg:ml-auto mt-8 lg:mt-0"
          >
            <div className="glass-card bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-gold/30 relative flex flex-col items-center">
              
              {/* Badge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-wine text-cream text-[10px] md:text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-[0_10px_20px_rgba(123,31,74,0.3)] z-30 border border-gold/30 w-max text-center">
                Oferta Especial
              </div>

              {/* Watermark */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                <div className="absolute top-0 right-0 opacity-[0.03] translate-x-1/4 -translate-y-1/4">
                  <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#7B1F4A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c4-4 8-6 8-12a8 8 0 0 0-16 0c0 6 4 8 8 12z"/>
                    <path d="M12 22v-6"/>
                    <path d="M12 16a4 4 0 0 0 4-4"/>
                    <path d="M12 16a4 4 0 0 1-4-4"/>
                  </svg>
                </div>
              </div>
              
              {/* Price Section (Moved to top) */}
              <div className="w-full text-center pt-4 relative z-10 flex flex-col items-center border-b border-gold/20 pb-6 mb-6">
                <p className="text-gray-500 line-through text-sm mb-1">De R$ 597,00 por apenas</p>
                <p className="font-playfair text-5xl sm:text-6xl text-wine font-bold mb-1 tracking-tight flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-dmsans font-medium text-wine/80">12x</span>
                  29<span className="text-3xl">,70</span>
                </p>
                <p className="text-xs text-gray-500 mb-4 font-medium">ou R$ 297,00 à vista</p>
                
                <div className="bg-cream/80 p-3 rounded-xl inline-block border border-gold/30 shadow-inner w-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A84C]/20 via-[#C9A84C] to-[#C9A84C]/20"></div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-[10px] text-wine font-bold uppercase tracking-widest">Expira em:</span>
                    <div className="flex justify-center gap-2 font-playfair text-lg text-gold font-bold">
                      <span className="bg-white rounded px-2 py-0.5 border border-gold/10 shadow-sm">{String(Math.floor(timeLeft / 60)).padStart(2, '0')}</span>
                      <span className="text-wine/30 animate-pulse">:</span>
                      <span className="bg-white rounded px-2 py-0.5 border border-gold/10 shadow-sm">{String(timeLeft % 60).padStart(2, '0')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="w-full text-left relative z-10 mb-6">
                <div className="space-y-3">
                  {['Acesso vitalício a todas as aulas', 'Técnicas exclusivas de montagem', 'Precificação segura e lucrativa', "Certificado de conclusão D'Flores", 'Comunidade exclusiva de alunas'].map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-700 font-medium text-sm">
                      <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                      <span className="leading-snug">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="w-full relative z-10">
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="w-full bg-gradient-to-r from-[#C9A84C] to-[#b5953f] text-white font-black text-sm tracking-widest uppercase px-6 py-4 rounded-xl shadow-[0_10px_30px_rgba(201,168,76,0.4)] hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(201,168,76,0.5)] transition-all duration-300 group flex items-center justify-center gap-2"
                >
                  GARANTIR MINHA VAGA
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center justify-center gap-2 mt-3 text-gray-400 text-[10px]">
                  <ShieldCheck size={12} />
                  <span>Ambiente 100% seguro</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Social Proof Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-wine py-4 md:py-5 overflow-hidden border-y border-gold/30 relative flex w-full"
      >
        <div className="flex w-max animate-[scroll_30s_linear_infinite]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-8 md:gap-16 items-center px-4 md:px-8">
              <span className="text-cream font-bold text-xs md:text-sm lg:text-base flex items-center gap-2 md:gap-3 tracking-widest"><Users className="text-gold" size={18}/> +500 ALUNAS</span>
              <span className="text-cream font-bold text-xs md:text-sm lg:text-base flex items-center gap-2 md:gap-3 tracking-widest"><Star className="text-gold" size={18} fill="currentColor"/> 4.9 ESTRELAS</span>
              <span className="text-cream font-bold text-xs md:text-sm lg:text-base flex items-center gap-2 md:gap-3 tracking-widest"><Heart className="text-gold" size={18} fill="currentColor"/> 98% SATISFAÇÃO</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Dynamic Pain Points Section */}
      <section className="py-20 md:py-32 bg-[#FAF9F6] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7B1F4A]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C9A84C] uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-4 block"
            >
              A Realidade do Mercado
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-playfair text-3xl md:text-5xl text-[#7B1F4A] font-bold mb-6 leading-tight"
            >
              Chega de tentar adivinhar <br className="hidden md:block" />
              <span className="italic font-light">o que funciona.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              O mercado floral não perdoa amadorismo. Veja como o Método D'Flores transforma suas maiores frustrações em diferenciais competitivos.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                pain: "Cursos superficiais que só ensinam o básico e escondem os verdadeiros segredos das grandes decorações.",
                solution: "Técnicas de alto padrão reveladas passo a passo, sem esconder nada, do básico às estruturas gigantes."
              },
              {
                pain: "Insegurança na hora de cobrar, sentindo que está sempre pagando para trabalhar ou perdendo clientes.",
                solution: "Planilha de precificação automática e estratégias de posicionamento para lucrar com segurança."
              },
              {
                pain: "Arranjos que murcham rápido no meio do evento por falta de preparo e hidratação correta.",
                solution: "Segredos de conservação, limpeza e hidratação para manter as flores impecáveis por muito mais tempo."
              },
              {
                pain: "Dificuldade em combinar cores e texturas, resultando em decorações sem harmonia e sem identidade.",
                solution: "Teoria das cores aplicada na prática para criar arranjos de cair o queixo com a sua assinatura."
              }
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                key={i}
                className="flex flex-col rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(123,31,74,0.1)] transition-shadow duration-500 border border-gray-100 group"
              >
                {/* Pain (Top) */}
                <div className="bg-white p-6 md:p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-400/50"></div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      <XCircle className="text-red-400" size={16} />
                    </div>
                    <span className="font-bold text-xs md:text-sm text-gray-400 uppercase tracking-widest">O Problema</span>
                  </div>
                  <p className="text-gray-700 font-medium text-sm md:text-base leading-relaxed">
                    {item.pain}
                  </p>
                </div>
                
                {/* Solution (Bottom) */}
                <div className="bg-[#7B1F4A] p-6 md:p-8 relative overflow-hidden flex-grow">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1">
                      <path d="M12 22c4-4 8-6 8-12a8 8 0 0 0-16 0c0 6 4 8 8 12z"/>
                    </svg>
                  </div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A84C]"></div>
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                      <Check className="text-[#C9A84C]" size={16} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-xs md:text-sm text-[#C9A84C] uppercase tracking-widest">A Solução D'Flores</span>
                  </div>
                  <p className="text-[#FDF8F5]/90 font-light text-sm md:text-base leading-relaxed relative z-10">
                    {item.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promises/Transformation */}
      <section className="py-24 bg-white bg-pattern relative overflow-hidden">
        {/* Decorative Floral SVG */}
        <div className="absolute top-0 left-0 opacity-[0.03] pointer-events-none -translate-x-1/4 -translate-y-1/4">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c4-4 8-6 8-12a8 8 0 0 0-16 0c0 6 4 8 8 12z"/>
            <path d="M12 22v-6"/>
            <path d="M12 16a4 4 0 0 0 4-4"/>
            <path d="M12 16a4 4 0 0 1-4-4"/>
            <path d="M12 12a4 4 0 0 0 4-4"/>
            <path d="M12 12a4 4 0 0 1-4-4"/>
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none translate-x-1/4 translate-y-1/4 rotate-180">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c4-4 8-6 8-12a8 8 0 0 0-16 0c0 6 4 8 8 12z"/>
            <path d="M12 22v-6"/>
            <path d="M12 16a4 4 0 0 0 4-4"/>
            <path d="M12 16a4 4 0 0 1-4-4"/>
            <path d="M12 12a4 4 0 0 0 4-4"/>
            <path d="M12 12a4 4 0 0 1-4-4"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-3xl md:text-5xl text-wine font-bold mb-6"
            >
              O que você vai conquistar
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1 bg-gold mx-auto"
            ></motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Crown, title: "Técnica Refinada", desc: "Domine arranjos clássicos e desconstruídos com acabamento impecável.", img: "https://i.imgur.com/v90rBJV.jpeg" },
              { icon: TrendingUp, title: "Renda Lucrativa", desc: "Aprenda a precificar corretamente e transforme seu hobby em um negócio rentável.", img: "https://i.imgur.com/AbNkO6M.jpeg" },
              { icon: ShieldCheck, title: "Segurança Criativa", desc: "Saiba exatamente quais flores usar, como combinar cores e criar sem medo.", img: "https://i.imgur.com/gnmW85H.jpeg" },
              { icon: Gem, title: "Eventos de Luxo", desc: "Capacite-se para atender casamentos e festas de alto padrão com estruturas gigantes.", img: "https://i.imgur.com/7FLEkM5.jpeg" },
              { icon: Camera, title: "Presença Digital", desc: "Dicas de como fotografar e posicionar seu trabalho nas redes sociais.", img: "https://i.imgur.com/lMFsQty.jpeg" },
              { icon: Users, title: "Comunidade", desc: "Faça parte de um grupo exclusivo de floristas para troca de experiências.", img: "https://i.imgur.com/fiIlU5o.jpeg" }
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                key={i} 
                className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gold/10"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-wine/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute bottom-4 left-4 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <item.icon className="text-gold" size={24} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-playfair text-xl text-wine font-bold mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Image Gallery */}
      <section className="py-20 md:py-32 bg-white overflow-hidden border-y border-gold/10 relative">
        
        {/* Copy Header */}
        <div className="container mx-auto px-6 max-w-4xl relative z-10 mb-12 md:mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C9A84C] uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-4 block"
          >
            O Seu Novo Portfólio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-3xl md:text-5xl text-wine font-bold mb-6 leading-tight"
          >
            Crie arranjos que arrancam suspiros <br className="hidden md:block" />
            <span className="italic font-light">e multiplicam seu valor.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Veja o nível de excelência, harmonia e acabamento que você será capaz de entregar após dominar as técnicas exclusivas do Método D'Flores.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          {/* Row 1 - Moves Left */}
          <div className="flex w-max animate-[scroll_40s_linear_infinite]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-4 md:gap-6 px-2 md:px-3">
                {[
                  "https://i.imgur.com/v90rBJV.jpeg",
                  "https://i.imgur.com/AbNkO6M.jpeg",
                  "https://i.imgur.com/gnmW85H.jpeg",
                  "https://i.imgur.com/7FLEkM5.jpeg",
                  "https://i.imgur.com/lMFsQty.jpeg"
                ].map((img, j) => (
                  <div key={j} className="w-60 h-40 md:w-80 md:h-56 rounded-xl md:rounded-2xl overflow-hidden shrink-0 shadow-md group relative">
                    <div className="absolute inset-0 bg-wine/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img src={img} alt="Arranjo Floral D'Flores" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          {/* Row 2 - Moves Right */}
          <div className="flex w-max animate-[scroll-reverse_40s_linear_infinite]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-4 md:gap-6 px-2 md:px-3">
                {[
                  "https://i.imgur.com/fiIlU5o.jpeg",
                  "https://i.imgur.com/JvXeAtg.jpeg",
                  "https://i.imgur.com/dE68d39.jpeg",
                  "https://i.imgur.com/v90rBJV.jpeg",
                  "https://i.imgur.com/AbNkO6M.jpeg"
                ].map((img, j) => (
                  <div key={j} className="w-60 h-40 md:w-80 md:h-56 rounded-xl md:rounded-2xl overflow-hidden shrink-0 shadow-md group relative">
                    <div className="absolute inset-0 bg-wine/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img src={img} alt="Arranjo Floral D'Flores" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom It Is - Dynamic & Direct */}
      <section className="py-20 md:py-32 bg-[#7B1F4A] relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 z-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="#C9A84C"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C9A84C] uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold mb-4 block"
            >
              Identificação
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-3xl md:text-5xl text-[#FDF8F5] font-bold mb-6 leading-tight"
            >
              Esse curso é para mim?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#FDF8F5]/80 text-base md:text-lg max-w-2xl mx-auto"
            >
              Se você balançar a cabeça dizendo <strong className="text-[#C9A84C]">"SIM"</strong> para pelo menos uma das frases abaixo, você está no lugar certo.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Leaf,
                title: "Começando do Zero",
                desc: "Você ama flores, acha lindo, mas não faz a mínima ideia de por onde começar a montar um arranjo."
              },
              {
                icon: TrendingUp,
                title: "Paga para Trabalhar",
                desc: "Você já faz arranjos, mas morre de medo de passar o preço, cobra barato e no fim do mês não sobra nada."
              },
              {
                icon: Palette,
                title: "Cansada de Terceirizar",
                desc: "Você é decoradora e perde dinheiro contratando florista. Quer botar a mão na massa e lucrar mais."
              },
              {
                icon: AlertTriangle,
                title: "Medo de Dar Ruim",
                desc: "Foge de festas grandes porque tem pavor das flores murcharem no meio do evento e você passar vergonha."
              },
              {
                icon: Sparkles,
                title: "Copia e Cola",
                desc: "Só consegue fazer arranjo se ficar copiando foto. Quer ter liberdade para criar da sua própria cabeça."
              },
              {
                icon: Store,
                title: "Sonha em Empreender",
                desc: "Quer largar o emprego atual, ter o próprio negócio e ser dona do seu tempo trabalhando com o que ama."
              }
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300 border-b-4 border-[#C9A84C] flex flex-col"
              >
                <div className="w-12 h-12 bg-[#7B1F4A]/10 rounded-full flex items-center justify-center mb-6 shrink-0">
                  <item.icon className="text-[#7B1F4A]" size={24} />
                </div>
                <h3 className="font-playfair text-xl text-[#7B1F4A] font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#111] text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#7B1F4A]/10 blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#C9A84C]/10 blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-16">
          <div className="text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C9A84C] text-sm font-bold tracking-widest uppercase mb-4 block"
            >
              O que dizem nossas alunas
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-3xl md:text-5xl text-white font-bold mb-6"
            >
              Histórias de Sucesso
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1 bg-[#C9A84C] mx-auto"
            ></motion.div>
          </div>
        </div>
        
        {/* Marquee Container */}
        <div className="flex w-max animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-6 px-3">
              {[
                { name: "Mariana Silva", city: "São Paulo, SP", text: "O curso abriu minha mente! Antes eu tinha medo de cobrar, hoje tenho segurança no meu trabalho e agenda cheia.", img: "https://i.pravatar.cc/150?img=1" },
                { name: "Camila Costa", city: "Belo Horizonte, MG", text: "As técnicas de amarração e conservação mudaram o jogo para mim. Meus arranjos duram muito mais e os clientes elogiam sempre.", img: "https://i.pravatar.cc/150?img=5" },
                { name: "Juliana Mendes", city: "Curitiba, PR", text: "Comecei do zero, na sala de casa. Hoje já atendo casamentos e montei meu próprio ateliê. Gratidão eterna!", img: "https://i.pravatar.cc/150?img=9" },
                { name: "Fernanda Lima", city: "Rio de Janeiro, RJ", text: "A didática é incrível. O módulo de precificação pagou o curso logo no meu primeiro evento após as aulas.", img: "https://i.pravatar.cc/150?img=10" },
                { name: "Amanda Ribeiro", city: "Goiânia, GO", text: "Sempre sonhei em trabalhar com flores, mas achava que era dom. O curso me provou que é técnica e dedicação.", img: "https://i.pravatar.cc/150?img=16" },
                { name: "Beatriz Souza", city: "Salvador, BA", text: "O suporte é maravilhoso. Me senti pegada pela mão do início ao fim. As aulas são muito bem gravadas.", img: "https://i.pravatar.cc/150?img=20" }
              ].map((test, j) => (
                <div 
                  key={j} 
                  className="w-[320px] md:w-[400px] shrink-0 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 relative flex flex-col hover:bg-white/10 transition-colors duration-300"
                >
                  <Quote className="absolute top-6 right-6 text-[#C9A84C]/20" size={48} />
                  <div className="flex gap-1 text-[#C9A84C] mb-6 relative z-10">
                    {[...Array(5)].map((_, k) => <Star key={k} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-300 italic mb-8 leading-relaxed relative z-10 flex-grow">"{test.text}"</p>
                  <div className="flex items-center gap-4 mt-auto relative z-10">
                    <img src={test.img} alt={test.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#C9A84C]" />
                    <div>
                      <p className="font-bold text-white">{test.name}</p>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{test.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Course Content */}
      <section className="py-24 bg-cream relative overflow-hidden">
        {/* Decorative Floral SVG */}
        <div className="absolute top-1/2 left-0 opacity-[0.04] pointer-events-none -translate-x-1/2 -translate-y-1/2">
          <svg width="500" height="500" viewBox="0 0 24 24" fill="none" stroke="#7B1F4A" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c4-4 8-6 8-12a8 8 0 0 0-16 0c0 6 4 8 8 12z"/>
            <path d="M12 22v-6"/>
            <path d="M12 16a4 4 0 0 0 4-4"/>
            <path d="M12 16a4 4 0 0 1-4-4"/>
            <path d="M12 12a4 4 0 0 0 4-4"/>
            <path d="M12 12a4 4 0 0 1-4-4"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-3xl md:text-4xl text-wine font-bold mb-6"
            >
              O que você vai aprender
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              9 módulos completos, do básico ao avançado.
            </motion.p>
          </div>
          
          <div className="space-y-4">
            {MODULES.map((mod, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                key={i} 
                className="bg-white rounded-lg shadow-sm border border-gold/20 overflow-hidden"
              >
                <button 
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gold/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-wine/5 flex items-center justify-center shrink-0">
                      <mod.icon className="text-gold" size={20} strokeWidth={1.5} />
                    </div>
                    <span className="font-playfair font-bold text-wine text-lg md:text-xl pr-4">{mod.title}</span>
                  </div>
                  <ChevronDown className={`text-gold shrink-0 transition-transform duration-300 ${openModule === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openModule === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-gray-600"
                    >
                      <div className="pt-4 border-t border-gray-100 leading-relaxed">
                        {mod.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teacher */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:w-1/2 relative w-full max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-gold rounded-t-full transform translate-x-4 translate-y-4"></div>
              <img src="https://i.imgur.com/dE68d39.jpeg" alt="Professora" className="relative z-10 w-full aspect-[4/5] object-cover rounded-t-full border-4 border-white shadow-xl" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="md:w-1/2"
            >
              <h2 className="font-playfair text-3xl md:text-5xl text-wine font-bold mb-8">Sua Mentora</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Com mais de 10 anos de experiência no mercado de eventos de luxo, transformei minha paixão por flores em uma empresa referência em decoração monumental.
              </p>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Minha missão agora é encurtar o seu caminho, revelando todos os segredos, técnicas e estratégias que me fizeram chegar até aqui, para que você também possa viver da sua arte.
              </p>
              
              <div className="grid grid-cols-3 gap-4 text-center border-t border-gray-100 pt-8">
                <div>
                  <p className="font-playfair text-3xl md:text-4xl text-gold font-bold mb-2">10+</p>
                  <p className="text-[10px] md:text-xs text-wine font-bold uppercase tracking-widest">Anos de Exp.</p>
                </div>
                <div>
                  <p className="font-playfair text-3xl md:text-4xl text-gold font-bold mb-2">500+</p>
                  <p className="text-[10px] md:text-xs text-wine font-bold uppercase tracking-widest">Alunas</p>
                </div>
                <div>
                  <p className="font-playfair text-3xl md:text-4xl text-gold font-bold mb-2">1k+</p>
                  <p className="text-[10px] md:text-xs text-wine font-bold uppercase tracking-widest">Eventos</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* FAQ */}
      <section className="py-24 bg-white bg-pattern">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-3xl md:text-5xl text-wine font-bold mb-6"
            >
              Perguntas Frequentes
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1 bg-gold mx-auto"
            ></motion.div>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-cream rounded-xl border border-gold/20 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gold/5 transition-colors"
                >
                  <span className="font-bold text-wine text-base pr-4">{faq.q}</span>
                  <ChevronDown className={`text-gold shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-gray-600"
                    >
                      <div className="pt-2 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-wine text-cream relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          whileInView={{ opacity: 0.05, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute right-0 top-0 transform translate-x-1/4 -translate-y-1/4 pointer-events-none"
        >
          <ShieldCheck size={400} />
        </motion.div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ShieldCheck className="text-gold mx-auto mb-8" size={64} strokeWidth={1.5} />
            <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-6">Risco Zero: 7 Dias de Garantia</h2>
            <p className="text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed">
              Temos tanta confiança na qualidade do nosso método que oferecemos uma garantia incondicional. Se em até 7 dias você achar que o curso não é para você, devolvemos 100% do seu investimento. Sem burocracia e sem perguntas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="pricing" className="py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
        {/* Dynamic background for CTA */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://i.imgur.com/JvXeAtg.jpeg" alt="Texture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/90 to-[#1A1A1A]"></div>
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#7B1F4A] text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase inline-block mb-6 shadow-[0_0_15px_rgba(123,31,74,0.5)]"
            >
              Oferta Especial de Lançamento
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-3xl md:text-5xl font-bold mb-6 text-white leading-tight"
            >
              Chegou a hora de parar de <span className="text-[#C9A84C]">perder dinheiro</span> e começar a <span className="text-[#C9A84C]">lucrar com flores</span>.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
            >
              Você está a um clique de ter o passo a passo completo para criar arranjos perfeitos e cobrar o que eles realmente valem.
            </motion.p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            {/* Left side - What you get */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-full lg:w-1/2 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
            >
              <h3 className="font-playfair text-2xl text-[#C9A84C] font-bold mb-6">Tudo que você vai levar hoje:</h3>
              <ul className="space-y-4">
                {[
                  "Acesso completo ao Método D'Flores (10 Módulos)",
                  "Apostila Digital Completa",
                  "Planilha Automática de Precificação",
                  "Guia de Fornecedores Secretos",
                  "Certificado de Conclusão",
                  "Suporte direto com a professora",
                  "Garantia Incondicional de 7 Dias"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#C9A84C] shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right side - Pricing */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="w-full lg:w-1/2 bg-gradient-to-b from-[#7B1F4A]/20 to-black/40 p-8 md:p-10 rounded-3xl border-2 border-[#C9A84C] backdrop-blur-md relative overflow-hidden text-center shadow-[0_0_40px_rgba(201,168,76,0.15)]"
            >
              <div className="absolute top-0 left-0 right-0 bg-[#C9A84C] text-black py-2 text-xs font-bold tracking-widest uppercase">
                Desconto de R$ 300,00 aplicado
              </div>
              
              <div className="mt-6">
                <p className="text-gray-400 text-lg mb-1">O valor normal do curso é:</p>
                <p className="text-red-400 line-through text-2xl mb-6 font-bold">R$ 597,00</p>
                
                <p className="text-white text-lg mb-2">Mas hoje, você paga apenas:</p>
                <div className="flex justify-center items-baseline gap-2 mb-2">
                  <span className="text-2xl text-[#C9A84C] font-bold">12x de</span>
                  <span className="font-playfair text-6xl md:text-7xl font-bold text-white">R$ 29,70</span>
                </div>
                <p className="text-gray-400 mb-8">ou <strong className="text-white">R$ 297,00</strong> à vista</p>
                
                <button className="w-full bg-[#C9A84C] text-black font-extrabold text-lg md:text-xl uppercase px-8 py-5 rounded-xl shadow-[0_0_20px_rgba(201,168,76,0.4)] hover:bg-white hover:scale-105 transition-all duration-300 mb-4 animate-pulse">
                  QUERO GARANTIR MINHA VAGA
                </button>
                <p className="text-xs text-gray-400 mb-8">Menos de R$ 1,00 por dia para mudar sua vida.</p>
                
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 text-gray-300 text-sm bg-black/30 p-4 rounded-xl">
                  <span className="flex items-center justify-center gap-2"><CreditCard size={16} className="text-[#C9A84C]" /> Cartão em 12x</span>
                  <span className="flex items-center justify-center gap-2"><Smartphone size={16} className="text-[#C9A84C]" /> Pix Imediato</span>
                  <span className="flex items-center justify-center gap-2"><ShieldCheck size={16} className="text-[#C9A84C]" /> Compra Segura</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-12 text-center text-sm">
        <div className="container mx-auto px-6">
          <a href="/">
            <img src="https://i.imgur.com/APXOSOf.png" alt="D'Flores" className="h-10 mx-auto mb-6 opacity-50 grayscale hover:opacity-100 transition-opacity" />
          </a>
          <p className="mb-4">© {new Date().getFullYear()} D'Flores Decorações. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gold transition-colors">Políticas de Privacidade</a>
            <a href="#" className="hover:text-gold transition-colors">Contato</a>
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
      <AnimatePresence>
        {showSticky && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[#C9A84C]/20 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] z-50 px-4 py-3 sm:p-4"
          >
            <div className="container mx-auto max-w-6xl flex justify-between items-center gap-3">
              <div className="flex flex-col">
                <p className="font-playfair text-[#7B1F4A] font-bold text-sm sm:text-xl leading-tight">Curso D'Flores</p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-[10px] sm:text-xs line-through hidden sm:inline">R$ 597,00</span>
                  <p className="text-[#C9A84C] font-bold text-xs sm:text-base">12x R$ 29,70</p>
                </div>
              </div>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} 
                className="flex-1 sm:flex-none max-w-[220px] sm:max-w-none bg-gradient-to-r from-[#C9A84C] to-[#b5953f] text-white font-bold tracking-widest text-[10px] sm:text-sm px-4 sm:px-8 py-3 sm:py-4 rounded-xl hover:scale-[1.02] transition-transform shadow-[0_5px_15px_rgba(201,168,76,0.3)] flex items-center justify-center gap-2"
              >
                <span>GARANTIR VAGA</span>
                <ArrowRight size={14} className="hidden sm:block" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Curso;
