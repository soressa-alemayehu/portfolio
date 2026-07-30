import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Check, Layers, ShieldCheck, Terminal } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectGallery } from '../components/ProjectGallery';

export function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const { data } = usePortfolio();

  const project = data.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-6">
        <h1 className="text-4xl font-black tracking-tight text-white font-display">Project Not Found</h1>
        <p className="text-brand-text-secondary text-sm max-w-sm">
          The requested system node could not be retrieved from the directory.
        </p>
        <Link
          to="/projects"
          className="mt-4 px-5 py-2.5 rounded-lg bg-brand-bg-card border border-brand-border text-brand-cyan hover:text-white transition-colors text-sm font-semibold cursor-pointer"
        >
          Return to Catalog
        </Link>
      </div>
    );
  }

  // Combine primary image + gallery images
  const allImages = Array.from(
    new Set([project.image, ...(project.galleryImages || [])].filter(Boolean))
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 flex flex-col gap-10 text-left">
      {/* Navigation & Header Info */}
      <div className="flex flex-col gap-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-brand-text-secondary hover:text-brand-cyan transition-colors duration-200 w-fit cursor-pointer"
        >
          <ArrowLeft size={14} /> BACK TO WORKS
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-border/40 pb-8">
          <div className="flex flex-col gap-3 max-w-3xl">
            <div>
              <span className="px-3 py-1 rounded bg-brand-blue/10 text-brand-blue border border-brand-blue/20 text-xs font-mono font-bold">
                {project.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white font-display">
              {project.title}
            </h1>
            <p className="text-brand-text-secondary text-base md:text-lg leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Action CTAs */}
          {project.links && (
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-cyan text-white hover:text-brand-bg transition-all font-semibold text-xs flex items-center gap-2 cursor-pointer duration-300 shadow-[0_0_15px_rgba(59,130,246,0.25)]"
                >
                  Visit Live Site <ExternalLink size={14} />
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-brand-bg-card hover:bg-brand-bg-card-hover border border-brand-border text-brand-text-secondary hover:text-white transition-all font-semibold text-xs flex items-center gap-2 cursor-pointer duration-300"
                >
                  Source Code <GithubIcon size={14} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* FULL-WIDTH BLOCK 1: Case Study Overview & Highlights */}
      <div className="w-full flex flex-col gap-6 p-8 md:p-10 rounded-2xl bg-brand-bg-card/70 border border-brand-border/70 backdrop-blur-sm shadow-xl">
        <div className="flex items-center gap-3 border-b border-brand-border/40 pb-4">
          <div className="p-2 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan">
            <Terminal size={18} />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white font-display">
            Case Study Overview
          </h2>
        </div>

        {/* Formatted Paragraphs */}
        <div className="text-brand-text-secondary text-sm md:text-base leading-relaxed flex flex-col gap-4 font-sans">
          <p className="whitespace-pre-line text-brand-text-primary/90 font-medium">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Feature Highlights List */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-4 pt-6 border-t border-brand-border/30 flex flex-col gap-4">
            <h3 className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase flex items-center gap-2">
              <ShieldCheck size={14} /> Key Architecture & Technical Highlights
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans text-xs md:text-sm text-brand-text-secondary">
              {project.highlights.map((highlight: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-bg/50 border border-brand-border/40"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0 animate-pulse text-glow-cyan" />
                  <span className="leading-snug">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Highlight Callout Box */}
        <div className="p-4 md:p-6 rounded-r-xl border-l-4 border-brand-cyan bg-brand-bg-card-hover/80 border-t border-r border-b border-brand-border/50 text-xs md:text-sm text-brand-text-secondary italic">
          "{project.tagline}" — Engineered for high scale, reliability, and intuitive developer experience.
        </div>
      </div>

      {/* FULL-WIDTH BLOCK 2: Case Study Image Gallery */}
      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            System Screenshots & Interface Gallery
          </h2>
          <span className="text-xs font-mono text-brand-text-secondary">
            {allImages.length} {allImages.length === 1 ? 'View' : 'Views'} (Click to Enlarge)
          </span>
        </div>

        <ProjectGallery images={allImages} title={project.title} />
      </div>

      {/* FULL-WIDTH BLOCK 3: Technology Stack & Deployment Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-2">
        {/* Technology Stack Box */}
        <div className="lg:col-span-7 p-6 md:p-8 rounded-2xl bg-brand-bg-card/70 border border-brand-border/70 flex flex-col gap-4">
          <div className="flex items-center gap-2.5 border-b border-brand-border/30 pb-3">
            <Layers size={16} className="text-brand-purple" />
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              Technology Stack & Tools
            </h3>
          </div>
          <div className="flex flex-wrap gap-2.5 pt-1">
            {(project.techStack || []).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-brand-bg-card-hover border border-brand-border text-xs font-mono text-brand-text-primary hover:text-brand-cyan hover:border-brand-cyan/40 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Deployment Metrics Box */}
        <div className="lg:col-span-5 p-6 md:p-8 rounded-2xl bg-brand-bg-card/70 border border-brand-border/70 flex flex-col gap-4">
          <div className="flex items-center gap-2.5 border-b border-brand-border/30 pb-3">
            <Check size={16} className="text-brand-cyan" />
            <h3 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              Deployment Metrics
            </h3>
          </div>
          {project.metrics && project.metrics.length > 0 ? (
            <ul className="flex flex-col gap-2.5 font-mono text-xs">
              {(project.metrics || []).map((metric, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-brand-cyan">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0 animate-pulse text-glow-cyan" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-brand-text-secondary font-mono">
              Production verified & optimized.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
