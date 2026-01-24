import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Flower2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change and prevent body scroll when open
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Types', path: '/types' },
    { label: 'Limbs', path: '/limbs' },
    { label: 'Asanas', path: '/asanas' },
    { label: 'Sanskars', path: '/sanskars' },
    { label: 'Geeta', path: '/geeta' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#0B2219]/95 backdrop-blur-md shadow-xl py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2 group z-50">
            <Flower2 className={`w-8 h-8 transition-colors text-yoga-gold`} />
            <span className={`font-serif text-2xl font-bold tracking-wide transition-colors text-[#F3F4F1]`}>
              Hamro<span className="text-yoga-gold">Yoga</span>
            </span>
          </NavLink>

          {/* Desktop Nav - Luxury Style */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({ isActive }) => `
                  font-serif text-lg font-bold tracking-wide transition-all duration-300 relative group py-2
                  ${isActive ? 'text-yoga-gold' : 'text-[#F3F4F1] hover:text-yoga-gold'}
                `}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yoga-gold transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-yoga-gold hover:text-white transition-colors z-50"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* High-End Mobile Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - Click to close */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsOpen(false)}
               className="fixed inset-0 z-[55] bg-black/20 backdrop-blur-[2px]"
            />
            
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[75%] sm:w-[60%] md:w-[45%] z-[60] bg-[#0A192F]/90 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center border-l border-yoga-gold/20"
            >
              {/* Background Texture */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23D4AF37\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 p-2 text-yoga-gold hover:text-white transition-colors border border-yoga-gold/30 rounded-full hover:bg-yoga-gold/10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col gap-8 text-center relative z-10 w-full">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <NavLink 
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => `
                        font-serif text-2xl font-bold tracking-widest transition-all duration-300 block
                        ${isActive ? 'text-yoga-gold scale-110' : 'text-stone-300 hover:text-yoga-gold hover:scale-105'}
                      `}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="absolute bottom-12 left-0 w-full text-center">
                 <Flower2 className="w-6 h-6 text-yoga-gold mx-auto mb-2 opacity-50" />
                 <span className="text-yoga-gold/40 text-xs font-serif tracking-[0.3em] uppercase">Hamro Yoga</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};