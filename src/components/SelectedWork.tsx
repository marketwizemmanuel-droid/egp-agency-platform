import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

interface SelectedWorkProps {
  projects: Project[];
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllArchive, setShowAllArchive] = useState<boolean>(false);

  const categories = [
    'All',
    'Branding',
    'Graphic Design',
    'Digital Marketing',
    'Web Design & Development',
    'Video Production',
    'Motion Graphics',
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category.toLowerCase() === activeFilter.toLowerCase();
  });

  const displayedProjects = showAllArchive
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  return (
    <section id="work" className="py-28 sm:py-36 bg-[#08080a] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-10">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#9d4edd] uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7928ca]" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight uppercase">
              Selected Work
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-xl">
              Ideas built to be seen. Experiences built to be remembered.
            </p>
          </div>

          {/* Interactive Filter Controls (Allowed buttons for filtering) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/[0.04] border border-white/10 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#7928ca] text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Large Editorial Compositions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {displayedProjects.map((project, index) => {
            // Asymmetric cadence: alternating large span and compact span
            const isWide = index % 3 === 0;
            const colSpan = isWide ? 'lg:col-span-12' : 'lg:col-span-6';
            const aspectClass = isWide ? 'aspect-[16/9] lg:aspect-[21/9]' : 'aspect-[4/3]';

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedProject(project)}
                className={`${colSpan} group cursor-pointer flex flex-col justify-between`}
              >
                {/* Visual Media Container with Zoom & Glaze */}
                <div
                  className={`relative ${aspectClass} rounded-2xl overflow-hidden border border-white/10 bg-[#101014] transition-all duration-500 group-hover:border-[#7928ca]/50 group-hover:shadow-[0_0_35px_rgba(121,40,202,0.25)]`}
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

                  {/* Corner Accent badge with Action */}
                  <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#08080a]/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:bg-[#7928ca] group-hover:border-[#7928ca] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  {/* Floating Year / Category indicator */}
                  <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end text-xs font-mono tracking-widest text-neutral-300">
                    <span className="text-white/80">{project.category}</span>
                    <span className="text-white/60">{project.year}</span>
                  </div>
                </div>

                {/* Editorial Metadata & Title below image */}
                <div className="mt-5 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white group-hover:text-[#9d4edd] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Services Provided (Clean unboxed text metadata) */}
                  {project.services && project.services.length > 0 && (
                    <div className="flex flex-wrap items-center gap-x-2 text-xs font-mono text-[#9d4edd]">
                      {project.services.slice(0, 3).map((service, idx) => (
                        <span key={service} className="flex items-center gap-1.5">
                          <span>{service}</span>
                          {idx < Math.min(project.services.length, 3) - 1 && (
                            <span aria-hidden="true" className="text-neutral-600">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-sm text-neutral-400 line-clamp-2 max-w-2xl leading-relaxed mt-1">
                    {project.shortDescription}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* View All Work / Archive Toggle */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            Showing {displayedProjects.length} of {filteredProjects.length} Archive Projects
          </div>

          <button
            onClick={() => setShowAllArchive(!showAllArchive)}
            className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 rounded-full transition-all duration-200 cursor-pointer"
          >
            {showAllArchive ? 'Show Featured Only' : 'View All Work'}
          </button>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onSelectProject={(p) => setSelectedProject(p)}
            allProjects={projects}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
