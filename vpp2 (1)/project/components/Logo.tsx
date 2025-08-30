'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 group">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center glow-purple">
          <Heart className="w-6 h-6 text-white" fill="currentColor" />
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1 -right-1"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
        </motion.div>
      </motion.div>
      
      <div className="flex flex-col">
        <motion.span 
          className="text-xl font-bold gradient-text group-hover:scale-105 transition-transform duration-200"
        >
          VisionPulsePoint
        </motion.span>
        <span className="text-xs text-gray-400 -mt-1">AI Health Platform</span>
      </div>
    </Link>
  );
}