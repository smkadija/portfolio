import React, { useState } from 'react';
import { Image as ImageIcon, ArrowUpRight } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackCategory?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackCategory,
  aspectRatio = 'aspect-[16/10]',
  priority = false,
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error) {
    return (
      <div
        className={`w-full ${aspectRatio} flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0D090B] via-[#140C10] to-[#070707] border border-[#6E1735]/25 rounded-2xl relative overflow-hidden group select-none`}
      >
        {/* Subtle geometric grid background */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #D66A89 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Ambient subtle glow */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#6E1735]/15 rounded-full blur-2xl pointer-events-none" />

        <div className="z-10 flex flex-col items-center text-center space-y-2.5 max-w-sm">
          <div className="w-11 h-11 rounded-xl bg-[#210811] border border-[#6E1735]/50 flex items-center justify-center text-[#D66A89] shadow-inner">
            <ImageIcon className="w-5 h-5" />
          </div>

          {fallbackCategory && (
            <span className="text-[10px] font-mono font-semibold tracking-widest uppercase text-[#D66A89]">
              {fallbackCategory}
            </span>
          )}

          {fallbackTitle && (
            <h4 className="text-base font-semibold text-[#FFFFFF] tracking-tight font-heading">
              {fallbackTitle}
            </h4>
          )}

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#070707]/80 border border-[#6E1735]/30 text-[10px] text-[#A99BA0] font-mono">
            <span>Asset target: {src.replace(/^\//, '')}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden w-full ${aspectRatio} bg-[#0D090B]`}>
      {!loaded && (
        <div className="absolute inset-0 bg-[#0D090B] animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#3A0D1C] border-t-[#D66A89] animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onError={() => setError(true)}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
};
