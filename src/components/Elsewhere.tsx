import React from 'react';
import { ELSEWHERE_LINKS } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { BehanceIcon, GithubIcon, LinkedinIcon, FiverrIcon } from './BrandIcons';

const BRAND_ICON_MAP: Record<string, React.FC<{ size?: number; className?: string }>> = {
  BEHANCE: BehanceIcon,
  GITHUB: GithubIcon,
  LINKEDIN: LinkedinIcon,
  FIVERR: FiverrIcon,
};

export const Elsewhere: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#D66A89] block">
            Presence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white">
            ELSEWHERE
          </h2>
        </div>

        {/* 4 Glass Presence Panels with Real Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {ELSEWHERE_LINKS.map((item) => {
            const IconComp = BRAND_ICON_MAP[item.platform.toUpperCase()];
            return (
              <a
                key={item.platform}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="button"
                className="group p-6 sm:p-7 rounded-[22px] glass-panel transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3 mb-8">
                  <div className="w-10 h-10 rounded-full glass-chip flex items-center justify-center text-[#D66A89] group-hover:text-white group-hover:border-[#D66A89] group-hover:shadow-[0_0_16px_rgba(214,106,137,0.5)] transition-all">
                    {IconComp ? <IconComp size={18} /> : <ArrowUpRight size={18} />}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-[#D66A89] transition-colors">
                      {item.platform}
                    </h3>
                    <p className="text-xs font-mono text-[#8E8287]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[#F4ECEE] group-hover:text-[#D66A89] transition-colors pt-4 border-t border-white/[0.06]">
                  <span>{item.actionText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
