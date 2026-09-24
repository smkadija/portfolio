import React from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectMarqueeProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectMarquee: React.FC<ProjectMarqueeProps> = ({ onSelectProject }) => {
  // Duplicated once for seamless looping
  const marqueeProjects = [...PROJECTS, ...PROJECTS];

  return (
    <div className="py-14 sm:py-18 bg-[#0B080A] border-y border-white/[0.08] overflow-hidden relative select-none">
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#0B080A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#0B080A] to-transparent z-10 pointer-events-none" />

      {/* Infinite Horizontal Project Track */}
      <div className="pause-on-hover overflow-hidden">
        <div className="animate-marquee-slow flex items-center gap-6 sm:gap-8">
          {marqueeProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex-shrink-0 w-[280px] sm:w-[350px] rounded-xl overflow-hidden border border-white/[0.08] hover:border-[#D66A89]/60 bg-[#050505] transition-all duration-300"
            >
              <div className="relative overflow-hidden w-full aspect-[16/10] bg-[#050505]">
                <ImageWithFallback
                  src={project.thumbnail}
                  alt={project.title}
                  fallbackTitle={project.title}
                  fallbackCategory={project.categoryDisplay}
                  aspectRatio="aspect-[16/10]"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4 flex items-center justify-between text-left">
                <span className="text-xs font-heading font-bold text-white group-hover:text-[#D66A89] transition-colors uppercase">
                  {project.title}
                </span>
                <span className="text-[10px] font-mono text-[#8E8287]">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
