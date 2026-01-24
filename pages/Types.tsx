import React from 'react';
import { yogaTypes } from '../data';
import { SectionTitle, Card3D } from '../components/Shared';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const Types = () => {
  // Floating particle animation
  const float = {
    y: [0, -20, 0],
    opacity: [0.2, 0.5, 0.2],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden bg-[#F0F5F0]">
      
      {/* --- PREMIUM BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         {/* Sage Gradient */}
         <div className="absolute inset-0 bg-gradient-to-br from-[#f1f8e9] via-[#f7fcf9] to-[#e8f5e9]" />
         
         {/* Botanical Texture Overlay */}
         <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 30 C 10 50 50 50 30 30 Z\' fill=\'%232C3E33\'/%3E%3C/svg%3E")' }} />

         {/* Golden Sparkles */}
         <motion.div animate={float} className="absolute top-20 right-20 opacity-30">
            <Sparkles className="w-16 h-16 text-yoga-gold" />
         </motion.div>
         <motion.div animate={float} transition={{ delay: 1.5 }} className="absolute bottom-20 left-10 opacity-30">
            <Sparkles className="w-10 h-10 text-yoga-gold" />
         </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Types of Yoga" subtitle="Explore the various paths to enlightenment" />
        
        <div className="grid md:grid-cols-2 gap-8">
          {yogaTypes.map((type, index) => (
            <Card3D key={index} className="h-full">
               <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden h-full flex flex-col border border-white shadow-xl hover:shadow-2xl transition-shadow">
                 <div className="h-64 overflow-hidden relative">
                   <div className="absolute inset-0 bg-yoga-gold/10 z-10 mix-blend-overlay"></div>
                   <img 
                     src={type.image} 
                     alt={type.title} 
                     className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                   />
                 </div>
                 <div className="p-8 flex-1 flex flex-col">
                   <h3 className="text-2xl font-serif font-bold text-yoga-dark mb-4">{type.title}</h3>
                   <p className="text-stone-600 mb-6 flex-1">{type.description}</p>
                   <div>
                     <h4 className="text-sm font-bold uppercase tracking-wider text-yoga-accent mb-3">Key Benefits</h4>
                     <div className="flex flex-wrap gap-2">
                       {type.benefits.map((benefit, i) => (
                         <span key={i} className="px-3 py-1 bg-[#F0F5F0] text-emerald-800 text-xs rounded-full font-medium border border-emerald-100">
                           {benefit}
                         </span>
                       ))}
                     </div>
                   </div>
                 </div>
               </div>
            </Card3D>
          ))}
        </div>
      </div>
    </div>
  );
};