import { motion } from 'framer-motion';

interface SkillsCategory {
  category: string;
  items: string[];
}

interface SkillsGridProps {
  skills: SkillsCategory[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  const getCategoryStyles = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes('front')) {
      return {
        border: 'border-cyan-500/20 hover:border-cyan-500/40',
        badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
        glow: 'hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]',
      };
    } else if (lower.includes('back') || lower.includes('database')) {
      return {
        border: 'border-purple-500/20 hover:border-purple-500/40',
        badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
        glow: 'hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]',
      };
    } else if (lower.includes('ai') || lower.includes('ml')) {
      return {
        border: 'border-emerald-500/20 hover:border-emerald-500/40',
        badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        glow: 'hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]',
      };
    } else {
      return {
        border: 'border-brand-border/40 hover:border-blue-500/40',
        badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
        glow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]',
      };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {skills.map((skillGroup) => {
        const styles = getCategoryStyles(skillGroup.category);
        return (
          <motion.div
            key={skillGroup.category}
            variants={itemVariants}
            className={`p-6 rounded-xl bg-brand-bg-card border ${styles.border} ${styles.glow} transition-all duration-300 flex flex-col gap-4`}
          >
            <h3 className="font-mono text-xs font-semibold tracking-wider text-brand-text-secondary uppercase border-b border-brand-border/30 pb-3">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-md text-xs font-mono border ${styles.badge} transition-transform hover:scale-105 duration-200`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
