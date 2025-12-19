
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1A1A1A]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554734867-bf3c00a49371?auto=format&fit=crop&q=80&w=2000")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent z-1"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="h-1 w-12 bg-[#CE2029]"></span>
            <span className="text-[#CE2029] font-bold tracking-widest text-sm uppercase">Segurança Industrial & Comercial</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Projetos de Segurança Contra Incêndio para <span className="text-[#CE2029]">Grandes Empresas</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Soluções completas em proteção contra incêndios, incluindo hidrantes, projetos especializados e equipamentos premium para gigantes da indústria.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-gray-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-[#CE2029]" size={20} />
              <span className="font-medium">Projetos AVCB / CLCB</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-[#CE2029]" size={20} />
              <span className="font-medium">Redes de Hidrantes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-[#CE2029]" size={20} />
              <span className="font-medium">Manutenção Especializada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-[#CE2029]" size={20} />
              <span className="font-medium">Consultoria Técnica</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-[#CE2029] text-white px-10 py-5 rounded-sm font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-2xl"
            >
              Solicitar Visita Técnica
              <ArrowRight size={20} />
            </a>
            <a 
              href="#services" 
              className="bg-transparent border-2 border-white/20 text-white px-10 py-5 rounded-sm font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Nossos Serviços
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hidden lg:flex absolute bottom-20 right-20 bg-[#CE2029] p-8 text-white flex-col gap-1 items-center justify-center shadow-2xl"
      >
        <span className="text-5xl font-black">20+</span>
        <span className="text-xs uppercase font-bold tracking-tighter opacity-80">Anos de Experiência</span>
      </motion.div>
    </section>
  );
};

export default Hero;
