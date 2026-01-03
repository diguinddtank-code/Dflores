
import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#1A3C34] text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-serif tracking-widest mb-6">D'FLORES</h2>
            <p className="text-white/60 font-light leading-relaxed mb-8">
              Criando experiências visuais que transcendem o tempo. Especialistas em decorações de luxo para momentos que merecem ser eternos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-serif text-[#D4AF37] mb-6">Explore</h3>
            <ul className="space-y-4 text-sm font-light uppercase tracking-widest">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">O Ateliê</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Galeria</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Casamentos</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">15 Anos</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-serif text-[#D4AF37] mb-6">Nosso Ateliê</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#D4AF37] shrink-0" size={20} />
                <p className="text-white/60 font-light">
                  Av. das Américas, 5000 - Barra da Tijuca<br />
                  Rio de Janeiro, RJ - CEP 22793-080
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#D4AF37] shrink-0" size={20} />
                <p className="text-white/60 font-light">+55 (21) 98765-4321</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-[#D4AF37] shrink-0" size={20} />
                <p className="text-white/60 font-light">contato@dfloresdecor.com.br</p>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-white/40 mb-4">Newsletter Exclusive</h4>
              <div className="flex border-b border-white/20 pb-2">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="bg-transparent border-none focus:outline-none flex-grow text-sm placeholder:text-white/30"
                />
                <button className="text-[#D4AF37] uppercase text-xs font-bold tracking-widest hover:text-white transition-colors">Assinar</button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/30 text-[10px] uppercase tracking-widest gap-4">
          <p>© 2024 D'FLORES DECORAÇÕES - TODOS OS DIREITOS RESERVADOS</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <p>DESIGN BY LUXURY STUDIO</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
