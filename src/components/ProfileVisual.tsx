import React, { useState, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProfileVisualProps {
  type?: 'main' | 'about';
  className?: string;
}

export const ProfileVisual: React.FC<ProfileVisualProps> = ({
  type = 'main',
  className = '',
}) => {
  const [imageFailed, setImageFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const imageSrc =
    type === 'main'
      ? PERSONAL_INFO.profileImages.main
      : PERSONAL_INFO.profileImages.about;

  // Very subtle 2-3px parallax on desktop hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 5;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 5;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor="portrait"
      className={`portrait-frame relative w-full select-none ${className}`}
    >
      {/* 1. Extremely Subtle Burgundy Ambient Glow Behind Portrait */}
      <div className="absolute -inset-5 bg-gradient-to-tr from-[#260A13] via-[#A52A52]/20 to-[#D66A89]/10 rounded-[36px] blur-3xl opacity-60 pointer-events-none transition-opacity duration-700" />

      {/* 2. Main Editorial Frame with 28–32px Rounded Corners & 1px Burgundy Border */}
      <div
        className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-[rgba(165,42,82,0.40)] bg-[#0B080A] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.85),0_0_30px_-5px_rgba(165,42,82,0.20),inset_0_1px_0_0_rgba(255,255,255,0.18)] transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
        }}
      >
        {/* Large portrait crop: 4:5 aspect ratio naturally filling the card */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#070506]">
          {/* Real Profile Image: No text, no labels, clean high-end finish */}
          <img
            src={imageSrc}
            alt={PERSONAL_INFO.name}
            loading="eager"
            onError={() => setImageFailed(true)}
            onLoad={() => {
              setImageFailed(false);
              setLoaded(true);
            }}
            className={`w-full h-full object-cover object-top filter grayscale contrast-105 hover:grayscale-0 max-md:grayscale-0 transition-all duration-700 ease-out $
              imageFailed ? 'opacity-0' : loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
          />

          {/* Minimal Architectural Backdrop if image is pending - ZERO text, ZERO labels */}
          {imageFailed && (
            <div className="absolute inset-0 bg-gradient-to-b from-[#140A0F] via-[#0B080A] to-[#050505] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(165,42,82,0.18)_0%,rgba(110,23,53,0.06)_50%,transparent_75%)]" />
              <div className="w-32 h-32 rounded-full border border-[#A52A52]/20 opacity-30" />
            </div>
          )}

          {/* Very subtle inner vignette along bottom edge for atmospheric depth */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#050505]/40 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

