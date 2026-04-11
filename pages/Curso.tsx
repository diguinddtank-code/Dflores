import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Star, BookOpen, Users, ChevronDown, ShieldCheck, CreditCard, Smartphone, ArrowRight, Heart, TrendingUp, Sparkles, Flower2, Crown, Gem, Palette, Camera, Scissors, Droplets, Leaf, Sun } from 'lucide-react';

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

  const petals = useMemo(() => {
    return [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 20 + 10}px`,
      height: `${Math.random() * 20 + 10}px`,
      animationDuration: `${Math.random() * 10 + 15}s`,
      animationDelay: `-${Math.random() * 15}s`
    }));
  }, []);

  return (
    <div className="min-h-screen bg-[#FDF8F5] font-dmsans selection:bg-[#C9A84C] selection:text-white">
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
        
        .petal {
          position: absolute;
          background: #C9A84C;
          border-radius: 150% 0 150% 0;
          opacity: 0.15;
          animation: fall linear infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(201, 168, 76, 0.3);
        }
        
        .bg-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg) scale(0.5); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(100vh) rotate(360deg) scale(1); opacity: 0; }
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Topbar */}
      <div className="bg-wine text-cream text-center py-2 text-xs md:text-sm font-medium tracking-wide sticky top-0 z-50 px-4">
        ⚠️ ATENÇÃO: Oferta especial de lançamento. Apenas <span className="font-bold text-gold">23 vagas</span> restantes!
      </div>

      {/* Hero */}
      <section id="hero" className="relative bg-[#1A0B12] pt-16 pb-32 md:pt-24 md:pb-40 overflow-hidden min-h-screen flex flex-col items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="https://i.imgur.com/JvXeAtg.jpeg" alt="Background" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A0B12]/30 via-[#1A0B12]/80 to-[#1A0B12]"></div>
        </div>

        {/* Petals Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {petals.map((style, i) => (
            <div key={i} className="petal" style={style} />
          ))}
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 flex flex-col items-center text-center">
          
          {/* Massive Logo Background Effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] sm:w-[150%] md:w-[100%] max-w-5xl opacity-[0.04] pointer-events-none flex justify-center"
          >
            <img src="https://i.imgur.com/APXOSOf.png" alt="D'Flores" className="w-full h-auto object-contain" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 flex flex-col items-center w-full -mt-16 sm:-mt-20 md:-mt-24"
          >
            {/* Enormous Logo with Blooming SVG Effects */}
            <div className="relative flex items-center justify-center mb-8 md:mb-12 w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px]">
              
              {/* Blooming Petals Animation Behind Logo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg viewBox="0 0 200 200" className="w-[250%] h-[250%] text-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {/* Layer 1: Slow rotating geometric floral base */}
                  <motion.g animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "100px 100px" }}>
                    {[...Array(12)].map((_, i) => (
                      <path 
                        key={`base-${i}`} 
                        d="M100,100 C90,60 90,20 100,0 C110,20 110,60 100,100 Z" 
                        fill="currentColor" 
                        transform={`rotate(${i * 30} 100 100)`} 
                        opacity="0.15" 
                      />
                    ))}
                  </motion.g>
                  
                  {/* Layer 2: Radiating/Blooming Petals */}
                  {[...Array(8)].map((_, i) => (
                    <motion.g key={`bloom-${i}`} transform={`rotate(${i * 45} 100 100)`} style={{ transformOrigin: "100px 100px" }}>
                      <motion.path
                        d="M100,100 C80,65 80,25 100,5 C120,25 120,65 100,100 Z"
                        fill="currentColor"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ 
                          scale: [0.5, 1.2, 1.5], 
                          opacity: [0, 0.6, 0]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          delay: i * 0.5, 
                          ease: "easeOut" 
                        }}
                        style={{ transformOrigin: "100px 100px" }}
                      />
                    </motion.g>
                  ))}
                  
                  {/* Layer 3: Inner rotating ring */}
                  <motion.circle 
                    cx="100" cy="100" r="60" 
                    fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" 
                    animate={{ rotate: -360 }} 
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "100px 100px" }}
                    opacity="0.5"
                  />
                </svg>
              </div>

              {/* Deep Pulsing Glow */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gold/30 blur-[50px] rounded-full"
              ></motion.div>

              {/* The Logo Itself */}
              <img 
                src="https://i.imgur.com/APXOSOf.png" 
                alt="D'Flores" 
                className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(201,168,76,0.8)] relative z-10" 
              />
            </div>
            
            <span className="text-gold uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-xs font-bold mb-5 block drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              Masterclass Exclusiva
            </span>
            
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.1] mb-6 max-w-4xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              Transforme sua paixão em <br className="hidden sm:block" />
              <span className="text-gold italic font-light drop-shadow-[0_0_15px_rgba(201,168,76,0.4)]">Arte Monumental</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] px-4">
              O método completo para você dominar a arquitetura floral, criar cenários inesquecíveis e faturar com eventos de alto padrão.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full px-4">
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} 
                className="w-full sm:w-auto bg-gold text-wine font-black text-sm md:text-base tracking-[0.2em] uppercase px-8 md:px-14 py-5 rounded-sm shadow-[0_10px_40px_rgba(201,168,76,0.5)] hover:bg-cream hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Garantir Minha Vaga <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Pricing Card */}
      <section className="relative z-20 -mt-16 md:-mt-24 pb-16 md:pb-24 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card bg-white/95 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-gold/30 relative flex flex-col md:flex-row items-center gap-8 md:gap-10"
          >
            <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-wine text-cream text-[9px] md:text-xs font-bold px-6 md:px-8 py-1.5 md:py-2 rounded-full uppercase tracking-[0.2em] whitespace-nowrap shadow-lg">
              Oferta Especial de Lançamento
            </div>
            
            <div className="w-full md:w-1/2 text-left pt-4 md:pt-0 border-b md:border-b-0 md:border-r border-gold/20 pb-6 md:pb-0 md:pr-10">
              <h3 className="font-playfair text-2xl md:text-3xl text-wine font-bold mb-4 text-center md:text-left">O que está incluso hoje:</h3>
              <div className="space-y-3 md:space-y-4">
                {['Acesso vitalício a todas as aulas', 'Técnicas exclusivas de montagem', 'Precificação segura e lucrativa', "Certificado de conclusão D'Flores"].map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-700 font-medium text-sm md:text-base">
                    <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={18} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="font-bold text-wine text-[10px] md:text-xs uppercase tracking-wider mb-3 text-center md:text-left">Bônus Exclusivos:</p>
                <div className="flex items-start gap-3 text-sm text-gray-600 mb-2">
                  <Star className="text-gold shrink-0 mt-0.5" size={16} fill="currentColor" /> Planilha de Precificação Automática
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <Star className="text-gold shrink-0 mt-0.5" size={16} fill="currentColor" /> Guia de Fornecedores Secretos
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 text-center pt-4 md:pt-0">
              <p className="text-gray-400 line-through text-base md:text-lg mb-1">De R$ 597,00</p>
              <p className="font-playfair text-4xl sm:text-5xl md:text-6xl text-wine font-bold mb-2">12x R$ 29,70</p>
              <p className="text-xs md:text-sm text-gray-500 mb-6 md:mb-8">ou R$ 297,00 à vista</p>
              
              <div className="bg-cream/50 p-3 md:p-4 rounded-lg mb-6 md:mb-8 inline-block border border-gold/20">
                <p className="text-[10px] md:text-xs text-wine font-bold mb-2 md:mb-3 uppercase tracking-widest">A oferta encerra em:</p>
                <div className="flex justify-center gap-3 md:gap-4 font-playfair text-2xl md:text-3xl text-gold font-bold">
                  <div className="flex flex-col items-center"><span className="w-10 md:w-12">{String(Math.floor(timeLeft / 60)).padStart(2, '0')}</span><span className="text-[8px] md:text-[9px] font-dmsans text-gray-500 uppercase tracking-widest mt-1">Min</span></div>
                  <span className="text-wine/30">:</span>
                  <div className="flex flex-col items-center"><span className="w-10 md:w-12">{String(timeLeft % 60).padStart(2, '0')}</span><span className="text-[8px] md:text-[9px] font-dmsans text-gray-500 uppercase tracking-widest mt-1">Seg</span></div>
                </div>
              </div>

              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} 
                className="w-full bg-gold text-white font-bold text-xs md:text-sm tracking-widest uppercase px-6 md:px-8 py-4 rounded-sm shadow-lg hover:bg-wine transition-colors duration-300"
              >
                Quero me inscrever agora
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Social Proof Bar */}
      <div className="bg-wine py-5 overflow-hidden border-y border-gold/30 relative">
        <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite] w-[200%]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center justify-around w-1/2 px-8">
              <span className="text-cream font-bold text-sm md:text-base flex items-center gap-3 tracking-widest"><Users className="text-gold" size={20}/> +500 ALUNAS</span>
              <span className="text-cream font-bold text-sm md:text-base flex items-center gap-3 tracking-widest"><Star className="text-gold" size={20} fill="currentColor"/> 4.9 ESTRELAS</span>
              <span className="text-cream font-bold text-sm md:text-base flex items-center gap-3 tracking-widest"><Heart className="text-gold" size={20} fill="currentColor"/> 98% SATISFAÇÃO</span>
            </div>
          ))}
        </div>
      </div>

      {/* Promises/Transformation */}
      <section className="py-24 bg-white bg-pattern">
        <div className="container mx-auto px-6 max-w-6xl">
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

      {/* For Whom It Is */}
      <section className="py-24 bg-wine text-cream relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="https://i.imgur.com/gbzPlEG.jpeg" alt="Texture" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3 text-center lg:text-left">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-playfair text-3xl md:text-5xl font-bold mb-6 leading-tight"
              >
                Para quem é o Curso D'Flores?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-cream/80 text-lg leading-relaxed"
              >
                Se você se identifica com algum destes perfis, este método foi desenhado para você.
              </motion.p>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
              {[
                "Apaixonados por flores que querem começar do zero",
                "Decoradores buscando aprimorar técnicas florais",
                "Floristas que têm dificuldade em precificar",
                "Empreendedores em busca de uma nova profissão lucrativa",
                "Pessoas que desejam trabalhar com eventos de luxo",
                "Quem busca segurança para criar arranjos autorais"
              ].map((text, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: 50, filter: 'blur(5px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  key={i} 
                  className="flex items-start gap-4 bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                >
                  <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={24} strokeWidth={1.5} />
                  <p className="font-medium text-cream/90">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6 max-w-4xl">
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

      {/* Testimonials */}
      <section className="py-24 bg-cream bg-pattern">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-3xl md:text-5xl text-wine font-bold mb-6"
            >
              Histórias de Sucesso
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1 bg-gold mx-auto"
            ></motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Mariana Silva", city: "São Paulo, SP", text: "O curso abriu minha mente! Antes eu tinha medo de cobrar, hoje tenho segurança no meu trabalho e agenda cheia.", img: "https://i.pravatar.cc/150?img=1" },
              { name: "Camila Costa", city: "Belo Horizonte, MG", text: "As técnicas de amarração e conservação mudaram o jogo para mim. Meus arranjos duram muito mais e os clientes elogiam sempre.", img: "https://i.pravatar.cc/150?img=5" },
              { name: "Juliana Mendes", city: "Curitiba, PR", text: "Comecei do zero, na sala de casa. Hoje já atendo casamentos e montei meu próprio ateliê. Gratidão eterna!", img: "https://i.pravatar.cc/150?img=9" },
              { name: "Fernanda Lima", city: "Rio de Janeiro, RJ", text: "A didática é incrível. O módulo de precificação pagou o curso logo no meu primeiro evento após as aulas.", img: "https://i.pravatar.cc/150?img=10" },
              { name: "Amanda Ribeiro", city: "Goiânia, GO", text: "Sempre sonhei em trabalhar com flores, mas achava que era dom. O curso me provou que é técnica e dedicação.", img: "https://i.pravatar.cc/150?img=16" }
            ].map((test, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                key={i} 
                className="bg-white p-8 rounded-2xl shadow-lg border border-gold/10 relative hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex gap-1 text-gold mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">"{test.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={test.img} alt={test.name} className="w-12 h-12 rounded-full object-cover border-2 border-gold/30" />
                  <div>
                    <p className="font-bold text-wine">{test.name}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{test.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-[#1A1A1A]"></div>
        </div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gold"
          >
            Sua jornada começa agora
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg mb-12"
          >
            Junte-se a centenas de alunas e transforme sua vida através da arte floral.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white/5 p-8 md:p-12 rounded-2xl border border-gold/30 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 bg-wine text-center py-2 text-xs font-bold tracking-widest uppercase">
              Apenas 23 vagas restantes
            </div>
            
            <div className="mt-8">
              <p className="text-gray-400 line-through text-xl mb-2">De R$ 597,00</p>
              <div className="flex justify-center items-baseline gap-2 mb-2">
                <span className="text-2xl text-gold font-bold">12x</span>
                <span className="font-playfair text-6xl md:text-7xl font-bold text-white">R$ 29,70</span>
              </div>
              <p className="text-gray-400 mb-10">ou R$ 297,00 à vista</p>
              
              <button className="w-full md:w-auto bg-gold text-white font-bold text-sm md:text-lg tracking-widest px-12 py-5 rounded-sm shadow-[0_0_30px_rgba(201,168,76,0.3)] hover:bg-white hover:text-wine transition-all duration-300 mb-8">
                COMPRAR AGORA
              </button>
              
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 text-gray-400 text-sm">
                <span className="flex items-center justify-center gap-2"><CreditCard size={18} className="text-gold" /> Cartão em até 12x</span>
                <span className="flex items-center justify-center gap-2"><Smartphone size={18} className="text-gold" /> Pix com aprovação imediata</span>
                <span className="flex items-center justify-center gap-2"><ShieldCheck size={18} className="text-gold" /> Pagamento 100% Seguro</span>
              </div>
            </div>
          </motion.div>
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
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-gold/20 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] z-50 p-4"
          >
            <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="hidden sm:block">
                <p className="font-playfair text-wine font-bold text-xl">Curso D'Flores</p>
                <p className="text-gray-500 text-sm font-medium">12x de R$ 29,70</p>
              </div>
              <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto bg-gold text-white font-bold tracking-widest text-sm px-8 py-4 rounded-sm hover:bg-wine transition-colors shadow-lg">
                GARANTIR MINHA VAGA
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Curso;
