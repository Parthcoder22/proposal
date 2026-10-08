import React from 'react';
import { motion } from 'framer-motion';
import KawaiiCharacter from '../components/KawaiiCharacter';
import CuteButton from '../components/CuteButton';
import SectionCard from '../components/SectionCard';
import { soundManager } from '../utils/sound';

export default function Phase2WhatSheMeans({ onNext }) {
  const handleClick = () => {
    soundManager.playPop();
    onNext();
  };

  const lines = [
    {
      gu: 'Tu mara mate kyarey bas ek normal person nathi rahi.',
      highlight: false,
    },
    {
      gu: 'Tu evi vyakti bani gai jeni mane kharekhar care chhe.',
      highlight: true,
    },
    {
      gu: 'Mane khabar chhe ke mane ketlik vastu late samajai… kadach jetli jaldi samajvi joi ti ena karta ghani late.',
      highlight: false,
    },
    {
      gu: 'Ane honestly… mane eno regret chhe.',
      highlight: false,
      sad: true,
    },
  ];

  return (
    <SectionCard>
      <div className="mb-2">
        <KawaiiCharacter emotion="crying" size={170} />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-handwriting text-4xl md:text-5xl text-[#3D3232] font-bold mb-4"
      >
        Tu mara mate shu chhe... 🥺
      </motion.h2>

      <div className="w-full space-y-3 mb-6">
        {lines.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + index * 0.15 }}
            className={`w-full p-4 rounded-2xl border text-left shadow-2xs ${
              item.highlight
                ? 'bg-[#FFEBF0] border-[#FFB8CB] shadow-xs'
                : item.sad
                ? 'bg-[#F2F6FC] border-[#CFE0F5]'
                : 'bg-white/95 border-[#FFDEE7]'
            }`}
          >
            <div
              className={`text-base md:text-lg leading-relaxed ${
                item.highlight
                  ? 'font-bold text-[#D83A66]'
                  : item.sad
                  ? 'font-semibold text-[#3D4F66]'
                  : 'font-semibold text-[#3D3232]'
              }`}
            >
              {item.gu}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="w-full flex justify-center"
      >
        <CuteButton
          onClick={handleClick}
          size="md"
          variant="primary"
          className="w-full max-w-[270px]"
        >
          Aji kai kehvu chhe... 👉
        </CuteButton>
      </motion.div>
    </SectionCard>
  );
}
