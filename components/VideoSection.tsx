
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="video-experience" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Experiência Imersiva</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A3C34] italic">D'Flores em Movimento</h2>
          <div className="h-[1px] w-32 bg-[#D4AF37]/30 mx-auto mt-6" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative group bg-[#1A3C34] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden"
        >
          {/* Decorative Border */}
          <div className="absolute inset-0 border-[12px] border-white/5 pointer-events-none z-10" />
          
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            loop
            muted={isMuted}
            playsInline
            poster="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1920"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-wedding-altar-decorated-with-flowers-4417-large.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>

          {/* Custom Controls Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-500">
            {!isPlaying && (
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                onClick={togglePlay}
                className="w-24 h-24 rounded-full bg-[#D4AF37]/90 text-white flex items-center justify-center backdrop-blur-sm shadow-2xl border border-white/20"
              >
                <Play size={32} fill="currentColor" className="ml-1" />
              </motion.button>
            )}

            {/* Bottom Bar Controls */}
            <div className={`absolute bottom-0 left-0 right-0 p-8 flex justify-between items-center transition-opacity duration-500 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
              <button 
                onClick={togglePlay}
                className="text-white hover:text-[#D4AF37] transition-colors flex items-center gap-3"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                  {isPlaying ? 'Pausar Filme' : 'Ver Filme Completo'}
                </span>
              </button>

              <button 
                onClick={toggleMute}
                className="text-white hover:text-[#D4AF37] transition-colors"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 grid md:grid-cols-3 gap-8 items-center"
        >
          <p className="text-[#1A3C34]/40 text-[10px] uppercase tracking-widest font-medium md:text-left text-center">
            Filme Institucional 2024
          </p>
          <p className="text-[#1A3C34]/70 font-light text-sm italic text-center leading-relaxed">
            "Capturando a transição entre o sonho e a materialidade monumental."
          </p>
          <div className="flex justify-center md:justify-end">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#FAF9F6] bg-[#D4AF37] flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" />
                </div>
              ))}
              <div className="pl-6 text-[9px] uppercase tracking-tighter text-[#1A3C34]/40 flex items-center italic">
                +450 eventos realizados
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
