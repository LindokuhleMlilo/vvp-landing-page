'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Book, Play, HeadphonesIcon, FileText, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GlowCard } from '@/components/GlowCard';

const educationTopics = [
  {
    title: 'Antenatal Care Essentials',
    description: 'Complete guide to prenatal health and wellness',
    duration: '15 min read',
    type: 'article',
    icon: Book,
    gradient: 'from-purple-500 to-purple-700'
  },
  {
    title: 'Nutrition During Pregnancy',
    description: 'Optimal nutrition for mother and baby',
    duration: '8 min audio',
    type: 'audio',
    icon: HeadphonesIcon,
    gradient: 'from-cyan-500 to-cyan-700'
  },
  {
    title: 'Warning Signs to Watch',
    description: 'Recognizing emergency situations',
    duration: '12 min video',
    type: 'video',
    icon: Play,
    gradient: 'from-purple-500 to-cyan-500'
  },
  {
    title: 'Delivery Preparation',
    description: 'Getting ready for birth and beyond',
    duration: '20 min read',
    type: 'article',
    icon: FileText,
    gradient: 'from-cyan-500 to-purple-500'
  },
  {
    title: 'Newborn Care Basics',
    description: 'Essential care for your new baby',
    duration: '10 min video',
    type: 'video',
    icon: Play,
    gradient: 'from-purple-500 to-purple-700'
  },
  {
    title: 'Breastfeeding Success',
    description: 'Tips and techniques for successful breastfeeding',
    duration: '6 min audio',
    type: 'audio',
    icon: HeadphonesIcon,
    gradient: 'from-cyan-500 to-cyan-700'
  }
];

export default function Education() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(educationTopics.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(educationTopics.length / 3)) % Math.ceil(educationTopics.length / 3));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              Education Hub
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Personalized learning experiences powered by AI, delivering knowledge 
              when and how you need it most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Recommendations */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="holographic rounded-2xl p-6 mb-16 text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-semibold gradient-text">AI Recommended for You</h2>
            </div>
            <p className="text-gray-300">
              Based on your profile, we recommend starting with "Antenatal Care Essentials" 
              followed by "Nutrition During Pregnancy"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Cards Carousel */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors glow-purple"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors glow-purple"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {educationTopics.slice(currentSlide * 3, (currentSlide + 1) * 3).map((topic, index) => (
                <GlowCard key={index} delay={index * 0.1}>
                  <div className="h-full flex flex-col">
                    <div className={`w-16 h-16 bg-gradient-to-br ${topic.gradient} rounded-xl flex items-center justify-center mb-6 glow-purple`}>
                      <topic.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-purple-300 mb-3">
                      {topic.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 flex-1">
                      {topic.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{topic.duration}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        topic.type === 'audio' ? 'bg-cyan-500/20 text-cyan-300' :
                        topic.type === 'video' ? 'bg-purple-500/20 text-purple-300' :
                        'bg-gray-500/20 text-gray-300'
                      }`}>
                        {topic.type}
                      </span>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:glow-purple transition-all duration-300"
                    >
                      Start Learning
                    </motion.button>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Formats */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Multiple Learning Formats
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the format that works best for you - visual, audio, or interactive content.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: 'Articles', desc: 'In-depth written guides' },
              { icon: HeadphonesIcon, title: 'Audio', desc: 'Listen while you go' },
              { icon: Play, title: 'Videos', desc: 'Visual demonstrations' },
              { icon: Sparkles, title: 'Interactive', desc: 'Hands-on learning' },
            ].map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="holographic rounded-2xl p-6 text-center hover:glow-purple transition-all duration-300"
              >
                <format.icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-purple-300 mb-2">{format.title}</h3>
                <p className="text-gray-400 text-sm">{format.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}