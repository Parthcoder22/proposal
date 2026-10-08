import React from 'react';
import { motion } from 'framer-motion';

export default function CuteButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  icon = null,
}) {
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm md:text-base rounded-full',
    md: 'px-6 py-3.5 text-base md:text-lg rounded-full font-semibold',
    lg: 'px-8 py-4 text-lg md:text-xl rounded-full font-bold',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#FF8EA3] via-[#FF758F] to-[#FF6B8B] text-white shadow-[0_8px_20px_-4px_rgba(255,107,139,0.45)] hover:shadow-[0_12px_28px_-4px_rgba(255,107,139,0.6)] border-2 border-white/60',
    secondary:
      'bg-white/90 backdrop-blur-sm text-[#4A3B32] border-2 border-[#FFCCD5] shadow-[0_6px_16px_-4px_rgba(255,170,185,0.25)] hover:border-[#FF94A8] hover:bg-white',
    soft:
      'bg-[#FFE8EE] text-[#D84A6E] border-2 border-[#FFD0DC] hover:bg-[#FFDEE7] shadow-[0_4px_12px_rgba(255,150,170,0.15)]',
    lavender:
      'bg-gradient-to-r from-[#E8D5F5] to-[#D8B4F8] text-[#553070] border-2 border-white/70 shadow-[0_6px_16px_-4px_rgba(216,180,248,0.4)]',
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.95, y: 1 }}
      transition={{ type: 'spring', stiffness: 450, damping: 20 }}
      className={`inline-flex items-center justify-center gap-2 cursor-pointer transition-colors outline-none focus-visible:ring-4 focus-visible:ring-[#FFB6C1]/50 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="inline-block">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
}
