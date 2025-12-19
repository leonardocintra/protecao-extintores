
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#CE2029] font-bold text-sm tracking-widest uppercase mb-4">Nossa Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6">Soluções de Engenharia de Segurança</h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Oferecemos um ecossistema completo para garantir que sua empresa esteja protegida, 
            em conformidade com as normas vigentes e pronta para qualquer eventualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white group overflow-hidden shadow-lg border border-gray-100 hover:border-[#CE2029]/30 transition-all"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#CE2029]/10 group-hover:bg-[#CE2029]/0 transition-colors"></div>
                <div className="absolute -bottom-6 left-6 bg-[#CE2029] p-4 shadow-xl">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 pt-10">
                <h4 className="text-xl font-extrabold text-[#1A1A1A] mb-4 leading-tight group-hover:text-[#CE2029] transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6">
                  <a href="#contact" className="text-[#CE2029] font-bold text-xs uppercase tracking-wider flex items-center gap-1 hover:gap-3 transition-all">
                    Saber mais →
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
