import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KawaiiCharacter from '../components/KawaiiCharacter';
import CuteButton from '../components/CuteButton';
import SectionCard from '../components/SectionCard';
import { soundManager } from '../utils/sound';

export default function Phase5PlayfulManavu({ onNext }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (choice) => {
    setSelected(choice);
    if (choice === 'try') {
      soundManager.playChime();
    } else {
      soundManager.playPop();
    }
  };

  const handleNext = () => {
    soundManager.playPop();
    onNext({ manavuChoice: selected });
  };

  const characterEmotion =
    selected === 'try' ? 'happy' : selected === 'maybe' ? 'pleading' : 'pleading';

  return (
    <SectionCard>
      <div className="mb-3">
        <KawaiiCharacter emotion={characterEmotion} size={170} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 text-center"
      >
        <h2 className="font-cute text-2xl md:text-3xl text-[#3D3232] font-bold leading-snug">
          Hu ek vaar fari tane smile karavani try kari saku? 🥺
        </h2>
      </motion.div>

      {/* Choice Buttons */}
      {!selected && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full"
        >
          <CuteButton
            onClick={() => handleSelect('try')}
            variant="secondary"
            className="w-full text-base py-3.5"
          >
            Okay… try kar 😭
          </CuteButton>

          <CuteButton
            onClick={() => handleSelect('maybe')}
            variant="secondary"
            className="w-full text-base py-3.5"
          >
            Hmm… maybe 👀
          </CuteButton>
        </motion.div>
      )}

      {/* Response Reveal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full flex flex-col items-center"
          >
            <div className="w-full bg-[#FFF0F4] border-2 border-[#FFCCD8] rounded-2xl p-4.5 mb-6 text-center shadow-2xs">
              {selected === 'maybe' ? (
                <div className="text-base md:text-lg font-semibold text-[#4A3B32] leading-relaxed">
                  Okay okay… hu force nahi karu. Bas ek vaar mari vaat sambhalish? 🥺
                </div>
              ) : (
                <div className="text-base md:text-lg font-semibold text-[#4A3B32] leading-relaxed">
                  Aww... hu mari aakhi try karish ke tari smile paachi aavi jaay 🥺✨
                </div>
              )}
            </div>

            <CuteButton
              onClick={handleNext}
              variant="primary"
              size="md"
              className="w-full max-w-[240px]"
            >
              Okay, bol ne ❤️
            </CuteButton>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionCard>
  );
}
