import React from 'react';
import { motion } from 'framer-motion';
import KawaiiCharacter from '../components/KawaiiCharacter';
import CuteButton from '../components/CuteButton';
import SectionCard from '../components/SectionCard';
import { soundManager } from '../utils/sound';

export default function Phase3Acknowledge({ onNext }) {
  const handleClick = () => {
    soundManager.playPop();
    onNext();
  };

  return (
    <SectionCard>
      <div className="mb-3">
        <KawaiiCharacter emotion="pleading" size={170} />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-cute text-2xl md:text-3xl text-[#3D3232] font-bold mb-4"
      >
        Te je kidhu hatu... 🥺
      </motion.h2>

      <div className="w-full space-y-3.5 mb-6 text-left">
        {/* Quote from her */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-[#FFF0F4] border-2 border-[#FFCCD8] rounded-2xl p-4.5 shadow-2xs"
        >
          <p className="text-base md:text-lg font-semibold text-[#4A3B32] leading-relaxed">
            “Te mane kidhu ke tane hu gamu chhu, pan have mane boyfriend tarike jovanu tane late lage chhe.”
          </p>
        </motion.div>

        {/* Understanding */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/95 border-2 border-[#FFDCE5] rounded-2xl p-4.5 shadow-2xs"
        >
          <p className="text-base md:text-lg font-semibold text-[#3D3232] leading-relaxed">
            Ane hu aa vaat samjhu chhu. Kharekhar samjhu chhu.
          </p>
        </motion.div>

        {/* Didn't want to leave unsaid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="bg-[#FFEBF0] border-2 border-[#FFB8CB] rounded-2xl p-4.5 shadow-2xs"
        >
          <p className="text-base md:text-lg font-bold text-[#D83A66] leading-relaxed">
            Pan hu mari badhi vaat kahiya vagar chhodi devu nathi mangto.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full flex justify-center"
      >
        <CuteButton
          onClick={handleClick}
          size="md"
          variant="primary"
          className="w-full max-w-[260px]"
        >
          Aa website kem banavi... 👉
        </CuteButton>
      </motion.div>
    </SectionCard>
  );
}
