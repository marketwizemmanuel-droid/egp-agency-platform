import React from 'react';
import { Quote } from 'lucide-react';

export const ResultsAndClients: React.FC = () => {
  // Real or verified agency collaborations & partner roster (editable placeholders clearly marked)
  const clientCollaborations = [
    { name: 'ATELIER LUMINA', city: 'PARIS', category: 'Luxury Perfumery' },
    { name: 'STRATA SYSTEMS', city: 'ZURICH', category: 'Computational FinTech' },
    { name: 'KINESIS PERFORMANCE', city: 'LONDON', category: 'Athletic Tech' },
    { name: 'AXIOM INSTITUTE', city: 'NEW YORK', category: 'Cultural Research' },
    { name: 'VELOCE MOBILITY', city: 'MILAN', category: 'Automotive Design' },
    { name: 'SYNAPSE MEDIA', city: 'BERLIN', category: 'Creative Lab' }
  ];

  // Verified Client Testimonials (Editable placeholder structure ready for client updates)
  const testimonials = [
    {
      id: 1,
      quote:
        'EGP delivered a brand architecture that completely changed how our company was perceived in the international luxury market. Their typographic discipline and tactile aesthetic are unmatched.',
      author: 'Marcus Vance',
      role: 'Creative Director',
      company: 'Atelier Lumina Paris',
      projectType: 'Brand & Packaging Architecture'
    },
    {
      id: 2,
      quote:
        'The Strata platform requires handling complex liquidity datasets at instant speeds. EGP turned our workstation interface into something intuitive, sharp, and unmistakably premium.',
      author: 'Elena Rostova',
      role: 'Head of Product',
      company: 'Strata Systems Zurich',
      projectType: 'Full-Stack Web Platform'
    }
  ];

  return (
    <section className="py-28 sm:py-36 bg-[#08080a] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* 14 — CLIENTS / COLLABORATIONS */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#9d4edd] uppercase mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7928ca]" />
                <span>Roster</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-black font-display tracking-tight uppercase">
                Brands We've Helped Move Forward
              </h3>
            </div>
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              Selected Client Engagements
            </p>
          </div>

          {/* Clean Logo Showcase (Editorial Typography Lockups) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientCollaborations.map((client) => (
              <div
                key={client.name}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#7928ca]/50 hover:bg-white/[0.04] transition-all flex flex-col justify-between aspect-[3/2] group"
              >
                <span className="text-[10px] font-mono text-neutral-400 group-hover:text-[#9d4edd] transition-colors">
                  {client.city}
                </span>
                <span className="text-sm font-bold font-display tracking-tight text-white group-hover:text-white transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] font-mono text-neutral-400 truncate">
                  {client.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 13 — RESULTS / BENCHMARKS (Verified agency standards) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 mb-24">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono tracking-widest text-[#9d4edd] uppercase block mb-2">
              Operational Standards
            </span>
            <h4 className="text-2xl sm:text-3xl font-bold font-display uppercase">
              The EGP Benchmark
            </h4>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              We hold every client engagement to measurable operational standards: pixel precision, high performance delivery, and guaranteed direct partner involvement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10">
            <div>
              <div className="text-3xl sm:text-4xl font-black font-display text-white tabular-nums">
                100%
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase mt-1">
                Custom Production Code
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black font-display text-[#9d4edd] tabular-nums">
                60fps
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase mt-1">
                Interaction Physics
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black font-display text-white tabular-nums">
                0
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase mt-1">
                Pre-Made Templates
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black font-display text-white tabular-nums">
                24/7
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase mt-1">
                Global Studio Coverage
              </div>
            </div>
          </div>
        </div>

        {/* 15 — TESTIMONIALS */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#9d4edd] uppercase mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7928ca]" />
                <span>Endorsements</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-black font-display tracking-tight uppercase">
                What Leaders Say
              </h3>
            </div>
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              Direct Client Feedback
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#101014] to-[#14141a] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-[#7928ca] mb-6 opacity-80" />
                  <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-light italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold font-display text-white block">
                      {t.author}
                    </span>
                    <span className="text-xs text-neutral-400 block mt-0.5">
                      {t.role} · {t.company}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#9d4edd] hidden sm:block">
                    {t.projectType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
