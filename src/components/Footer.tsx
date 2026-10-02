import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  // Editable social links structure
  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'X (Twitter)', href: 'https://x.com' },
    { label: 'Behance', href: 'https://behance.net' },
    { label: 'Vimeo', href: 'https://vimeo.com' },
  ];

  return (
    <footer className="bg-[#050507] text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Tier: Huge EGP Wordmark & Brand Statement */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-16 border-b border-white/10">
          <div>
            <div className="text-7xl sm:text-9xl lg:text-[11rem] font-black font-display tracking-tighter leading-none text-white select-none">
              EGP
            </div>
            <p className="mt-4 text-lg sm:text-2xl font-bold font-display uppercase tracking-tight text-neutral-300">
              We make brands impossible to scroll past.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
              Direct Contact
            </span>
            <a
              href="mailto:egpagency001@gmail.com"
              className="text-xl sm:text-2xl font-bold font-display text-white hover:text-[#9d4edd] transition-colors"
            >
              egpagency001@gmail.com
            </a>
          </div>
        </div>

        {/* Middle Tier: Navigation, Socials, Locations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16 border-b border-white/10 text-sm">
          {/* Navigation */}
          <div>
            <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles */}
          <div>
            <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider block mb-4">
              Connect (Editable)
            </span>
            <ul className="space-y-2.5">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-300 hover:text-[#9d4edd] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-white transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Presence */}
          <div>
            <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider block mb-4">
              Studios
            </span>
            <p className="text-neutral-300 leading-relaxed text-xs sm:text-sm">
              Global distributed teams across London, New York, Paris & Dubai. Operating across all major timezones.
            </p>
          </div>

          {/* Scroll to top */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider block mb-4">
              Return
            </span>
            <button
              onClick={scrollToTop}
              className="p-4 rounded-full bg-white/5 hover:bg-[#7928ca] border border-white/10 hover:border-[#7928ca] text-white transition-all group"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            © {new Date().getFullYear()} EGP AGENCY. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <button
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <a
              href="#contact"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Legal Modal */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/85 backdrop-blur-md">
          <div className="relative max-w-xl w-full p-8 rounded-2xl bg-[#101014] border border-white/15 text-white max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold font-display uppercase mb-4">
              {activeLegalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>

            <div className="text-xs sm:text-sm text-neutral-300 space-y-4 leading-relaxed font-light">
              {activeLegalModal === 'privacy' ? (
                <>
                  <p>
                    <strong className="text-white font-medium">Information Collection & Handling:</strong> When you submit a project inquiry through our project intake forms, the traditional contact form, or the interactive EGP Assistant chatbot, we collect your name, email, organization, service requirements, budget parameters, and project overview.
                  </p>
                  <p>
                    <strong className="text-white font-medium">Usage & Confidentiality:</strong> This information is transmitted directly and securely to our executive team at <span className="text-[#9d4edd] font-mono">egpagency001@gmail.com</span>. It is utilized exclusively for evaluating your creative brief, assessing technical feasibility, preparing scopes of work, and responding to your inquiry.
                  </p>
                  <p>
                    <strong className="text-white font-medium">No Third-Party Sharing:</strong> EGP Agency strictly prohibits selling, renting, or trading client or prospective partner data to external brokers or marketing networks. All submissions are treated under standard mutual non-disclosure expectations.
                  </p>
                  <p>
                    For inquiries regarding data retention, deletion, or custom non-disclosure agreements prior to briefing, contact{' '}
                    <span className="text-[#9d4edd] font-mono">egpagency001@gmail.com</span>.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All creative works, visual concepts, source code, and design prototypes developed by EGP Agency remain the intellectual property of EGP Agency until formal contractual transfer upon project completion.
                  </p>
                  <p>
                    Client deliverables are governed by customized Master Services Agreements tailored to specific project scopes, copyright licenses, and deliverables schedules.
                  </p>
                  <p>
                    Any unauthorized duplication of EGP visual assets, trademarks, or proprietary methodologies is strictly prohibited under international copyright laws.
                  </p>
                </>
              )}
            </div>

            <button
              onClick={() => setActiveLegalModal(null)}
              className="mt-8 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
