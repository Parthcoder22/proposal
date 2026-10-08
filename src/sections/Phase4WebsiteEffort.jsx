import React from 'react';
import { motion } from 'framer-motion';
import KawaiiCharacter from '../components/KawaiiCharacter';
import CuteButton from '../components/CuteButton';
import SectionCard from '../components/SectionCard';
import { soundManager } from '../utils/sound';

export default function Phase4WebsiteEffort({ onNext }) {
  const handleClick = () => {
    soundManager.playPop();
    onNext();
  };

  const points = [
    {
      gu: 'Hu aa website etla mate banavi ke normal chat ma hu mari badhi feelings properly samjavi nathi shakto.',
      icon: '💻',
    },
    {
      gu: 'Aa tane pressure karva mate nathi.',
      icon: '🌸',
    },
    {
      gu: 'Bas hu finally honestly kehva mangu chhu ke tu mara mate ketli important chhe.',
      icon: '💖',
      highlight: true,
    },
  ];

  return (
    <SectionCard>
      <div className="mb-2">
        <KawaiiCharacter emotion="crafting" size={175} />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0F4] text-[#E05375] text-xs font-semibold mb-3 border border-[#FFCCD8]"
      >
        <span>✨</span>
        <span>Care & honesty sathe</span>
        <span>✨</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-handwriting text-4xl md:text-5xl text-[#3D3232] font-bold mb-4"
      >
        Kem banavi aa website...
      </motion.h2>

      <div className="w-full space-y-3 mb-6 text-left">
        {points.map((pt, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + idx * 0.15 }}
            className={`p-4 rounded-2xl border flex items-start gap-3 shadow-2xs ${
              pt.highlight
                ? 'bg-[#FFEBF0] border-[#FFB8CB] shadow-xs'
                : 'bg-white/95 border-[#FFDEE7]'
            }`}
          >
            <span className="text-xl mt-0.5 select-none">{pt.icon}</span>
            <div className="flex-1">
              <div
                className={`text-base md:text-lg leading-relaxed ${
                  pt.highlight ? 'font-bold text-[#D83A66]' : 'font-semibold text-[#3D3232]'
                }`}
              >
                {pt.gu}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        className="w-full flex justify-center"
      >
        <CuteButton
          onClick={handleClick}
          size="md"
          variant="primary"
          className="w-full max-w-[260px]"
        >
          Ek vaat puchhu? 🥺
        </CuteButton>
      </motion.div>
    </SectionCard>
  );
}
