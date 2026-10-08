import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KawaiiCharacter from '../components/KawaiiCharacter';
import CuteButton from '../components/CuteButton';
import SectionCard from '../components/SectionCard';
import { soundManager } from '../utils/sound';
import { fireHeartConfetti, gentleHeartShower } from '../utils/confetti';
import { recordResponse } from '../utils/supabase';
import { RotateCcw } from 'lucide-react';

export default function Phase7FinalChoice({ onReplay }) {
  const [decision, setDecision] = useState(null); // 'yes' | 'not-ready' | null

  const handleChoice = (choice) => {
    // 1. Instantly trigger UI response without any waiting
    setDecision(choice);

    // 2. Play animations and sounds
    if (choice === 'yes') {
      soundManager.playChime();
      fireHeartConfetti();
      gentleHeartShower();
    } else {
      soundManager.playPop();
    }

    // 3. Silently record choice in the background (fire and forget)
    recordResponse(choice === 'yes' ? 'YES' : 'NOT_READY');
  };


  const handleReplayClick = () => {
    soundManager.playPop();
    onReplay();
  };

  const characterEmotion =
    decision === 'yes' ? 'happy' : decision === 'not-ready' ? 'warm' : 'pleading';

  return (
    <SectionCard className="p-5 sm:p-7 md:p-8">
      {/* Top Character */}
      <div className="mb-2">
        <KawaiiCharacter
          emotion={characterEmotion}
          size={decision ? 180 : 140}
        />
      </div>

      <AnimatePresence mode="wait">
        {!decision ? (
          /* Initial Question Screen */
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full flex flex-col items-center"
          >
            {/* Cute Child Message Card with Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="w-full bg-[#FFF3F6] border-2 border-[#FFCCD8] rounded-2xl p-3 sm:p-4 mb-4 shadow-2xs flex flex-row items-center gap-3 sm:gap-4 text-left"
            >
              {/* Photo with soft cute frame */}
              <div className="relative shrink-0">
                <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden border-2 border-white shadow-md bg-white">
                  <img
                    src="/bhuma_photo.jpg"
                    alt="Bhuma with cute child"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Heart decoration */}
                <span className="absolute -top-1.5 -right-1.5 text-sm select-none filter drop-shadow-xs">
                  💖
                </span>
              </div>

              {/* Child's Cute Dialogue */}
              <div className="flex-1 min-w-0">
                {/* Subtle tag */}
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E05375] uppercase tracking-wide mb-1">
                  <span>👶</span>
                  <span>Ek cute si request:</span>
                </div>

                {/* Marathi Message */}
                <div className="text-xs sm:text-sm font-bold text-[#3D3232] leading-snug">
                  “Bhuma didi, mani ja na 🥺❤️<br />
                  Ha dada khup changla aahe… tyala ek chance de na! 🥹👉👈”
                </div>

                {/* Gujarati Meaning */}
                <div className="text-[11px] sm:text-xs font-medium text-[#996D76] mt-1.5 italic leading-snug border-t border-[#FFDCE5] pt-1">
                  “Bhuma didi, mani ja ne 🥺❤️<br />
                  Aa dada khub saro chhe… ene ek chance aap ne! 🥹👉👈”
                </div>
              </div>
            </motion.div>

            {/* Main Question */}
            <div className="mb-5 text-center">
              <h2 className="font-cute text-xl sm:text-2xl md:text-3xl text-[#3D3232] font-bold leading-snug">
                To Bhuma… tane honestly shu lage chhe?
              </h2>
            </div>

            {/* Final Choice Buttons */}
            <div className="flex flex-col gap-3 w-full">
              <CuteButton
                onClick={() => handleChoice('yes')}
                variant="primary"
                size="lg"
                className="w-full py-3.5 sm:py-4 text-base sm:text-lg shadow-[0_8px_20px_-4px_rgba(255,107,139,0.5)]"
              >
                Okay… let’s give it a chance ❤️
              </CuteButton>

              <CuteButton
                onClick={() => handleChoice('not-ready')}
                variant="secondary"
                size="md"
                className="w-full py-3 sm:py-3.5 text-sm sm:text-base text-[#6B5553]"
              >
                I’m still not ready 🥺
              </CuteButton>
            </div>
          </motion.div>
        ) : decision === 'yes' ? (
          /* YES Celebration Screen */
          <motion.div
            key="yes-response"
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full flex flex-col items-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 14 }}
              className="text-4xl md:text-5xl font-handwriting font-bold text-[#E03164] mb-2"
            >
              Thank you, Bhuma ❤️
            </motion.div>

            <div className="w-full bg-[#FFF0F5] border-2 border-[#FFC2D4] rounded-2xl p-5 mb-5 text-center shadow-xs">
              <p className="text-base md:text-lg font-bold text-[#3D3232] leading-relaxed">
                Okay… to pachi dhime dhime start kariye. Koi pressure nahi, koi unnecessary expectations nahi. Bas aapde banne honestly. ❤️
              </p>
            </div>

            <p className="text-[#876E6C] text-xs md:text-sm font-medium italic mb-6">
              — ek vyakti taraf thi jene tari kharekhar care chhe ❤️
            </p>

            <CuteButton
              onClick={handleReplayClick}
              variant="secondary"
              size="sm"
              icon={<RotateCcw className="w-4 h-4 text-[#E05375]" />}
              className="text-sm text-[#7D6361] hover:text-[#E05375] px-5 py-2.5"
            >
              Replay 🥺
            </CuteButton>
          </motion.div>
        ) : (
          /* NOT READY Respectful Response Screen */
          <motion.div
            key="not-ready-response"
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full flex flex-col items-center"
          >
            <div className="w-full bg-[#FFF8FA] border-2 border-[#FFDEE7] rounded-2xl p-5 mb-4 text-center shadow-2xs">
              <p className="text-base md:text-lg font-bold text-[#3D3232] leading-relaxed">
                Okay. Mari sathe honestly vaat kari ena mate thank you. ❤️
              </p>
            </div>

            <div className="w-full bg-[#FFF2F6] border border-[#FFCCD8] rounded-2xl p-4.5 mb-5 text-center shadow-2xs">
              <p className="text-base md:text-lg font-bold text-[#D83A66] leading-relaxed">
                Tu hamesha mara mate ek special person rahish.
              </p>
            </div>

            <p className="text-[#876E6C] text-xs md:text-sm font-medium italic mb-6">
              — mari feelings sambhadva mate thank you 🌸
            </p>

            <CuteButton
              onClick={handleReplayClick}
              variant="secondary"
              size="sm"
              icon={<RotateCcw className="w-4 h-4 text-[#E05375]" />}
              className="text-sm text-[#7D6361] hover:text-[#E05375] px-5 py-2.5"
            >
              Replay 🥺
            </CuteButton>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionCard>
  );
}
