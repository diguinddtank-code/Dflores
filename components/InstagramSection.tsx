import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle, Grid, Play, UserSquare, MoreHorizontal, ChevronDown } from 'lucide-react';

const FEED_IMAGES = [
  'https://i.imgur.com/hkHP81F.png',
  'https://i.imgur.com/PA1YDG1.jpeg',
  'https://i.imgur.com/dE68d39.jpeg',
  'https://i.imgur.com/RvYM7IY.jpeg',
  'https://i.imgur.com/8GhqEJW.jpeg',
  'https://i.imgur.com/iLYsMuc.jpeg',
  'https://i.imgur.com/vPrh116.jpeg',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800'
];

const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-24 bg-[#FAF9F6] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Instagram className="text-[#D4AF37]" size={20} />
            <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold">Social</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A3C34] italic mb-4">Acompanhe nosso Ateliê</h2>
          <p className="text-[#1A3C34]/60 font-light max-w-xl mx-auto">
            Inspirações diárias, bastidores e a magia por trás de cada projeto monumental.
          </p>
        </motion.div>

        {/* Instagram Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 max-w-4xl mx-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div className="flex items-center gap-2 font-semibold text-gray-900">
              dfloresdecoracoes <ChevronDown size={16} />
            </div>
            <div className="flex gap-4 text-gray-900">
              <MoreHorizontal />
            </div>
          </div>

          {/* Profile Header */}
          <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
            {/* Avatar with Story Ring */}
            <div className="shrink-0 relative mx-auto md:mx-0">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-orange-500 to-pink-500">
                <img 
                  src="https://i.imgur.com/APXOSOf.png" 
                  alt="D'Flores Logo" 
                  className="w-full h-full rounded-full border-4 border-white object-contain bg-[#1A3C34] p-2"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 w-full">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center md:text-left">dfloresdecoracoes</h2>
                <div className="flex gap-2 justify-center md:justify-start">
                  <button className="bg-[#0095F6] hover:bg-[#1877F2] text-white px-6 py-1.5 rounded-lg font-semibold text-sm transition-colors">
                    Seguir
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-1.5 rounded-lg font-semibold text-sm transition-colors">
                    Mensagem
                  </button>
                </div>
              </div>

              <div className="hidden md:flex gap-8 mb-6 text-base text-gray-900">
                <div><span className="font-semibold">482</span> publicações</div>
                <div><span className="font-semibold">15.4k</span> seguidores</div>
                <div><span className="font-semibold">120</span> seguindo</div>
              </div>

              <div className="text-sm md:text-base text-gray-900 text-center md:text-left">
                <div className="font-semibold">D'FLORES DECORAÇÕES</div>
                <div className="text-gray-500 mb-1">Arte & Design</div>
                <div className="leading-relaxed">
                  Transformando Sonhos em Cenários Mágicos ✨<br/>
                  Decoração Monumental & Luxo 🌿<br/>
                  📍 Belo Horizonte e Região
                </div>
                <a href="#contact" className="text-[#00376B] font-semibold hover:underline mt-1 block">
                  linktr.ee/dflores
                </a>
              </div>
              
              {/* Mobile Stats */}
              <div className="flex md:hidden justify-around border-t border-gray-100 mt-6 pt-4 text-sm text-gray-900">
                <div className="text-center"><div className="font-semibold">482</div><div className="text-gray-500 text-xs">publicações</div></div>
                <div className="text-center"><div className="font-semibold">15.4k</div><div className="text-gray-500 text-xs">seguidores</div></div>
                <div className="text-center"><div className="font-semibold">120</div><div className="text-gray-500 text-xs">seguindo</div></div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center border-t border-gray-200">
            <div className="flex gap-12 md:gap-16">
              <div className="flex items-center gap-2 py-4 border-t-[1px] border-gray-900 -mt-[1px] text-xs md:text-sm font-semibold text-gray-900 tracking-widest">
                <Grid size={14} /> PUBLICAÇÕES
              </div>
              <div className="flex items-center gap-2 py-4 text-gray-400 text-xs md:text-sm font-semibold tracking-widest">
                <Play size={14} /> REELS
              </div>
              <div className="flex items-center gap-2 py-4 text-gray-400 text-xs md:text-sm font-semibold tracking-widest hidden md:flex">
                <UserSquare size={14} /> MARCADOS
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-1 md:gap-1">
            {FEED_IMAGES.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-square relative group cursor-pointer overflow-hidden"
              >
                <img src={img} alt={`Post ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 md:gap-6 text-white">
                  <div className="flex items-center gap-1.5 md:gap-2 font-semibold text-sm md:text-base">
                    <Heart className="fill-white w-4 h-4 md:w-6 md:h-6" /> {Math.floor(Math.random() * 500) + 100}
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2 font-semibold text-sm md:text-base">
                    <MessageCircle className="fill-white w-4 h-4 md:w-6 md:h-6" /> {Math.floor(Math.random() * 50) + 5}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
