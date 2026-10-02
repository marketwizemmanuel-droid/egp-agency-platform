import { useState } from 'react';
import { OpeningAnimation } from './components/OpeningAnimation';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { HeroScrollTransition } from './components/HeroScrollTransition';
import { AboutAndBehind } from './components/AboutAndBehind';
import { PhilosophySection } from './components/PhilosophySection';
import { SelectedWork } from './components/SelectedWork';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { ResultsImpactSection } from './components/ResultsImpactSection';
import { ClientsAndTestimonialsSection } from './components/ClientsAndTestimonialsSection';
import { StartProjectSection } from './components/StartProjectSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EGPAssistantChatbot } from './components/EGPAssistantChatbot';
import { StartProjectModal } from './components/StartProjectModal';
import { CustomCursor } from './components/CustomCursor';
import { PROJECTS } from './data/projects';

export default function App() {
  const [openingDone, setOpeningDone] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>();

  const handleOpenProjectModal = (serviceName?: string) => {
    setSelectedServiceForModal(serviceName);
    setProjectModalOpen(true);
  };

  const handleExploreWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-[#f5f5f7] selection:bg-[#7928ca] selection:text-white relative">
      {/* Custom Cursor for Desktop */}
      <CustomCursor />

      {/* 01 — WEBSITE OPENING ANIMATION */}
      {!openingDone && (
        <OpeningAnimation onComplete={() => setOpeningDone(true)} />
      )}

      {/* 02 — NAVIGATION */}
      <Navigation onStartProject={() => handleOpenProjectModal()} />

      <main className="relative z-10">
        {/* INTRO: HERO SECTION */}
        <Hero
          onStartProject={() => handleOpenProjectModal()}
          onExploreWork={handleExploreWork}
        />

        {/* INTRO TRANSITION: DESIGN. DIGITAL. MOTION. STRATEGY. */}
        <HeroScrollTransition />

        {/* WHAT EGP DOES: CREATIVE THINKING. DIGITAL EXECUTION. REAL IMPACT. */}
        <AboutAndBehind />

        {/* THE EGP PHILOSOPHY: GOOD DESIGN GETS ATTENTION. GREAT DESIGN GETS REMEMBERED. */}
        <PhilosophySection />

        {/* SELECTED WORK & CASE STUDIES */}
        <SelectedWork projects={PROJECTS} />

        {/* SERVICES: WHAT WE DO (5 CORE DISCIPLINES) */}
        <ServicesSection onStartProject={handleOpenProjectModal} />

        {/* PROCESS: HOW WE WORK (4 STAGES) */}
        <ProcessSection onStartProject={() => handleOpenProjectModal()} />

        {/* RESULTS / IMPACT: STRATEGY. CREATIVE. IMPACT. */}
        <ResultsImpactSection />

        {/* CLIENTS & TESTIMONIALS */}
        <ClientsAndTestimonialsSection />

        {/* START A PROJECT: PRIMARY CONVERSION PATH */}
        <StartProjectSection initialService={selectedServiceForModal} />

        {/* CONTACT SECTION */}
        <ContactSection onStartProject={() => handleOpenProjectModal()} />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* EGP ASSISTANT CHATBOT */}
      <EGPAssistantChatbot onOpenProjectModal={() => handleOpenProjectModal()} />

      {/* DIRECT START PROJECT MODAL */}
      <StartProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
        defaultService={selectedServiceForModal}
      />
    </div>
  );
}
