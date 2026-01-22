import React from 'react';
import { sanskars } from '../data';
import { SectionTitle } from '../components/Shared';
import { motion } from 'framer-motion';

export const Sanskars = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="The 16 Sanskars" subtitle="Sacred rites of passage in Vedic tradition" />

        <div className="relative border-l-4 border-yoga-light ml-4 md:ml-10 pl-8 md:pl-12 space-y-12">
          {sanskars.map((sanskar, idx) => (
            <motion.div
              key={sanskar.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[54px] md:-left-[70px] top-0 bg-white border-4 border-yoga-light w-12 h-12 rounded-full flex items-center justify-center font-bold text-yoga-dark">
                {sanskar.id}
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-yoga-dark">{sanskar.name}</h3>
                  <span className="text-yoga-accent font-medium italic">{sanskar.meaning}</span>
                </div>
                <p className="text-stone-600">{sanskar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};