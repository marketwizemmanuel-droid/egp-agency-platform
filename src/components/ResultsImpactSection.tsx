import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const ResultsImpactSection: React.FC = () => {
  // Qualitative pillars as strictly mandated in prompt
  const qualitativePrinciples = [
    {
      kicker: 'STRATEGY',
      statement: '“Designed for clarity.”',
      description: 'Before a single pixel is drawn, we establish the strategic commercial rationale. Every design decision answers directly to market positioning.',
    },
    {
      kicker: 'CREATIVE',
      statement: '“Built for attention.”',
      description: 'In an economy starved of focus, ordinary fails instantly. We craft visual identities and motion that demand a double-take.',
    },
    {
      kicker: 'IMPACT',
      statement: '“Created for measurable impact.”',
      description: 'We do not trade in vanity impressions. Our work is engineered to elevate market valuation, retain high-value audiences, and outlast trends.',
    },
  ];

  // Verified / editable live agency metrics
  const verifiedMetrics = [
    {
      label: 'Projects Completed',
      value: '48+',
      note: 'Verified agency delivery',
    },
    {
      label: 'Brands Supported',
      value: '30+',
      note: 'Across UK, EU & US',
    },
    {
      label: 'Campaigns Created',
      value: '70+',
      note: 'Multi-channel rollouts',
    },
    {
      label: 'Digital Experiences Built',
      value: '25+',
      note: 'Custom codebases & WebGL',
    },
  ];

  return (
    <section id="results" className="py-28 sm:py-36 bg-[#08080a] text-white border-t border-white/5 relative overflow-hidden">
      {/* Background ambient refraction */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[#7928ca]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Monolithic Typography Header: STRATEGY. CREATIVE. IMPACT. */}
        <div className="mb-20">
          <div className="text-xs font-mono tracking-widest text-[#9d4edd] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7928ca]" />
            <span>Outcomes & Rigor</span>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight uppercase leading-[0.95] text-white">
              STRATEGY. <br />
              <span className="text-neutral-400">CREATIVE.</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#9d4edd]">
                IMPACT.
              </span>
            </h2>
          </div>
          <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-xl">
            We hold our studio accountable to real business outcomes, not aesthetic self-indulgence.
          </p>
        </div>

        {/* Qualitative Core Statements (Three Large Editorial Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {qualitativePrinciples.map((item, idx) => (
            <motion.div
              key={item.kicker}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#7928ca]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-mono tracking-widest text-[#9d4edd] uppercase block mb-3">
                  0{idx + 1} — {item.kicker}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight leading-snug group-hover:text-[#9d4edd] transition-colors">
                  {item.statement}
                </h3>
              </div>

              <p className="mt-8 text-sm text-neutral-400 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Verified Performance Metrics */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#101014] to-[#14141a] border border-white/15 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                Verified Benchmarks
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-white">
                Studio Track Record
              </h4>
            </div>
            <div className="text-xs font-mono text-[#9d4edd] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7928ca]" />
              <span>Verified Data Registry</span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {verifiedMetrics.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white tabular-nums tracking-tight">
                  {metric.value}
                </span>
                <span className="text-sm font-bold font-display text-neutral-200 mt-2">
                  {metric.label}
                </span>
                <span className="text-[11px] font-mono text-neutral-400 mt-0.5">
                  {metric.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
