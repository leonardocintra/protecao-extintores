
import React from 'react';
import { Facebook, Instagram, Linkedin, Flame } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Flame className="w-8 h-8 text-[#CE2029]" fill="currentColor" />
              <span className="text-white text-2xl font-extrabold tracking-tighter">
                PROTEÇÃO <span className="text-[#CE2029]">EXTINTORES</span>
              </span>
            </div>
            <p className="max-w-md mb-6 leading-relaxed">
              Especialistas em engenharia de segurança contra incêndio. 
              Protegendo vidas e patrimônios industriais com excelência técnica e equipamentos de ponta desde 2003.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Links Rápidos</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-[#CE2029] transition-colors">Serviços</a></li>
              <li><a href="#clients" className="hover:text-[#CE2029] transition-colors">Nossos Clientes</a></li>
              <li><a href="#location" className="hover:text-[#CE2029] transition-colors">Localização</a></li>
              <li><a href="#contact" className="hover:text-[#CE2029] transition-colors">Solicitar Orçamento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Legal & Compliance</h4>
            <ul className="space-y-4 text-sm">
              <li>CNPJ: [Inserir CNPJ Aqui]</li>
              <li>Certificação INMETRO</li>
              <li>Credenciamento Bombeiros</li>
              <li>Políticas de Privacidade</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs tracking-widest font-medium uppercase">
          <p>© 2023 Proteção Extintores. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0">
            Desenvolvido por <span className="text-white font-bold">Leonardo Cintra</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
