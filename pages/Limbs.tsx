import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Shield, Scale, Zap, Leaf, 
  Droplets, Smile, Flame, BookOpen, Sunrise, 
  Activity, Wind, EyeOff, Target, Brain, Sun,
  CheckCircle2, Dot
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const pulseBadge = {
  scale: [1, 1.05, 1],
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
};

interface LimbBadgeProps {
  number: string;
  colorClass: string;
}

const LimbBadge: React.FC<LimbBadgeProps> = ({ number, colorClass }) => (
  <motion.div 
    animate={pulseBadge}
    className={`w-12 h-12 md:w-16 md:h-16 ${colorClass} rounded-full flex items-center justify-center shadow-lg mb-4 md:mb-0 shrink-0`}
  >
    <span className="text-xl md:text-2xl font-serif font-bold text-white">{number}</span>
  </motion.div>
);

export const Limbs = () => {
  return (
    <div className="pt-28 pb-20 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-emerald-700 via-teal-600 to-amber-500 bg-clip-text text-transparent pb-2 leading-tight"
          >
            The Eight Limbs of Yoga <br/>
            <span className="text-3xl md:text-4xl">(Ashtanga Yoga)</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 mx-auto rounded-full mb-8"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-stone-600 font-medium"
          >
            A complete path for ethical living, self-discipline, and spiritual realization
          </motion.p>
        </div>

        {/* --- 1. YAMA SECTION --- */}
        <section className="mb-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-emerald-50 to-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-emerald-100/50"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 border-b border-emerald-100 pb-8">
              <LimbBadge number="1" colorClass="bg-emerald-800" />
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-3">Yama – Ethical Disciplines</h2>
                <p className="text-lg text-emerald-800/80 max-w-2xl leading-relaxed">
                  Yamas are the principles that teach us how to treat others and the world around us. 
                  The five Yamas are:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Ahimsa */}
              <motion.div variants={fadeInUp} className="bg-emerald-100/30 p-8 rounded-2xl hover:bg-emerald-100/60 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md border border-emerald-100">
                <div className="flex items-center gap-3 mb-4 text-emerald-800">
                  <Heart className="w-6 h-6 fill-emerald-800/10" />
                  <h3 className="text-xl font-bold">Ahimsa</h3>
                </div>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">Non-violence</p>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  Ahimsa means not physically harming others, ourselves, or nature; not thinking negative thoughts about ourselves or others.
                </p>
                <div className="bg-white/60 p-3 rounded-lg">
                  <p className="text-xs font-bold text-emerald-800 uppercase mb-2">It includes:</p>
                  <ul className="space-y-1">
                    {['Ahimsa in Asana', 'Ahimsa in Diet', 'Ahimsa in Thoughts'].map((item, i) => (
                      <li key={i} className="text-xs text-stone-600 flex items-center gap-2">
                        <Dot className="w-3 h-3 text-emerald-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Satya */}
              <motion.div variants={fadeInUp} className="bg-emerald-100/30 p-8 rounded-2xl hover:bg-emerald-100/60 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md border border-emerald-100">
                <div className="flex items-center gap-3 mb-4 text-emerald-800">
                  <Shield className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Satya</h3>
                </div>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">Truthfulness</p>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  Satya guides us to think, speak, and act with integrity. It is seeing and communicating things as they truly are.
                </p>
                <p className="text-stone-600 text-xs italic border-l-2 border-emerald-300 pl-3">
                  Speaking the truth is not always easy, but it is noble. When we raise our voice against injustice, we practice Satya.
                </p>
              </motion.div>

              {/* Asteya */}
              <motion.div variants={fadeInUp} className="bg-emerald-100/30 p-8 rounded-2xl hover:bg-emerald-100/60 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md border border-emerald-100">
                <div className="flex items-center gap-3 mb-4 text-emerald-800">
                  <Scale className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Asteya</h3>
                </div>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">Non-stealing</p>
                <p className="text-stone-600 text-sm leading-relaxed mb-2">
                  Asteya is not only about material possessions; it also includes respecting others’ time, energy, and resources.
                </p>
                <p className="text-stone-500 text-xs leading-relaxed">
                  Taking from the Earth without giving back creates imbalance, which yoga teaches us to avoid.
                </p>
              </motion.div>

              {/* Brahmacharya */}
              <motion.div variants={fadeInUp} className="bg-emerald-100/30 p-8 rounded-2xl hover:bg-emerald-100/60 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md border border-emerald-100">
                <div className="flex items-center gap-3 mb-4 text-emerald-800">
                  <Zap className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Brahmacharya</h3>
                </div>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">Right Use of Energy</p>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Brahmacharya emphasizes mindful and responsible use of energy in all aspects of life. It encourages compassion, balance, and equality.
                </p>
              </motion.div>

              {/* Aparigraha */}
              <motion.div variants={fadeInUp} className="bg-emerald-100/30 p-8 rounded-2xl hover:bg-emerald-100/60 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md border border-emerald-100 md:col-span-2 lg:col-span-2">
                <div className="flex items-center gap-3 mb-4 text-emerald-800">
                  <Leaf className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Aparigraha</h3>
                </div>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">Non-possessiveness</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Aparigraha teaches non-attachment and freedom from greed. Excessive attachment to wealth, objects, or people leads to suffering.
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    It encourages keeping desires limited to what is necessary, appropriate to one’s life stage and responsibilities.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* --- 2. NIYAMA SECTION --- */}
        <section className="mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-teal-50 to-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-teal-100/50"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 border-b border-teal-100 pb-8">
              <LimbBadge number="2" colorClass="bg-teal-600" />
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-900 mb-3">Niyama – Personal Observances</h2>
                <p className="text-lg text-teal-800/80 max-w-2xl leading-relaxed">
                  Niyamas guide self-discipline and inner growth. The five Niyamas are:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                { icon: Droplets, title: "Saucha", sub: "Cleanliness", desc: "Saucha includes physical cleanliness as well as purity of thoughts. When the mind is clear and positive, it becomes a channel for higher awareness." },
                { icon: Smile, title: "Santosha", sub: "Contentment", desc: "Santosha is the ability to feel complete in the present moment. In a world that constantly promotes desire, contentment brings inner peace." },
                { icon: Flame, title: "Tapas", sub: "Discipline", desc: "Tapas represents the effort required for growth. The discipline of practice may be challenging, but this inner heat fuels transformation." },
                { icon: BookOpen, title: "Svadhyaya", sub: "Self-knowledge", desc: "As stated in the Bhagavad Gita, yoga is the journey of the self, through the self, to the self. True yoga is a personal inward process." },
                { icon: Sunrise, title: "Ishvarapranidhana", sub: "Surrender", desc: "This limb teaches surrender to a higher reality through one’s personal understanding of the divine. Life becomes guided by wisdom." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className="bg-teal-50/50 p-6 rounded-xl hover:bg-teal-100/50 hover:-translate-y-2 transition-all duration-300 border border-teal-100/50 text-center flex flex-col items-center"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-600 mb-4 shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-teal-900 mb-1">{item.title}</h3>
                  <p className="text-[10px] font-bold text-teal-600 uppercase tracking-widest mb-3">{item.sub}</p>
                  <p className="text-xs text-stone-600 leading-relaxed text-left w-full">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* --- 3. ASANA --- */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               className="order-1"
             >
                <div className="flex items-center gap-4 mb-6">
                  <LimbBadge number="3" colorClass="bg-orange-400" />
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800">Asana <span className="block text-xl font-sans font-normal text-orange-500 mt-1">Yogic Postures</span></h2>
                </div>
                
                <div className="prose prose-lg text-stone-600">
                  <p>
                    Asana is the physical practice of yoga, performed with ease, joy, and mindfulness.
                    It is not meant to be forced or competitive. 
                  </p>
                  <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-400 my-6">
                    <p className="text-stone-700 italic m-0">
                      "When practiced daily with awareness of breath, asana enhances physical and mental well-being."
                    </p>
                  </div>
                </div>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="order-2 h-[400px] rounded-[2rem] overflow-hidden shadow-2xl relative"
             >
                <div className="absolute inset-0 bg-stone-900/10 hover:bg-transparent transition-colors duration-500" />
                <img src="https://picsum.photos/seed/asana-calm/800/800" alt="Calm Yoga Posture" className="w-full h-full object-cover" />
             </motion.div>
          </div>
        </section>

        {/* --- 4. PRANAYAMA --- */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               className="order-1 lg:order-2"
             >
                <div className="flex items-center gap-4 mb-6">
                  <LimbBadge number="4" colorClass="bg-sky-500" />
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800">Pranayama <span className="block text-xl font-sans font-normal text-sky-500 mt-1">Breath Regulation</span></h2>
                </div>
                
                <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                  Pranayama is conscious control of breath, the vehicle of life force (prana).
                </p>

                <div className="bg-sky-50 border border-sky-100 p-6 rounded-2xl mb-8">
                   <h4 className="font-bold text-sky-800 mb-4 flex items-center gap-2 text-sm uppercase tracking-wide"><Wind className="w-4 h-4" /> The Classical Ratio</h4>
                   <div className="flex justify-between items-center text-center">
                      <div>
                        <div className="text-2xl font-bold text-sky-600">1</div>
                        <div className="text-xs uppercase font-medium text-stone-500">Inhale<br/>(Puraka)</div>
                      </div>
                      <div className="h-px bg-sky-200 w-full mx-4"></div>
                      <div>
                        <div className="text-2xl font-bold text-sky-600">4</div>
                        <div className="text-xs uppercase font-medium text-stone-500">Retain<br/>(Kumbhaka)</div>
                      </div>
                      <div className="h-px bg-sky-200 w-full mx-4"></div>
                      <div>
                        <div className="text-2xl font-bold text-sky-600">2</div>
                        <div className="text-xs uppercase font-medium text-stone-500">Exhale<br/>(Rechaka)</div>
                      </div>
                   </div>
                </div>

                <div>
                   <h4 className="font-bold text-stone-800 mb-4 text-sm uppercase">Benefits include:</h4>
                   <div className="grid grid-cols-2 gap-3">
                      {['Calms the mind', 'Improves focus', 'Boosts energy', 'Strengthens immunity', 'Rejuvenates body', 'Enhances creativity'].map((b, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-stone-600">
                           <CheckCircle2 className="w-4 h-4 text-sky-500" /> {b}
                        </div>
                      ))}
                   </div>
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="order-2 lg:order-1 h-[500px] rounded-[2rem] overflow-hidden shadow-2xl relative"
             >
                <img src="https://picsum.photos/seed/pranayama-breath/800/1000" alt="Breathing Meditation" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent" />
             </motion.div>
          </div>
        </section>

        {/* --- 5. PRATYAHARA --- */}
        <section className="mb-24">
          <div className="bg-indigo-50/50 rounded-[2rem] p-8 md:p-12 border border-indigo-100">
             <div className="grid lg:grid-cols-2 gap-10 items-center">
               <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="flex items-center gap-4 mb-6">
                    <LimbBadge number="5" colorClass="bg-indigo-500" />
                    <div>
                       <h2 className="text-3xl font-serif font-bold text-stone-800">Pratyahara</h2>
                       <p className="text-indigo-600 font-medium text-lg">Withdrawal of the Senses</p>
                    </div>
                  </div>
                  <p className="text-lg text-stone-600 leading-relaxed mb-6">
                     Pratyahara teaches turning attention inward.
                     By reducing sensory distractions, the mind becomes free from external disturbances and gains inner stillness.
                  </p>
                  <div className="flex items-center gap-3 text-indigo-800 font-medium bg-white p-4 rounded-xl shadow-sm max-w-md">
                     <EyeOff className="w-5 h-5" />
                     <span>Focus inward, block the outward.</span>
                  </div>
               </motion.div>
               
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg"
               >
                  <img src="https://picsum.photos/seed/pratyahara/800/400" alt="Inward Focus" className="w-full h-full object-cover" />
               </motion.div>
             </div>
          </div>
        </section>

        {/* --- 6. DHARANA --- */}
        <section className="mb-24">
          <div className="bg-purple-50/50 rounded-[2rem] p-8 md:p-12 border border-purple-100">
             <div className="grid lg:grid-cols-2 gap-10 items-center">
               <motion.div 
                  className="order-2 lg:order-1 h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
               >
                  <img src="https://picsum.photos/seed/candle-focus/800/400" alt="Concentration" className="w-full h-full object-cover" />
               </motion.div>

               <motion.div className="order-1 lg:order-2" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="flex items-center gap-4 mb-6">
                    <LimbBadge number="6" colorClass="bg-purple-500" />
                    <div>
                       <h2 className="text-3xl font-serif font-bold text-stone-800">Dharana</h2>
                       <p className="text-purple-600 font-medium text-lg">Concentration</p>
                    </div>
                  </div>
                  <p className="text-lg text-stone-600 leading-relaxed mb-6">
                     Dharana is single-pointed focus of the mind.
                     Practices like gazing at a candle flame or deity image train attention, which later reflects in daily activities.
                  </p>
                  <div className="flex items-center gap-3 text-purple-800 font-medium bg-white p-4 rounded-xl shadow-sm max-w-md">
                     <Target className="w-5 h-5" />
                     <span>One mind, one point, one focus.</span>
                  </div>
               </motion.div>
             </div>
          </div>
        </section>

        {/* --- 7. DHYANA & 8. SAMADHI --- */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
           {/* Limb 7 */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative rounded-[2rem] overflow-hidden group min-h-[500px] flex flex-col"
           >
              <div className="absolute inset-0">
                 <img src="https://picsum.photos/seed/meditation-nature/1200/600" alt="Meditation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-stone-900/70" />
              </div>
              <div className="relative z-10 p-10 flex flex-col h-full">
                 <div className="flex items-center gap-4 mb-8">
                    <LimbBadge number="7" colorClass="bg-pink-500" />
                    <h2 className="text-3xl font-serif font-bold text-white">Dhyana</h2>
                 </div>
                 
                 <div className="mt-auto">
                    <p className="text-pink-300 font-bold uppercase tracking-widest text-sm mb-4">Meditation</p>
                    <p className="text-xl text-stone-200 leading-relaxed mb-6 font-light">
                      Dhyana is a natural state of deep awareness. Moments of complete presence—while reading or cycling—are meditative states. Regular practice invites this stillness consciously.
                    </p>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl inline-flex items-center gap-3 text-pink-100">
                      <Brain className="w-5 h-5" />
                      <span>Deep Awareness</span>
                    </div>
                 </div>
              </div>
           </motion.div>

           {/* Limb 8 */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="relative rounded-[2rem] overflow-hidden group min-h-[500px] flex flex-col"
           >
              <div className="absolute inset-0">
                 <img src="https://picsum.photos/seed/sunrise-spiritual/1200/600" alt="Enlightenment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-amber-900/60 mix-blend-multiply" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="relative z-10 p-10 flex flex-col h-full text-right">
                 <div className="flex items-center justify-end gap-4 mb-8">
                    <h2 className="text-3xl font-serif font-bold text-white">Samadhi</h2>
                    <LimbBadge number="8" colorClass="bg-amber-500" />
                 </div>
                 
                 <div className="mt-auto items-end flex flex-col">
                    <p className="text-amber-300 font-bold uppercase tracking-widest text-sm mb-4">Enlightenment</p>
                    <p className="text-xl text-stone-200 leading-relaxed mb-6 font-light">
                      Samadhi is the culmination of the eightfold path. It is a state of complete presence, freedom from past and future, where actions are performed with love and detachment from outcomes.
                    </p>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl inline-flex items-center gap-3 text-amber-100">
                      <span>Complete Presence</span>
                      <Sun className="w-5 h-5" />
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>

      </div>
    </div>
  );
};