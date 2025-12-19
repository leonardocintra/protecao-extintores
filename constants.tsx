
import React from 'react';
import { Shield, Flame, Droplet, ClipboardCheck } from 'lucide-react';
import { Service, Client } from './types';

export const COLORS = {
  primary: '#CE2029',
  charcoal: '#1A1A1A',
  lightGray: '#F9FAFB',
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Engenharia e Projetos de Segurança',
    description: 'Elaboração de projetos técnicos de alta complexidade (AVCB/CLCB) com foco em conformidade total e proteção de ativos.',
    icon: <Shield className="w-8 h-8 text-white" />,
    imageUrl: 'https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '2',
    title: 'Manutenção e Venda de Extintores',
    description: 'Equipamentos certificados pelo INMETRO e recarga técnica periódica para garantir prontidão total em emergências.',
    icon: <Flame className="w-8 h-8 text-white" />,
    imageUrl: 'https://images.unsplash.com/photo-1600950382755-ca53d3d3422d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '3',
    title: 'Instalação de Sistemas de Hidrantes',
    description: 'Instalação e reparo de redes de hidrantes, bombas de incêndio e tanques de reserva seguindo normas técnicas rigorosas.',
    icon: <Droplet className="w-8 h-8 text-white" />,
    imageUrl: 'https://images.unsplash.com/photo-1735321626737-f80d9d2076c9?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '4',
    title: 'Equipamentos de Combate a Incêndio',
    description: 'Fornecimento de mangueiras, esguichos, detectores de fumaça e sinalização de emergência de alta durabilidade.',
    icon: <ClipboardCheck className="w-8 h-8 text-white" />,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661490251594-1c1a64e63cb7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export const CLIENTS: Client[] = [
  { name: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/2560px-Toyota_carlogo.svg.png' },
  { name: 'Nestlé', logo: 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/1f/Nestl%C3%A9_logo.svg/2560px-Nestl%C3%A9_logo.svg.png' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Samsung_Black_icon.svg/2560px-Samsung_Black_icon.svg.png' },
  // Duplicate for carousel effect
  { name: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/2560px-Toyota_carlogo.svg.png' },
  { name: 'Nestlé', logo: 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/1f/Nestl%C3%A9_logo.svg/2560px-Nestl%C3%A9_logo.svg.png' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Samsung_Black_icon.svg/2560px-Samsung_Black_icon.svg.png' },
];
