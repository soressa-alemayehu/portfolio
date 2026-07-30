import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectLinks {
  live?: string;
  github?: string;
}

interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  techStack: string[];
  image: string;
  featured: boolean;
  links?: ProjectLinks;
}

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const getCategoryBadgeStyles = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('ai')) {
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    } else if (cat.includes('web')) {
      return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
    } else if (cat.includes('open')) {
      return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
    } else {
      return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <motion.div
      whileHover={{
        y: -6,
        borderColor: 'rgba(99, 102, 241, 0.4)',
        boxShadow: '0 10px 30px -15px rgba(99, 102, 241, 0.3)',
      }}
      className="flex flex-col h-full rounded-xl bg-brand-bg-card border border-brand-border/60 overflow-hidden transition-all duration-300 group"
    >
      {/* Project Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-brand-bg-card-hover border-b border-brand-border/30">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-indigo/10 to-brand-purple/10 flex items-center justify-center font-mono text-brand-text-secondary/30 text-xs">
            No Preview Image
          </div>
        )}
        {/* Category tag */}
        <span
          className={`absolute top-4 right-4 px-2.5 py-0.5 rounded border text-[10px] font-mono font-bold ${getCategoryBadgeStyles(
            project.category
          )}`}
        >
          {project.category}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-col flex-grow p-6 gap-3">
        <h3 className="text-lg font-bold text-white group-hover:text-brand-indigo transition-colors">
          {project.title}
        </h3>
        <p className="text-brand-text-secondary text-sm leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {(project.techStack || []).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-brand-bg-card-hover border border-brand-border text-[10px] font-mono uppercase text-brand-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Call to action */}
        <div className="pt-4 border-t border-brand-border/30 mt-4">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-cyan hover:text-white transition-colors duration-200"
          >
            View Case Study <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
