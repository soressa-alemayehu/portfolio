import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Check } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { usePortfolio } from '../context/PortfolioContext';

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

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12 flex flex-col gap-8 text-left">
      {/* Back Button */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-xs font-mono text-brand-text-secondary hover:text-brand-cyan transition-colors duration-200 w-fit cursor-pointer"
      >
        <ArrowLeft size={14} /> BACK TO WORKS
      </Link>

      {/* Header Info */}
      <div className="flex flex-col gap-3">
        <div>
          <span className="px-2.5 py-0.5 rounded bg-brand-blue/10 text-brand-blue border border-brand-blue/20 text-xs font-mono font-bold">
            {project.category}
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white font-display">
          {project.title}
        </h1>
        <p className="text-brand-text-secondary text-base md:text-lg max-w-3xl">
          {project.tagline}
        </p>
      </div>

      {/* Main Image */}
      <div className="aspect-video w-full rounded-2xl overflow-hidden border border-brand-border bg-brand-bg-card-hover shadow-[0_0_40px_rgba(0,0,0,0.3)]">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-indigo/10 via-brand-purple/10 to-transparent flex items-center justify-center font-mono text-brand-text-secondary/30">
            Case Study Media Preview
          </div>
        )}
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4 items-start">
        {/* Left Column - Detailed Description */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h2 className="text-xl font-bold text-white border-b border-brand-border/40 pb-3 font-display">
            Case Study Overview
          </h2>
          <p className="text-brand-text-secondary text-sm sm:text-base leading-relaxed whitespace-pre-line">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Right Column - Sidebar specifications */}
        <div className="lg:col-span-5 flex flex-col gap-8 p-6 md:p-8 rounded-xl bg-brand-bg-card border border-brand-border/60">
          {/* Tech Stack */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-white border-b border-brand-border/20 pb-2">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-brand-bg-card-hover border border-brand-border text-xs font-mono text-brand-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-col gap-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-white border-b border-brand-border/20 pb-2">
                Deployment Metrics
              </h3>
              <ul className="flex flex-col gap-2.5 font-mono text-xs">
                {project.metrics.map((metric, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-brand-cyan">
                    <Check size={14} className="shrink-0 mt-0.5 text-glow-cyan" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links & Outbound CTA */}
          {project.links && (
            <div className="flex flex-col gap-3 pt-4 border-t border-brand-border/20">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg bg-brand-blue hover:bg-brand-cyan text-white hover:text-brand-bg transition-all font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                >
                  Visit Live Site <ExternalLink size={16} />
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg bg-brand-bg-card hover:bg-brand-bg-card-hover border border-brand-border text-brand-text-secondary hover:text-white transition-all font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer duration-300"
                >
                  Explore GitHub <GithubIcon size={16} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
