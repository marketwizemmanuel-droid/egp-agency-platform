import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Lightbulb, PenTool, Rocket, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onStartProject: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProject }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      tagline: 'Understand the brand, audience and objective.',
      description: 'We immerse ourselves in your market landscape, customer psychology, and competitive fault lines. We extract the core truth that makes your offering distinct before sketching a single concept.',
      icon: Compass,
      deliverables: ['Stakeholder Deep-Dives', 'Market & Cultural Audit', 'Competitive Matrix', 'Problem Definition']
    },
    {
      number: '02',
      title: 'STRATEGIZE',
      tagline: 'Build the creative and digital direction.',
      description: 'We construct a bulletproof strategic foundation: narrative hooks, positioning territory, art direction blueprints, and technology frameworks tailored for maximum commercial traction.',
      icon: Lightbulb,
      deliverables: ['Creative Direction Blueprints', 'Visual Mood Territories', 'Digital Architecture Spec', 'Messaging Framework']
    },
    {
      number: '03',
      title: 'CREATE',
      tagline: 'Design, develop, edit and execute.',
      description: 'Where imagination meets relentless craft. We iterate rapidly, refining typography, lighting, interactive physics, and motion pacing until the work becomes impossible to ignore.',
      icon: PenTool,
      deliverables: ['Brand & Graphic Artifacts', 'Interactive Prototypes', 'Production Codebases', 'Cinematic Motion Suites']
    },
    {
      number: '04',
      title: 'LAUNCH',
      tagline: 'Deliver, measure and optimize.',
      description: 'We orchestrate the reveal with surgical precision. Post-launch, we analyze real audience interaction data, tuning engagement funnels and ensuring lasting cultural footprint.',
      icon: Rocket,
      deliverables: ['Global Asset Handover', 'Launch Deployment', 'Performance Diagnostics', 'Continuous Iteration']
    }
  ];

  return (
    <section id="process" className="py-28 sm:py-36 bg-[#08080a] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#9d4edd] uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7928ca]" />
              <span>Methodology</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight uppercase">
              How We Work
            </h2>
          </div>
          <p className="text-base sm:text-lg text-neutral-400 max-w-md">
            Four disciplined stages from initial ambiguity to market-defining execution.
          </p>
        </div>

        {/* Interactive Stepper Navigation (Desktop tabs / Mobile list) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-1.5 bg-white/[0.03] border border-white/10 rounded-2xl mb-12">
          {steps.map((step, idx) => (
            <button
              key={step.title}
              onClick={() => setActiveStep(idx)}
              className={`py-3.5 px-4 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                activeStep === idx
                  ? 'bg-white/10 border border-white/15 text-white shadow-lg'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="text-xs font-mono text-[#9d4edd] mb-1">
                {step.number}
              </div>
              <div className="text-sm sm:text-base font-bold font-display uppercase tracking-tight">
                {step.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Panel */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-[#101014] to-[#16161c] border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#7928ca]/15 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#9d4edd] uppercase mb-4">
                  <span>STAGE {steps[activeStep].number}</span>
                  <span aria-hidden="true" className="text-neutral-600">/</span>
                  <span>04</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase mb-4">
                  {steps[activeStep].title}
                </h3>

                <p className="text-lg sm:text-xl font-medium text-neutral-200 mb-6">
                  {steps[activeStep].tagline}
                </p>

                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl">
                  {steps[activeStep].description}
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <button
                  onClick={onStartProject}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#7928ca] hover:bg-[#8b5cf6] rounded-full transition-colors flex items-center gap-2"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {activeStep < 3 && (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
                  >
                    Next Stage
                  </button>
                )}
              </div>
            </div>

            {/* Deliverables card */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-4">
                Stage Deliverables
              </span>
              <ul className="space-y-3 text-sm text-neutral-300">
                {steps[activeStep].deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7928ca]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
