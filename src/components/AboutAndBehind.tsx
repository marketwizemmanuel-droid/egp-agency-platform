import React from 'react';
import { motion } from 'motion/react';

export const AboutAndBehind: React.FC = () => {
  const approaches = [
    {
      pillar: 'Creativity',
      description: 'We reject formulaic patterns and safe mediocrity. True creativity provokes emotion and demands a double take.'
    },
    {
      pillar: 'Strategy',
      description: 'Design without strategic positioning is merely decoration. Every visual decision ties directly to commercial intent.'
    },
    {
      pillar: 'Design',
      description: 'Typography, balance, light, and tactile detail executed with uncompromising Swiss and brutalist discipline.'
    },
    {
      pillar: 'Technology',
      description: 'Engineered for sub-second performance, fluid 60fps interaction, and scalable modular code architecture.'
    },
    {
      pillar: 'Communication',
      description: 'Clear, fearless, and human. We articulate complex ideas with immediate clarity and irresistible resonance.'
    }
  ];

  return (
    <section id="about" className="py-28 sm:py-36 bg-[#08080a] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* 10 — ABOUT EGP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-24 border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono tracking-widest text-[#9d4edd] uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7928ca]" />
              <span>About EGP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black font-display tracking-tight uppercase leading-[1.05] text-balance">
              Creative thinking. <br />
              Digital execution. <br />
              <span className="text-[#9d4edd]">Real impact.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <p className="text-lg sm:text-2xl text-neutral-300 font-light leading-relaxed">
              EGP is an international creative and digital studio built for ambitious brands that refuse to blend into the background.
            </p>

            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-sm sm:text-base font-bold font-display text-white block">Design</span>
                <span className="text-[11px] font-mono text-neutral-400 mt-1 block">Visual Mastery</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-sm sm:text-base font-bold font-display text-white block">Technology</span>
                <span className="text-[11px] font-mono text-neutral-400 mt-1 block">Digital Craft</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-sm sm:text-base font-bold font-display text-white block">Marketing</span>
                <span className="text-[11px] font-mono text-neutral-400 mt-1 block">Audience Reach</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-sm sm:text-base font-bold font-display text-white block">Strategy</span>
                <span className="text-[11px] font-mono text-neutral-400 mt-1 block">Commercial Rigor</span>
              </div>
            </div>

            <p className="mt-8 text-sm sm:text-base text-neutral-400 leading-relaxed">
              By fusing these four disciplines under one roof, we help brands communicate better, look better and become truly unforgettable. We operate without bureaucratic layers: direct collaboration, sharp timelines, and relentless attention to detail.
            </p>
          </div>
        </div>

        {/* 11 — BEHIND EGP */}
        <div className="pt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#9d4edd] uppercase mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7928ca]" />
                <span>The Studio DNA</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-black font-display tracking-tight uppercase">
                Behind EGP
              </h3>
            </div>
            <p className="text-base sm:text-lg text-neutral-300 max-w-xl italic">
              “EGP was built around a simple belief: great ideas deserve great execution.”
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approaches.map((item, idx) => (
              <motion.div
                key={item.pillar}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#7928ca]/40 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#9d4edd] tracking-wider block mb-3">
                    0{idx + 1}
                  </span>
                  <h4 className="text-xl font-bold font-display text-white group-hover:text-[#9d4edd] transition-colors">
                    {item.pillar}
                  </h4>
                </div>
                <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}

            {/* Final Highlight Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#101014] to-[#16161c] border border-white/15 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-neutral-400 tracking-wider block mb-3">
                  06
                </span>
                <h4 className="text-xl font-bold font-display text-white">
                  The Standard
                </h4>
              </div>
              <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                Zero template compromises. Zero generic filler. Every piece of work we release is crafted to define its category.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
