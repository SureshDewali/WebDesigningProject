import React from 'react';
import { SectionTitle } from '../components/Shared';
import { geetaQuotes } from '../data';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const Geeta = () => {
  return (
    <div className="min-h-screen bg-yoga-dark text-white pt-24 pb-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Bhagwat Geeta Insights" subtitle="Timeless wisdom for the modern soul" light={true} />

        <div className="grid gap-12 max-w-4xl mx-auto">
          {geetaQuotes.map((q, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-colors duration-500"
            >
              <Quote className="absolute top-8 left-8 text-yoga-gold/20 w-24 h-24 transform rotate-180" />
              
              <div className="relative z-10 text-center">
                <p className="text-xl md:text-2xl font-serif text-yoga-gold mb-6 italic leading-relaxed">
                  "{q.sanskrit}"
                </p>
                <p className="text-lg md:text-xl text-stone-200 mb-8 font-light">
                  {q.translation}
                </p>
                <div className="inline-block px-6 py-2 border border-white/20 rounded-full text-sm text-stone-400 tracking-wide uppercase">
                  {q.context}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-stone-400 max-w-2xl mx-auto">
            The Bhagavad Gita is not just a religious text, but a practical guide to life. It teaches us how to live with equanimity, perform our duties without attachment, and find peace amidst chaos.
          </p>
        </div>
      </div>
    </div>
  );
};