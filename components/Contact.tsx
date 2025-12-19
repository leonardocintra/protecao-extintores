
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-[#CE2029]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-[#CE2029]/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#CE2029] font-bold text-sm tracking-widest uppercase mb-4">Fale Conosco</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6">Pronto para proteger seu patrimônio?</h3>
          <p className="text-gray-600 text-lg">
            Solicite um orçamento sem compromisso ou agende uma visita técnica com nossos engenheiros.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 p-12 rounded-sm text-center animate-fadeIn">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h4 className="text-2xl font-extrabold text-green-800 mb-2">Mensagem Enviada!</h4>
            <p className="text-green-700">Nossa equipe entrará em contato com você em menos de 24 horas úteis.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Nome Completo</label>
                <input 
                  required
                  type="text" 
                  placeholder="Ex: João Silva" 
                  className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-sm focus:border-[#CE2029] focus:outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">E-mail Corporativo</label>
                <input 
                  required
                  type="email" 
                  placeholder="Ex: joao@empresa.com.br" 
                  className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-sm focus:border-[#CE2029] focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Telefone / WhatsApp</label>
              <input 
                required
                type="tel" 
                placeholder="(00) 00000-0000" 
                className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-sm focus:border-[#CE2029] focus:outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Assunto / Interesse</label>
              <select className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-sm focus:border-[#CE2029] focus:outline-none transition-all appearance-none">
                <option>Projetos de Engenharia e AVCB</option>
                <option>Manutenção de Extintores</option>
                <option>Sistemas de Hidrantes</option>
                <option>Treinamento de Brigada</option>
                <option>Outros Equipamentos</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Como podemos ajudar?</label>
              <textarea 
                required
                rows={5} 
                placeholder="Descreva brevemente sua necessidade..." 
                className="w-full bg-gray-50 border-2 border-gray-100 p-4 rounded-sm focus:border-[#CE2029] focus:outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#CE2029] text-white p-5 rounded-sm font-bold text-lg hover:bg-red-700 transition-all shadow-xl flex items-center justify-center gap-3 group"
            >
              ENVIAR SOLICITAÇÃO
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <p className="text-center text-gray-400 text-xs mt-4">
              Ao enviar, você concorda com nossos termos de privacidade e proteção de dados.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
