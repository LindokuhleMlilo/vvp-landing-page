'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlowCard({ children, className = '', delay = 0 }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`holographic rounded-2xl p-6 hover:glow-purple transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}