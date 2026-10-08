import React from 'react';
import { motion } from 'framer-motion';

export default function SectionCard({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.97 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full max-w-[440px] mx-auto p-6 md:p-8 kawaii-card flex flex-col items-center text-center relative z-10 ${className}`}
    >
      {children}
    </motion.div>
  );
}
