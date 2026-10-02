import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavigationProps {
  onStartProject: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Results', href: '#results' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#08080a]/85 backdrop-blur-md border-b border-white/10 shadow-2xl'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark (Zone 1 of Top Bar Contract: single text element) */}
          <a
            href="#"
            className="text-2xl font-black tracking-tight font-display text-white hover:text-white/90 transition-colors flex items-center gap-1.5 group"
          >
            <span>EGP</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7928ca] group-hover:scale-125 transition-transform" />
          </a>

          {/* Clean Navigation Links (Zone 2: 4-6 text links) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="relative py-1 hover:text-white transition-colors duration-150 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#7928ca] group-hover:w-full transition-all duration-200 ease-out" />
              </a>
            ))}
          </nav>

          {/* Action Zone (Zone 3) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onStartProject}
              className="relative px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-white/5 hover:bg-[#7928ca] border border-white/15 hover:border-[#7928ca] rounded-full transition-all duration-200 shadow-sm hover:shadow-[0_0_24px_rgba(121,40,202,0.45)] active:scale-95 whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onStartProject}
              className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#7928ca] rounded-full whitespace-nowrap"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-white hover:text-neutral-300 focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#08080a] flex flex-col justify-between p-8 sm:p-12 text-white"
          >
            {/* Top header within mobile menu */}
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black font-display tracking-tight">EGP</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-neutral-400 hover:text-white focus:outline-none"
                aria-label="Close navigation menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Kinetic Typography Navigation */}
            <div className="flex flex-col gap-6 my-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1, duration: 0.3 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-neutral-300 hover:text-white hover:translate-x-2 transition-transform flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 text-[#7928ca] transition-opacity" />
                </motion.a>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="space-y-6 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartProject();
                }}
                className="w-full py-4 text-center text-sm font-semibold uppercase tracking-wider text-white bg-[#7928ca] hover:bg-[#8b5cf6] rounded-xl transition-colors shadow-[0_0_25px_rgba(121,40,202,0.4)]"
              >
                Start a Project
              </button>
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <a href="mailto:egpagency001@gmail.com" className="hover:text-white transition-colors">
                  egpagency001@gmail.com
                </a>
                <span>International Studio</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
