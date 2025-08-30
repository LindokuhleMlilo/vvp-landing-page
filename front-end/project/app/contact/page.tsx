'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Download, Calendar, Globe, Sparkles } from 'lucide-react';
import { GlowCard } from '@/components/GlowCard';

export default function Contact() {
  const [timeLeft, setTimeLeft] = useState({
    days: 47,
    hours: 12,
    minutes: 34,
    seconds: 22
  });

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
              Get Connected
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join the revolution in maternal healthcare. Be among the first to experience 
              the future of AI-powered medical care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* App Download Countdown */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="holographic rounded-3xl p-12 text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 glow-purple">
              <Download className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              App Launch Countdown
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              The VisionPulsePoint mobile app is almost ready for launch!
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 mb-8 max-w-md mx-auto">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' }
              ].map((unit, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-purple-500/20">
                  <div className="text-2xl font-bold gradient-text">{unit.value}</div>
                  <div className="text-sm text-gray-400">{unit.label}</div>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 glow-purple mx-auto"
            >
              <Bell className="w-5 h-5" />
              <span>Notify Me at Launch</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-400">
              Have questions about VisionPulsePoint? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <GlowCard>
              <h3 className="text-2xl font-semibold text-purple-300 mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-800 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-slate-800 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Role</label>
                  <select className="w-full bg-slate-800 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Expectant Mother</option>
                    <option>Healthcare Provider</option>
                    <option>Community Health Worker</option>
                    <option>Researcher</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full bg-slate-800 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Tell us about your interest in VisionPulsePoint..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 glow-purple"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </GlowCard>

            {/* Contact Info */}
            <div className="space-y-8">
              <GlowCard>
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">
                    Book a Demo
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Schedule a personalized demonstration of VisionPulsePoint's capabilities.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-purple-500/50 text-purple-400 hover:bg-purple-500/20 px-6 py-2 rounded-full font-semibold transition-all duration-300"
                  >
                    Schedule Demo
                  </motion.button>
                </div>
              </GlowCard>

              <GlowCard>
                <div className="text-center">
                  <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                    Join Our Community
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Connect with other mothers and healthcare providers in our growing community.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 px-6 py-2 rounded-full font-semibold transition-all duration-300"
                  >
                    Join Community
                  </motion.button>
                </div>
              </GlowCard>

              <GlowCard>
                <div className="text-center">
                  <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">
                    Early Access Program
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Be among the first to experience VisionPulsePoint's revolutionary features.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold glow-purple"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="holographic rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold gradient-text mb-4">
              Privacy & Security Notice
            </h2>
            <p className="text-gray-400 leading-relaxed">
              <strong className="text-purple-300">Important:</strong> VisionPulsePoint is designed to augment, 
              not replace, professional medical care. Always consult with qualified healthcare providers 
              for medical decisions. Your data is protected by advanced blockchain encryption and 
              privacy protocols.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const Bell = Calendar; // Using Calendar as Bell placeholder