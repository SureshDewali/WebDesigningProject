import React from 'react';
import { SectionTitle } from '../components/Shared';
import { Mail, MapPin, Phone, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
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
         <div className="absolute inset-0 bg-gradient-to-br from-[#f1f8e9] via-[#f7fcf9] to-[#e8f5e9]" />
         <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 30 C 10 50 50 50 30 30 Z\' fill=\'%232C3E33\'/%3E%3C/svg%3E")' }} />
         <motion.div animate={float} className="absolute top-32 left-10 opacity-30">
            <Sparkles className="w-12 h-12 text-yoga-gold" />
         </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Get in Touch" subtitle="Start your journey with us" />

        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white">
          
          {/* Left Side: Info */}
          <div className="md:w-1/2 p-10 lg:p-14 bg-[#0B2219] text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #D4AF37 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold mb-2 text-yoga-gold">Contact Us</h3>
              <p className="text-stone-300 mb-10 leading-relaxed font-light">
                We are here to guide you on your path. Reach out for classes, workshops, or general inquiries.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yoga-gold/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-yoga-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Email</p>
                    <p className="font-medium text-lg">namaste@hamroyoga.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yoga-gold/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-yoga-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Phone</p>
                    <p className="font-medium text-lg">+977 9800000000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yoga-gold/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-yoga-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Location</p>
                    <p className="font-medium text-lg">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12">
               <div className="h-1 w-20 bg-yoga-gold rounded-full"></div>
            </div>
          </div>

          {/* Right Side: Direct Actions (Static Friendly) */}
          <div className="md:w-1/2 p-10 lg:p-14 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-serif font-bold text-[#0B2219] mb-4">How can we help?</h3>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Have questions or want to join a class? Reach out directly and we will get back to you immediately.
            </p>

            <div className="w-full space-y-4">
              <a 
                href="mailto:namaste@hamroyoga.com"
                className="block w-full py-4 bg-[#0B2219] hover:bg-[#1a3c2f] text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                Email Us
              </a>

              <a 
                href="https://wa.me/9779800000000"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                WhatsApp Us
              </a>
            </div>

            <p className="mt-8 text-xs text-stone-500 italic">
              *We usually respond within 24 hours.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};