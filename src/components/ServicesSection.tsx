import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/services';

interface ServicesSectionProps {
  onStartProject: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onStartProject }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-28 sm:py-36 bg-[#08080a] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <div className="text-xs font-mono tracking-widest text-[#9d4edd] uppercase mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7928ca]" />
            <span>Capabilities</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight uppercase">
            What We Do
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
            We combine creative thinking with digital execution to build brands people remember.
          </p>
        </div>

        {/* Five Sophisticated Service Accordion Sections */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {SERVICES.map((service, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={service.slug}
                className="py-8 sm:py-10 transition-colors duration-300 group hover:bg-white/[0.015]"
              >
                <div
                  onClick={() => toggleExpand(index)}
                  className="flex items-start justify-between gap-6 cursor-pointer select-none"
                >
                  <div className="flex items-baseline gap-6 sm:gap-12">
                    <span className="text-sm font-mono text-[#9d4edd] tracking-wider">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white group-hover:text-[#9d4edd] transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-xl">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <button
                    className="p-3 text-neutral-400 hover:text-white rounded-full bg-white/5 group-hover:bg-[#7928ca] group-hover:text-white transition-all shrink-0 mt-1"
                    aria-label={`Toggle details for ${service.title}`}
                  >
                    {isExpanded ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 sm:pt-10 pl-10 sm:pl-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                        {/* Highlight summary */}
                        <div className="md:col-span-4">
                          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                            Core Mission
                          </span>
                          <p className="text-sm text-neutral-200 leading-relaxed italic border-l-2 border-[#7928ca] pl-3">
                            "{service.highlight}"
                          </p>

                          <button
                            onClick={() => onStartProject(service.title)}
                            className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#9d4edd] transition-colors"
                          >
                            <span>Initiate {service.title}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Deliverables List */}
                        <div className="md:col-span-4">
                          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3">
                            Deliverables
                          </span>
                          <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                            {service.deliverables.map((item) => (
                              <li key={item} className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-[#7928ca]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Capabilities */}
                        <div className="md:col-span-4">
                          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3">
                            Strategic Rigor
                          </span>
                          <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                            {service.capabilities.map((cap) => (
                              <li key={cap} className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-white/40" />
                                <span>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
