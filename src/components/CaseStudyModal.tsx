import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  allProjects: Project[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#08080a]/95 backdrop-blur-xl text-white">
        {/* Sticky top action bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 sm:px-12 py-5 bg-[#08080a]/90 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3 text-xs font-mono tracking-wider text-neutral-400 uppercase">
            <span>EGP / Case Study</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-white">{project.category}</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Prev / Next controls */}
            <div className="hidden sm:flex items-center gap-1 text-xs font-mono text-neutral-400">
              <button
                onClick={() => onSelectProject(prevProject)}
                className="p-2 hover:text-white transition-colors"
                title="Previous Case Study"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <span>{currentIndex + 1} / {allProjects.length}</span>
              <button
                onClick={() => onSelectProject(nextProject)}
                className="p-2 hover:text-white transition-colors"
                title="Next Case Study"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Case Study Content */}
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12 lg:py-16">
          {/* Main Title & Client */}
          <div className="mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-[#9d4edd] mb-3">
              {project.overview.client} — {project.overview.year}
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase text-balance leading-[1.05]">
              {project.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-3xl leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Full-width Hero Visual */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 mb-16 shadow-2xl bg-[#101014]">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Section 01: Overview */}
          <section className="border-t border-white/10 pt-10 pb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
              01 — OVERVIEW
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <span className="text-xs font-mono uppercase text-neutral-400 block mb-1">Client</span>
                <span className="text-sm font-semibold text-white">{project.overview.client}</span>
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-neutral-400 block mb-1">Year</span>
                <span className="text-sm font-semibold text-white">{project.overview.year}</span>
              </div>
              <div className="md:col-span-2">
                <span className="text-xs font-mono uppercase text-neutral-400 block mb-1">Services</span>
                <div className="flex flex-wrap gap-2 mt-1 text-sm text-neutral-300">
                  {project.overview.services.map((s, i) => (
                    <span key={s}>
                      {s}{i < project.overview.services.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-8 text-neutral-300 leading-relaxed text-base sm:text-lg">
              {project.overview.summary}
            </p>
          </section>

          {/* Section 02 & 03: Challenge and Strategy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 py-16">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                02 — THE CHALLENGE
              </div>
              <p className="text-neutral-300 leading-relaxed text-base">
                {project.challenge}
              </p>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#9d4edd] mb-4">
                03 — THE STRATEGY
              </div>
              <p className="text-neutral-300 leading-relaxed text-base">
                {project.strategy}
              </p>
            </div>
          </div>

          {/* Gallery showcase visual */}
          {project.galleryImages && project.galleryImages.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {project.galleryImages.map((img, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[#101014]">
                  <img
                    src={img}
                    alt={`${project.title} perspective ${idx + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Section 04 & 05: Creative Direction and Execution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 py-16">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                04 — CREATIVE DIRECTION
              </div>
              <p className="text-neutral-300 leading-relaxed text-base">
                {project.creative}
              </p>
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                05 — EXECUTION
              </div>
              <p className="text-neutral-300 leading-relaxed text-base">
                {project.execution}
              </p>
            </div>
          </div>

          {/* Section 06: Results (ONLY when verified) */}
          {project.results && project.results.verified && (
            <section className="border-t border-white/10 pt-16 pb-20">
              <div className="text-xs font-mono uppercase tracking-widest text-[#9d4edd] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7928ca]" />
                <span>06 — VERIFIED RESULTS</span>
              </div>
              {project.results.metrics && project.results.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                  {project.results.metrics.map((m, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-xs text-neutral-400 mt-1 uppercase font-mono">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {project.results.statement && (
                <p className="text-neutral-300 leading-relaxed italic text-base">
                  "{project.results.statement}"
                </p>
              )}
            </section>
          )}

          {/* Next Project Footer Switcher */}
          <div className="border-t border-white/10 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase text-neutral-400 block mb-1">Next Campaign</span>
              <button
                onClick={() => onSelectProject(nextProject)}
                className="text-2xl sm:text-3xl font-bold font-display text-white hover:text-[#9d4edd] transition-colors flex items-center gap-2 group text-left"
              >
                <span>{nextProject.title}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
            >
              Back to Selected Work
            </button>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
