
import React from 'react';
import { Facebook, Instagram, Linkedin, Flame } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-gray-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <Flame className="w-8 h-8 text-[#CE2029]" fill="currentColor" />
              <span className="text-white text-2xl font-extrabold tracking-tighter">
                PROTEÇÃO <span className="text-[#CE2029]">EXTINTORES</span>
              </span>
            </div>
            <p className="max-w-md mb-8 leading-relaxed text-sm md:text-base mx-auto md:mx-0">
              Líder em engenharia de segurança contra incêndio. 
              Protegendo vidas e infraestruturas críticas com excelência técnica e inovação desde 2003.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-125"><Facebook size={22} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-125"><Instagram size={22} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-125"><Linkedin size={22} /></a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navegação</h4>
            <ul className="space-y-4 text-xs md:text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Nossos Serviços</a></li>
              <li><a href="#clients" className="hover:text-white transition-colors">Cases de Sucesso</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Onde Estamos</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors font-bold text-[#CE2029]">Orçamento Rápido</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Compliance</h4>
            <ul className="space-y-4 text-xs md:text-sm">
              <li className="flex flex-col">
                <span className="text-gray-500 text-[10px]">DOCUMENTAÇÃO</span>
                <span className="mt-1">CNPJ: 00.000.000/0000-00</span>
              </li>
              <li>Certificação INMETRO Ativa</li>
              <li>Normas NFPA e ABNT</li>
              <li>Credenciamento Bombeiros SP</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest font-medium uppercase text-center space-y-4 md:space-y-0">
          <p className="opacity-60">© 2025 Proteção Extintores. Todos os direitos reservados.</p>
          <div className="h-px w-8 bg-gray-800 md:hidden"></div>
          <p className="opacity-80">
            Desenvolvido com excelência por <a href="https://leonardocintra.com.br" className="text-white font-bold hover:text-[#CE2029] transition-colors">Leonardo Cintra</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
