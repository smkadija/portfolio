import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  isLarge?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <article
      onClick={() => onSelect(project)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="project"
      className="group cursor-pointer relative overflow-hidden rounded-[24px] glass-panel transition-all duration-700 text-left flex flex-col justify-between col-span-1"
    >
      {/* Dynamic Reflected Light following mouse over glass card */}
      {isHovered && (
        <div
          className="absolute pointer-events-none z-20 w-80 h-80 rounded-full transition-opacity duration-300 opacity-70"
          style={{
            transform: `translate3d(${mousePos.x - 160}px, ${mousePos.y - 160}px, 0)`,
            background:
              'radial-gradient(circle, rgba(214,106,137,0.22) 0%, rgba(165,42,82,0.12) 40%, transparent 70%)',
          }}
        />
      )}

      {/* Project Image Frame with Reveal & Scale - Uniform 16/10 aspect ratio */}
      <div className="relative overflow-hidden w-full bg-[#050505]">
        <ImageWithFallback
          src={project.thumbnail}
          alt={project.title}
          fallbackTitle={project.title}
          fallbackCategory={project.categoryDisplay}
          aspectRatio="aspect-[16/10]"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B080A]/95 via-transparent to-transparent opacity-85 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

        {/* Small Glass Floating Category Badge */}
        <div className="absolute top-4 left-4 z-10 glass-pill px-3 py-1 rounded-full border border-white/10 group-hover:border-[#A52A52]/60 transition-colors">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#D66A89]">
            {project.categoryDisplay}
          </span>
        </div>

        {/* Hover Arrow Indicator (Sliding slightly) */}
        <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full glass-pill flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
          <ArrowUpRight className="w-4 h-4 text-[#F4ECEE]" />
        </div>
      </div>

      {/* Minimal Project Info with Title Shift on Hover */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-3 relative z-10">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-[#D66A89] group-hover:translate-x-1 sm:group-hover:translate-x-1.5 transition-all duration-500 tracking-tight">
            {project.title.toUpperCase()}
          </h3>
          <span className="text-xs font-mono text-[#8E8287]">
            {project.year || '2025'}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#8E8287] line-clamp-2 font-normal leading-relaxed">
          {project.oneLiner}
        </p>

        <div className="pt-2 flex items-center text-xs font-mono uppercase tracking-wider text-[#D66A89] group-hover:text-white transition-colors">
          <span>VIEW PROJECT</span>
          <span className="ml-1.5 transition-transform duration-500 group-hover:translate-x-1.5">→</span>
        </div>
      </div>
    </article>
  );
};
