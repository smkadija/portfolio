import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { X, ArrowUpRight, Layers, Cpu, Compass, ExternalLink, Maximize2 } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { LightboxModal } from './LightboxModal';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onContactClick?: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onContactClick,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !lightboxOpen) onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, lightboxOpen, onClose]);

  if (!project) return null;

  const galleryImages =
    project.images && project.images.length > 0
      ? project.images
      : [project.thumbnail];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
        
        {/* Backdrop click dismiss */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window with Burgundy Liquid Glass */}
        <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel bg-[#12080C]/95 border-[#A52A52]/50 rounded-[28px] shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(165,42,82,0.3)] p-6 sm:p-10 text-left my-auto">
          
          {/* Header Row: Category, Close Button */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D66A89] bg-[#3A0D1C]/70 border border-[#A52A52]/60 px-3.5 py-1.5 rounded-full shadow-[0_0_12px_rgba(165,42,82,0.25)]">
                {project.categoryDisplay}
              </span>
              <span className="text-xs font-mono text-[#8E8287]">
                {project.year || '2025'}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-full glass-chip text-[#8E8287] hover:text-white hover:border-[#D66A89] transition-all focus:outline-none"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-2 mb-8">
            <h3 className="text-2xl sm:text-4xl font-heading font-black tracking-tight text-white uppercase">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-[#8E8287]">
              {project.oneLiner}
            </p>
          </div>

          {/* Hero Thumbnail Preview with Lightbox Trigger */}
          <div
            onClick={() => openLightbox(0)}
            className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/[0.08] bg-[#050505] mb-10 shadow-xl"
          >
            <ImageWithFallback
              src={project.thumbnail}
              alt={project.title}
              fallbackTitle={project.title}
              fallbackCategory={project.categoryDisplay}
              aspectRatio="aspect-[16/9]"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs">
              <Maximize2 className="w-4 h-4 text-[#D66A89]" />
              <span>CLICK TO VIEW FULL SCREEN</span>
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-2xl glass-panel mb-10 text-sm">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8287] block mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#D66A89]" />
                Tools &amp; Technologies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-3 py-1 rounded-full glass-chip text-[#F4ECEE]/90 font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8287] block mb-2 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#D66A89]" />
                Discipline
              </span>
              <span className="font-mono text-xs text-white uppercase">{project.category}</span>
            </div>
          </div>

          {/* Additional Gallery Screens */}
          {galleryImages.length > 1 && (
            <div className="mb-10">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#D66A89] mb-4">
                Screens &amp; Visuals ({galleryImages.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {galleryImages.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className="group relative cursor-pointer rounded-xl overflow-hidden border border-white/[0.08] bg-[#050505]"
                  >
                    <ImageWithFallback
                      src={imgSrc}
                      alt={`${project.title} view ${idx + 1}`}
                      fallbackTitle={`${project.title} View ${idx + 1}`}
                      aspectRatio="aspect-[16/10]"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs gap-1 font-mono">
                      <Maximize2 className="w-4 h-4 text-[#D66A89]" />
                      <span>EXPAND</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Bottom CTAs */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.behanceUrl && (
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="button"
                  className="glass-btn-secondary inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-medium text-[#F4ECEE] hover:text-white"
                >
                  <span>View on Behance</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#D66A89]" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="button"
                  className="glass-btn-secondary inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-medium text-[#F4ECEE] hover:text-white"
                >
                  <span>View Code on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#D66A89]" />
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                const contactEl = document.getElementById('contact');
                if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                if (onContactClick) onContactClick();
              }}
              data-cursor="button"
              className="glass-btn-primary btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-semibold active:scale-95"
            >
              <span>INQUIRE ABOUT THIS PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

      {/* Embedded High-Resolution Lightbox */}
      <LightboxModal
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1))
        }
        onNext={() =>
          setLightboxIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0))
        }
        title={project.title}
      />
    </>
  );
};
