import React from 'react';
import { motion } from 'framer-motion';

/**
 * Expression types:
 * - 'pleading': big watery eyes, rosy cheeks, two little paws together (🥺👉👈)
 * - 'nervous': small sweatdrop, slightly tilted head, apologetic smile
 * - 'crying': cute dramatic tear drops, trembling mouth, regret
 * - 'heart': holding a glowing pink-red heart, hugging it closely
 * - 'crafting': cute laptop with floating hearts / coding with love
 * - 'happy': closed joyful curved eyes (^‿^), huge blush, waving or sparkles!
 * - 'warm': peaceful warm smile, hand over heart / gentle flower
 */
export default function KawaiiCharacter({ emotion = 'pleading', size = 180, className = '' }) {
  return (
    <motion.div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ width: size, height: size }}
    >
      {/* Soft Glow behind character */}
      <div 
        className="absolute rounded-full filter blur-xl opacity-40 transition-all duration-500 pointer-events-none"
        style={{
          width: size * 0.9,
          height: size * 0.9,
          backgroundColor:
            emotion === 'happy'
              ? '#FFADC6'
              : emotion === 'heart'
              ? '#FFAAA6'
              : emotion === 'crying'
              ? '#B3D4FC'
              : emotion === 'warm'
              ? '#FFE3EC'
              : '#FFD6E0',
        }}
      />

      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className="relative z-10 drop-shadow-md overflow-visible"
      >
        <defs>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="100%" stopColor="#FDEEE9" />
          </linearGradient>

          <linearGradient id="earInnerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFC2D4" />
            <stop offset="100%" stopColor="#FFA6C1" />
          </linearGradient>

          <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B8B" />
            <stop offset="100%" stopColor="#FF8E9E" />
          </linearGradient>

          <radialGradient id="blushGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF8BA7" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#FF8BA7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ears */}
        {/* Left Ear */}
        <motion.g
          animate={emotion === 'pleading' ? { rotate: [-2, 2, -2] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '55px 70px' }}
        >
          <ellipse cx="58" cy="56" rx="22" ry="32" fill="url(#bodyGrad)" stroke="#534340" strokeWidth="3" />
          <ellipse cx="58" cy="58" rx="13" ry="20" fill="url(#earInnerGrad)" />
        </motion.g>

        {/* Right Ear */}
        <motion.g
          animate={emotion === 'pleading' ? { rotate: [2, -2, 2] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '145px 70px' }}
        >
          <ellipse cx="142" cy="56" rx="22" ry="32" fill="url(#bodyGrad)" stroke="#534340" strokeWidth="3" />
          <ellipse cx="142" cy="58" rx="13" ry="20" fill="url(#earInnerGrad)" />
        </motion.g>

        {/* Body / Head Combined Chubby Soft Shape */}
        <path
          d="M 52,100 C 45,70 70,62 100,62 C 130,62 155,70 148,100 C 158,125 152,158 100,158 C 48,158 42,125 52,100 Z"
          fill="url(#bodyGrad)"
          stroke="#534340"
          strokeWidth="3.2"
        />

        {/* Rosy Cheeks Blush */}
        <ellipse cx="68" cy="116" rx="14" ry="9" fill="url(#blushGlow)" />
        <ellipse cx="132" cy="116" rx="14" ry="9" fill="url(#blushGlow)" />

        {/* Mini Cute Cheeks lines */}
        <line x1="63" y1="117" x2="71" y2="114" stroke="#FF5376" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="65" y1="120" x2="73" y2="117" stroke="#FF5376" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="127" y1="114" x2="135" y2="117" stroke="#FF5376" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="129" y1="117" x2="137" y2="120" stroke="#FF5376" strokeWidth="1.8" strokeLinecap="round" />

        {/* EYES & BROWS BASED ON EMOTION */}
        {emotion === 'happy' ? (
          /* Happy Joyful Curved Eyes */
          <g>
            <path
              d="M 68,106 Q 78,92 88,106"
              fill="none"
              stroke="#433533"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M 112,106 Q 122,92 132,106"
              fill="none"
              stroke="#433533"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Sparkles near eyes */}
            <path d="M 60,92 Q 62,87 64,92 Q 69,94 64,96 Q 62,101 60,96 Q 55,94 60,92 Z" fill="#FFC93C" />
            <path d="M 140,92 Q 142,87 144,92 Q 149,94 144,96 Q 142,101 140,96 Q 135,94 140,92 Z" fill="#FFC93C" />
          </g>
        ) : emotion === 'warm' ? (
          /* Gentle peaceful sweet curved eyes */
          <g>
            <path
              d="M 70,105 Q 78,98 86,105"
              fill="none"
              stroke="#433533"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <path
              d="M 114,105 Q 122,98 130,105"
              fill="none"
              stroke="#433533"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <circle cx="100" cy="85" r="2" fill="#FFAEC0" />
          </g>
        ) : emotion === 'crying' ? (
          /* Crying Dramatic Cute Eyes (Regret / Sad) */
          <g>
            <path d="M 72,88 Q 80,94 88,96" fill="none" stroke="#685551" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 128,88 Q 120,94 112,96" fill="none" stroke="#685551" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 72,104 Q 80,98 88,104" fill="none" stroke="#433533" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M 112,104 Q 120,98 128,104" fill="none" stroke="#433533" strokeWidth="3.5" strokeLinecap="round" />
            <motion.path
              d="M 70,110 C 64,124 62,138 72,138 C 82,138 78,124 74,110 Z"
              fill="#74C0FC"
              opacity="0.85"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            <motion.path
              d="M 130,110 C 126,124 122,138 132,138 C 142,138 138,124 134,110 Z"
              fill="#74C0FC"
              opacity="0.85"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
            />
          </g>
        ) : emotion === 'nervous' ? (
          /* Nervous / Apologetic Eyes */
          <g>
            <path d="M 72,88 Q 80,91 87,93" fill="none" stroke="#685551" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 128,88 Q 120,91 113,93" fill="none" stroke="#685551" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="79" cy="103" r="8.5" fill="#433533" />
            <circle cx="77" cy="100" r="3" fill="#FFFFFF" />
            <circle cx="121" cy="103" r="8.5" fill="#433533" />
            <circle cx="119" cy="100" r="3" fill="#FFFFFF" />
            <motion.path
              d="M 138,82 C 142,88 144,93 140,95 C 136,97 134,92 138,82 Z"
              fill="#85D7FF"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </g>
        ) : (
          /* Pleading / Heart / Crafting — Big Shimmering Puppy Eyes (🥺) */
          <g>
            <path d="M 72,87 Q 80,84 87,88" fill="none" stroke="#685551" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M 128,87 Q 120,84 113,88" fill="none" stroke="#685551" strokeWidth="2.6" strokeLinecap="round" />
            <ellipse cx="78" cy="103" rx="10.5" ry="12" fill="#382B29" />
            <circle cx="75" cy="98" r="4.5" fill="#FFFFFF" />
            <circle cx="82" cy="108" r="2.2" fill="#FFFFFF" />
            <ellipse cx="76" cy="109" rx="1.5" ry="1" fill="#FFFFFF" opacity="0.8" />
            <ellipse cx="122" cy="103" rx="10.5" ry="12" fill="#382B29" />
            <circle cx="119" cy="98" r="4.5" fill="#FFFFFF" />
            <circle cx="126" cy="108" r="2.2" fill="#FFFFFF" />
            <ellipse cx="120" cy="109" rx="1.5" ry="1" fill="#FFFFFF" opacity="0.8" />
          </g>
        )}

        {/* Little Cute Nose */}
        <ellipse cx="100" cy="109" rx="3.5" ry="2.5" fill="#FF8BA7" />

        {/* Mouth */}
        {emotion === 'happy' ? (
          <path
            d="M 92,114 Q 100,125 108,114"
            fill="#FF8095"
            stroke="#433533"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ) : emotion === 'warm' ? (
          <path
            d="M 94,115 Q 100,120 106,115"
            fill="none"
            stroke="#433533"
            strokeWidth="2.3"
            strokeLinecap="round"
          />
        ) : emotion === 'crying' ? (
          <path
            d="M 94,120 Q 100,114 106,120"
            fill="none"
            stroke="#433533"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ) : emotion === 'nervous' ? (
          <path
            d="M 94,116 Q 100,119 106,116"
            fill="none"
            stroke="#433533"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ) : (
          /* Cute puppy cat mouth: 3 */
          <path
            d="M 93,114 Q 97,119 100,115 Q 103,119 107,114"
            fill="none"
            stroke="#433533"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        )}

        {/* HANDS / PAWS / PROPS */}
        {emotion === 'crafting' ? (
          /* Bunny with little laptop + floating code heart */
          <g>
            {/* Laptop Base */}
            <rect x="75" y="132" width="50" height="20" rx="3" fill="#FFE8EE" stroke="#534340" strokeWidth="2.2" />
            {/* Screen */}
            <path d="M 80,132 L 84,116 L 116,116 L 120,132 Z" fill="#FFF0F5" stroke="#534340" strokeWidth="2" />
            {/* Heart symbol on screen */}
            <path d="M 100,122 C 98,119 94,120 95,123 C 96,125 100,128 100,128 C 100,128 104,125 105,123 C 106,120 102,119 100,122 Z" fill="#FF758F" />
            {/* Paws on keyboard */}
            <ellipse cx="86" cy="136" rx="6" ry="5" fill="#FFFDF9" stroke="#534340" strokeWidth="2.2" />
            <ellipse cx="114" cy="136" rx="6" ry="5" fill="#FFFDF9" stroke="#534340" strokeWidth="2.2" />
            {/* Floating floating code heart */}
            <motion.path
              d="M 100,104 C 95,94 80,98 83,110 C 85,119 100,126 100,126 C 100,126 115,119 117,110 C 120,98 105,94 100,104 Z"
              fill="url(#heartGrad)"
              opacity="0.7"
              animate={{ y: [-4, -14, -4], opacity: [0.7, 0.95, 0.7], scale: [0.7, 0.85, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '100px 110px' }}
            />
          </g>
        ) : emotion === 'warm' ? (
          /* Gentle paw over chest / holding a little flower */
          <g>
            <ellipse cx="88" cy="136" rx="7" ry="6" fill="#FFFDF9" stroke="#534340" strokeWidth="2.5" />
            <ellipse cx="112" cy="136" rx="7" ry="6" fill="#FFFDF9" stroke="#534340" strokeWidth="2.5" />
            {/* Small pink tulip / flower */}
            <circle cx="100" cy="132" r="4.5" fill="#FFB3C6" />
            <circle cx="100" cy="132" r="2.5" fill="#FFF0F5" />
            <line x1="100" y1="136" x2="100" y2="144" stroke="#7BAE7F" strokeWidth="2" strokeLinecap="round" />
          </g>
        ) : emotion === 'heart' ? (
          /* Holding Big Glowing Heart */
          <g>
            <motion.path
              d="M 100,126 C 92,112 68,118 72,138 C 75,152 100,165 100,165 C 100,165 125,152 128,138 C 132,118 108,112 100,126 Z"
              fill="url(#heartGrad)"
              stroke="#FFF"
              strokeWidth="2"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '100px 140px' }}
            />
            {/* Paws holding the heart */}
            <ellipse cx="80" cy="140" rx="7" ry="6" fill="#FFFDF9" stroke="#534340" strokeWidth="2.5" />
            <ellipse cx="120" cy="140" rx="7" ry="6" fill="#FFFDF9" stroke="#534340" strokeWidth="2.5" />
          </g>
        ) : emotion === 'happy' ? (
          /* Waving little paws with hearts in air */
          <g>
            <ellipse cx="64" cy="132" rx="8" ry="7" fill="#FFFDF9" stroke="#534340" strokeWidth="2.5" />
            <ellipse cx="136" cy="132" rx="8" ry="7" fill="#FFFDF9" stroke="#534340" strokeWidth="2.5" />
            <path
              d="M 45,75 C 41,70 32,72 34,79 C 35,84 45,89 45,89 C 45,89 55,84 56,79 C 58,72 49,70 45,75 Z"
              fill="#FF6584"
            />
            <path
              d="M 155,75 C 151,70 142,72 144,79 C 145,84 155,89 155,89 C 155,89 165,84 166,79 C 168,72 159,70 155,75 Z"
              fill="#FF6584"
            />
          </g>
        ) : (
          /* Paws together pleading (🥺👉👈) */
          <g>
            <motion.g
              animate={{ x: [-1.5, 1.5, -1.5] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ellipse cx="94" cy="136" rx="8" ry="7" fill="#FFFDF9" stroke="#534340" strokeWidth="2.5" />
              <ellipse cx="106" cy="136" rx="8" ry="7" fill="#FFFDF9" stroke="#534340" strokeWidth="2.5" />
              <line x1="97" y1="136" x2="99" y2="136" stroke="#FF9AA2" strokeWidth="2" strokeLinecap="round" />
              <line x1="101" y1="136" x2="103" y2="136" stroke="#FF9AA2" strokeWidth="2" strokeLinecap="round" />
            </motion.g>
          </g>
        )}
      </svg>
    </motion.div>
  );
}
