
import React, { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Clientes', href: '#clients' },
    { name: 'Localização', href: '#location' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Flame className={`w-8 h-8 ${scrolled ? 'text-[#CE2029]' : 'text-white'}`} fill="currentColor" />
            <span className={`text-xl font-extrabold tracking-tighter ${
              scrolled ? 'text-[#1A1A1A]' : 'text-white'
            }`}>
              PROTEÇÃO <span className="text-[#CE2029]">EXTINTORES</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold hover:text-[#CE2029] transition-colors ${
                  scrolled ? 'text-[#1A1A1A]' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-[#CE2029] text-white px-6 py-2.5 rounded-sm font-bold text-sm hover:bg-red-700 transition-all shadow-lg"
            >
              FALE CONOSCO
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled ? 'text-[#1A1A1A]' : 'text-white'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-2xl py-8 flex flex-col items-center space-y-6 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-[#1A1A1A] hover:text-[#CE2029]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-[#CE2029] text-white px-8 py-3 rounded-sm font-bold w-[80%] text-center"
          >
            SOLICITAR VISITA
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
