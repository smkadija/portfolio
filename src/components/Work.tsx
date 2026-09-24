import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

interface WorkProps {
  onSelectProject: (project: Project) => void;
}

export const Work: React.FC<WorkProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');

  const categories: ProjectCategory[] = [
    'ALL',
    'UI/UX',
    'GRAPHIC DESIGN',
    'WEB',
    'SHOPIFY',
  ];

  const filteredProjects =
    activeCategory === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 sm:py-32 relative bg-[#050505]">
      {/* Subtle deep burgundy ambient glow */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-ambient-burgundy rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Minimal Metadata */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 text-left">
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#D66A89] block">
              Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white">
              SELECTED WORK
            </h2>
            <p className="text-sm sm:text-base text-[#8E8287] font-normal max-w-md">
              A curated selection of interfaces, design systems, and digital experiences.
            </p>
          </div>

          {/* Minimalist Floating Glass Filter */}
          <div className="glass-filter p-1.5 rounded-full flex flex-wrap items-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#260A13] text-[#F4ECEE] border border-[#5E1630] font-semibold'
                    : 'text-[#8E8287] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Consistent Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
