
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-[#1A1A1A]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center scale-105"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554734867-bf3c00a49371?auto=format&fit=crop&q=80&w=2000")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/90 via-[#1A1A1A]/80 to-[#1A1A1A] md:bg-gradient-to-r md:from-[#1A1A1A] md:via-[#1A1A1A]/80 md:to-transparent z-1"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:py-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
            <span className="h-1 w-8 md:w-12 bg-[#CE2029]"></span>
            <span className="text-[#CE2029] font-bold tracking-widest text-[10px] md:text-sm uppercase">Segurança Industrial & Comercial</span>
          </div>
          
          <h1 className="text-huge text-3xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Projetos de Segurança Contra Incêndio para <span className="text-[#CE2029]">Grandes Empresas</span>
          </h1>
          
          <p className="text-base md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
            Soluções completas em proteção contra incêndios, incluindo hidrantes, projetos especializados e equipamentos premium para gigantes da indústria.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-10 text-gray-200 text-left">
            <div className="flex items-center gap-2 bg-white/5 p-3 rounded-sm border border-white/10 md:bg-transparent md:border-none md:p-0">
              <CheckCircle2 className="text-[#CE2029] shrink-0" size={18} />
              <span className="font-medium text-sm md:text-base">Projetos AVCB / CLCB</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 p-3 rounded-sm border border-white/10 md:bg-transparent md:border-none md:p-0">
              <CheckCircle2 className="text-[#CE2029] shrink-0" size={18} />
              <span className="font-medium text-sm md:text-base">Redes de Hidrantes</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 p-3 rounded-sm border border-white/10 md:bg-transparent md:border-none md:p-0">
              <CheckCircle2 className="text-[#CE2029] shrink-0" size={18} />
              <span className="font-medium text-sm md:text-base">Manutenção Técnica</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 p-3 rounded-sm border border-white/10 md:bg-transparent md:border-none md:p-0">
              <CheckCircle2 className="text-[#CE2029] shrink-0" size={18} />
              <span className="font-medium text-sm md:text-base">Consultoria Especializada</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <a 
              href="#contact" 
              className="bg-[#CE2029] text-white px-8 py-4 md:px-10 md:py-5 rounded-sm font-bold text-base md:text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-2xl active:scale-95"
            >
              Solicitar Visita Técnica
              <ArrowRight size={20} />
            </a>
            <a 
              href="#services" 
              className="bg-transparent border-2 border-white/20 text-white px-8 py-4 md:px-10 md:py-5 rounded-sm font-bold text-base md:text-lg hover:bg-white/10 transition-all flex items-center justify-center active:scale-95"
            >
              Nossos Serviços
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Badge - Oculto em mobile small */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden md:flex absolute bottom-12 right-12 lg:bottom-20 lg:right-20 bg-[#CE2029] p-6 lg:p-8 text-white flex-col gap-1 items-center justify-center shadow-2xl z-20"
      >
        <span className="text-4xl lg:text-5xl font-black">20+</span>
        <span className="text-[10px] lg:text-xs uppercase font-bold tracking-tighter opacity-80 text-center">Anos de Experiência<br/>no Mercado</span>
      </motion.div>
    </section>
  );
};

export default Hero;
