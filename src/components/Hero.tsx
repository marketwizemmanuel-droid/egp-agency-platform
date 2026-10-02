import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreWork }) => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-[#08080a]">
      {/* Background Architectural Light & Subtle Purple Grid Ambient */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#7928ca]/12 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-white/[0.02] blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Editorial Typography */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Studio Tagline Marker (Clean unboxed text, anti-pill discipline) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5 text-xs font-mono tracking-widest uppercase text-neutral-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#7928ca] animate-pulse" />
              <span>International Creative & Digital Studio</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Est. 2024</span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-extrabold tracking-tight font-display leading-[0.95] text-white uppercase text-balance"
            >
              We make brands <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                impossible to
              </span> <br />
              <span className="relative inline-block text-white">
                scroll past.
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-[#7928ca] to-[#9d4edd]"
                />
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-base sm:text-lg lg:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed"
            >
              EGP Agency builds bold brands, digital experiences and content designed to make people stop, look and remember.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <button
                onClick={onStartProject}
                className="px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#7928ca] hover:bg-[#8b5cf6] rounded-full transition-all duration-200 shadow-[0_0_30px_rgba(121,40,202,0.4)] hover:shadow-[0_0_40px_rgba(121,40,202,0.6)] active:scale-95 flex items-center gap-2 group cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onExploreWork}
                className="px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-200 hover:border-white/20 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Explore Our Work</span>
                <ArrowDown className="w-4 h-4 text-neutral-400 group-hover:text-white" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Distinctive Abstract EGP Visual System */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md"
            >
              {/* Cropped Architectural Image Showcase */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#101014] group">
                <img
                  src="/src/assets/images/hero_egp_creative_1790953292284.jpg"
                  alt="EGP Agency Creative Studio Visual Architecture"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-80" />

                {/* Violet Edge Reflection */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7928ca]/30 blur-2xl pointer-events-none" />

                {/* Abstract EGP Graphic Coordinates & Monogram Overlay */}
                <div className="absolute top-5 left-5 right-5 flex justify-between items-center text-[10px] font-mono tracking-widest text-white/70 uppercase">
                  <span>REF. EGP—SYSTEM 01</span>
                  <span className="flex items-center gap-1.5 text-[#9d4edd]">
                    <Sparkles className="w-3 h-3" />
                    <span>CURATED</span>
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest mb-1">
                    Design · Technology · Strategy
                  </div>
                  <div className="text-xl font-bold font-display text-white tracking-tight">
                    Creative Work Built to Endure
                  </div>
                </div>
              </div>

              {/* Floating Accent Geometric Frame */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 border border-[#7928ca]/50 rounded-xl pointer-events-none -z-10" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar / Scroll Hint */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full pt-12 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-4">
          <span>LONDON</span>
          <span aria-hidden="true" className="text-neutral-700">/</span>
          <span>NEW YORK</span>
          <span aria-hidden="true" className="text-neutral-700">/</span>
          <span>PARIS</span>
          <span aria-hidden="true" className="text-neutral-700">/</span>
          <span>DUBAI</span>
        </div>

        <div className="flex items-center gap-2 text-neutral-400">
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#7928ca]" />
        </div>
      </div>
    </section>
  );
};
