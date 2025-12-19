// Fix: Import React to resolve the 'Cannot find namespace React' error when using React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface Client {
  name: string;
  logo: string;
}
