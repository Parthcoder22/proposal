import React, { useState } from 'react';
import { Volume2, VolumeX, ArrowLeft } from 'lucide-react';
import { soundManager } from '../utils/sound';

export default function TopBar({ step, totalSteps = 6, onBack }) {
  const [soundOn, setSoundOn] = useState(soundManager.enabled);

  const toggleSound = () => {
    const isNowOn = soundManager.toggle();
    setSoundOn(isNowOn);
    if (isNowOn) {
      soundManager.playPop();
    }
  };

  return (
    <header className="w-full max-w-[480px] mx-auto px-4 py-3 flex items-center justify-between z-20 relative">
      {/* Back button if past step 1 and before final step */}
      <div className="w-10">
        {step > 1 && step <= totalSteps ? (
          <button
            type="button"
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-white/80 border border-[#FFCCD8] text-[#7A615E] hover:text-[#E05375] hover:bg-white flex items-center justify-center transition-all shadow-sm active:scale-95"
            aria-label="Previous step"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        ) : null}
      </div>

      {/* Progress Dots */}
      <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#FFD0DE] shadow-xs">
        {Array.from({ length: totalSteps }).map((_, i) => {
          const stepNum = i + 1;
          const isActive = step === stepNum;
          const isDone = step > stepNum;

          return (
            <div
              key={i}
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? 'w-5 h-2 bg-[#FF758F]'
                  : isDone
                  ? 'w-2 h-2 bg-[#FFAFC1]'
                  : 'w-2 h-2 bg-[#FFE3EC]'
              }`}
            />
          );
        })}
      </div>

      {/* Sound Toggle */}
      <div className="w-10 flex justify-end">
        <button
          type="button"
          onClick={toggleSound}
          className="w-9 h-9 rounded-full bg-white/80 border border-[#FFCCD8] text-[#7A615E] hover:text-[#E05375] hover:bg-white flex items-center justify-center transition-all shadow-sm active:scale-95"
          title={soundOn ? 'Mute cute sounds' : 'Enable sounds'}
          aria-label={soundOn ? 'Mute cute sounds' : 'Enable sounds'}
        >
          {soundOn ? (
            <Volume2 className="w-4 h-4 text-[#E05375]" />
          ) : (
            <VolumeX className="w-4 h-4 text-[#A89896]" />
          )}
        </button>
      </div>
    </header>
  );
}
