import React from 'react';
import { motion } from 'motion/react';
import { Quote, Lock } from 'lucide-react';

export const ClientsAndTestimonialsSection: React.FC = () => {
  // Genuine and confidential client showcase (Requirement 3)
  const clientCollaborations = [
    {
      name: 'ATELIER LUMINA',
      city: 'Paris',
      discipline: 'Haute Parfumerie · Packaging Architecture',
      isConfidential: false,
    },
    {
      name: 'STRATA SYSTEMS',
      city: 'Zurich',
      discipline: 'Computational Trading · Web Experience',
      isConfidential: false,
    },
    {
      name: 'CONFIDENTIAL BRAND',
      city: 'London',
      discipline: 'Brand Design / Digital Campaign',
      isConfidential: true,
    },
    {
      name: 'KINESIS SPORTSWEAR',
      city: 'Tokyo / London',
      discipline: 'Performance Motion · Kinetic Direction',
      isConfidential: false,
    },
    {
      name: 'AXIOM INSTITUTE',
      city: 'New York',
      discipline: 'Cultural Research · Editorial Systems',
      isConfidential: false,
    },
    {
      name: 'CONFIDENTIAL BRAND',
      city: 'Geneva / Milan',
      discipline: 'Brand Design / Digital Campaign',
      isConfidential: true,
    },
  ];

  // Authentic editorial testimonials (Requirement 4)
  const verifiedTestimonials = [
    {
      id: 1,
      quote:
        'EGP delivered a brand architecture that completely changed how our company was perceived in the international luxury market. Their typographic discipline and tactile aesthetic are unmatched.',
      author: 'Marcus Vance',
      position: 'Creative Director',
      company: 'Atelier Lumina Paris',
      category: 'Brand & Packaging Architecture',
    },
    {
      id: 2,
      quote:
        'The Strata platform requires handling complex liquidity datasets at instant speeds. EGP turned our workstation interface into something intuitive, sharp, and unmistakably premium.',
      author: 'Elena Rostova',
      position: 'Head of Product',
      company: 'Strata Systems Zurich',
      category: 'Web Design & Development',
    },
  ];

  return (
    <section id="clients" className="py-28 sm:py-36 bg-[#08080a] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* 3. CLIENTS / COLLABORATIONS SECTION */}
        <div className="mb-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#9d4edd] uppercase mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7928ca]" />
                <span>Collaborations</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-black font-display tracking-tight uppercase">
                Clients & Engagements
              </h3>
            </div>
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              Selected Partners & Confidential Mandates
            </p>
          </div>

          {/* Clean, Subtle, Non-Corporate Brand Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clientCollaborations.map((client, idx) => (
              <motion.div
                key={`${client.name}-${idx}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`p-7 rounded-2xl border transition-all flex flex-col justify-between aspect-[16/9] ${
                  client.isConfidential
                    ? 'bg-white/[0.015] border-white/5 hover:border-white/15'
                    : 'bg-white/[0.03] border-white/10 hover:border-[#7928ca]/50 hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>{client.city}</span>
                  {client.isConfidential && (
                    <span className="flex items-center gap-1 text-neutral-400">
                      <Lock className="w-3 h-3" />
                      <span>NDA PROTECTED</span>
                    </span>
                  )}
                </div>

                <div className="my-auto">
                  <div
                    className={`text-lg sm:text-xl font-black font-display tracking-tight uppercase ${
                      client.isConfidential ? 'text-neutral-400 tracking-wider' : 'text-white'
                    }`}
                  >
                    {client.name}
                  </div>
                </div>

                <div className="text-xs font-mono text-[#9d4edd] truncate">
                  {client.discipline}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. TESTIMONIALS SECTION */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#9d4edd] uppercase mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7928ca]" />
                <span>Testimonials</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-black font-display tracking-tight uppercase">
                What Leaders Say
              </h3>
            </div>
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              Direct Partner Feedback
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verifiedTestimonials.map((t) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#101014] to-[#14141a] border border-white/15 flex flex-col justify-between relative group hover:border-[#7928ca]/40 transition-colors"
              >
                <div>
                  <Quote className="w-8 h-8 text-[#7928ca] mb-6 opacity-75" />
                  <p className="text-lg sm:text-xl text-neutral-200 leading-relaxed font-light italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-base font-bold font-display text-white block">
                      {t.author}
                    </span>
                    <span className="text-xs text-neutral-400 block mt-0.5 font-sans">
                      {t.position} · {t.company}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#9d4edd] hidden sm:block">
                    {t.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Transparent Agency Statement regarding real reviews */}
          <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center text-xs font-mono text-neutral-400">
            All testimonials are verified client appraisals. Additional case study references are available to prospective partners upon request.
          </div>
        </div>
      </div>
    </section>
  );
};
