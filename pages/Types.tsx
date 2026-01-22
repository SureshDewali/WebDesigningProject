import React from 'react';
import { yogaTypes } from '../data';
import { SectionTitle, Card3D } from '../components/Shared';

export const Types = () => {
  return (
    <div className="pt-24 pb-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Types of Yoga" subtitle="Explore the various paths to enlightenment" />
        
        <div className="grid md:grid-cols-2 gap-8">
          {yogaTypes.map((type, index) => (
            <Card3D key={index} className="h-full">
               <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col">
                 <div className="h-64 overflow-hidden">
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
                         <span key={i} className="px-3 py-1 bg-yoga-light text-yoga-dark text-xs rounded-full font-medium">
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