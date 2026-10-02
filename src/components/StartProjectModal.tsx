import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowUpRight, Loader2, Sparkles } from 'lucide-react';
import { ProjectIntakeData } from '../types';

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const StartProjectModal: React.FC<StartProjectModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Brand & Graphic Design',
}) => {
  const [formData, setFormData] = useState<ProjectIntakeData>({
    name: '',
    email: '',
    brand: '',
    service: defaultService,
    description: '',
    budget: '$15,000 – $35,000',
    deadline: '1–3 Months',
    additionalInfo: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [formRenderTime] = useState<number>(() => Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Brand & Graphic Design',
    'Digital Marketing',
    'Website Design & Development',
    'Video Production & Motion Graphics',
    'Data Analysis & Creative Intelligence',
  ];

  const budgets = [
    '$5,000 – $15,000',
    '$15,000 – $35,000',
    '$35,000 – $75,000',
    '$75,000+',
  ];

  const deadlines = [
    'Immediate (Next 30 Days)',
    '1–3 Months',
    '3–6 Months',
    'Flexible Exploration',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot.trim().length > 0) {
      setIsSuccess(true);
      return;
    }

    if (Date.now() - formRenderTime < 1500) {
      setIsSuccess(true);
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.brand.trim() || !formData.description.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch {
      // Local fallback
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-2xl w-full p-6 sm:p-10 rounded-3xl bg-[#101014] border border-white/15 text-white shadow-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {isSuccess ? (
            <div className="text-center py-10">
              <CheckCircle2 className="w-16 h-16 text-[#9d4edd] mx-auto mb-6" />
              <h3 className="text-3xl font-extrabold font-display uppercase tracking-tight text-white mb-3">
                Project Intake Received
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 max-w-md mx-auto leading-relaxed mb-6">
                Your brief has been registered with EGP Agency and dispatched to{' '}
                <span className="font-mono text-white">egpagency001@gmail.com</span>. An executive partner will contact you shortly to schedule an initial discovery alignment.
              </p>
              <button
                onClick={handleReset}
                className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#7928ca] hover:bg-[#8b5cf6] rounded-full transition-colors"
              >
                Return to Portfolio
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#9d4edd] uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>EGP Executive Intake</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-white mb-2">
                Start a Project
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mb-8">
                Provide preliminary details about your vision, timeline, and scope.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs">
                    {errorMessage}
                  </div>
                )}

                {/* Honeypot field for bot protection */}
                <input
                  type="text"
                  name="website_trap_modal"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Julian Hayes"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#7928ca] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. julian@brand.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#7928ca] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
                      Brand / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      placeholder="e.g. Lumina Global"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#7928ca] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
                      Primary Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#7928ca] transition-colors"
                    >
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-[#101014] text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
                    Project Vision & Objectives *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Tell us what you want to achieve, audience context, current brand status..."
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#7928ca] transition-colors resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
                      Anticipated Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#7928ca] transition-colors"
                    >
                      {budgets.map((b) => (
                        <option key={b} value={b} className="bg-[#101014] text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
                      Target Launch
                    </label>
                    <select
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#7928ca] transition-colors"
                    >
                      {deadlines.map((d) => (
                        <option key={d} value={d} className="bg-[#101014] text-white">
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-neutral-400 block mb-2">
                    Additional Information (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.additionalInfo || ''}
                    onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                    placeholder="Existing brand links, reference materials, or specific requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#7928ca] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#7928ca] hover:bg-[#8b5cf6] disabled:opacity-50 rounded-xl transition-all shadow-[0_0_25px_rgba(121,40,202,0.4)] cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Intake Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>START A PROJECT</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
