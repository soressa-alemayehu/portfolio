import { Download, Cloud, Cpu, Terminal, Shield, Database, Code, Award, GraduationCap, Briefcase } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { Timeline } from '../components/Timeline';

export function Experience() {
  const { data } = usePortfolio();

  const renderCertIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'cloud':
        return <Cloud size={20} className="text-brand-cyan" />;
      case 'cpu':
        return <Cpu size={20} className="text-brand-cyan" />;
      case 'terminal':
        return <Terminal size={20} className="text-brand-cyan" />;
      case 'shield':
        return <Shield size={20} className="text-brand-cyan" />;
      case 'database':
        return <Database size={20} className="text-brand-cyan" />;
      case 'code':
        return <Code size={20} className="text-brand-cyan" />;
      default:
        return <Award size={20} className="text-brand-cyan" />;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-20 text-left">
      {/* 1. Page Header with Purple-Pink Accent Bar */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-bg-card border border-brand-border text-xs text-brand-purple font-mono w-fit shadow-[0_0_10px_rgba(139,92,246,0.1)]">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
          AI ENGINE ACTIVE
        </div>
        <div className="relative">
          {/* Gradient line indicator */}
          <div className="w-full h-[6px] bg-gradient-to-r from-brand-purple via-brand-indigo to-transparent rounded-full mb-6" />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white max-w-3xl leading-snug">
            Building the backbone of modern AI infrastructure through technical mastery and strategic full-stack implementation.
          </h1>
        </div>
      </div>

      {/* 2. Professional Experience Timeline */}
      <section className="flex flex-col gap-10">
        <h2 className="text-2xl font-black text-white flex items-center gap-2.5 border-b border-brand-border/40 pb-3 font-display">
          <Briefcase size={22} className="text-brand-purple" />
          Professional Experience
        </h2>
        <Timeline experience={data.experience} />
      </section>

      {/* 3. Education & Technical Certifications */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Education Column */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <h2 className="text-2xl font-black text-white flex items-center gap-2.5 border-b border-brand-border/40 pb-3 font-display">
            <GraduationCap size={24} className="text-brand-emerald" />
            Education
          </h2>
          <div className="flex flex-col gap-6">
            {data.education.map((edu, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl bg-brand-bg-card border transition-all duration-300 ${
                  edu.featured
                    ? 'border-brand-emerald/40 shadow-[0_0_20px_rgba(16,185,129,0.08)]'
                    : 'border-brand-border/60 hover:border-brand-emerald/20'
                }`}
              >
                <h3 className="text-base font-bold text-white">{edu.degree}</h3>
                <p className="text-brand-emerald text-xs font-mono font-semibold mt-1">
                  {edu.school} | {edu.date}
                </p>
                <p className="text-brand-text-secondary text-xs mt-3 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <h2 className="text-2xl font-black text-white flex items-center gap-2.5 border-b border-brand-border/40 pb-3 font-display">
            <Award size={22} className="text-brand-cyan" />
            Technical Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-brand-bg-card border border-brand-border/60 hover:border-brand-cyan/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)] transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-cyan/5 border border-brand-cyan/15 flex items-center justify-center shrink-0">
                  {renderCertIcon(cert.icon)}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-white leading-tight">{cert.title}</h3>
                  <p className="text-[10px] text-brand-text-secondary/70 font-mono mt-1 uppercase">
                    {cert.issuer}
                  </p>
                  <span className="text-[9px] font-mono font-bold text-brand-cyan tracking-wider uppercase mt-2">
                    {cert.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Resume & CV Action Area */}
      <section className="flex flex-col gap-8 border-t border-brand-border/40 pt-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-black text-white font-display">Resume & CV</h2>
            <p className="text-brand-text-secondary text-xs">
              View or download a full, detailed copy of my professional history.
            </p>
          </div>
          <a
            href={data.siteSettings.resumeUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-brand-blue hover:bg-brand-cyan text-white hover:text-brand-bg transition-all font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
          >
            <Download size={16} /> Download Full CV
          </a>
        </div>

        {/* Visual Mockup Resume Card */}
        <div className="w-full p-8 md:p-12 rounded-xl bg-brand-bg-card/40 border border-brand-border/60 flex flex-col gap-4 max-w-3xl mx-auto shadow-[0_0_30px_rgba(0,0,0,0.15)] relative overflow-hidden font-mono text-[10px] text-brand-text-secondary/60">
          <div className="flex justify-between border-b border-brand-border/20 pb-4">
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold">{data.hero.name.toUpperCase()}</span>
              <span>{data.hero.title.toUpperCase()}</span>
            </div>
            <div className="flex flex-col items-end gap-1 text-right">
              <span>{data.contact.email}</span>
              <span>{data.contact.phone}</span>
            </div>
          </div>
          <div className="h-2 w-1/3 bg-brand-border/30 rounded mt-2" />
          <div className="h-2 w-full bg-brand-border/20 rounded" />
          <div className="h-2 w-5/6 bg-brand-border/20 rounded" />
          <div className="h-2 w-4/5 bg-brand-border/20 rounded" />
          <div className="flex justify-between border-t border-brand-border/20 pt-4 mt-4">
            <span>[SYSTEM RESUME DOCUMENT PREVIEW]</span>
            <span>V2.4.0</span>
          </div>
        </div>
      </section>
    </div>
  );
}
