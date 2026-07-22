import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { ContactForm } from '../components/ContactForm';
import { usePortfolio } from '../context/PortfolioContext';

export function Contact() {
  const { data } = usePortfolio();

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12 text-left">
      {/* Headings */}
      <div className="flex flex-col gap-4 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
          Initiate Protocol
        </h1>
        <p className="text-brand-text-secondary text-sm sm:text-base leading-relaxed">
          Whether you're looking for a high-scale architecture or an AI-driven automation suite, my engine is ready to build.
        </p>
      </div>

      {/* Two Column Form / Side Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4 items-start">
        {/* Left: Form */}
        <div className="lg:col-span-7 w-full">
          <ContactForm />
        </div>

        {/* Right: Channels & Status */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full">
          {/* Direct Channels Card */}
          <div className="p-6 md:p-8 rounded-xl bg-brand-bg-card border border-brand-border/60 flex flex-col gap-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-white border-b border-brand-border/20 pb-3">
              Direct Channels
            </h3>
            <ul className="flex flex-col gap-6">
              {/* GitHub */}
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-brand-bg-card-hover border border-brand-border flex items-center justify-center text-brand-text-secondary group-hover:text-brand-cyan group-hover:border-brand-cyan transition-all duration-300">
                  <GithubIcon size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-text-secondary/70 font-mono uppercase">GitHub</span>
                  <a
                    href={data.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-brand-cyan transition-colors"
                  >
                    /soressa-alemayehu
                  </a>
                </div>
              </li>

              {/* LinkedIn */}
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-brand-bg-card-hover border border-brand-border flex items-center justify-center text-brand-text-secondary group-hover:text-brand-cyan group-hover:border-brand-cyan transition-all duration-300">
                  <LinkedinIcon size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-text-secondary/70 font-mono uppercase">LinkedIn</span>
                  <a
                    href={data.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-brand-cyan transition-colors"
                  >
                    /in/soressa-alemayehu
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-brand-bg-card-hover border border-brand-border flex items-center justify-center text-brand-text-secondary group-hover:text-brand-cyan group-hover:border-brand-cyan transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-text-secondary/70 font-mono uppercase">Email</span>
                  <a
                    href={`mailto:${data.contact.email}`}
                    className="text-sm font-bold text-white hover:text-brand-cyan transition-colors"
                  >
                    {data.contact.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Status availability banner card */}
          <div className="p-6 md:p-8 rounded-xl bg-brand-bg-card border border-brand-border/60 flex flex-col gap-4 relative overflow-hidden group">
            {/* Embedded mockup visual gradient background to represent setup picture */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/10 to-brand-cyan/10 pointer-events-none group-hover:opacity-80 transition-opacity" />
            <div className="relative z-10 flex flex-col gap-2">
              <span className="text-[9px] font-mono font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan-dim px-2.5 py-0.5 border border-brand-cyan/20 w-fit rounded">
                STATUS
              </span>
              <h4 className="text-base font-bold text-white leading-snug mt-2">
                Available for Q4 contracts & advisory roles.
              </h4>
              <p className="text-xs text-brand-text-secondary leading-relaxed">
                Currently reviewing requests for system audits, custom ML pipeline implementations, and senior React/Vite development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
