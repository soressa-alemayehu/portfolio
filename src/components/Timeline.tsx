import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  date: string;
  description: string[];
  skills: string[];
}

interface TimelineProps {
  experience: ExperienceItem[];
}

export function Timeline({ experience }: TimelineProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: 'spring' as const, bounce: 0.2 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      className="relative border-l border-brand-border/60 ml-4 md:ml-6 flex flex-col gap-12"
    >
      {(experience || []).map((item, index) => (
        <div key={index} className="relative pl-8 md:pl-10">
          {/* Bullet node */}
          <div className="absolute -left-[17px] top-1.5 flex items-center justify-center w-8 h-8 rounded-lg bg-brand-bg-card border border-brand-border text-brand-purple z-10 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
            <Briefcase size={14} />
          </div>

          {/* Timeline Card */}
          <motion.div
            variants={cardVariants}
            className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-brand-bg-card to-brand-bg-card/40 border border-brand-border/60 hover:border-brand-purple/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 flex flex-col gap-4 group"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-border/20 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-purple transition-colors">
                  {item.role}
                </h3>
                <p className="text-brand-text-secondary text-sm font-medium mt-1">
                  {item.company}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 text-xs text-brand-text-secondary">
                  <Calendar size={13} />
                  {item.date}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-purple/10 text-brand-purple border border-brand-purple/20 text-xs font-mono font-medium">
                  {item.type}
                </span>
              </div>
            </div>

            {/* Achievement description */}
            <ul className="flex flex-col gap-2.5 my-2">
              {(item.description || []).map((bullet, bIdx) => (
                <li key={bIdx} className="text-brand-text-secondary text-sm leading-relaxed flex items-start gap-2">
                  <span className="text-brand-purple mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {(item.skills || []).map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded bg-brand-bg-card-hover border border-brand-border text-xs font-mono text-brand-text-secondary hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}
