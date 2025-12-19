
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[#CE2029] font-bold text-sm tracking-widest uppercase mb-4">Onde Estamos</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-8">Nossa Base de Operações</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#CE2029] p-3 rounded-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Endereço Principal</h4>
                  <p className="text-gray-400">Endereço a ser fornecido posteriormente, São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#CE2029] p-3 rounded-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Telefone / WhatsApp</h4>
                  <p className="text-gray-400">+55 (11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#CE2029] p-3 rounded-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">E-mail Comercial</h4>
                  <p className="text-gray-400">comercial@protecaoextintores.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#CE2029] p-3 rounded-sm">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Horário de Atendimento</h4>
                  <p className="text-gray-400">Segunda à Sexta: 08:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] w-full bg-gray-800 rounded-sm relative overflow-hidden group">
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 group-hover:bg-gray-800 transition-colors">
              <div className="text-center">
                <MapPin size={64} className="mx-auto text-[#CE2029] mb-4 opacity-50" />
                <p className="text-gray-500 font-bold uppercase tracking-widest">Mapa Interativo Indisponível</p>
                <p className="text-gray-600 text-sm mt-2">O mapa será integrado em breve</p>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-6 border border-white/10 rounded-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-[#CE2029] mb-2">Unidade Central</p>
              <p className="text-sm">Oferecemos suporte em toda a região metropolitana com equipes móveis equipadas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
