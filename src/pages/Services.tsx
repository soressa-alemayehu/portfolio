import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Cpu, GitBranch, Smartphone, Link as LinkIcon, Cloud } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export function Services() {
  const { data } = usePortfolio();

  const renderServiceIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'monitor':
        return <Monitor size={28} className="text-brand-cyan text-glow-cyan" />;
      case 'cpu':
        return <Cpu size={28} className="text-brand-cyan text-glow-cyan" />;
      case 'git-branch':
        return <GitBranch size={28} className="text-brand-cyan text-glow-cyan" />;
      case 'smartphone':
        return <Smartphone size={28} className="text-brand-cyan text-glow-cyan" />;
      case 'link':
        return <LinkIcon size={28} className="text-brand-cyan text-glow-cyan" />;
      case 'cloud':
        return <Cloud size={28} className="text-brand-cyan text-glow-cyan" />;
      default:
        return <Cpu size={28} className="text-brand-cyan text-glow-cyan" />;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-16 text-left">
      {/* Headings */}
      <div className="flex flex-col gap-4 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
        Services
        </h1>
        <p className="text-brand-text-secondary text-sm sm:text-base leading-relaxed">
          Development services I offer to help build, deploy, and maintain web and software applications.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.services.map((service, idx) => (
          <div
            key={idx}
            className="p-6 md:p-8 rounded-xl bg-brand-bg-card border border-brand-border/60 hover:border-brand-cyan/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all duration-300 flex flex-col gap-6 group relative overflow-hidden"
          >
            {service.badge && (
              <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-[10px] font-mono font-bold text-brand-emerald">
                {service.badge}
              </span>
            )}
            <div className="w-14 h-14 rounded-lg bg-brand-cyan/5 border border-brand-cyan/15 flex items-center justify-center">
              {renderServiceIcon(service.icon)}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors font-display">
                {service.title}
              </h3>
              <p className="text-sm text-brand-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Banner */}
      <section className="mt-8">
        <div className="w-full p-8 md:p-12 rounded-2xl bg-brand-bg-card border border-brand-border/60 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-8 neon-glow-cyan">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/5 to-transparent pointer-events-none" />
          <div className="flex flex-col gap-2 relative z-10 max-w-xl">
            <h2 className="text-xl md:text-2xl font-bold text-white">Need a custom technical execution?</h2>
            <p className="text-xs md:text-sm text-brand-text-secondary">
              Let's discuss how we can engineer a bespoke platform, deploy resilient backend APIs, or implement intelligent workflows.
            </p>
          </div>
          <div className="shrink-0 relative z-10 w-full sm:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-brand-blue hover:bg-brand-cyan text-white hover:text-brand-bg transition-all font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              Initiate Protocol
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
