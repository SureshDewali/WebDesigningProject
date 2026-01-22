import React from 'react';
import { SectionTitle } from '../components/Shared';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-24 pb-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Get in Touch" subtitle="Start your journey with us" />

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl">
          <div className="p-10 lg:p-16 bg-yoga-dark text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6">Contact Information</h3>
              <p className="text-stone-300 mb-10">Have questions about yoga? We are here to help you understand the path better.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400">Email us</p>
                    <p className="font-medium">namaste@hamroyoga.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400">Call us</p>
                    <p className="font-medium">+977 9800000000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400">Visit us</p>
                    <p className="font-medium">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <p className="text-sm text-stone-400 mb-4">Follow our journey</p>
               <div className="flex gap-4">
                 {/* Social Placeholders */}
                 <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-yoga-accent transition-colors cursor-pointer"></div>
                 <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-yoga-accent transition-colors cursor-pointer"></div>
                 <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-yoga-accent transition-colors cursor-pointer"></div>
               </div>
            </div>
          </div>

          <div className="p-10 lg:p-16">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-yoga-accent focus:ring-1 focus:ring-yoga-accent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-yoga-accent focus:ring-1 focus:ring-yoga-accent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-yoga-accent focus:ring-1 focus:ring-yoga-accent outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-yoga-accent focus:ring-1 focus:ring-yoga-accent outline-none transition-all" placeholder="Tell us about your yoga journey..."></textarea>
              </div>

              <button className="w-full py-4 bg-yoga-dark hover:bg-yoga-accent text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};