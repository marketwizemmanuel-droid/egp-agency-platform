import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface OpeningAnimationProps {
  onComplete: () => void;
}

export const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  useEffect(() => {
    // Step 0: "EGP" (0ms - 800ms)
    // Step 1: "EGP AGENCY" (800ms - 1700ms)
    // Step 2: "WE MAKE BRANDS IMPOSSIBLE TO SCROLL PAST." (1700ms - 2700ms)
    // Step 3: Complete / fade into site
    const timer1 = setTimeout(() => setStep(1), 750);
    const timer2 = setTimeout(() => setStep(2), 1600);
    const timer3 = setTimeout(() => {
      setIsDismissed(true);
      setTimeout(onComplete, 400);
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsDismissed(true);
    setTimeout(onComplete, 200);
  };

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08080a] text-white px-6 cursor-pointer select-none"
          onClick={handleSkip}
        >
          {/* Subtle background ambient purple refraction */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7928ca]/15 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-4xl text-center flex flex-col items-center justify-center">
            {step === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter font-display"
              >
                EGP
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tight font-display text-white"
              >
                EGP <span className="text-[#9d4edd]">AGENCY</span>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-200 uppercase font-display max-w-2xl leading-snug"
              >
                WE MAKE BRANDS <br />
                <span className="text-white">IMPOSSIBLE TO SCROLL PAST.</span>
              </motion.div>
            )}
          </div>

          {/* Quick enter hint */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase text-neutral-500 hover:text-neutral-300 transition-colors">
            Click anywhere to enter · Skip
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
