import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const PhilosophySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75) {
        setIsInView(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 sm:py-44 bg-[#08080a] text-white border-t border-white/5 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7928ca]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center relative z-10 flex flex-col items-center justify-center">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8 block">
          The EGP Philosophy
        </span>

        {/* Statement 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0.45, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight uppercase leading-none select-none text-neutral-400"
        >
          Good design gets attention.
        </motion.p>

        {/* Statement 2: The Core Revelation */}
        <motion.p
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#9d4edd] leading-none text-balance"
        >
          Great design gets remembered.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest"
        >
          <span>EGP AGENCY</span>
          <span aria-hidden="true">·</span>
          <span>ESTABLISHED TO COMMUNICATE WITHOUT COMPROMISE</span>
        </motion.div>
      </div>
    </section>
  );
};
