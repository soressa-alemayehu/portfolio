import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectCard } from '../components/ProjectCard';

type FilterType = 'All' | 'Web' | 'AI' | 'Open Source';

export function Projects() {
  const { data } = usePortfolio();
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filters: FilterType[] = ['All', 'Web', 'AI', 'Open Source'];

  const filteredProjects = data.projects.filter((project) => {
    if (activeFilter === 'All') return true;
    
    const pCat = project.category.toLowerCase();
    const fCat = activeFilter.toLowerCase();
    
    // Check if project category matches filter (e.g. AI or Web or Open Source)
    return pCat.includes(fCat) || (fCat === 'open source' && pCat.includes('open'));
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12 text-center items-center">
      {/* Title Header */}
      <div className="flex flex-col gap-4 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display">
          Selected Works
        </h1>
        <p className="text-brand-text-secondary text-sm sm:text-base leading-relaxed">
          Explore our portfolio of high-performance technical solutions, from custom AI architectures to enterprise-scale web systems.
        </p>
      </div>

      {/* Dynamic Filters tabs */}
      <div className="flex flex-wrap justify-center items-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full font-semibold text-xs font-mono border cursor-pointer transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-brand-blue border-brand-blue text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                : 'bg-brand-bg-card border-brand-border text-brand-text-secondary hover:text-white hover:border-brand-text-secondary/40'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Case studies list */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left mt-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-brand-text-secondary text-sm font-mono mt-12 py-12 border border-dashed border-brand-border rounded-xl w-full">
          NO MATCHING PROTOCOL ARCHITECTURES DEPLOYED.
        </div>
      )}
    </div>
  );
}
