import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KawaiiCharacter from '../components/KawaiiCharacter';
import CuteButton from '../components/CuteButton';
import SectionCard from '../components/SectionCard';
import { soundManager } from '../utils/sound';

export default function Phase1Intro({ onNext }) {
  const [stage, setStage] = useState(0);

  const feelings = [
    {
      gu: 'Kyaarek khabar j na padi ane tu evi vyakti bani gai jeno ek message maro akho divas saro kari shake.',
      icon: '💬',
    },
    {
      gu: 'Hu tara messages ni jetli wait karto hato, eni tane kadach kyarey khabar pan nahi padi.',
      icon: '⏳',
    },
    {
      gu: 'Taro message aavto tyare mane kharekhar khushi thati.',
      icon: '✨',
    },
    {
      gu: 'Mane tari sathe vaat karvi etli game chhe ke kyarek time kya jato rehto eni mane khabar pan na padti.',
      icon: '🌙',
    },
    {
      gu: 'Ane ha… kyarek hu bas tari photos joto rehto, kem ke mane tane jovu game chhe.',
      icon: '📸',
    },
  ];

  const handleInitialNext = () => {
    soundManager.playPop();
    setStage(1);
  };

  const handleFinalNext = () => {
    soundManager.playPop();
    onNext();
  };

  return (
    <SectionCard>
      <AnimatePresence mode="wait">
        {stage === 0 ? (
          <motion.div
            key="stage-0"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="w-full flex flex-col items-center"
          >
            <div className="mb-3">
              <KawaiiCharacter emotion="pleading" size={170} />
            </div>

            {/* Cute Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFEBF0] text-[#E05375] text-xs font-semibold uppercase mb-4 border border-[#FFD0DD]">
              <span>🌸</span>
              <span>Tara mate ek personal sandesh</span>
              <span>🌸</span>
            </div>

            {/* Intro Header */}
            <h1 className="font-handwriting text-5xl md:text-6xl text-[#3D3232] font-bold tracking-tight mb-3">
              Bhuma... 🥺
            </h1>

            {/* Message 1 */}
            <div className="w-full bg-[#FFF3F6] border-2 border-[#FFD0DE] rounded-2xl p-4.5 mb-3.5 shadow-2xs">
              <p className="text-base md:text-lg font-semibold text-[#4A3B32] leading-relaxed">
                Bhuma… mare tane aa vakhat kai proper rite kehvu hatu. Aa vakhat normal chat ma nahi.
              </p>
            </div>

            {/* Message 2 */}
            <div className="w-full bg-[#FFF8FA] border border-[#FFDEE7] rounded-2xl p-3.5 mb-6">
              <p className="text-sm md:text-base font-medium text-[#7D5F66] leading-relaxed">
                Mane khabar nathi ke hu badhu perfectly kahi shakish ke nahi… pan hu try karva mangu chhu.
              </p>
            </div>

            <CuteButton
              onClick={handleInitialNext}
              size="lg"
              variant="primary"
              className="w-full max-w-[240px] animate-pulse-cute shadow-[0_10px_25px_-5px_rgba(255,107,139,0.5)]"
            >
              Sambhalish? 🥺
            </CuteButton>
          </motion.div>
        ) : (
          <motion.div
            key="stage-1"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="w-full flex flex-col items-center"
          >
            <div className="mb-2">
              <KawaiiCharacter emotion="heart" size={160} />
            </div>

            <h2 className="font-cute text-xl md:text-2xl text-[#3D3232] font-bold mb-3.5">
              Mane kevu feel thatu hatu... 🌸
            </h2>

            {/* Feelings Cards List */}
            <div className="space-y-3 w-full mb-6">
              {feelings.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.12 }}
                  className="bg-white/95 border-2 border-[#FFD3DF] rounded-2xl p-3.5 shadow-2xs text-left flex items-start gap-3"
                >
                  <span className="text-xl mt-0.5 select-none">{item.icon}</span>
                  <div className="text-sm md:text-base font-semibold text-[#4A3B32] leading-relaxed flex-1">
                    {item.gu}
                  </div>
                </motion.div>
              ))}
            </div>

            <CuteButton
              onClick={handleFinalNext}
              size="md"
              variant="primary"
              className="w-full max-w-[240px]"
            >
              Aagal bolu? 🥺
            </CuteButton>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionCard>
  );
}
