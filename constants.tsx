
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
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Manutenção e Venda de Extintores',
    description: 'Equipamentos certificados pelo INMETRO e recarga técnica periódica para garantir prontidão total em emergências.',
    icon: <Flame className="w-8 h-8 text-white" />,
    imageUrl: 'https://images.unsplash.com/photo-1599708153386-62bf3f035a72?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Instalação de Sistemas de Hidrantes',
    description: 'Instalação e reparo de redes de hidrantes, bombas de incêndio e tanques de reserva seguindo normas técnicas rigorosas.',
    icon: <Droplet className="w-8 h-8 text-white" />,
    imageUrl: 'https://images.unsplash.com/photo-1621235654519-75691062b8b9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Equipamentos de Combate a Incêndio',
    description: 'Fornecimento de mangueiras, esguichos, detectores de fumaça e sinalização de emergência de alta durabilidade.',
    icon: <ClipboardCheck className="w-8 h-8 text-white" />,
    imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800'
  }
];

export const CLIENTS: Client[] = [
  { name: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Toyota_Logo.svg' },
  { name: 'Nestlé', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Nestl%C3%A9_text_logo.svg' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  // Duplicate for carousel effect
  { name: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Toyota_Logo.svg' },
  { name: 'Nestlé', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Nestl%C3%A9_text_logo.svg' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
];
