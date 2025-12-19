
import React from 'react';
import { CLIENTS } from '../constants';

const ClientsCarousel: React.FC = () => {
  return (
    <section id="clients" className="py-16 md:py-24 bg-gray-50 overflow-hidden border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 mb-10 md:mb-16">
        <div className="flex flex-col items-center">
          <h2 className="text-[#CE2029] font-bold text-xs tracking-widest uppercase mb-3">Parcerias de Sucesso</h2>
          <h3 className="text-2xl md:text-4xl font-extrabold text-center text-[#1A1A1A]">Confiança dos Líderes da Indústria</h3>
          <div className="w-16 h-1.5 bg-[#CE2029] mt-6"></div>
          <p className="mt-6 text-gray-500 text-center max-w-2xl text-sm md:text-base">
            Atendemos empresas que exigem o mais alto padrão de segurança e conformidade técnica no Brasil.
          </p>
        </div>
      </div>

      <div className="relative flex items-center bg-white py-8 md:py-12">
        {/* Esmaecimento nas bordas para foco central */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee">
          {CLIENTS.map((client, idx) => (
            <div 
              key={`${client.name}-${idx}`} 
              className="mx-8 md:mx-16 transition-all duration-500 filter grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transform hover:scale-110 flex items-center justify-center"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-10 md:h-16 w-auto object-contain max-w-[120px] md:max-w-[180px]" 
              />
            </div>
          ))}
          {/* Repetir para o loop ser perfeito */}
          {CLIENTS.map((client, idx) => (
            <div 
              key={`repeat-${client.name}-${idx}`} 
              className="mx-8 md:mx-16 transition-all duration-500 filter grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transform hover:scale-110 flex items-center justify-center"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-10 md:h-16 w-auto object-contain max-w-[120px] md:max-w-[180px]" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
