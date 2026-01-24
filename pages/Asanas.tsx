import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, AlertCircle, CheckCircle2, Sparkles, Leaf } from 'lucide-react';
import { SectionTitle } from '../components/Shared';

// --- DATA CONTENT ---
const introContent = {
  p1: `An Asana (Sanskrit: आसन) is a body posture, originally and still a general term for a sitting in meditation pose, and later extended in different yoga poses. The Yoga Sutras of Patanjali define "asana" as "[a position that] is steady and comfortable.`,
  p2: `Asanas are claimed to provide both spiritual and physical benefits in our religious books. More recently, studies have provided evidence that they improve flexibility, strength, and balance; to reduce stress and conditions related to it; and specifically to alleviate many diseases.`
};

const detailedAsanas = [
  {
    title: "Sukhasana",
    meaning: "Easy Pose",
    description: "Sukhasana is a comfortable sitting position for meditation. It is one of the simplest poses for beginners, promoting inner calm and straight posture.",
    steps: [
      "Sit on the floor with legs extended in front.",
      "Bend the left leg and place the foot beneath the right thigh.",
      "Bend the right leg and place the foot beneath the left thigh.",
      "Keep the head, neck, and spine straight.",
      "Place palms on the knees in Chin Mudra or Jnana Mudra.",
      "Close your eyes and relax the whole body."
    ],
    benefits: [
      "Calms the brain and strengthens the back.",
      "Stretches the knees and ankles.",
      "Promotes inner calm and reduces anxiety.",
      "Improves body posture."
    ],
    precautions: [
      "Avoid if you have recent or chronic knee injuries.",
      "Use a folded blanket under hips if suffering from hip pain."
    ],
    image: "https://lh3.googleusercontent.com/u/0/d/1vpAv8N-s0mGD89SuYE7FLg-nvc3FgnM2"
  },
  {
    title: "Tadasana",
    meaning: "Mountain Pose",
    description: "Tadasana is the foundation of all standing poses. It improves posture, balance, and focus while strengthening the thighs, knees, and ankles.",
    steps: [
      "Stand with feet together and arms at your sides.",
      "Distribute your weight evenly across both feet.",
      "Engage your thighs and lift your kneecaps.",
      "Lengthen your spine and reach the crown of your head toward the sky.",
      "Breathe deeply and hold the pose."
    ],
    benefits: [
      "Improves posture and body awareness.",
      "Strengthens thighs, knees, and ankles.",
      "Firms abdomen and buttocks.",
      "Relieves sciatica and reduces flat feet."
    ],
    precautions: [
      "Avoid if you have low blood pressure.",
      "Avoid if you are experiencing headaches or insomnia."
    ],
    image: "https://lh3.googleusercontent.com/d/19lfxsX9Ys2VLlyg1mKIb9b_4BUpdGEB-"
  },
  {
    title: "Vajrasana",
    meaning: "Thunderbolt Pose",
    description: "Vajrasana is a kneeling pose often used for meditation and pranayama. It is known to aid digestion and can be practiced immediately after meals.",
    steps: [
      "Kneel on the floor with your knees together.",
      "Sit back on your heels with your big toes touching.",
      "Keep your spine, neck, and head straight.",
      "Place your hands on your knees, palms down.",
      "Close your eyes and breathe deeply."
    ],
    benefits: [
      "Aids in digestion and relieves acidity.",
      "Strengthens pelvic muscles.",
      "Calms the mind and prepares for meditation.",
      "Relieves lower back pain."
    ],
    precautions: [
      "Avoid if you have severe knee pain or recent surgery.",
      "Pregnant women should keep knees apart to avoid pressure on abdomen."
    ],
    image: "https://lh3.googleusercontent.com/d/1VH1w3jras_oQYljbmTyzchsK5Bi6vFgp"
  },
  {
    title: "Trikonasana",
    meaning: "Triangle Pose",
    description: "Trikonasana stretches the legs, groins, and hips while opening the chest and shoulders. It helps improve stability and strengthens the legs.",
    steps: [
      "Stand with feet wide apart.",
      "Turn your right foot out 90 degrees and left foot slightly in.",
      "Extend arms parallel to the floor.",
      "Reach forward and hinge at the right hip to bring your right hand to your shin or floor.",
      "Extend the left arm toward the ceiling and gaze up."
    ],
    benefits: [
      "Stretches and strengthens the thighs, knees, and ankles.",
      "Stretches the hips, groins, hamstrings, and calves.",
      "Opens the chest and shoulders.",
      "Stimulates abdominal organs."
    ],
    precautions: [
      "Avoid if you have low blood pressure.",
      "Those with neck problems should look straight or down, not up.",
      "Avoid if suffering from diarrhea."
    ],
    image: "https://lh3.googleusercontent.com/d/1oYI8Er3n5VtuWSKQ9YMPQvYoWjgFp1Yb"
  },
  {
    title: "Ardha Matsyendrasana",
    meaning: "Half Lord of the Fishes",
    description: "This seated twist energizes the spine, stimulates the digestive fire, and relieves stiffness in the back and shoulders.",
    steps: [
      "Sit with legs extended.",
      "Bend the right knee and place the foot outside the left knee.",
      "Bend the left leg and place the heel near the right hip.",
      "Twist your torso to the right, placing the right hand behind you.",
      "Hug the right knee with the left arm and look over the right shoulder."
    ],
    benefits: [
      "Stimulates the liver and kidneys.",
      "Stretches the shoulders, hips, and neck.",
      "Energizes the spine.",
      "Stimulates the digestive fire."
    ],
    precautions: [
      "Avoid during pregnancy or menstruation.",
      "Avoid if you have a recent back or spine injury."
    ],
    image: "https://lh3.googleusercontent.com/d/1zQGB6ufJPBF_ekZq8tinCHIDSMtq1nUU"
  },
  {
    title: "Paschimottanasana",
    meaning: "Seated Forward Bend",
    description: "This pose gives a deep stretch to the entire back of the body, from the heels to the neck. It calms the mind and helps relieve stress.",
    steps: [
      "Sit with legs straight in front of you.",
      "Inhale and reach your arms up to lengthen the spine.",
      "Exhale and hinge at the hips to fold forward.",
      "Reach for your feet or shins, keeping the spine long.",
      "Relax your head and neck."
    ],
    benefits: [
      "Calms the brain and helps relieve stress and mild depression.",
      "Stretches the spine, shoulders, and hamstrings.",
      "Stimulates the liver, kidneys, ovaries, and uterus.",
      "Improves digestion."
    ],
    precautions: [
      "Avoid if you have asthma or diarrhea.",
      "Those with back injury should perform this pose only under supervision."
    ],
    image: "https://lh3.googleusercontent.com/d/1zSO5zCDo1gVN02B1X13q4Tfuw2cpFDoa"
  },
  {
    title: "Gomukhasana",
    meaning: "Cow Face Pose",
    description: "Gomukhasana is a hip opener that also provides a deep stretch to the shoulders and chest. It helps correct posture and improves range of motion.",
    steps: [
      "Sit and stack your right knee directly over your left knee.",
      "Reach your right arm up and bend the elbow to reach down your back.",
      "Reach your left arm behind and up to clasp hands.",
      "Keep the spine straight and chest open.",
      "Hold and switch sides."
    ],
    benefits: [
      "Stretches the ankles, hips, and thighs.",
      "Opens the chest and shoulders.",
      "Improves posture.",
      "Can help clear the mind."
    ],
    precautions: [
      "Avoid if you have serious neck or shoulder problems.",
      "Use a strap if hands do not clasp behind the back."
    ],
    image: "https://lh3.googleusercontent.com/d/1PYOW6iYCElI27_r_-gC4ggKrKNw0fNwD"
  },
  {
    title: "Bhujangasana",
    meaning: "Cobra Pose",
    description: "A backbend that strengthens the spine and opens the chest, lungs, and shoulders. It is invigorating and helps combat fatigue.",
    steps: [
      "Lie on your stomach with legs extended.",
      "Place hands under shoulders, elbows close to the body.",
      "Inhale and lift your chest off the floor.",
      "Keep shoulders down and away from ears.",
      "Hold the pose while breathing evenly."
    ],
    benefits: [
      "Strengthens the spine.",
      "Stretches chest and lungs, shoulders, and abdomen.",
      "Firms the buttocks.",
      "Stimulates abdominal organs."
    ],
    precautions: [
      "Avoid if you have a back injury or carpal tunnel syndrome.",
      "Do not practice during pregnancy.",
      "Avoid if you have headache."
    ],
    image: "https://lh3.googleusercontent.com/d/1Ut_D424-9YkP0Vb30lKnow2JrtWWfuCG"
  },
  {
    title: "Vakrasana",
    meaning: "Twisted Pose",
    description: "Vakrasana is a simplified spinal twist that massages the abdominal organs and improves spinal flexibility, suitable for beginners.",
    steps: [
      "Sit with legs extended.",
      "Bend the right knee and place the foot beside the left knee.",
      "Twist the torso to the right.",
      "Place the right hand behind you for support.",
      "Bring the left arm over the right knee to deepen the twist."
    ],
    benefits: [
      "Improves spinal flexibility.",
      "Massages abdominal organs.",
      "Helps in reducing belly fat.",
      "Good for diabetes management."
    ],
    precautions: [
      "Avoid if you have severe back pain or spinal injury.",
      "Avoid immediately after meals.",
      "Practice gently if you have a stiff back."
    ],
    image: "https://lh3.googleusercontent.com/u/0/d/1sAtsJvO1j3rIEOnC9qzJTHZmdLysq-O-"
  },
  {
    title: "Shavasana",
    meaning: "Corpse Pose",
    description: "Shavasana is a pose of total relaxation, usually practiced at the end of a yoga session to integrate the benefits of the practice.",
    steps: [
      "Lie flat on your back.",
      "Let feet fall open and arms rest by your sides, palms up.",
      "Close your eyes and release all tension.",
      "Focus on your breath and relax the entire body.",
      "Stay for 5-10 minutes."
    ],
    benefits: [
      "Calms the brain and helps relieve stress and mild depression.",
      "Relaxes the body.",
      "Reduces headache, fatigue, and insomnia.",
      "Helps lower blood pressure."
    ],
    precautions: [
      "If you have back injury, do it with knees bent and feet on the floor.",
      "Avoid if you are feeling extremely drowsy (try to stay awake)."
    ],
    image: "https://lh3.googleusercontent.com/d/1d1L3NwBKXuRGvpUaW8vaiGxG7YitQLnp"
  },
  {
    title: "Shalabhasana",
    meaning: "Locust Pose",
    description: "Shalabhasana is a backbend that strengthens the entire back body, including the spine, glutes, and legs, while improving posture.",
    steps: [
      "Lie on your stomach with arms by your sides.",
      "Inhale and lift your head, chest, arms, and legs off the floor.",
      "Gaze forward and keep the neck long.",
      "Engage the back muscles and glutes.",
      "Exhale and release down."
    ],
    benefits: [
      "Strengthens the muscles of the spine, buttocks, and backs of the arms and legs.",
      "Stretches the shoulders, chest, belly, and thighs.",
      "Improves posture.",
      "Stimulates abdominal organs."
    ],
    precautions: [
      "Avoid if you have headache or serious back injury.",
      "Avoid if you have neck injury (keep head down)."
    ],
    image: "https://lh3.googleusercontent.com/d/1N1bE771YLKs0EEwNnMawzHRg-o71UDom"
  },
  {
    title: "Chakrasana",
    meaning: "Wheel Pose",
    description: "Also known as Urdhva Dhanurasana, this deep backbend opens the chest and increases flexibility in the spine. It is an energizing pose.",
    steps: [
      "Lie on your back with knees bent and feet flat.",
      "Place hands beside your ears, fingers pointing to shoulders.",
      "Press into feet and hands to lift hips and chest.",
      "Straighten arms and arch the back.",
      "Hold, then slowly lower down."
    ],
    benefits: [
      "Stretches the chest and lungs.",
      "Strengthens the arms and wrists, legs, buttocks, abdomen, and spine.",
      "Stimulates the thyroid and pituitary.",
      "Increases energy and counteracts depression."
    ],
    precautions: [
      "Avoid if you have back injury, carpal tunnel syndrome, diarrhea, headache.",
      "Avoid if you have heart problems or high/low blood pressure."
    ],
    image: "https://lh3.googleusercontent.com/d/1DBdcXYjT_FGGSnsZu2PwmgEpNGkN9280"
  }
];

// Define colorful themes for each card
const colorThemes = [
  { 
    bg: 'bg-emerald-50', 
    border: 'border-emerald-200', 
    text: 'text-emerald-900', 
    accent: 'text-emerald-700', 
    bullet: 'bg-emerald-500', 
    icon: 'text-emerald-600',
    innerBg: 'bg-emerald-100/50',
    highlight: 'bg-emerald-200/40'
  }, 
  { 
    bg: 'bg-blue-50', 
    border: 'border-blue-200', 
    text: 'text-blue-900', 
    accent: 'text-blue-700', 
    bullet: 'bg-blue-500', 
    icon: 'text-blue-600',
    innerBg: 'bg-blue-100/50',
    highlight: 'bg-blue-200/40'
  }, 
  { 
    bg: 'bg-amber-50', 
    border: 'border-amber-200', 
    text: 'text-amber-900', 
    accent: 'text-amber-700', 
    bullet: 'bg-amber-500', 
    icon: 'text-amber-600',
    innerBg: 'bg-amber-100/50',
    highlight: 'bg-amber-200/40'
  }, 
  { 
    bg: 'bg-rose-50', 
    border: 'border-rose-200', 
    text: 'text-rose-900', 
    accent: 'text-rose-700', 
    bullet: 'bg-rose-500', 
    icon: 'text-rose-600',
    innerBg: 'bg-rose-100/50',
    highlight: 'bg-rose-200/40'
  }, 
  { 
    bg: 'bg-violet-50', 
    border: 'border-violet-200', 
    text: 'text-violet-900', 
    accent: 'text-violet-700', 
    bullet: 'bg-violet-500', 
    icon: 'text-violet-600',
    innerBg: 'bg-violet-100/50',
    highlight: 'bg-violet-200/40'
  }, 
  { 
    bg: 'bg-cyan-50', 
    border: 'border-cyan-200', 
    text: 'text-cyan-900', 
    accent: 'text-cyan-700', 
    bullet: 'bg-cyan-500', 
    icon: 'text-cyan-600',
    innerBg: 'bg-cyan-100/50',
    highlight: 'bg-cyan-200/40'
  }, 
  { 
    bg: 'bg-teal-50', 
    border: 'border-teal-200', 
    text: 'text-teal-900', 
    accent: 'text-teal-700', 
    bullet: 'bg-teal-500', 
    icon: 'text-teal-600',
    innerBg: 'bg-teal-100/50',
    highlight: 'bg-teal-200/40'
  }, 
  { 
    bg: 'bg-orange-50', 
    border: 'border-orange-200', 
    text: 'text-orange-900', 
    accent: 'text-orange-700', 
    bullet: 'bg-orange-500', 
    icon: 'text-orange-600',
    innerBg: 'bg-orange-100/50',
    highlight: 'bg-orange-200/40'
  }, 
  { 
    bg: 'bg-indigo-50', 
    border: 'border-indigo-200', 
    text: 'text-indigo-900', 
    accent: 'text-indigo-700', 
    bullet: 'bg-indigo-500', 
    icon: 'text-indigo-600',
    innerBg: 'bg-indigo-100/50',
    highlight: 'bg-indigo-200/40'
  }, 
  { 
    bg: 'bg-slate-100', 
    border: 'border-slate-300', 
    text: 'text-slate-900', 
    accent: 'text-slate-700', 
    bullet: 'bg-slate-500', 
    icon: 'text-slate-600',
    innerBg: 'bg-slate-200/50',
    highlight: 'bg-slate-300/40'
  }, 
  { 
    bg: 'bg-lime-50', 
    border: 'border-lime-200', 
    text: 'text-lime-900', 
    accent: 'text-lime-700', 
    bullet: 'bg-lime-600', 
    icon: 'text-lime-600',
    innerBg: 'bg-lime-100/50',
    highlight: 'bg-lime-200/40'
  }, 
  { 
    bg: 'bg-fuchsia-50', 
    border: 'border-fuchsia-200', 
    text: 'text-fuchsia-900', 
    accent: 'text-fuchsia-700', 
    bullet: 'bg-fuchsia-500', 
    icon: 'text-fuchsia-600',
    innerBg: 'bg-fuchsia-100/50',
    highlight: 'bg-fuchsia-200/40'
  }, 
];

// Inner component to handle image loading and errors
const AsanaImage = ({ title, src, className }: { title: string, src: string, className?: string }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc('https://via.placeholder.com/800x600?text=Image+Unavailable'); 
      setHasError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={title}
      onError={handleError}
      className={className}
      loading="lazy"
    />
  );
};

export const Asanas = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-emerald-50 via-white to-stone-100 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                  <pattern id="leaf-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <path d="M50 0 C 20 20 20 80 50 100 C 80 80 80 20 50 0 Z" fill="black" />
                  </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
          </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle title="Yoga Asanas" subtitle="Master your body and mind through sacred postures" light={false} />
        
        {/* Intro */}
        <div className="max-w-5xl mx-auto mb-20 text-center relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-emerald-100/50 blur-3xl rounded-full -z-10"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/70 backdrop-blur-lg p-10 md:p-14 rounded-[3rem] border border-white shadow-xl"
            >
                <div className="flex justify-center mb-6">
                    <Leaf className="w-12 h-12 text-yoga-accent fill-yoga-accent/20" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-yoga-gold mb-6 tracking-wide">The Sacred Postures</h3>
                <p className="text-emerald-900 mb-8 text-xl md:text-2xl leading-relaxed font-light font-serif">
                  {introContent.p1}
                </p>
                <div className="h-px w-24 bg-yoga-accent/50 mx-auto mb-8"></div>
                <p className="text-stone-600 text-lg leading-relaxed font-light">
                  {introContent.p2}
                </p>
            </motion.div>
        </div>

        <div className="flex flex-col gap-20">
          {detailedAsanas.map((asana, index) => {
             const theme = colorThemes[index % colorThemes.length];
             const isOdd = index % 2 !== 0; // 0=Sukhasana (even), 1=Tadasana (odd)
             
             return (
               <motion.div 
                 key={index}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.7 }}
                 className={`w-full rounded-[2.5rem] overflow-hidden shadow-2xl ${theme.bg} border-4 ${theme.border}`}
               >
                  <div className="p-8 md:p-12">
                      
                      {/* --- TOP ROW: HEADER --- */}
                      <div className="flex flex-col items-center text-center mb-10">
                          <h2 className={`text-4xl md:text-7xl font-serif font-bold ${theme.text} mb-3 tracking-tight`}>
                              {asana.title}
                          </h2>
                          <p className={`text-2xl md:text-3xl font-serif italic ${theme.accent} mb-8 opacity-90`}>
                              {asana.meaning}
                          </p>
                          <p className={`text-lg md:text-xl leading-relaxed max-w-4xl ${theme.text} opacity-80 font-medium`}>
                              {asana.description}
                          </p>
                      </div>

                      {/* --- MIDDLE ROW: PHOTOS & STEPS (Zig-Zag) --- */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12">
                          {/* Photo - Zig Zag Logic */}
                          {/* If odd index (1, 3...), photo goes to right (order-2 on desktop) */}
                          <div className={`relative group perspective-1000 w-full h-full min-h-[300px] lg:min-h-[450px] ${isOdd ? 'lg:order-2' : 'lg:order-1'}`}>
                              <div className={`absolute inset-0 bg-white/40 transform translate-x-4 translate-y-4 rounded-3xl -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6 border ${theme.border}`} />
                              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white transform transition-transform duration-500 group-hover:scale-[1.01]">
                                 <AsanaImage 
                                   src={asana.image} 
                                   title={asana.title} 
                                   // Added object-top to ensure heads are visible in tall crops
                                   className="w-full h-full object-cover object-top aspect-[4/3]" 
                                 />
                              </div>
                          </div>

                          {/* Steps - Zig Zag Logic */}
                          {/* If odd index (1, 3...), steps goes to left (order-1 on desktop) */}
                          <div className={`${theme.innerBg} backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/50 shadow-sm h-full flex flex-col justify-center ${isOdd ? 'lg:order-1' : 'lg:order-2'}`}>
                              <h3 className={`text-2xl font-bold ${theme.text} mb-6 flex items-center gap-3 border-b border-white/40 pb-4`}>
                                 <Activity className={`w-6 h-6 ${theme.icon}`} /> 
                                 Step-by-Step
                              </h3>
                              <ul className="space-y-5">
                                 {asana.steps.map((step, i) => (
                                    <li key={i} className="flex gap-4 items-start text-lg">
                                       <div className={`mt-1 min-w-[28px] h-[28px] rounded-full ${theme.bullet} text-white flex items-center justify-center text-sm font-bold shadow-md`}>
                                          {i + 1}
                                       </div>
                                       <span className={`${theme.text} font-medium opacity-90 leading-relaxed`}>{step}</span>
                                    </li>
                                 ))}
                              </ul>
                          </div>
                      </div>

                      {/* --- BOTTOM ROW: BENEFITS & PRECAUTIONS --- */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Benefits */}
                          <div className={`${theme.innerBg} backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/50 shadow-sm hover:shadow-md transition-shadow`}>
                              <h3 className={`text-xl font-bold ${theme.text} mb-6 flex items-center gap-3 uppercase tracking-wide border-b border-white/40 pb-3`}>
                                 <CheckCircle2 className={`w-6 h-6 ${theme.icon}`} /> Benefits
                              </h3>
                              <ul className="space-y-4">
                                 {asana.benefits.map((benefit, i) => (
                                    <li key={i} className={`flex gap-3 items-start ${theme.text} opacity-90`}>
                                       <span className={`mt-2.5 w-2 h-2 rounded-full ${theme.bullet} flex-shrink-0 shadow-sm`} />
                                       <span className="text-lg leading-relaxed">{benefit}</span>
                                    </li>
                                 ))}
                              </ul>
                          </div>

                          {/* Precautions */}
                          <div className="bg-red-50/70 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                              <h3 className="text-xl font-bold text-red-800 mb-6 flex items-center gap-3 uppercase tracking-wide border-b border-red-200/50 pb-3">
                                 <AlertCircle className="w-6 h-6" /> Precautions
                              </h3>
                              <ul className="space-y-4">
                                 {asana.precautions.map((item, i) => (
                                    <li key={i} className="flex gap-3 items-start text-red-800/90">
                                       <span className="mt-2.5 w-2 h-2 rounded-full bg-red-400 flex-shrink-0 shadow-sm" />
                                       <span className="text-lg leading-relaxed">{item}</span>
                                    </li>
                                 ))}
                              </ul>
                          </div>
                      </div>

                  </div>
               </motion.div>
             );
          })}
        </div>
      </div>
    </div>
  );
};
