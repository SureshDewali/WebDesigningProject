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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 group">
          <Flower2 className={`w-8 h-8 transition-colors ${scrolled ? 'text-yoga-dark' : 'text-white'}`} />
          <span className={`font-serif text-2xl font-bold tracking-wide transition-colors ${scrolled ? 'text-yoga-dark' : 'text-white'}`}>
            Hamro<span className="text-yoga-accent">Yoga</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path}
              className={({ isActive }) => `
                text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:text-yoga-accent relative group
                ${isActive 
                  ? 'text-yoga-accent' 
                  : (scrolled ? 'text-stone-700' : 'text-stone-100')}
              `}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yoga-accent transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-stone-800' : 'text-white'}`}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-yoga-dark absolute top-full left-0 w-full overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path} 
                  to={link.path}
                  className={({ isActive }) => `
                    text-lg font-medium text-white hover:text-yoga-accent transition-colors
                    ${isActive ? 'text-yoga-accent' : ''}
                  `}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};