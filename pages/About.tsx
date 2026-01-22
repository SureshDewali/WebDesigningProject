import React from 'react';
import { SectionTitle } from '../components/Shared';

export const About = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
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
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px]" 
            />
          </div>
        </div>

        <div className="bg-yoga-light/50 rounded-3xl p-10 lg:p-16">
          <h3 className="text-3xl font-serif font-bold mb-10 text-center text-yoga-dark">Why Yoga Today?</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-yoga-accent text-white flex items-center justify-center">1</span>
                Holistic Health
              </h4>
              <p className="text-stone-600">Yoga is not a religion; it is a way of living that aims towards a healthy mind in a healthy body.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-yoga-accent text-white flex items-center justify-center">2</span>
                Stress Relief
              </h4>
              <p className="text-stone-600">In our fast-paced modern life, Yoga provides the tools to manage stress and anxiety effectively.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-yoga-accent text-white flex items-center justify-center">3</span>
                Inner Peace
              </h4>
              <p className="text-stone-600">Through meditation and breath work, one finds a silent space within, untouched by external chaos.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
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