import React, { useEffect, useRef, useState } from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalDist = rect.height + windowHeight * 0.5;
      const currentDist = windowHeight - rect.top;
      const progress = Math.min(
        Math.max(currentDist / totalDist, 0),
        1
      );

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 sm:py-32 relative bg-[#050505] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-ambient-burgundy rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

        {/* Section Header */}
        <div className="mb-16 sm:mb-20 space-y-3">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#D66A89] block font-semibold">
            Process
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white">
            HOW I WORK
          </h2>
        </div>

        {/* Editorial 4-Step Process Glass Timeline */}
        <div className="relative">

          {/* Timeline Base Line */}
          <div
            className="hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-[2px] bg-white/[0.08] z-0 pointer-events-none"
            aria-hidden="true"
          />

          {/* Progressive Burgundy Accent Line */}
          <div
            className="hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-[2px] z-0 origin-left transition-transform duration-300 ease-out pointer-events-none"
            style={{
              transform: `scaleX(${Math.min(
                Math.max((scrollProgress - 0.15) * 1.35, 0),
                1
              )})`,
              background:
                'linear-gradient(90deg, #6E1735 0%, #A52A52 50%, #D66A89 100%)',
              boxShadow: '0 0 16px rgba(214, 106, 137, 0.7)',
            }}
            aria-hidden="true"
          />

          {/* Process Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const stepThreshold = 0.2 + idx * 0.2;
              const isIlluminated = scrollProgress >= stepThreshold;

              return (
                <div
                  key={step.number}
                  className={`flex flex-col text-left p-6 sm:p-7 rounded-[22px] transition-all duration-500 relative z-30 ${
                    isIlluminated
                      ? 'glass-panel bg-[rgba(165,42,82,0.08)] border-[#A52A52]/70 shadow-[0_16px_36px_rgba(0,0,0,0.8),0_0_24px_rgba(165,42,82,0.25)]'
                      : 'glass-panel hover:border-[#A52A52]/50 hover:bg-[rgba(255,255,255,0.05)]'
                  }`}
                >

                  {/* Step Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-mono font-bold transition-all duration-500 ${
                        isIlluminated
                          ? 'bg-[#A52A52] text-white border border-[#D66A89] shadow-[0_0_16px_rgba(214,106,137,0.7)]'
                          : 'bg-[#180910] text-[#8E8287] border border-white/10'
                      }`}
                    >
                      {step.number}
                    </span>

                    <span
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        isIlluminated
                          ? 'bg-[#D66A89] shadow-[0_0_8px_rgba(214,106,137,0.8)]'
                          : 'bg-[#A52A52]/40'
                      }`}
                    />
                  </div>

                  {/* Step Title */}
                  <h3
                    className={`text-xl sm:text-2xl font-heading font-bold tracking-tight uppercase mb-3 transition-colors duration-300 ${
                      isIlluminated ? 'text-white' : 'text-white/90'
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm sm:text-base text-[#8E8287] font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};