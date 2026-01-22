import { YogaType, Limb, Asana, Sanskar, GeetaQuote } from './types';

export const yogaTypes: YogaType[] = [
  {
    title: "Hatha Yoga",
    description: "The physical branch of yoga that focuses on postures (asanas) and breath control (pranayama) to channel vital energy sources.",
    benefits: ["Improved flexibility", "Stress reduction", "Physical balance"],
    image: "https://picsum.photos/seed/hatha/600/400"
  },
  {
    title: "Vinyasa Yoga",
    description: "A dynamic style of yoga where poses are strung together to form one fluid sequence of movement, coordinated with breath.",
    benefits: ["Cardiovascular health", "Muscle endurance", "Mind-body flow"],
    image: "https://picsum.photos/seed/vinyasa/600/400"
  },
  {
    title: "Kundalini Yoga",
    description: "Focuses on awakening the dormant spiritual energy at the base of the spine through chanting, singing, breathing exercises, and repetitive poses.",
    benefits: ["Nervous system balance", "Enhanced intuition", "Emotional release"],
    image: "https://picsum.photos/seed/kundalini/600/400"
  },
  {
    title: "Raja Yoga",
    description: "The 'Royal Path' focusing on meditation and contemplation to realize the self. It emphasizes control of the mind.",
    benefits: ["Mental clarity", "Deep inner peace", "Spiritual growth"],
    image: "https://picsum.photos/seed/raja/600/400"
  }
];

export const eightLimbs: Limb[] = [
  { sanskrit: "Yama", english: "Restraints", description: "Ethical standards and sense of integrity (Non-violence, Truthfulness).", benefit: "Social harmony", icon: "Scale" },
  { sanskrit: "Niyama", english: "Observances", description: "Self-discipline and spiritual observances (Cleanliness, Contentment).", benefit: "Personal growth", icon: "UserCheck" },
  { sanskrit: "Asana", english: "Posture", description: "Physical postures practiced in Hatha yoga.", benefit: "Physical health", icon: "Activity" },
  { sanskrit: "Pranayama", english: "Breath Control", description: "Control of the breath to gain control over the mind.", benefit: "Vitality", icon: "Wind" },
  { sanskrit: "Pratyahara", english: "Withdrawal", description: "Withdrawal of the senses from external objects.", benefit: "Focus", icon: "EyeOff" },
  { sanskrit: "Dharana", english: "Concentration", description: "Intense concentration on a single object.", benefit: "Mental stability", icon: "Target" },
  { sanskrit: "Dhyana", english: "Meditation", description: "State of keen awareness without focus.", benefit: "Inner peace", icon: "Brain" },
  { sanskrit: "Samadhi", english: "Absorption", description: "State of ecstasy and merging with the divine.", benefit: "Enlightenment", icon: "Sun" },
];

export const asanas: Asana[] = [
  {
    name: "Tree Pose",
    sanskritName: "Vrikshasana",
    difficulty: "Beginner",
    image: "https://picsum.photos/seed/yoga1/400/600",
    benefits: ["Improves balance", "Strengthens legs", "Opens hips"],
    steps: ["Stand tall", "Shift weight to left foot", "Place right foot on left thigh", "Raise arms"]
  },
  {
    name: "Warrior II",
    sanskritName: "Virabhadrasana II",
    difficulty: "Beginner",
    image: "https://picsum.photos/seed/yoga2/400/600",
    benefits: ["Strengthens legs", "Opens chest", "Increases stamina"],
    steps: ["Wide stance", "Turn right foot out", "Bend right knee", "Extend arms horizontally"]
  },
  {
    name: "Downward Dog",
    sanskritName: "Adho Mukha Svanasana",
    difficulty: "Intermediate",
    image: "https://picsum.photos/seed/yoga3/400/600",
    benefits: ["Stretches full body", "Calms brain", "Energizes body"],
    steps: ["Tabletop position", "Lift hips up", "Straighten legs", "Press heels down"]
  },
  {
    name: "Lotus Pose",
    sanskritName: "Padmasana",
    difficulty: "Advanced",
    image: "https://picsum.photos/seed/yoga4/400/600",
    benefits: ["Calms the brain", "Stimulates pelvis", "Stretches ankles"],
    steps: ["Sit on floor", "Place feet on opposite thighs", "Rest hands on knees", "Keep spine straight"]
  }
];

export const sanskars: Sanskar[] = [
  { id: 1, name: "Garbhadhan", meaning: "Conception", description: "Ritual to purify conception and invite a divine soul." },
  { id: 2, name: "Punsavan", meaning: "Fetus Protection", description: "Performed for the physical health and protection of the fetus." },
  { id: 3, name: "Simantonayana", meaning: "Hair Parting", description: "To ensure mental stability of the pregnant mother." },
  { id: 4, name: "Jatakarma", meaning: "Birth Ritual", description: "Welcome ritual performed immediately after birth." },
  { id: 5, name: "Namakaran", meaning: "Naming", description: "Naming ceremony to define the child's identity." },
  { id: 6, name: "Nishkraman", meaning: "First Outing", description: "Taking the child outdoors for the first time to see the sun." },
  { id: 7, name: "Annaprashan", meaning: "First Feeding", description: "First consumption of solid food (rice)." },
  { id: 8, name: "Chudakarana", meaning: "Head Shaving", description: "Shaving the head to symbolize purity and new beginnings." },
  { id: 9, name: "Karnavedha", meaning: "Ear Piercing", description: "Piercing ears for acupuncture benefits and ornamentation." },
  { id: 10, name: "Vidyarambha", meaning: "Education Start", description: "Initiation into the world of letters and learning." },
  { id: 11, name: "Upanayana", meaning: "Sacred Thread", description: "Investiture of the sacred thread, beginning spiritual study." },
  { id: 12, name: "Vedarambha", meaning: "Veda Study", description: "Start of formal study of the Vedas and scriptures." },
  { id: 13, name: "Keshanta", meaning: "First Shave", description: "First shaving of the beard for boys." },
  { id: 14, name: "Samavartana", meaning: "Returning", description: "Ceremony marking the end of student life." },
  { id: 15, name: "Vivaha", meaning: "Marriage", description: "Entering the householder stage of life (Grihastha)." },
  { id: 16, name: "Antyeshti", meaning: "Last Rites", description: "Funeral rites to aid the soul's transition." },
];

export const geetaQuotes: GeetaQuote[] = [
  {
    sanskrit: "Yada yada hi dharmasya glanir bhavati bharata",
    translation: "Whenever there is a decline in righteousness and an uprise of unrighteousness, at that time, I manifest Myself.",
    context: "Lord Krishna's promise to restore balance."
  },
  {
    sanskrit: "Karmanye vadhikaraste ma phaleshu kadachana",
    translation: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action.",
    context: "The essence of Karma Yoga: selfless action."
  },
  {
    sanskrit: "Yogah karmasu kaushalam",
    translation: "Yoga is skill in action.",
    context: "Defining Yoga not just as meditation, but as excellence in whatever you do."
  }
];