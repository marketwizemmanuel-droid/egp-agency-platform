import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, Check, ArrowRight, Loader2 } from 'lucide-react';
import { ChatMessage, ProjectIntakeData } from '../types';

interface EGPAssistantChatbotProps {
  onOpenProjectModal?: () => void;
}

export const EGPAssistantChatbot: React.FC<EGPAssistantChatbotProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Intake State Machine
  const [intakeStep, setIntakeStep] = useState<number | null>(null);
  const [intakeData, setIntakeData] = useState<ProjectIntakeData>({
    name: '',
    email: '',
    brand: '',
    service: '',
    description: '',
    budget: '',
    deadline: '',
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialQuickActions = [
    'START A PROJECT',
    'OUR SERVICES',
    'VIEW OUR WORK',
    'GET A QUOTE',
    'TALK TO EGP',
  ];

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'assistant',
      text: 'Hey 👋 Welcome to EGP Agency. What can we create together?',
      timestamp: 'Just now',
      quickActions: initialQuickActions,
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const addAssistantMessage = (
    text: string,
    quickActions?: string[],
    intakeSummary?: ProjectIntakeData,
    isSubmissionCard?: boolean
  ) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `ast-${Date.now()}-${Math.random()}`,
        sender: 'assistant',
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickActions,
        intakeSummary,
        isSubmissionCard,
      },
    ]);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `usr-${Date.now()}-${Math.random()}`,
        sender: 'user',
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  // Intake step prompts
  const startIntake = () => {
    setIntakeStep(0);
    addAssistantMessage(
      "Let's get your project into motion. First, what is your full name?"
    );
  };

  const handleIntakeInput = (text: string) => {
    if (intakeStep === null) return false;

    if (intakeStep === 0) {
      setIntakeData((prev) => ({ ...prev, name: text }));
      setIntakeStep(1);
      setTimeout(() => {
        addAssistantMessage(`Great to meet you, ${text}. What is your direct email address?`);
      }, 400);
      return true;
    }

    if (intakeStep === 1) {
      setIntakeData((prev) => ({ ...prev, email: text }));
      setIntakeStep(2);
      setTimeout(() => {
        addAssistantMessage("What company or brand are we designing for?");
      }, 400);
      return true;
    }

    if (intakeStep === 2) {
      setIntakeData((prev) => ({ ...prev, brand: text }));
      setIntakeStep(3);
      setTimeout(() => {
        addAssistantMessage(
          "Which core service do you require?",
          [
            'Brand & Graphic Design',
            'Digital Marketing',
            'Website Design & Development',
            'Video Production & Motion Graphics',
            'Data Analysis & Creative Intelligence',
          ]
        );
      }, 400);
      return true;
    }

    if (intakeStep === 3) {
      setIntakeData((prev) => ({ ...prev, service: text }));
      setIntakeStep(4);
      setTimeout(() => {
        addAssistantMessage("Please provide a short description of the project and goals.");
      }, 400);
      return true;
    }

    if (intakeStep === 4) {
      setIntakeData((prev) => ({ ...prev, description: text }));
      setIntakeStep(5);
      setTimeout(() => {
        addAssistantMessage(
          "What is your target budget range?",
          ['$5,000 – $15,000', '$15,000 – $35,000', '$35,000 – $75,000', '$75,000+']
        );
      }, 400);
      return true;
    }

    if (intakeStep === 5) {
      setIntakeData((prev) => ({ ...prev, budget: text }));
      setIntakeStep(6);
      setTimeout(() => {
        addAssistantMessage(
          "What is your anticipated launch deadline?",
          ['Within 1 month', '1–3 months', '3–6 months', 'Flexible timeline']
        );
      }, 400);
      return true;
    }

    if (intakeStep === 6) {
      const finalData: ProjectIntakeData = { ...intakeData, deadline: text };
      setIntakeData(finalData);
      setIntakeStep(7); // Ready for review

      setTimeout(() => {
        addAssistantMessage(
          "Here is the summary of your project brief:",
          undefined,
          finalData,
          true
        );
      }, 400);
      return true;
    }

    return false;
  };

  const handleSendProjectIntake = async (data: ProjectIntakeData) => {
    setIsTyping(true);
    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch {
      // Local fallback
    }

    setIsTyping(false);
    setIntakeStep(null);
    addAssistantMessage(
      'Your project request has been received. The EGP team will review the details and get back to you at ' +
        data.email +
        '. We look forward to building something impossible to scroll past together.',
      ['View Our Work', 'Our Services', 'Ask Another Question']
    );
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text) return;

    setInput('');
    addUserMessage(text);

    // If currently in intake step flow:
    if (intakeStep !== null && intakeStep < 7) {
      handleIntakeInput(text);
      return;
    }

    // Check quick actions
    const lower = text.toLowerCase();
    if (lower === 'start a project' || lower.includes('start a project') || lower.includes('hire you')) {
      startIntake();
      return;
    }

    if (lower === 'our services' || lower === 'services' || lower.includes('what do you do')) {
      setTimeout(() => {
        addAssistantMessage(
          'EGP Agency provides 5 core disciplines:\n\n1. Brand & Graphic Design\n2. Digital Marketing\n3. Website Design & Development\n4. Video Production & Motion Graphics\n5. Data Analysis & Creative Intelligence\n\nWould you like to start a project or see examples?',
          ['Start a Project', 'View Our Work', 'Get a Quote']
        );
      }, 350);
      return;
    }

    if (lower === 'get a quote' || lower.includes('quote') || lower.includes('pricing')) {
      setTimeout(() => {
        addAssistantMessage(
          'Every brand engagement at EGP is bespoke. Typical project engagements range from targeted branding & web sprint ($10k-$25k) to comprehensive international campaign systems ($35k-$80k+).\n\nLet’s run a quick 60-second intake so we can generate an accurate scope for you.',
          ['Start a Project', 'Talk to EGP']
        );
      }, 350);
      return;
    }

    if (lower === 'view our work' || lower === 'work' || lower.includes('portfolio') || lower.includes('case studies')) {
      setTimeout(() => {
        addAssistantMessage(
          'Our selected work includes Lumina Botanical Parfumerie (Branding & Packaging), Strata Computational (Fintech Web Platform), Kinesis Motion (Athletic Video Campaign), and Axiom Research (Editorial Design).\n\nYou can explore them directly in the Selected Work section or start a brief.',
          ['Start a Project', 'Our Services', 'Talk to EGP']
        );
        const workSec = document.getElementById('work');
        if (workSec) workSec.scrollIntoView({ behavior: 'smooth' });
      }, 350);
      return;
    }

    if (lower === 'talk to egp' || lower.includes('email') || lower.includes('contact')) {
      setTimeout(() => {
        addAssistantMessage(
          'You can contact our executive studio team directly at:\n\negpagency001@gmail.com\n\nOr click "Start a Project" to submit a detailed intake brief right here.',
          ['Start a Project', 'Our Services']
        );
      }, 350);
      return;
    }

    // Call server-side Gemini endpoint
    setIsTyping(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      if (res.ok) {
        const data = await res.json();
        setIsTyping(false);
        addAssistantMessage(
          data.reply ||
            'EGP Agency combines design, technology, marketing, and strategy to build memorable brands. How can we elevate your brand today?',
          ['Start a Project', 'Our Services', 'Talk to EGP']
        );
        return;
      }
    } catch {
      // Server error or offline
    }

    // Local smart fallback if API call fails
    setIsTyping(false);
    setTimeout(() => {
      addAssistantMessage(
        "At EGP Agency, we create high-impact brand identities, web experiences, video motion, and data-backed creative intelligence. Let's discuss your project goals directly.",
        ['Start a Project', 'Our Services', 'Talk to EGP']
      );
    }, 400);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative px-5 py-3.5 rounded-full bg-[#101014] hover:bg-[#16161c] border border-white/15 hover:border-[#7928ca] text-white shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex items-center gap-3 group transition-all cursor-pointer"
          aria-label="Open EGP Assistant"
        >
          {/* Subtle purple aura glow */}
          <span className="absolute -inset-1 bg-[#7928ca]/30 rounded-full blur-md group-hover:bg-[#7928ca]/50 transition-all pointer-events-none" />

          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7928ca] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#9d4edd]" />
          </span>

          <span className="relative text-xs font-semibold uppercase tracking-wider font-display">
            EGP Assistant
          </span>

          <MessageSquare className="relative w-4 h-4 text-[#9d4edd]" />
        </motion.button>
      </div>

      {/* Branded Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-22 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] h-[580px] max-h-[82vh] bg-[#0c0c10] border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-white font-sans"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-[#121218] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#7928ca] flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold font-display uppercase tracking-tight flex items-center gap-1.5">
                    <span>EGP Assistant</span>
                    <span className="text-[10px] font-mono text-[#9d4edd] font-normal">
                      ONLINE
                    </span>
                  </div>
                  <div className="text-[10px] text-neutral-400 font-mono">
                    Creative Intelligence Studio
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Close Assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'bg-[#7928ca] text-white rounded-br-none shadow-md'
                        : 'bg-[#181820] text-neutral-200 border border-white/10 rounded-bl-none'
                    }`}
                  >
                    {msg.text}

                    {/* Project Intake Summary Card */}
                    {msg.intakeSummary && (
                      <div className="mt-3 p-3.5 rounded-xl bg-black/50 border border-white/10 font-mono text-[11px] space-y-1.5 text-neutral-300">
                        <div className="text-white font-bold uppercase tracking-wider mb-2 text-xs border-b border-white/10 pb-1 text-[#9d4edd]">
                          YOUR PROJECT
                        </div>
                        <div>
                          <span className="text-neutral-500">Name:</span> {msg.intakeSummary.name}
                        </div>
                        <div>
                          <span className="text-neutral-500">Email:</span> {msg.intakeSummary.email}
                        </div>
                        <div>
                          <span className="text-neutral-500">Brand:</span> {msg.intakeSummary.brand}
                        </div>
                        <div>
                          <span className="text-neutral-500">Service:</span> {msg.intakeSummary.service}
                        </div>
                        <div>
                          <span className="text-neutral-500">Project:</span> {msg.intakeSummary.description}
                        </div>
                        <div>
                          <span className="text-neutral-500">Budget:</span> {msg.intakeSummary.budget}
                        </div>
                        <div>
                          <span className="text-neutral-500">Deadline:</span> {msg.intakeSummary.deadline}
                        </div>

                        {msg.isSubmissionCard && (
                          <div className="pt-3 flex items-center gap-2">
                            <button
                              onClick={() => handleSendProjectIntake(msg.intakeSummary!)}
                              className="px-3.5 py-1.5 rounded-lg bg-[#7928ca] hover:bg-[#8b5cf6] text-white font-sans text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                            >
                              <Check className="w-3.5 h-3.5" />
                              <span>SEND REQUEST</span>
                            </button>
                            <button
                              onClick={() => startIntake()}
                              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-neutral-300 text-xs font-sans uppercase font-medium transition-colors cursor-pointer"
                            >
                              EDIT DETAILS
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] text-neutral-500 mt-1 px-1">
                    {msg.timestamp}
                  </span>

                  {/* Quick Action Buttons */}
                  {msg.quickActions && msg.quickActions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                      {msg.quickActions.map((action) => (
                        <button
                          key={action}
                          onClick={() => handleSendMessage(action)}
                          className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#7928ca] hover:text-white border border-white/10 text-neutral-300 text-xs transition-colors cursor-pointer flex items-center gap-1 group"
                        >
                          <span>{action}</span>
                          <ArrowRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 p-3 bg-[#181820] border border-white/10 rounded-2xl w-24">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7928ca] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7928ca] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7928ca] animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-[#121218] border-t border-white/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    intakeStep !== null
                      ? 'Type your answer...'
                      : 'Ask about services, branding, projects...'
                  }
                  className="flex-1 px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#7928ca] transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2.5 rounded-xl bg-[#7928ca] hover:bg-[#8b5cf6] disabled:opacity-30 text-white transition-colors cursor-pointer"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
