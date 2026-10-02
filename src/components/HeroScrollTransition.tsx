import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const HeroScrollTransition: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far container has scrolled into view (0 to 1)
      const total = rect.height + windowHeight;
      const current = windowHeight - rect.top;
      const progress = Math.min(Math.max(current / total, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = [
    { text: 'DESIGN.', activeThreshold: 0.15 },
    { text: 'DIGITAL.', activeThreshold: 0.35 },
    { text: 'MOTION.', activeThreshold: 0.55 },
    { text: 'STRATEGY.', activeThreshold: 0.75 },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-28 sm:py-36 bg-[#08080a] border-y border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col items-start gap-4 sm:gap-6">
          <div className="text-xs font-mono tracking-widest text-[#9d4edd] uppercase mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7928ca]" />
            <span>The Four Pillars</span>
          </div>

          {words.map((item, idx) => {
            const isRevealed = scrollProgress >= item.activeThreshold;
            return (
              <motion.div
                key={item.text}
                className="w-full flex items-baseline justify-between border-b border-white/[0.04] pb-4 sm:pb-6 group transition-colors duration-500"
              >
                <span
                  className={`text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black font-display tracking-tight transition-all duration-700 select-none ${
                    isRevealed
                      ? 'text-white translate-x-0'
                      : 'text-neutral-800 -translate-x-2'
                  }`}
                >
                  {item.text}
                </span>

                <span
                  className={`text-xs sm:text-sm font-mono tracking-widest transition-colors duration-500 ${
                    isRevealed ? 'text-[#9d4edd]' : 'text-neutral-800'
                  }`}
                >
                  0{idx + 1}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
