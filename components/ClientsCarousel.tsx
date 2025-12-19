
import React from 'react';
import { CLIENTS } from '../constants';

const ClientsCarousel: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h3 className="text-2xl font-extrabold text-center text-[#1A1A1A]">Confiança dos Líderes da Indústria</h3>
        <div className="w-20 h-1 bg-[#CE2029] mx-auto mt-4"></div>
      </div>

      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap items-center py-4">
          {CLIENTS.map((client, idx) => (
            <div key={`${client.name}-${idx}`} className="mx-12 transition-all duration-300 filter grayscale hover:grayscale-0 opacity-40 hover:opacity-100">
              <img src={client.logo} alt={client.name} className="h-12 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
