
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#CE2029] font-bold text-xs md:text-sm tracking-widest uppercase mb-4">Nossa Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6">Soluções de Engenharia</h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            Oferecemos um ecossistema completo para garantir que sua empresa esteja protegida e em total conformidade com as normas vigentes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white group overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 hover:border-[#CE2029]/20 transition-all flex flex-col h-full"
            >
              <div className="h-44 md:h-48 overflow-hidden relative shrink-0">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute -bottom-5 left-6 bg-[#CE2029] p-3 md:p-4 shadow-xl z-10">
                  {service.icon}
                </div>
              </div>
              <div className="p-6 md:p-8 pt-8 md:pt-10 flex flex-col flex-grow">
                <h4 className="text-lg md:text-xl font-extrabold text-[#1A1A1A] mb-4 leading-tight group-hover:text-[#CE2029] transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <a href="#contact" className="text-[#CE2029] font-bold text-[10px] md:text-xs uppercase tracking-wider flex items-center gap-1 hover:gap-3 transition-all group-hover:translate-x-2">
                    Ver Detalhes do Serviço →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
