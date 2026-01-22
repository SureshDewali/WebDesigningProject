import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Sparkles, ChevronRight } from 'lucide-react';
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
    images: ["/assets/images/asanas/sukhasana.jpg"]
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
    images: ["/assets/images/asanas/tadasana.jpg"]
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
    images: ["/assets/images/asanas/vajrasana.jpg"]
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
    images: ["/assets/images/asanas/trikonasana.jpg"]
  },
  {
    title: "Ardha Matsyasana",
    meaning: "Half Lord of the Fishes Pose",
    description: "This seated twist energizes the spine, stimulates the digestive fire, and relieves stiffness in the back and shoulders.",
    steps: [
      "Sit with legs extended.",
      "Bend the right knee and place the foot outside the left knee.",
      "Bend the left leg and place the heel near the right hip.",
      "Twist your torso to the right, placing the right hand behind you.",
      "Hug the right knee with the left arm and look over the right shoulder."
    ],
    images: ["/assets/images/asanas/ardhamatsyasana.jpg"]
  },
  {
    title: "Pashchimottanasana",
    meaning: "Seated Forward Bend",
    description: "This pose gives a deep stretch to the entire back of the body, from the heels to the neck. It calms the mind and helps relieve stress.",
    steps: [
      "Sit with legs straight in front of you.",
      "Inhale and reach your arms up to lengthen the spine.",
      "Exhale and hinge at the hips to fold forward.",
      "Reach for your feet or shins, keeping the spine long.",
      "Relax your head and neck."
    ],
    images: ["/assets/images/asanas/pashchimottanasana.jpg"]
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
    images: ["/assets/images/asanas/gomukhasana.jpg"]
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
    images: ["/assets/images/asanas/bhujangasana.jpg"]
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
    images: ["/assets/images/asanas/vakrasana.jpg"]
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
    images: ["/assets/images/asanas/shavasana.jpg"]
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
    images: ["/assets/images/asanas/shalabhasana.jpg"]
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
    images: ["/assets/images/asanas/chakrasana.jpg"]
  }
];

// Inner component to handle image loading and errors
const AsanaImage = ({ title, src, className }: { title: string, src: string, className?: string }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc('/assets/images/asanas/placeholder.jpg'); // Absolute path to public folder
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
    <div className="pt-24 pb-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <SectionTitle title="Yoga Asanas" subtitle="Master your body and mind through sacred postures" />
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-stone-600 mb-6 text-lg leading-relaxed"
            >
              {introContent.p1}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-stone-600 text-lg leading-relaxed"
            >
              {introContent.p2}
            </motion.p>
        </div>

        <div className="space-y-12">
          {detailedAsanas.map((asana, index) => (
             <motion.div 
               key={index} 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: index * 0.05 }}
               className="bg-white rounded-3xl p-6 md:p-12 shadow-lg hover:shadow-xl transition-shadow border border-stone-100"
             >
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-stone-100 pb-6">
                   <div>
                      <h3 className="text-3xl font-serif font-bold text-yoga-dark mb-1">{asana.title}</h3>
                      <p className="text-yoga-accent font-medium text-lg italic">{asana.meaning}</p>
                   </div>
                   <div className="bg-yoga-light px-4 py-2 rounded-full text-yoga-dark text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Asana {index + 1}
                   </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                   {/* Content Section - Second on Mobile, First on Desktop */}
                   <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center">
                      <p className="text-stone-600 text-lg leading-relaxed mb-8">{asana.description}</p>
                      
                      <div className="bg-stone-50 rounded-2xl p-6 md:p-8 border border-stone-100">
                         <h4 className="font-bold text-yoga-dark mb-6 flex items-center gap-2 text-lg">
                            <Activity className="w-5 h-5 text-yoga-accent" /> Step-by-Step Instructions
                         </h4>
                         <ul className="space-y-4">
                            {asana.steps.map((step, i) => (
                               <li key={i} className="flex gap-4 text-stone-600 items-start">
                                  <div className="mt-1 min-w-[20px]">
                                    <ChevronRight className="w-5 h-5 text-yoga-accent" />
                                  </div>
                                  <span className="leading-relaxed">{step}</span>
                               </li>
                            ))}
                         </ul>
                      </div>
                   </div>

                   {/* Images Section - First on Mobile, Second on Desktop */}
                   <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                      {asana.images && asana.images.length > 0 ? (
                        asana.images.map((imgSrc, i) => (
                          <div key={i} className="relative overflow-hidden rounded-2xl shadow-md h-64 md:h-80 lg:h-full min-h-[300px]">
                             <AsanaImage 
                               src={imgSrc} 
                               title={asana.title} 
                               className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                             />
                          </div>
                        ))
                      ) : (
                        <div className="relative overflow-hidden rounded-2xl shadow-md h-64 md:h-80 lg:h-full bg-stone-100 flex items-center justify-center">
                           <span className="text-stone-400 italic">Image not available</span>
                        </div>
                      )}
                   </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
