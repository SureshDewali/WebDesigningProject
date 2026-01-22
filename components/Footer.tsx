import React from 'react';
import { Flower2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-stone-800 pb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Flower2 className="w-8 h-8 text-white" />
              <span className="font-serif text-2xl font-bold text-white tracking-wide">
                Hamro<span className="text-yoga-accent">Yoga</span>
              </span>
            </Link>
            <p className="max-w-sm mb-6 leading-relaxed">
              Dedicated to spreading the authentic ancient wisdom of Yoga to the modern world. Join us in the journey of self-discovery.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-yoga-accent transition-colors">About Yoga</Link></li>
              <li><Link to="/types" className="hover:text-yoga-accent transition-colors">Types of Yoga</Link></li>
              <li><Link to="/asanas" className="hover:text-yoga-accent transition-colors">Asanas</Link></li>
              <li><Link to="/geeta" className="hover:text-yoga-accent transition-colors">Bhagwat Geeta</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Knowledge</h4>
            <ul className="space-y-4">
              <li><Link to="/limbs" className="hover:text-yoga-accent transition-colors">8 Limbs</Link></li>
              <li><Link to="/sanskars" className="hover:text-yoga-accent transition-colors">16 Sanskars</Link></li>
              <li><Link to="/contact" className="hover:text-yoga-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} HamroYoga. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for inner peace.
          </div>
        </div>
      </div>
    </footer>
  );
};