import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, User, Bot, RefreshCw } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export function AIChatWidget() {
  const { data } = usePortfolio();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const initialMessage: Message = {
    id: '1',
    sender: 'ai',
    text: `Hi there! 👋 I'm Soressa's AI Assistant. Ask me anything about his skills, projects, experience, or how to get in touch!`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'What tech stack do you use?',
    'Where are you located?',
    'Show me your top projects',
    'Are you available for hire?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Knowledge base response generator
  const generateAIResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('stack') || q.includes('skill') || q.includes('technology') || q.includes('language')) {
      return `Soressa works primarily with React 19, Next.js, TypeScript, Node.js, Python, PostgreSQL, Tailwind CSS, and Sanity CMS. He also builds REST APIs and integrates AI/RAG workflows!`;
    }

    if (q.includes('located') || q.includes('location') || q.includes('where') || q.includes('ethiopia') || q.includes('addis')) {
      return `Soressa is based in ${data.contact.location || 'Addis Ababa, Ethiopia'} and is available for remote opportunities and high-impact development work worldwide.`;
    }

    if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('built')) {
      const projTitles = data.projects.slice(0, 3).map((p) => p.title).join(', ');
      return `Soressa has built several high-quality applications including: ${projTitles}. Check out the Projects page to view live demos and detailed case studies!`;
    }

    if (q.includes('hire') || q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('available')) {
      return `Soressa is currently accepting new projects and roles! You can reach him directly at ${data.contact.email} or via phone/WhatsApp at ${data.contact.phone}.`;
    }

    if (q.includes('experience') || q.includes('background') || q.includes('education') || q.includes('degree')) {
      return `Soressa holds a degree in Computer Science from Hawassa University and has extensive experience as a Full Stack Developer building scalable web applications and AI-powered tools.`;
    }

    if (q.includes('who') || q.includes('about') || q.includes('soressa') || q.includes('name')) {
      return `Soressa Alemayehu is a Full Stack Developer & AI Engineer dedicated to crafting clean, high-performance web applications and intuitive software solutions.`;
    }

    return `Thanks for asking! Soressa specializes in React/TypeScript frontends, Node.js/Python backends, and practical AI integrations. Feel free to contact him at ${data.contact.email} or ask me another question!`;
  };

  const handleSend = (textToSend?: string) => {
    const messageText = textToSend || input;
    if (!messageText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiReplyText = generateAIResponse(messageText);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-brand-bg-card border border-brand-cyan/40 text-white font-mono text-xs shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all cursor-pointer group"
          >
            <div className="relative w-6 h-6 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center font-bold text-[10px] text-brand-cyan">
              SA
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
            </div>
            <span className="group-hover:text-brand-cyan transition-colors font-medium">
              Talk to my AI
            </span>
            <Sparkles size={14} className="text-brand-cyan animate-pulse" />
          </motion.button>
        )}
      </div>

      {/* Floating Chat Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[380px] h-[520px] rounded-2xl bg-brand-bg-card border border-brand-border/80 shadow-2xl flex flex-col overflow-hidden text-left font-sans neon-glow-cyan"
          >
            {/* Header Bar */}
            <div className="p-4 bg-brand-bg-card-hover/90 border-b border-brand-border/60 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-purple p-[1px]">
                  <div className="w-full h-full rounded-full bg-brand-bg flex items-center justify-center font-bold text-xs text-white font-display">
                    SA
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-brand-emerald border-2 border-brand-bg" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-white leading-tight font-display flex items-center gap-1.5">
                    SoreAlex AI <Sparkles size={12} className="text-brand-cyan" />
                  </h3>
                  <span className="text-[10px] font-mono text-brand-emerald flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" /> Online
                    • Ask me anything
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-brand-text-secondary hover:text-white hover:bg-brand-bg border border-transparent hover:border-brand-border transition-all cursor-pointer"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Scroll Body */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3.5 bg-brand-bg/60">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 max-w-[85%] ${
                    msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold ${
                      msg.sender === 'user'
                        ? 'bg-brand-blue text-white'
                        : 'bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan'
                    }`}
                  >
                    {msg.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
                  </div>

                  <div className="flex flex-col gap-1">
                    <div
                      className={`p-3 rounded-2xl text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-brand-blue text-white rounded-tr-none'
                          : 'bg-brand-bg-card border border-brand-border/70 text-brand-text-primary rounded-tl-none shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[9px] font-mono text-brand-text-secondary/60 px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-brand-text-secondary font-mono bg-brand-bg-card p-2.5 rounded-xl border border-brand-border/40 w-fit">
                  <RefreshCw size={12} className="animate-spin text-brand-cyan" />
                  SoreAlex AI is typing...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3 py-2 bg-brand-bg-card border-t border-brand-border/40 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 rounded-full bg-brand-bg-card-hover border border-brand-border text-[10px] text-brand-text-secondary hover:text-white hover:border-brand-cyan/40 whitespace-nowrap transition-all cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-brand-bg-card-hover border-t border-brand-border/60 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my skills, projects, or location..."
                className="flex-1 px-3.5 py-2 rounded-xl bg-brand-bg border border-brand-border text-xs text-white placeholder:text-brand-text-secondary/50 focus:outline-none focus:border-brand-cyan transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2 rounded-xl bg-brand-blue hover:bg-brand-cyan disabled:opacity-40 text-white hover:text-brand-bg transition-all cursor-pointer shadow-[0_0_10px_rgba(59,130,246,0.2)]"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
