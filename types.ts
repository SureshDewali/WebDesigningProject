export interface NavItem {
  label: string;
  path: string;
}

export interface YogaType {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface Limb {
  sanskrit: string;
  english: string;
  description: string;
  benefit: string;
  icon: string;
}

export interface Asana {
  name: string;
  sanskritName: string;
  image: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  benefits: string[];
  steps: string[];
}

export interface Sanskar {
  id: number;
  name: string;
  meaning: string;
  description: string;
}

export interface GeetaQuote {
  sanskrit: string;
  translation: string;
  context: string;
}