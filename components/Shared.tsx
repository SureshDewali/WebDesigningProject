import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export const SectionTitle = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-5xl font-serif font-bold mb-4 ${light ? 'text-white' : 'text-yoga-dark'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg md:text-xl max-w-2xl mx-auto ${light ? 'text-stone-200' : 'text-stone-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 100 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className={`h-1 mx-auto mt-6 rounded-full ${light ? 'bg-white' : 'bg-yoga-accent'}`} 
    />
  </div>
);

export const IconRenderer = ({ name, className }: { name: string; className?: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[name] || Icons.Activity;
  return <Icon className={className} />;
};

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export const Card3D: React.FC<Card3DProps> = ({ children, className = "" }) => {
  return (
    <div className={`group perspective-1000 ${className}`}>
      <div className="relative w-full h-full transition-all duration-500 transform preserve-3d group-hover:rotate-y-2 group-hover:scale-105 shadow-lg rounded-xl">
        {children}
      </div>
    </div>
  );
};
