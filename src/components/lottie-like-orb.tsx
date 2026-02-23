"use client";

import { motion } from 'framer-motion';

export function LottieLikeOrb() {
  return (
    <div className="relative mx-auto h-72 w-72 sm:h-96 sm:w-96">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
        className="absolute inset-0 rounded-full border border-primary/30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 14, ease: 'linear', repeat: Infinity }}
        className="absolute inset-6 rounded-full border border-primary/50"
      />
      <motion.div
        animate={{ scale: [1, 1.14, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/60 via-purple-500/40 to-cyan-400/40 blur-md"
      />
      <motion.div
        animate={{ y: [0, -12, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-10 top-12 h-10 w-10 rounded-full bg-cyan-300/60 blur-sm"
      />
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-12 right-10 h-12 w-12 rounded-full bg-fuchsia-300/60 blur-sm"
      />
    </div>
  );
}
