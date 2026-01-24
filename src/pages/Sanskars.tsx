import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/Shared';

// --- NAV DATA ---
const allSanskarsList = [
  { id: "garbhadhana", label: "Garbhadhana" },
  { id: "punsavana", label: "Punsavana" },
  { id: "simantonayana", label: "Simantonayana" },
  { id: "jatakarma", label: "Jatakarma" },
  { id: "namakarana", label: "Namakarana" },
  { id: "nishkramana", label: "Nishkramana" },
  { id: "annaprashana", label: "Annaprashana" },
  { id: "chudakarma", label: "Chudakarma" },
  { id: "karnavedha", label: "Karnavedha" },
  { id: "vidyarambha", label: "Vidyarambha" },
  { id: "upanayana", label: "Upanayana" },
  { id: "vedarambha", label: "Vedarambha" },
  { id: "keshanta", label: "Keshanta" },
  { id: "samavartana", label: "Samavartana" },
  { id: "vivaha", label: "Vivaha" },
  { id: "antyeshti", label: "Antyeshti" },
];

// --- CONTENT DATA ---
const sanskarsData = [
  {
    id: "garbhadhana",
    roman: "I",
    title: "Garbhadhan Samskara",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          Garbhadhan Samskara is the first Samskara among sixteen Samskaras approved in our scriptures. After entering into a social and worldly life, this Garbhadhan Samskara is performed. Main objective of the married life is to have the best children and to continue the succession of the family.
          <span className="block mt-2 text-yoga-gold font-serif">प्रजातन्तुं मा व्यवच्छेत्सी ( तै.उ.) (Taiteriya Upanishad)</span>
        </p>
        
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          When a student completes his studies and education and leaves Ashram of his Guru, his Acharya explains him Dharma of Grihastha (duties of married life) and asks him not to discontinue the succession of his family. Parents expecting the best children should first of all purify and sanctify their body and mind and in order to keep the body and mind pure and pious this Samskara is performed.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          During the Vedic Age, this Samskara was given the utmost importance. Garbhadhan Samskara is performed by uttering the following Shloka:
        </p>

        <div className="bg-[#051a12] border-l-4 border-yoga-gold p-6 my-8 rounded-r-xl">
           <p className="text-yoga-gold/80 font-serif italic mb-4 text-sm">
             गर्भधेहिसिनिबालि । गर्भ धेहि पृथुष्टुके ।। गर्भते अश्विनौ देवावाधतां पुष्करस्रजौ ।। गर्भ ते मित्रावरुणौ गर्भ देवो बृहस्पतिः । गर्भ ते इन्द्रश्चाग्निश्च गर्भ धाता दधातु ते ।।
           </p>
           <p className="text-white font-serif text-xl leading-relaxed">
             "Oh Goddess! You empower this woman capable of conceiving a child. Garlanded with the lotus flowers, May the god Ashwinikumar fill the womb of this woman. May all the deities- Mitra, Varuna, Guru-Brihaspati, Indra, Agni, Brama- fill the womb of this woman."
           </p>
        </div>

        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          Thereafter, on birth of a child after nine months, following prayer may be performed in front of the Lord Brahmaji:
        </p>

        <div className="bg-[#051a12] border-l-4 border-yoga-gold p-6 my-8 rounded-r-xl">
           <p className="text-yoga-gold/80 font-serif italic mb-4 text-sm">
            धातः श्रेष्ठेन रूपेणास्या नार्या गविन्योः । पुमांसं पुत्रमाधेहि दशमे मासि सूतवे । यत्ते सुसी मे हृदयं दिवि चन्द्रमसि श्रितम् वेदाअहं तन्मां तद्विधात पश्येम शरदः शतम् जीवेम शरदः शत श्रणुयाम शरदः शतम् ।।
           </p>
           <p className="text-white font-serif text-xl leading-relaxed">
             "Oh Brahmaji! Please create and establish a child in the womb of this woman with a view that she may give birth to a healthy child. Oh Lord, also bless the child so that the child may see Sharada Rutu after the birth and may live for one hundred years."
           </p>
        </div>
      </>
    )
  },
  {
    id: "punsavana",
    roman: "II",
    title: "Punsavan Samskara",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          After Garbhadhan Samskara, when symptoms of a woman becoming pregnant are observed then for mental development and purification of the child in the womb of the mother, this Punsavan Samskara is performed. The time prescribed for performing this Samskara is 2nd or 3rd month after the symptoms of pregnancy are observed. In <em>Paraskara Gruhya Sutra</em> it is stated:
        </p>
        
        <p className="mb-8 text-yoga-gold font-serif text-xl text-center">
          ‘अथ पुंसवनं पुरा स्पन्दत इति मासे द्वितीये तृतीये वा ।’
        </p>

        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          This Samskara is considered essential by our Acharyas for overall development of the child. This Samskara, which is related to a child, who is yet in the womb of the mother, is performed in <em>Shubh Nakshatra</em>. This Punsavan Samskara is performed with a view that a healthy and bright child may be born.
        </p>

        <div className="bg-[#051a12] p-6 rounded-xl border border-yoga-gold/20 mb-8">
          <p className="text-yoga-gold/90 font-serif text-lg text-center">
            अद्येत्यादि ..... - ममास्य भार्याया मृतवत्स्यमानस्य गर्भस्य बैजिक गार्भिक दोष परिहारार्थपुरुषाज्ञानोदयप्रतिरोधपरिहारद्वारा श्री परमेश्वर प्रीत्यर्थं पुंसवनाख्यं कर्माहं करिष्ये ।
          </p>
        </div>

        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          In this Samskara, poojan of Agni (God of Fire) should be performed, Mantra of one’s own Ishtadev (one’s own personal god in whom a person may have ardent faith) should be performed for 100 times and thereafter meals and Dakshina (act of offering alms with reverence) should be offered to Brahmins and should obtain their blessings.
        </p>
      </>
    )
  },
  {
    id: "simantonayana",
    roman: "III",
    title: "Simanatonayan Samskara",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          Simantonayan Samskara is also known as Simantkaran or Simanta Samskara. The objective of this Samskara is to obtain Saubhagya (to obtain good luck and life of husband). The main objective of this Samskara is to prevent premature abortion and to protect simultaneously the pregnant mother and the growth of the child in the womb of the mother.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          This Samskara is performed in 4th or 6th or 8th month of pregnancy. In Ashwalayan Gruhya Sutra it is stated to perform this Samskara in the 4th month. During the performance of ritual of this Samskara, a prayer is performed to the deities.
        </p>

        <p className="mb-8 text-yoga-gold font-serif text-xl text-center">
          ‘चतुर्थे गर्भमासे सीमन्तोन्नयनम् ।’
        </p>

        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          In this Samskara, while praying to the god for the health of his child, the husband combs the hair of his wife to please her.
        </p>

        <div className="bg-[#051a12] p-6 rounded-xl border border-yoga-gold/20 mb-8">
          <p className="text-yoga-gold/90 font-serif text-lg text-center">
             अद्येत्यादि ..... - ममास्य भार्यायांगर्भाभिवृद्धिपरिपन्धि-पिशितप्रिया लक्ष्मीभूतराक्षसगण निरसनक्षेम सकलसौभाग्यनिदान लक्ष्मीसमावेशन द्वारा बीजगर्भ समुद्भवनोनिर्वहणाय श्री परमेश्वर प्रीत्यर्थं स्त्री संस्कार रुपंसीमन्तोन्नयन कर्म करिष्ये ।।
          </p>
        </div>

        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          Other old and young ladies of the noble families bless the pregnant woman. There is also a taboo to serve and eat hotchpotch in this Samskara.
        </p>
      </>
    )
  },
  {
    id: "jatakarma",
    roman: "IV",
    title: "Jaat Karma Samskara",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          In the Scriptures, it is stated to perform this Samskara prior to cutting off the navel string of the newly born child from that of its mother. For intellectual development, strength and long life of the newly born child, who has experienced this divine world for the first time, a pious mixture of honey, Sugar and Ghee is placed on the tongue of the child with a golden stick and at that time special Vedic Mantra is chanted.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          This Samskara is performed with special Mantras and rituals. After sanctifying with Mantras the mixture of two drops of Ghee and six drops of Shahad, the mixture is placed on the tongue of the child and thereafter the father performs the ritual of Yagna. Thereafter the father whispers in the left ear of the child- “Your secret name is Ved”. Thereafter the father cuts the navel string of the child and blesses him:
        </p>

        <div className="bg-[#051a12] border-l-4 border-yoga-gold p-6 my-8 rounded-r-xl">
           <p className="text-white font-serif text-xl leading-relaxed italic">
             "Oh son, you have born from my limbs, your heart has been created from my heart. By name you are my soul. Oh, my son, may you live for hundred years."
           </p>
        </div>

        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          The father blesses the child time and again and blesses the child with these words:
        </p>

        <div className="bg-[#051a12] border-l-4 border-yoga-gold p-6 my-8 rounded-r-xl">
           <p className="text-yoga-gold/80 font-serif italic mb-4 text-sm">
             ‘अश्मा भव, परशुर्भव, हिरण्यस्रुतं भव ।’
           </p>
           <p className="text-white font-serif text-xl leading-relaxed italic">
             "You may become strong like a stone. Brave against the enemies like the great sage Parshuram and you may remain pious for ever like the gold."
           </p>
        </div>

        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          During this Jaat Samskara, the ritual with milk-bath is performed to the child with a view to bless him for physical, mental and spiritual progress. Through this Samskara, whatever is eaten by the child from the stomach of his mother while in the womb is sanctified from such sins.
        </p>

        <p className="mb-4 text-lg leading-relaxed text-stone-300">
          At that time, Acharya performs a noble Sankalp:
        </p>

        <div className="bg-[#051a12] p-6 rounded-xl border border-yoga-gold/20 mb-8">
          <p className="text-yoga-gold/90 font-serif text-lg text-center">
            अद्येत्यादि ..... - ममास्य कुमारस्य गर्भाम्बुपान जनित सकलदोष निवर्वहणायुर्मेधाभिवृद्धि बीजगर्भसमुद्भवैनौनिवर्हण द्वारा श्री परमेश्वर प्रीत्यर्थं जातकर्माख्यं कर्म करिष्ये ।।
          </p>
        </div>

        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          In this Samskara, nine different Mantras are chanted in a special manner. Thereafter, a prayer is performed for intelligent, strong and healthy child. Thereafter, the mother feeds her child.
        </p>
      </>
    )
  },
  {
    id: "namakarana",
    roman: "V",
    title: "Namkaran Samskara",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          After ten nights, on eleventh day, this Samskara is performed. In our Scriptures, ten days immediately after the birth of a child are considered as Asauch (Sutak). And therefore, it is stated in the scriptures to perform this Samskara on the 11th day. Even Rishi Yagnavalkya recommends it. But some other Karmkandi learned persons believe that this Samskara can be performed not only on 11th day but also on any other pious day thereafter as per noble position of the stars and planets.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          After performing Pooja of one’s own personal god, this Samskara is performed either by the eldest male member of the family or the father himself. The person who performs this Namkaran Samskara, utters the name of the child in his ears. Even ‘Janmang-Chakra’ is also sung. At the time Namkaran Samskara, Purohit or Brahmin performs Sankalp:
        </p>

        <div className="bg-[#051a12] p-6 rounded-xl border border-yoga-gold/20 mb-8">
          <p className="text-yoga-gold/90 font-serif text-lg text-center">
            अद्येत्यादि ..... अमुक ममास्य जातस्य पुत्रस्य बीजगर्भसमुद्भवैनौनिवर्हणाय नामाख्यं संस्कारं करिष्ये ।।
          </p>
        </div>

        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          At that time Darshan of Surya (the Sun God) is also granted to the child. By performing Darshan of Surya, the child gains divine light and energy. Father or Purohit, who performs this Samskara, utters these words in the ears of the child:
        </p>

        <div className="bg-[#051a12] p-6 rounded-xl border border-yoga-gold/20 mb-8">
          <p className="text-yoga-gold/90 font-serif text-lg text-center leading-loose">
             हे कुमार त्वं ... कुलदेवताया भक्तोसि ।।<br/>
             हे कुमार त्वं मासनाम्ना ... असि ।<br/>
             हे कुमार त्वं नक्षत्र नाम्ना .. असि ।<br/>
             हे कुमार त्वं व्यवहार नाम्ना .. असि ।
          </p>
        </div>

        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          After chanting these Mantras, Acharya blesses the child:
        </p>

        <div className="bg-[#051a12] border-l-4 border-yoga-gold p-6 my-8 rounded-r-xl">
           <p className="text-yoga-gold/80 font-serif italic mb-4 text-sm">
             अंगादगांत् संभवसि हृदयादधि जायसे । आत्मा वै पुत्रनामासि सः जीव शरद शतम् ।।
           </p>
           <p className="text-white font-serif text-xl leading-relaxed italic">
             "Oh Child! May you, who is born from the limbs of your father, live for one hundred years."
           </p>
        </div>

        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          Namkaran Samskara has much importance in Sanatan Dharma. By noting down the time of birth of the child, name of the child is kept in view of the position of the Nakshatra and Rashi. If the name of the child is kept in this way, then it becomes of great help for personality development of the child. And therefore our great Rishis have emphasized the importance of this Samskara. It is because of this that, name of the Lord Rama is greater than even the Lord Rama himself. The science of Astrology develops the future roadmap of a person on the basis of his name only.
        </p>
      </>
    )
  },
  {
    id: "nishkramana",
    roman: "VI",
    title: "Niskraman Samskara",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          The main objective of this Samskara is that, a child may be introduced with this great and gigantic universe created by the Lore Brahma and the child may also gain maturity from this wonderful creation of the world and he may protect Dharma and Samskruti and enjoy this world for a longer period of time.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          The opinion of Niskraman is that : “To come out.” This Samskara is performed in the fourth month immediately after the birth of a child. It is stated in the scripture to decorate the child with precious ornaments and clothes and to have him Darshan of Surya. Thereafter the child is placed lying on the floor in home in front of the idol image of the deity.
        </p>

        <div className="bg-[#051a12] p-6 rounded-xl border border-yoga-gold/20 mb-8">
          <p className="text-yoga-gold/90 font-serif text-lg text-center leading-loose">
            न अद्येत्यादि ममास्य शिशोरायुर्वृद्धिव्यावहार सिद्धि ।<br/>
            द्वारा श्री परमेश्वर प्रीत्यर्थं गृहान्निष्क्रमणं करिष्ये ।
          </p>
        </div>

        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          It is stated in the Scriptures to show to the child the Light of the Sun and the Moon. The main objective behind it is to have him experience the brightness of the Sun and the coolness of the Moon. The opinion of the Rishis behind this ritual is to make the child bright and humble. On this day, the child should be taken to the temple for Darshan and to seek the blessings of the Lord for happy and prosperous life of the child.
        </p>

        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          It is stated in the Scriptures to perform this Samskara in the fourth month immediately after the birth of the child. Since the body of the child is not congenial to outer light, heat and climate, a child should be kept in home very carefully. Thereafter the child should be brought out of home very slowly. The main objective of this Samskara is that the child may come in contact with the society and may learn to identify the circumstances of the society.
        </p>
      </>
    )
  },
  {
    id: "annaprashana",
    roman: "VII",
    title: "Anna-Prashan Samskara",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          Purpose of this Samskara is to concentrate upon the physical and mental development of the child. Meaning of Anna-Prashan is that so far the child was nourished only upon the milk of his mother and now the child should be given some quantity of the food. When the child takes the first ever meals in his mouth, this Samskara is called Anna-Prashan Samskara. The scriptures have identified the meals as Life. By taking the meals, physical and mental development of the child is achieved expeditiously. To strengthen and develop the body and the mind, the meals have the utmost importance.
        </p>
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          This ritual is usually performed in the sixth month. It marks the transition from liquid to solid food, symbolizing the child's readiness to engage with the material world.
        </p>
      </>
    )
  },
  {
    id: "chudakarma",
    roman: "VIII",
    title: "Chudakarma Samskara",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          Also known as Mundan or the head-shaving ceremony. It involves shaving the child's head, symbolizing the shedding of past life's negativity and promoting hygiene and longevity.
        </p>
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          It is believed to stimulate proper growth of the brain and nerves, and is usually performed in the first or third year.
        </p>
      </>
    )
  },
  {
    id: "karnavedha",
    roman: "IX",
    title: "Karnavedha Samskara",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          The ear-piercing ceremony. It is performed for both health benefits (acupuncture points) and ornamentation. It is believed to open the inner ears for receiving sacred sounds.
        </p>
      </>
    )
  },
  {
    id: "vidyarambha",
    roman: "X",
    title: "Vidyarambha Samskara",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          Initiation into knowledge. This ceremony marks the beginning of a child's formal education. The child is guided to write their first letters/alphabets, usually in rice or sand, invoking the blessings of Goddess Saraswati.
        </p>
      </>
    )
  },
  {
    id: "upanayana",
    roman: "XI",
    title: "Upanayana Samskara",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          The sacred thread ceremony. It symbolizes the second birth (Dwija) - the spiritual birth. The child enters the Brahmacharya ashram and is accepted by a Guru for spiritual knowledge. The sacred thread (Yajnopavita) is worn as a reminder of one's duties.
        </p>
      </>
    )
  },
  {
    id: "vedarambha",
    roman: "XII",
    title: "Vedarambha Samskara",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          Beginning of Veda study. In ancient times, this marked the start of specific Vedic studies by the student under the guidance of the Guru.
        </p>
      </>
    )
  },
  {
    id: "keshanta",
    roman: "XIII",
    title: "Keshanta Samskara",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          The first shaving of the beard. This ritual marks the transition from childhood to youth/adulthood (Godan) for male students.
        </p>
      </>
    )
  },
  {
    id: "samavartana",
    roman: "XIV",
    title: "Samavartana Samskara",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          Convocation or returning home. This marks the completion of formal education (Gurukul) and the student's readiness to enter the householder stage (Grihastha).
        </p>
      </>
    )
  },
  {
    id: "vivaha",
    roman: "XV",
    title: "Vivaha Samskara",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          Marriage ceremony. It is considered one of the most important samskaras, marking the entry into Grihastha Ashram. It is a sacred union of two souls for Dharma (duty), Artha (wealth), Kama (desire), and Moksha (liberation).
        </p>
      </>
    )
  },
  {
    id: "antyeshti",
    roman: "XVI",
    title: "Antyeshti Samskara",
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-stone-300">
          The last rites (funeral). It is the final samskara performed after death, aiding the soul's transition from the physical body to the spiritual realm.
        </p>
      </>
    )
  },
];

export const Sanskars = () => {
  const [activeId, setActiveId] = useState(allSanskarsList[0].id);

  const scrollToId = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-24 pb-20 bg-stone-900 text-stone-200">
      <div className="container mx-auto px-6">
        <SectionTitle title="16 Sanskars" subtitle="The sacramental rites of passage in Hinduism" light={true} />
        
        {/* Mobile Quick Nav */}
        <div className="lg:hidden mb-8 sticky top-20 z-30 bg-stone-900/95 backdrop-blur-md border-b border-white/10 -mx-6 px-6 py-4 transition-all">
          <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar">
            {allSanskarsList.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  activeId === item.id 
                    ? 'bg-yoga-gold text-stone-900 border-yoga-gold' 
                    : 'bg-white/5 text-stone-400 border-white/10 hover:border-yoga-gold/50 hover:text-yoga-gold'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-28 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-serif font-bold text-yoga-gold mb-4 border-b border-white/10 pb-2">Quick Navigate</h3>
              <ul className="space-y-2">
                {allSanskarsList.map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => scrollToId(item.id)}
                      className={`text-sm font-medium transition-colors hover:text-yoga-accent ${activeId === item.id ? 'text-yoga-accent' : 'text-stone-400'}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4 space-y-20">
            {sanskarsData.map((sanskar, idx) => (
              <motion.div 
                key={sanskar.id}
                id={sanskar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="scroll-mt-40" // Increased scroll margin to account for sticky header on mobile
                onViewportEnter={() => setActiveId(sanskar.id)}
              >
                <div className="flex items-end gap-4 mb-6 border-b border-white/10 pb-4">
                  <span className="text-6xl font-serif font-bold text-white/10">{sanskar.roman}</span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-yoga-gold mb-2">{sanskar.title}</h2>
                </div>
                
                <div className="prose prose-invert prose-lg max-w-none">
                  {sanskar.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};