import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Cpu, GitBranch, Smartphone, Link as LinkIcon, Cloud, Mail, MapPin } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { SkillsGrid } from '../components/SkillsGrid';

export function Home() {
  const { data } = usePortfolio();

  // Find featured projects
  const featuredProjects = data.projects.filter(p => p.featured);
  // Pick the top featured project for the "Top Production Case" section
  const topProject = featuredProjects[0] || data.projects[0];

  // Helper to map icon names to Lucide icons
  const renderServiceIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'monitor':
        return <Monitor size={24} className="text-brand-cyan" />;
      case 'cpu':
        return <Cpu size={24} className="text-brand-cyan" />;
      case 'git-branch':
        return <GitBranch size={24} className="text-brand-cyan" />;
      case 'smartphone':
        return <Smartphone size={24} className="text-brand-cyan" />;
      case 'link':
        return <LinkIcon size={24} className="text-brand-cyan" />;
      case 'cloud':
        return <Cloud size={24} className="text-brand-cyan" />;
      default:
        return <Cpu size={24} className="text-brand-cyan" />;
    }
  };

  return (
    <div className="w-full flex flex-col gap-28 pb-20">
      {/* 1. Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-12 md:pt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_50%)] pointer-events-none" />

        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-10">


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] font-display"
          >
            {data.hero.title.split(' | ')[0] || 'Architecting Intelligent'}
            <span className="block bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple bg-clip-text text-transparent">
              {data.hero.title.split(' | ')[1] || 'Solutions'}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-text-secondary text-base sm:text-lg leading-relaxed max-w-xl"
          >
            {data.hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <Link
              to="/projects"
              className="px-6 py-3 rounded-lg bg-brand-blue hover:bg-brand-cyan text-white hover:text-brand-bg font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center gap-2 cursor-pointer"
            >
              {data.hero.ctaText}
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg bg-brand-bg-card hover:bg-brand-bg-card-hover border border-brand-border text-brand-text-secondary hover:text-white font-semibold text-sm transition-all duration-300 cursor-pointer"
            >
              {data.hero.secondaryCtaText || "Let's Talk"}
            </Link>
          </motion.div>
        </div>

        {/* Right Side - Hero Graphic */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-brand-border bg-brand-bg-card flex items-center justify-center neon-glow-cyan group"
          >
            {/* Embedded neon style graphic mock */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 via-brand-purple/10 to-brand-indigo/10 z-0" />
            <div className="z-10 p-8 text-center flex flex-col gap-4">
              <div className="w-20 h-20 rounded-2xl bg-brand-bg border border-brand-border/60 mx-auto flex items-center justify-center text-brand-cyan font-black text-2xl shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                SA
              </div>
              <h3 className="text-white font-mono text-sm font-semibold tracking-widest uppercase">
                SOFTWARE DEVELOPER & AI 
              </h3>
              <p className="text-xs text-brand-text-secondary leading-relaxed">
                Full-Stack Systems Engineer focusing on deep learning optimizations and client integration.
              </p>
              <div className="flex justify-center gap-1.5 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-pulse [animation-delay:0.4s]" />
              </div>
            </div>
            {/* Glowing borders */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent animate-pulse" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-purple to-transparent animate-pulse" />
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full py-8 px-6 md:px-12 rounded-xl bg-brand-bg-card border border-brand-border/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {data.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-1.5">
              <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight bg-gradient-to-r from-brand-cyan to-brand-blue bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-wider text-brand-text-secondary uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 3. About Section */}
      <section className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {data.about.title}
          </h2>
          <div className="flex flex-col gap-4 text-brand-text-secondary leading-relaxed text-sm sm:text-base">
            {data.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Quote Box */}
          <div className="mt-4 p-6 rounded-lg bg-brand-bg-card-hover border border-brand-cyan/20 border-l-4 border-l-brand-cyan text-brand-text-secondary text-sm italic font-medium relative overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.05)]">
            <span className="text-3xl text-brand-cyan/10 font-serif absolute -top-1 -left-1">“</span>
            <p className="relative z-10">{data.about.quote}</p>
          </div>
        </div>

        {/* Right Column - Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="p-6 rounded-xl bg-brand-bg-card border border-brand-border/60 hover:border-brand-cyan/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all duration-300 text-left flex flex-col gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
              <Monitor size={18} />
            </div>
            <h3 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
              Full-Stack Precision
            </h3>
            <p className="text-xs text-brand-text-secondary leading-relaxed">
              Expertise in React, Node.js, and Python ecosystems with a focus on type-safe, maintainable, and high-performance codebases.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-brand-bg-card border border-brand-border/60 hover:border-brand-purple/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.1)] transition-all duration-300 text-left flex flex-col gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
              <Cpu size={18} />
            </div>
            <h3 className="text-base font-bold text-white group-hover:text-brand-purple transition-colors">
              AI & Deep Learning
            </h3>
            <p className="text-xs text-brand-text-secondary leading-relaxed">
              Specializing in LLM orchestration, RAG pipelines, embedding vector stores, and custom model API integration.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Skills Grid ("The Arsenal") */}
      <section className="w-full max-w-7xl mx-auto px-6 flex flex-col gap-10">
        <div className="flex flex-col gap-3 text-left">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">The Arsenal</h2>
          <p className="text-brand-text-secondary text-sm">
            Cutting-edge technologies powering modern digital ecosystems.
          </p>
        </div>
        <SkillsGrid skills={data.skills} />
      </section>

      {/* 5. Services Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 flex flex-col gap-10">
        <div className="flex flex-col gap-3 text-left">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Engineering Services</h2>
          <p className="text-brand-text-secondary text-sm">
            High-performance development services tailored for complex business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.services.slice(0, 3).map((service, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-xl bg-brand-bg-card border border-brand-border/60 hover:border-brand-cyan/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all duration-300 text-left flex flex-col gap-4 group relative overflow-hidden"
            >
              {service.badge && (
                <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-[10px] font-mono font-bold text-brand-emerald">
                  {service.badge}
                </span>
              )}
              <div className="w-12 h-12 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
                {renderServiceIcon(service.icon)}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Featured Project ("Top Production Case") */}
      <section className="w-full max-w-7xl mx-auto px-6 flex flex-col gap-10">
        <div className="flex items-end justify-between border-b border-brand-border/30 pb-4">
          <div className="flex flex-col gap-2 text-left">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Top Production Case</h2>
            <p className="text-brand-text-secondary text-sm">
              A deep dive into high-scale engineering.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-cyan hover:text-white transition-colors duration-200"
          >
            All Case Studies <ArrowRight size={13} />
          </Link>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-bg-card/40 border border-brand-border/60 rounded-2xl overflow-hidden p-6 md:p-8">
          {/* Project Preview Screen */}
          <div className="lg:col-span-6 relative aspect-video w-full rounded-xl overflow-hidden bg-brand-bg-card-hover border border-brand-border">
            {topProject.image ? (
              <img
                src={topProject.image}
                alt={topProject.title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-brand-indigo/10 to-brand-purple/10 flex items-center justify-center font-mono text-brand-text-secondary/30 text-xs">
                Case Study Media Preview
              </div>
            )}
          </div>

          {/* Project Copy */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left lg:pl-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-brand-blue/10 text-brand-blue border border-brand-blue/20 text-[10px] font-mono font-bold">
                {topProject.category}
              </span>
              {topProject.techStack.slice(0, 2).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-brand-bg-card-hover border border-brand-border text-[10px] font-mono text-brand-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-white leading-tight">
                {topProject.title}
              </h3>
              <p className="text-brand-text-secondary text-sm leading-relaxed">
                {topProject.description}
              </p>
            </div>

            {/* Metrics Checklist */}
            <ul className="flex flex-col gap-2 bg-brand-bg-card/50 border border-brand-border/30 rounded-lg p-4 font-mono text-xs">
              {topProject.metrics.map((metric, mIdx) => (
                <li key={mIdx} className="flex items-center gap-2 text-brand-cyan">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0 animate-pulse text-glow-cyan" />
                  {metric}
                </li>
              ))}
            </ul>

            <Link
              to={`/projects/${topProject.id}`}
              className="px-5 py-2.5 rounded-lg bg-brand-bg-card hover:bg-brand-bg-card-hover border border-brand-border text-brand-cyan hover:text-white transition-all font-semibold text-xs flex items-center gap-2 w-fit duration-300 shadow-[0_0_10px_rgba(6,182,212,0.1)]"
            >
              View Case Study
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>



      {/* 8. Let's Build the Future Banner */}
      <section className="w-full max-w-7xl mx-auto px-6">
        <div className="w-full p-8 md:p-12 rounded-2xl bg-brand-bg-card border border-brand-border/60 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 neon-glow-cyan text-left">
          {/* BG design elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/5 via-brand-indigo/5 to-transparent pointer-events-none" />

          {/* Left copy */}
          <div className="flex flex-col gap-4 max-w-xl relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Let's Build the Future
            </h2>
            <p className="text-xs md:text-sm text-brand-text-secondary leading-relaxed">
              Currently accepting high-impact projects and technical partnerships. Let's discuss how we can integrate AI into your ecosystem.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-2 text-xs text-brand-text-secondary font-mono">
              <span className="flex items-center gap-1.5">
                <Mail size={14} className="text-brand-cyan" /> {data.contact.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-brand-cyan" /> {data.contact.location}
              </span>
            </div>
          </div>

          {/* CTA routing button */}
          <div className="shrink-0 relative z-10 w-full lg:w-auto">
            <Link
              to="/contact"
              className="w-full lg:w-auto px-6 py-3 rounded-lg bg-brand-blue hover:bg-brand-cyan text-white hover:text-brand-bg transition-all font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
            >
              Request Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
