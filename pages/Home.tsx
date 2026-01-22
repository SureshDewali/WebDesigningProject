import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Sun, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/Shared';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/yogahero/1920/1080" 
            alt="Yoga background" 
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="block text-yoga-accent font-medium tracking-[0.2em] mb-4 uppercase"
          >
            Discover Inner Peace
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight"
          >
            Welcome to <br/> Hamro<span className="text-yoga-accent">Yoga</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-2xl text-stone-200 max-w-2xl mx-auto mb-10 font-light"
          >
            Discover the Ancient Wisdom of Yoga for Mind, Body & Soul. A journey from the self, through the self, to the self.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/about" className="px-8 py-4 bg-yoga-accent hover:bg-white hover:text-yoga-dark text-white rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
              Start Journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/asanas" className="px-8 py-4 bg-transparent border border-white text-white hover:bg-white/10 rounded-full font-semibold transition-all duration-300">
              Explore Asanas
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Intro Cards */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <SectionTitle title="The Essence of Yoga" subtitle="Yoga is not just a workout, it is working on yourself." />
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Leaf, title: "Body", desc: "Physical health, flexibility, and strength through Asanas." },
              { icon: Sun, title: "Mind", desc: "Mental clarity, focus, and peace through Dhyana and Dharana." },
              { icon: Heart, title: "Soul", desc: "Spiritual awakening and connection through Bhakti and meditation." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-10 rounded-2xl shadow-xl shadow-stone-200/50 hover:shadow-2xl transition-all duration-300 text-center group border-b-4 border-transparent hover:border-yoga-accent"
              >
                <div className="w-16 h-16 bg-yoga-light text-yoga-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yoga-dark group-hover:text-white transition-colors">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Parallax */}
      <section className="py-32 bg-fixed bg-cover bg-center relative" style={{ backgroundImage: 'url(https://picsum.photos/seed/meditation/1920/800)' }}>
        <div className="absolute inset-0 bg-yoga-dark/80" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 italic">"Yoga is the journey of the self, through the self, to the self."</h2>
             <p className="text-yoga-accent text-xl font-medium">- The Bhagavad Gita</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};