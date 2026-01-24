import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Sun, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/Shared';

export const Home = () => {
  // Pulse animation for background glow
  const pulseGlow = {
    scale: [1, 1.05, 1],
    opacity: [0.1, 0.2, 0.1],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const }
  };

  return (
    <div className="overflow-hidden bg-[#0B2219] text-[#F3F4F1]">
      
      {/* --- GLOBAL BACKGROUND TEXTURE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-gradient-to-b from-[#0B2219] via-[#0f2e22] to-[#0B2219]" />
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23D4AF37\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
         <motion.div 
            animate={pulseGlow}
            className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-yoga-gold blur-[150px]"
         />
         <motion.div 
            animate={pulseGlow}
            className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-600 blur-[150px]"
         />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden z-10">
        <div 
          className="absolute inset-0 z-0"
          style={{
             backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(11, 34, 25, 0.8)), url('https://lh3.googleusercontent.com/d/1cfD_xexwXffTUH7HrcYJGrrO3UVB2NdY')`,
             backgroundSize: 'cover',
             // Adjusted to 95% to try and crop the extreme bottom edge/watermark while keeping subject visible
             backgroundPosition: 'center 95%',
             backgroundAttachment: 'fixed',
             backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold mb-8 leading-tight text-[#F3F4F1] drop-shadow-2xl"
          >
            Hamro<span className="text-yoga-gold">Yoga</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-2xl text-stone-100 max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-lg"
          >
            Discover the Ancient Wisdom of Yoga for Mind, Body & Soul. A journey from the self, through the self, to the self.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/about" className="px-10 py-4 bg-yoga-gold hover:bg-white hover:text-[#0B2219] text-[#0B2219] rounded-full font-serif font-bold transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              Start Journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/asanas" className="px-10 py-4 bg-white/10 border border-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-[#0B2219] rounded-full font-serif font-bold transition-all duration-300">
              Explore Asanas
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-yoga-gold/70"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* --- ESSENCE CARDS SECTION --- */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <SectionTitle title="The Essence of Yoga" subtitle="Yoga is not just a workout, it is working on yourself." light={true} />
          
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
                className="bg-[#0f2e22]/50 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/10 hover:border-yoga-gold/50 transition-all duration-500 text-center group hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-[#0B2219] border border-white/10 text-yoga-gold rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-yoga-gold group-hover:text-[#0B2219] transition-all duration-500 shadow-lg">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-[#F3F4F1]">{item.title}</h3>
                <p className="text-stone-300 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- QUOTE PARALLAX SECTION --- */}
      <section className="py-40 bg-fixed bg-cover bg-center relative z-10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1599447421405-0c325d26d77e?q=80&w=1920&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-[#0B2219]/80 backdrop-grayscale-[0.5]" />
        {/* Soft gradient edges for the parallax section */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0B2219] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0B2219] to-transparent"></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto border-y border-yoga-gold/30 py-12"
          >
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 italic leading-snug">"Yoga is the journey of the self, through the self, to the self."</h2>
             <p className="text-yoga-gold text-xl font-bold tracking-widest uppercase font-serif">- The Bhagavad Gita</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};