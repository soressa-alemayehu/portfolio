import { ArrowLeft, Download, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';

export function Resume() {
  const { data } = usePortfolio();

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col gap-8 text-left">
      {/* Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-border/40 pb-6 print:hidden">
        <Link
          to="/experience"
          className="inline-flex items-center gap-2 text-xs font-mono text-brand-text-secondary hover:text-brand-cyan transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} /> BACK TO TIMELINE
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-lg bg-brand-bg-card border border-brand-border text-brand-text-secondary hover:text-white transition-all text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            <Printer size={14} /> Print Resume
          </button>
          <a
            href={data.siteSettings.resumeUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-brand-blue hover:bg-brand-cyan text-white hover:text-brand-bg transition-all text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            <Download size={14} /> Download PDF
          </a>
        </div>
      </div>

      {/* CV Sheet */}
      <div className="w-full p-8 md:p-12 rounded-xl bg-brand-bg-card border border-brand-border/60 flex flex-col gap-8 shadow-[0_0_30px_rgba(0,0,0,0.2)] print:border-none print:shadow-none print:bg-white print:text-black">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between border-b border-brand-border/20 pb-6 gap-4 print:text-black">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-2xl font-black text-white font-display uppercase tracking-wider print:text-black">
              {data.hero.name}
            </h1>
            <p className="text-brand-cyan font-mono text-xs font-semibold tracking-wider print:text-slate-800">
              {data.hero.title.toUpperCase()}
            </p>
          </div>
          <div className="flex flex-col gap-1 text-xs text-brand-text-secondary md:text-right font-mono print:text-slate-700">
            <span>{data.contact.email}</span>
            <span>{data.contact.phone}</span>
            <span>{data.contact.location}</span>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xs font-mono font-bold tracking-widest text-white uppercase border-b border-brand-border/20 pb-1.5 w-fit print:text-black print:border-slate-300">
            Profile Summary
          </h2>
          <p className="text-brand-text-secondary text-sm leading-relaxed print:text-slate-700">
            {data.about.paragraphs.join(' ')}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xs font-mono font-bold tracking-widest text-white uppercase border-b border-brand-border/20 pb-1.5 w-fit print:text-black print:border-slate-300">
            Professional Experience
          </h2>
          <div className="flex flex-col gap-6">
            {data.experience.map((exp, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-sm font-bold text-white print:text-black">{exp.role}</h3>
                  <span className="text-xs font-mono text-brand-text-secondary/70 shrink-0 print:text-slate-500">
                    {exp.date}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold text-brand-cyan/90 font-mono print:text-slate-800">
                  <span>{exp.company}</span>
                  <span className="uppercase text-[10px]">{exp.type}</span>
                </div>
                <ul className="flex flex-col gap-1.5 mt-2">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-brand-text-secondary text-xs leading-relaxed flex items-start gap-2 print:text-slate-600">
                      <span className="text-brand-cyan mt-1.5 w-1 h-1 rounded-full bg-brand-cyan shrink-0 print:bg-slate-700" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xs font-mono font-bold tracking-widest text-white uppercase border-b border-brand-border/20 pb-1.5 w-fit print:text-black print:border-slate-300">
              Education
            </h2>
            <div className="flex flex-col gap-4">
              {data.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <h3 className="text-xs font-bold text-white print:text-black">{edu.degree}</h3>
                  <p className="text-[10px] text-brand-cyan font-mono print:text-slate-800">{edu.school}</p>
                  <p className="text-[10px] text-brand-text-secondary/60 font-mono mt-0.5 print:text-slate-500">{edu.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xs font-mono font-bold tracking-widest text-white uppercase border-b border-brand-border/20 pb-1.5 w-fit print:text-black print:border-slate-300">
              Certifications
            </h2>
            <div className="flex flex-col gap-2 text-xs text-brand-text-secondary font-mono print:text-slate-700">
              {data.certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-brand-border/10 pb-1 print:border-slate-100">
                  <span>{cert.title}</span>
                  <span className="text-[9px] text-brand-cyan print:text-slate-800">{cert.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
