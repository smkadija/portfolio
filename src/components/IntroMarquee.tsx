import React from 'react';

export const IntroMarquee: React.FC = () => {
  const skills = [
    'UI/UX DESIGN',
    'GRAPHIC DESIGN',
    'WEB DESIGN',
    'FRONT-END DEVELOPMENT',
    'SHOPIFY',
    'BRANDING',
    'DIGITAL EXPERIENCES',
  ];

  const repeated = [...skills, ...skills, ...skills];

  return (
    <div className="w-full py-4 border-y border-white/[0.08] bg-[#050505] overflow-hidden select-none relative pause-on-hover">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee-slow flex items-center gap-8 sm:gap-12">
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 sm:gap-12 flex-shrink-0">
            <span className="font-mono text-xs sm:text-sm tracking-widest uppercase text-[#8E8287] hover:text-[#F4ECEE] transition-colors whitespace-nowrap">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#5E1630] flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
