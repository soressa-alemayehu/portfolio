import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Terminal, User, Copy, Check, Play, Sparkles, Cpu, Layers } from 'lucide-react';

export function HeroCodeVisual() {
  const [activeTab, setActiveTab] = useState<'code' | 'terminal' | 'profile'>('code');
  const [copied, setCopied] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    'Welcome to SoreAlex Interactive Console v2.4',
    'Type a command or click a shortcut below to execute...',
  ]);

  const codeSnippet = `const developer = {
  name: "Soressa Alemayehu",
  role: "Full Stack & AI Engineer",
  location: "Global / Remote",
  stack: {
    frontend: ["React 19", "Next.js", "TypeScript", "Tailwind"],
    backend: ["Node.js", "Express", "Python", "PostgreSQL"],
    aiEngine: ["LangChain", "Gemini", "OpenAI", "RAG"]
  },
  status: "Ready for high-scale challenges 🚀"
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTerminalCommand = (cmd: string) => {
    let response = '';
    switch (cmd.toLowerCase()) {
      case 'bio':
        response = 'Full Stack Developer with experience in web apps, REST APIs, and AI systems.';
        break;
      case 'stack':
        response = 'Tech Stack: React, Next.js, TypeScript, Node.js, Python, PostgreSQL, Sanity CMS, Docker.';
        break;
      case 'contact':
        response = 'Direct Email: soressaalemayeh21@email.com | GitHub: github.com/soressa-alemayehu';
        break;
      case 'clear':
        setTerminalOutput(['Console cleared. Select a command shortcut below:']);
        return;
      default:
        response = `Command '${cmd}' executed successfully. Target node responsive.`;
    }

    setTerminalOutput((prev) => [...prev, `> ${cmd}`, response]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative w-full max-w-lg rounded-2xl border border-brand-border bg-brand-bg-card shadow-2xl overflow-hidden neon-glow-cyan flex flex-col"
    >
      {/* Top Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-brand-bg-card-hover/90 border-b border-brand-border/60 backdrop-blur-md">
        {/* Mac Dots */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/30" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-400/30" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/30" />
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center gap-1 bg-brand-bg border border-brand-border/60 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer ${
              activeTab === 'code'
                ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                : 'text-brand-text-secondary hover:text-white'
            }`}
          >
            <Code size={13} /> developer.ts
          </button>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer ${
              activeTab === 'terminal'
                ? 'bg-brand-purple/20 text-brand-purple border border-brand-purple/30 shadow-[0_0_10px_rgba(139,92,246,0.2)]'
                : 'text-brand-text-secondary hover:text-white'
            }`}
          >
            <Terminal size={13} /> terminal
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-medium transition-all cursor-pointer ${
              activeTab === 'profile'
                ? 'bg-brand-blue/20 text-brand-blue border border-brand-blue/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]'
                : 'text-brand-text-secondary hover:text-white'
            }`}
          >
            <User size={13} /> 3D Profile
          </button>
        </div>
      </div>

      {/* Main Tab Window Content */}
      <div className="p-5 font-mono text-xs min-h-[310px] flex flex-col justify-between relative bg-brand-bg/95">
        <AnimatePresence mode="wait">
          {/* TAB 1: Code Window */}
          {activeTab === 'code' && (
            <motion.div
              key="code-tab"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col justify-between h-full gap-4"
            >
              <div className="overflow-x-auto text-left leading-relaxed">
                <div className="text-brand-text-secondary/50 mb-2">// SoreAlex Developer Interface</div>
                <pre className="text-brand-text-primary font-mono text-[11px] sm:text-xs">
                  <span className="text-brand-purple">const</span>{' '}
                  <span className="text-brand-cyan">developer</span> = &#123;{'\n'}
                  {'  '}
                  <span className="text-brand-text-secondary">name</span>: &#34;
                  <span className="text-emerald-400">Soressa Alemayehu</span>&#34;,{'\n'}
                  {'  '}
                  <span className="text-brand-text-secondary">role</span>: &#34;
                  <span className="text-emerald-400">Full Stack & AI Engineer</span>&#34;,{'\n'}
                  {'  '}
                  <span className="text-brand-text-secondary">stack</span>: &#123;{'\n'}
                  {'    '}
                  <span className="text-brand-cyan">frontend</span>: [&#34;
                  <span className="text-yellow-300">React 19</span>&#34;, &#34;
                  <span className="text-yellow-300">Next.js</span>&#34;, &#34;
                  <span className="text-yellow-300">TypeScript</span>&#34;],{'\n'}
                  {'    '}
                  <span className="text-brand-cyan">backend</span>: [&#34;
                  <span className="text-yellow-300">Node.js</span>&#34;, &#34;
                  <span className="text-yellow-300">Python</span>&#34;, &#34;
                  <span className="text-yellow-300">PostgreSQL</span>&#34;],{'\n'}
                  {'    '}
                  <span className="text-brand-cyan">aiEngine</span>: [&#34;
                  <span className="text-yellow-300">LangChain</span>&#34;, &#34;
                  <span className="text-yellow-300">RAG</span>&#34;, &#34;
                  <span className="text-yellow-300">Gemini</span>&#34;]{'\n'}
                  {'  '}&#125;,{'\n'}
                  {'  '}
                  <span className="text-brand-text-secondary">status</span>: &#34;
                  <span className="text-emerald-400">Ready for high-scale challenges 🚀</span>&#34;{'\n'}
                  &#125;;
                </pre>
              </div>

              {/* Bottom Action Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-brand-border/40">
                <span className="text-[10px] text-brand-emerald flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
                  TypeScript 5.0 • ESM Ready
                </span>
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1.5 rounded bg-brand-bg-card-hover border border-brand-border text-brand-text-secondary hover:text-white transition-all flex items-center gap-1.5 text-[11px] cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-brand-emerald" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={12} /> Copy Code
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB 2: Interactive Terminal */}
          {activeTab === 'terminal' && (
            <motion.div
              key="terminal-tab"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col justify-between h-full gap-4 text-left"
            >
              {/* Terminal Output Log */}
              <div className="flex flex-col gap-2 overflow-y-auto max-h-[190px] pr-1">
                {terminalOutput.map((line, idx) => (
                  <div
                    key={idx}
                    className={`leading-relaxed ${
                      line.startsWith('>')
                        ? 'text-brand-cyan font-bold'
                        : 'text-brand-text-secondary text-[11px]'
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </div>

              {/* Terminal Quick Command Shortcuts */}
              <div className="flex flex-col gap-2 pt-3 border-t border-brand-border/40">
                <span className="text-[10px] text-brand-text-secondary/70 uppercase tracking-wider font-mono">
                  Quick Exec Shortcuts:
                </span>
                <div className="flex flex-wrap gap-2">
                  {['bio', 'stack', 'contact', 'clear'].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => handleTerminalCommand(cmd)}
                      className="px-2.5 py-1 rounded bg-brand-purple/10 border border-brand-purple/30 text-brand-purple hover:bg-brand-purple hover:text-white transition-all text-[11px] font-mono flex items-center gap-1 cursor-pointer"
                    >
                      <Play size={10} /> {cmd}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: 3D Profile Card */}
          {activeTab === 'profile' && (
            <motion.div
              key="profile-tab"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center gap-4 text-center py-2 h-full"
            >
              {/* Glowing Avatar */}
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-brand-cyan via-brand-purple to-brand-blue p-[2px] shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                  <div className="w-full h-full rounded-[14px] bg-brand-bg flex items-center justify-center font-black text-2xl text-white font-display">
                    SA
                  </div>
                </div>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-brand-emerald border-2 border-brand-bg flex items-center justify-center text-[9px] font-bold text-black">
                  ✓
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-bold text-white font-display">Soressa Alemayehu</h4>
                <p className="text-xs text-brand-cyan font-mono">Full Stack & AI Systems Engineer</p>
              </div>

              {/* Micro Tech Tags */}
              <div className="flex flex-wrap justify-center gap-1.5 my-1">
                <span className="px-2 py-0.5 rounded bg-brand-bg-card-hover border border-brand-border text-[10px] text-brand-text-secondary flex items-center gap-1">
                  <Sparkles size={11} className="text-brand-cyan" /> React 19
                </span>
                <span className="px-2 py-0.5 rounded bg-brand-bg-card-hover border border-brand-border text-[10px] text-brand-text-secondary flex items-center gap-1">
                  <Cpu size={11} className="text-brand-purple" /> AI / RAG
                </span>
                <span className="px-2 py-0.5 rounded bg-brand-bg-card-hover border border-brand-border text-[10px] text-brand-text-secondary flex items-center gap-1">
                  <Layers size={11} className="text-brand-blue" /> Cloud / Node
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Gradient Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-blue" />
    </motion.div>
  );
}
