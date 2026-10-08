import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import TopBar from './components/TopBar';
import Phase1Intro from './sections/Phase1Intro';
import Phase2WhatSheMeans from './sections/Phase2WhatSheMeans';
import Phase3Acknowledge from './sections/Phase3Acknowledge';
import Phase4WebsiteEffort from './sections/Phase4WebsiteEffort';
import Phase5PlayfulManavu from './sections/Phase5PlayfulManavu';
import Phase6FinalMessage from './sections/Phase6FinalMessage';
import Phase7FinalChoice from './sections/Phase7FinalChoice';
import ResponsesPage from './pages/ResponsesPage';

export default function App() {
  const isResponsesRoute =
    typeof window !== 'undefined' &&
    (window.location.pathname === '/responses' || window.location.hash === '#/responses');

  const [step, setStep] = useState(1);
  const [_data, setData] = useState({});

  if (isResponsesRoute) {
    return <ResponsesPage />;
  }

  const nextStep = (newData = {}) => {
    setData((prev) => ({ ...prev, ...newData }));
    setStep((prev) => prev + 1);
  };


  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleReplay = () => {
    setData({});
    setStep(1);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between bg-gradient-to-b from-[#FFF5F7] via-[#FFF0F4] to-[#FFE8EE] text-[#4A3B32] overflow-x-hidden">
      {/* Background Floating Hearts & Sparkles */}
      <FloatingHearts />

      {/* Subtle Ambient Lighting Circles */}
      <div className="fixed top-[-10%] left-[-10%] w-[380px] h-[380px] rounded-full bg-[#FFD6E0]/40 blur-3xl pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[380px] h-[380px] rounded-full bg-[#FFE5EC]/60 blur-3xl pointer-events-none" />

      {/* Top Header Navigation */}
      <TopBar step={step} totalSteps={7} onBack={prevStep} />

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center px-4 py-3 z-10 w-full max-w-[500px] mx-auto">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="phase-1" className="w-full">
              <Phase1Intro onNext={nextStep} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="phase-2" className="w-full">
              <Phase2WhatSheMeans onNext={nextStep} />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="phase-3" className="w-full">
              <Phase3Acknowledge onNext={nextStep} />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="phase-4" className="w-full">
              <Phase4WebsiteEffort onNext={nextStep} />
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="phase-5" className="w-full">
              <Phase5PlayfulManavu onNext={nextStep} />
            </motion.div>
          )}

          {step === 6 && (
            <motion.div key="phase-6" className="w-full">
              <Phase6FinalMessage onNext={nextStep} />
            </motion.div>
          )}

          {step === 7 && (
            <motion.div key="phase-7" className="w-full">
              <Phase7FinalChoice onReplay={handleReplay} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer watermark */}
      <footer className="w-full py-2.5 text-center text-xs text-[#9B8886] z-10 select-none">
        <span>Bhuma mate ❤️ sathe banavel</span>
      </footer>
    </div>

  );
}
