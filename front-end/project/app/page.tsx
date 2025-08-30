'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Shield, Users, Brain, Heart, Zap } from 'lucide-react';
import { TypewriterText } from '@/components/TypewriterText';
import { GlowCard } from '@/components/GlowCard';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-cyan-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">VisionPulsePoint</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              <TypewriterText 
                text="AI-powered maternal care for rural South Africa"
                speed={80}
                delay={1000}
              />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Revolutionizing maternal healthcare through cutting-edge AI technology, 
              blockchain security, and community-driven care for every mother, everywhere.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 glow-purple"
            >
              <span>Experience the Future</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-purple-500/50 text-purple-400 hover:text-white hover:bg-purple-500/20 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 opacity-30"
        >
          <Heart className="w-8 h-8 text-purple-400" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-1/3 right-1/3 opacity-30"
        >
          <Brain className="w-6 h-6 text-cyan-400" />
        </motion.div>
      </section>

      {/* Features Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              The Future of Maternal Care
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Where artificial intelligence meets human compassion to create 
              unprecedented healthcare experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <GlowCard delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 glow-purple">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-300">AI Scan Technology</h3>
                <p className="text-gray-400">
                  Transform any smartphone into a virtual medical scanner with advanced AI diagnostics.
                </p>
              </div>
            </GlowCard>

            <GlowCard delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">Blockchain Security</h3>
                <p className="text-gray-400">
                  Immutable health records secured by blockchain technology for complete privacy and trust.
                </p>
              </div>
            </GlowCard>

            <GlowCard delay={0.6}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 glow-purple">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Community Driven</h3>
                <p className="text-gray-400">
                  Connecting mothers, healthcare workers, and communities in a supportive ecosystem.
                </p>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="holographic rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Ready to Transform Maternal Care?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the revolution in healthcare technology. Be part of the future where 
              every mother has access to world-class care, powered by AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/features">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 glow-purple"
                >
                  <Zap className="w-5 h-5" />
                  <span>Explore Features</span>
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-purple-500/50 text-purple-400 hover:text-white hover:bg-purple-500/20 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}