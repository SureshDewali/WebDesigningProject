import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, X, Sparkles, Scroll } from 'lucide-react';
import { geetaIntro, geetaChapters, Chapter } from '../geetaContent';

export const Geeta = () => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  // Background decoration variants
  const pulseGlow = {
    scale: [1, 1.05, 1],
    opacity: [0.1, 0.2, 0.1],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const }
  };

  return (
    <div className="min-h-screen bg-[#0B2219] text-[#F3F4F1] relative overflow-x-hidden font-sans">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Golden Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2219] via-[#0f2e22] to-[#0B2219] opacity-90" />
        
        {/* Animated Golden Orb/Lotus Glow */}
        <motion.div 
          animate={pulseGlow}
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#D4AF37] blur-[150px]"
        />

        {/* Texture Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23D4AF37\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      </div>

      <div className="relative z-10 pt-28 pb-20 container mx-auto px-6">
        
        {/* --- HERO SECTION: INTRODUCTION --- */}
        <header className="max-w-4xl mx-auto text-center mb-24">
           <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
           >
             <span className="block text-[#D4AF37] font-serif tracking-[0.2em] uppercase text-sm md:text-base mb-4">
               Shrimad Bhagavad Geeta
             </span>
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-lg">
               The Celestial Song
             </h1>
             <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-12" />
           </motion.div>

           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5, duration: 1 }}
             className="prose prose-lg prose-invert mx-auto text-center"
           >
             {geetaIntro.content.slice(0, 3).map((para, i) => (
               <p key={i} className="text-[#F3F4F1]/80 leading-relaxed mb-6 font-light text-lg md:text-xl">
                 {para}
               </p>
             ))}
             {/* Show 'Read Full Intro' button if needed, but per request we show everything. 
                 Since the intro is long, let's put the rest in a collapsible or just display it all nicely styled. 
                 User said "Zero Summarization", "Include entire Introduction".
                 I will display all paragraphs, but maybe style the first few larger.
             */}
             <div className="text-left bg-[#0f2e22]/50 p-8 md:p-12 rounded-3xl border border-[#D4AF37]/20 shadow-2xl mt-12 backdrop-blur-sm">
                <h3 className="text-2xl font-serif text-[#D4AF37] mb-6 border-b border-[#D4AF37]/20 pb-4">Introduction Continued</h3>
                {geetaIntro.content.slice(3).map((para, i) => {
                  const isHeader = para === "GEETA ON CHARACTER BUILDING:";
                  return (
                    <p key={i} className={`text-[#F3F4F1]/90 leading-relaxed mb-6 ${isHeader ? 'text-xl font-bold text-[#D4AF37] mt-8 mb-4 font-serif uppercase tracking-widest' : ''}`}>
                      {para}
                    </p>
                  );
                })}
             </div>
           </motion.div>
        </header>

        {/* --- CHAPTERS GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {geetaChapters.map((chapter, index) => (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedChapter(chapter)}
              className="group cursor-pointer relative"
            >
              {/* Card Container */}
              <div className="h-full bg-[#0f2e22] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-xl p-8 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:-translate-y-1 relative overflow-hidden">
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 p-3 opacity-30 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                </div>

                {/* Chapter Number */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37]/70">Chapter</span>
                  <span className="text-4xl font-serif font-bold text-[#D4AF37]">{chapter.number}</span>
                </div>

                {/* Titles */}
                <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {chapter.title}
                </h3>
                <p className="text-sm font-medium text-[#F3F4F1]/60 uppercase tracking-wide mb-6">
                  {chapter.subtitle}
                </p>

                {/* Preview Text (Truncated) */}
                <p className="text-[#F3F4F1]/70 line-clamp-3 text-sm leading-relaxed mb-6">
                  {chapter.content[0]}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  Read Chapter <Scroll className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- MASSIVE MODAL --- */}
      <AnimatePresence>
        {selectedChapter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedChapter(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl h-[85vh] bg-[#0B2219] border-2 border-[#D4AF37] rounded-3xl relative overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Modal Background Texture */}
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23D4AF37\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

              {/* Header */}
              <div className="flex-shrink-0 p-8 md:p-10 border-b border-[#D4AF37]/30 bg-[#0f2e22] flex justify-between items-start relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase rounded-full tracking-wider border border-[#D4AF37]/30">
                      Chapter {selectedChapter.number}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">
                    {selectedChapter.title}
                  </h2>
                  <p className="text-xl text-[#D4AF37] italic font-serif opacity-90">
                    {selectedChapter.subtitle}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedChapter(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-red-500/20 text-white hover:text-red-400 transition-all"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-grow overflow-y-auto p-8 md:p-12 custom-scrollbar">
                <div className="prose prose-xl prose-invert max-w-none">
                  {selectedChapter.content.map((paragraph, index) => {
                    // Check if paragraph is a special header
                    const isHeader = paragraph.startsWith("---") && paragraph.endsWith("---");
                    const isSubHeader = paragraph.endsWith(":");
                    
                    if (isHeader) {
                      return (
                         <div key={index} className="flex items-center gap-4 my-10">
                           <div className="h-px bg-[#D4AF37]/30 flex-grow"></div>
                           <span className="text-[#D4AF37] font-serif font-bold uppercase tracking-widest text-sm whitespace-nowrap">
                             {paragraph.replace(/---/g, '').trim()}
                           </span>
                           <div className="h-px bg-[#D4AF37]/30 flex-grow"></div>
                         </div>
                      );
                    }
                    
                    if (isSubHeader) {
                       return (
                         <h3 key={index} className="text-2xl font-serif font-bold text-[#D4AF37] mt-10 mb-6">
                           {paragraph}
                         </h3>
                       )
                    }

                    return (
                      <p key={index} className="text-[#F3F4F1]/90 leading-relaxed mb-6 font-light">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
                
                {/* Footer of Modal */}
                <div className="mt-16 pt-8 border-t border-[#D4AF37]/20 text-center">
                  <BookOpen className="w-8 h-8 text-[#D4AF37]/40 mx-auto mb-4" />
                  <p className="text-[#F3F4F1]/40 text-sm italic font-serif">
                    End of Chapter {selectedChapter.number}
                  </p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0B2219;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D4AF37;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #b5952f;
        }
      `}</style>
    </div>
  );
};