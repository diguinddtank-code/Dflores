import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle, Grid, Play, UserSquare, MoreHorizontal, ChevronDown, Volume2, VolumeX } from 'lucide-react';

const InstagramSection: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

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

          {/* Video Player */}
          <div className="relative w-full aspect-[4/5] md:aspect-video bg-black cursor-pointer group" onClick={toggleMute}>
            <video
              ref={videoRef}
              src="https://i.imgur.com/WDLKZzo.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Overlay for Mute/Unmute Icon */}
            <div className="absolute bottom-4 right-4 z-10 bg-black/50 p-2 rounded-full backdrop-blur-sm transition-opacity opacity-100 md:opacity-0 md:group-hover:opacity-100">
              {isMuted ? (
                <VolumeX className="text-white w-6 h-6" />
              ) : (
                <Volume2 className="text-white w-6 h-6" />
              )}
            </div>
            {/* Click to unmute hint */}
            {isMuted && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full text-white text-sm font-semibold tracking-wide flex items-center gap-2">
                  <VolumeX size={18} />
                  Toque para ativar o som
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
