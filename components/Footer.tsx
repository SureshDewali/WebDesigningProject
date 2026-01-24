import React from 'react';
import { Flower2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#0A192F] text-stone-200 pt-20 pb-10 relative z-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16 border-b border-white/10 pb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <Flower2 className="w-8 h-8 text-yoga-gold" />
              <span className="font-serif text-2xl font-bold text-white tracking-wide group-hover:text-yoga-gold transition-colors">
                Hamro<span className="text-yoga-gold">Yoga</span>
              </span>
            </Link>
            <p className="max-w-sm mb-6 leading-relaxed text-stone-300">
              Dedicated to spreading the authentic ancient wisdom of Yoga to the modern world. Join us in the journey of self-discovery.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-yoga-gold transition-colors">About Yoga</Link></li>
              <li><Link to="/types" className="hover:text-yoga-gold transition-colors">Types of Yoga</Link></li>
              <li><Link to="/asanas" className="hover:text-yoga-gold transition-colors">Asanas</Link></li>
              <li><Link to="/geeta" className="hover:text-yoga-gold transition-colors">Bhagwat Geeta</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-400">
          <p>&copy; {new Date().getFullYear()} HamroYoga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};