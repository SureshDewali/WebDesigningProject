import React from 'react';
import { SectionTitle } from '../components/Shared';
import { motion } from 'framer-motion';
import { Sparkles, Leaf } from 'lucide-react';

export const About = () => {
  // Floating particle animation
  const float = {
    y: [0, -15, 0],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const }
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
         <motion.div animate={float} className="absolute top-32 left-10 opacity-30">
            <Sparkles className="w-12 h-12 text-yoga-gold" />
         </motion.div>
         <motion.div animate={float} transition={{ delay: 1 }} className="absolute bottom-40 right-10 opacity-30">
            <Sparkles className="w-16 h-16 text-yoga-gold" />
         </motion.div>
         <motion.div animate={float} transition={{ delay: 2 }} className="absolute top-1/2 left-20 opacity-20">
            <Leaf className="w-8 h-8 text-emerald-700" />
         </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="About Yoga" subtitle="A tradition 5,000 years in the making" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-serif font-bold mb-6 text-yoga-dark">Origins & History</h3>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Yoga involves a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. 
              The term "Yoga" is derived from the Sanskrit root 'Yuj', meaning "to join" or "to yoke" or "to unite". 
              As per Yogic scriptures the practice of Yoga leads to the union of individual consciousness with that of the Universal Consciousness, indicating a perfect harmony between the mind and body, Man & Nature.
            </p>
            <p className="text-stone-600 mb-6 leading-relaxed">
              The science of Yoga has its origin thousands of years ago, long before the first religions or belief systems were born. 
              In the yogic lore, Shiva is seen as the first yogi or Adiyogi, and the first Guru or Adi Guru.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://picsum.photos/seed/yoga-history/800/600" 
              alt="Yoga History" 
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px] border-4 border-white/50" 
            />
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-md rounded-3xl p-10 lg:p-16 border border-white shadow-xl">
          <h3 className="text-3xl font-serif font-bold mb-10 text-center text-yoga-dark">Why Yoga Today?</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-emerald-900">
                <span className="w-8 h-8 rounded-full bg-yoga-accent text-white flex items-center justify-center">1</span>
                Holistic Health
              </h4>
              <p className="text-stone-600">Yoga is not a religion; it is a way of living that aims towards a healthy mind in a healthy body.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-emerald-900">
                 <span className="w-8 h-8 rounded-full bg-yoga-accent text-white flex items-center justify-center">2</span>
                Stress Relief
              </h4>
              <p className="text-stone-600">In our fast-paced modern life, Yoga provides the tools to manage stress and anxiety effectively.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-emerald-900">
                 <span className="w-8 h-8 rounded-full bg-yoga-accent text-white flex items-center justify-center">3</span>
                Inner Peace
              </h4>
              <p className="text-stone-600">Through meditation and breath work, one finds a silent space within, untouched by external chaos.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3 text-emerald-900">
                 <span className="w-8 h-8 rounded-full bg-yoga-accent text-white flex items-center justify-center">4</span>
                Self Realization
              </h4>
              <p className="text-stone-600">The ultimate goal is to realize one's true potential and nature, moving beyond ego.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};