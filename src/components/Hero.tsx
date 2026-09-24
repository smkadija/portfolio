import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ProfileVisual } from './ProfileVisual';
import { FiverrIcon } from './BrandIcons';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      id="home"
      className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Subtle blurred burgundy radial lighting in background */}
      <div className="absolute top-1/4 right-1/4 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-ambient-burgundy rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[360px] h-[360px] bg-ambient-rose rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Main Editorial Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Dominant 3-Line Headline & Action Row */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col text-left space-y-8 sm:space-y-10">
            
            {/* Bold, Modern, High-Contrast Editorial Typography */}
            <h1 className="text-[3.2rem] xs:text-6xl sm:text-7xl md:text-8xl lg:text-[5.4rem] xl:text-[6.4rem] font-heading font-black tracking-[-0.04em] text-[#F5EEF0] leading-[0.94] select-none">
              <span className="block text-[#F5EEF0] animate-hero-up-1">DESIGNING</span>
              <span className="block text-[#D66A89] animate-hero-up-2">
                DIGITAL
              </span>
              <span className="block text-[#F5EEF0] animate-hero-up-3">EXPERIENCES.</span>
            </h1>

            {/* Short Supporting Sentence */}
            <p className="text-base sm:text-lg text-[#8E8287] max-w-xl font-normal leading-relaxed animate-hero-up-delayed">
              Thoughtful interfaces, memorable visuals, and modern websites for forward-thinking brands and digital products.
            </p>

            {/* Glass Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2 animate-hero-up-delayed">
              {/* Primary Glass Button */}
              <button
                type="button"
                onClick={() => scrollToSection('work')}
                data-cursor="button"
                className="glass-btn-primary btn-shimmer px-7 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2.5 group"
              >
                <span>VIEW WORK</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              {/* Secondary Glass Button */}
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                data-cursor="button"
                className="glass-btn-secondary btn-shimmer px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2 group"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D66A89] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Fiverr Glass Link */}
              <a
                href={PERSONAL_INFO.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="button"
                className="glass-btn-secondary px-5 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider font-medium text-[#8E8287] hover:text-white transition-all flex items-center gap-2 group"
              >
                <FiverrIcon size={14} className="text-[#D66A89] group-hover:text-white transition-colors" />
                <span>FIVERR</span>
                <ArrowUpRight className="w-3 h-3 text-[#D66A89] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Medium-Sized Editorial Portrait with Breathing Room */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end animate-hero-portrait">
            <div className="w-full max-w-[280px] sm:max-w-[310px] lg:max-w-[330px]">
              <ProfileVisual type="main" />
            </div>
          </div>

        </div>

      </div>
    </header>
  );
};
