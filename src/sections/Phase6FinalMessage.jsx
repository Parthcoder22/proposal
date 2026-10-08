import React from 'react';
import { motion } from 'framer-motion';
import KawaiiCharacter from '../components/KawaiiCharacter';
import CuteButton from '../components/CuteButton';
import SectionCard from '../components/SectionCard';
import { soundManager } from '../utils/sound';

export default function Phase6FinalMessage({ onNext }) {
  const handleClick = () => {
    soundManager.playPop();
    onNext();
  };

  const messageParagraphs = [
    {
      gu: 'Bhuma, mane khabar chhe ke mane mari feelings late samajai.\nMane khabar chhe ke timing matter kare chhe.\nAne mane khabar chhe ke hu past badli nathi shakto.',
      highlight: false,
    },
    {
      gu: 'Pan jo tara mann ma thodi pan jagya hoy ke aapde genuinely ek chance try kari shakiye, to hu try karva mangu chhu.',
      highlight: true,
    },
    {
      gu: 'Tane convince karva mate nahi.\nBas kem ke mane tu kharekhar game chhe.',
      highlight: false,
      boldEnd: true,
    },
  ];

  return (
    <SectionCard>
      <div className="mb-2">
        <KawaiiCharacter emotion="heart" size={175} />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-handwriting text-4xl md:text-5xl text-[#3D3232] font-bold mb-4"
      >
        From my hearth... ❤️
      </motion.h2>

      {/* Heartfelt Letter Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full bg-[#FFF3F6] border-2 border-[#FFCCD8] rounded-2xl p-5 mb-6 text-left shadow-2xs space-y-3.5"
      >
        {messageParagraphs.map((para, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.2 }}
            className={`p-3.5 rounded-xl ${para.highlight
                ? 'bg-[#FFEBF0] border border-[#FFB8CB] -mx-1 px-4 py-3 shadow-2xs'
                : ''
              }`}
          >
            <div
              className={`text-base md:text-lg whitespace-pre-line leading-relaxed ${para.highlight
                  ? 'font-bold text-[#D83A66]'
                  : para.boldEnd
                    ? 'font-bold text-[#3D3232]'
                    : 'font-semibold text-[#4A3B32]'
                }`}
            >
              {para.gu}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        className="w-full flex justify-center"
      >
        <CuteButton
          onClick={handleClick}
          size="lg"
          variant="primary"
          className="w-full max-w-[280px]"
        >
          Last vaat, Bhuma... ❤️
        </CuteButton>
      </motion.div>
    </SectionCard>
  );
}
