import React from 'react';
import { CAPABILITIES } from '../data/portfolioData';
import { ProfileVisual } from './ProfileVisual';
import {
  FigmaIcon,
  PhotoshopIcon,
  IllustratorIcon,
  HtmlIcon,
  CssIcon,
  JsIcon,
  ReactIcon,
  FlutterIcon,
  FirebaseIcon,
  ShopifyIcon,
} from './BrandIcons';

const TOOL_ICONS: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Figma: FigmaIcon,
  Photoshop: PhotoshopIcon,
  Illustrator: IllustratorIcon,
  HTML: HtmlIcon,
  CSS: CssIcon,
  JavaScript: JsIcon,
  React: ReactIcon,
  Flutter: FlutterIcon,
  Firebase: FirebaseIcon,
  Shopify: ShopifyIcon,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#050505] border-t border-white/[0.08]">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-ambient-burgundy rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-ambient-rose rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Editorial About Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Profile Image Slot (/images/profile/profile-about.jpg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-full max-w-[340px] sm:max-w-[380px]">
              <ProfileVisual type="about" />
            </div>
          </div>

          {/* Right Column: Short Editorial Narrative & Capabilities */}
          <div className="lg:col-span-7 space-y-10">
            
            <div className="space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#D66A89] block">
                Profile
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white leading-[1.05]">
                DESIGN-MINDED.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F4ECEE] to-[#D66A89]">
                  TECHNOLOGY-DRIVEN.
                </span>
              </h2>
            </div>

            {/* Concise Editorial Copy (No CV walls) */}
            <p className="text-base sm:text-lg text-[#8E8287] leading-relaxed font-normal max-w-xl">
              I'm Kadija — a UI/UX designer and web developer based in Sylhet, Bangladesh. I partner with forward-thinking creators and businesses worldwide to create purposeful interfaces, brand identities, and modern digital experiences that stand out.
            </p>

            {/* Clean Typographic Capabilities System with Translucent Glass Chips & Real Icons */}
            <div className="pt-6 border-t border-white/[0.08] space-y-8">
              
              {/* Design Domain */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A52A52]" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#D66A89] block font-semibold">
                    DESIGN DISCIPLINES & TOOLS
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {CAPABILITIES.design.map((skill) => {
                    const IconComp = TOOL_ICONS[skill];
                    return (
                      <span
                        key={skill}
                        data-cursor="button"
                        className="glass-chip px-3.5 py-1.5 rounded-full text-xs font-mono text-[#F4ECEE]/90 hover:text-white hover:border-[#D66A89] hover:shadow-[0_0_16px_rgba(214,106,137,0.35)] transition-all duration-300 flex items-center gap-2"
                      >
                        {IconComp && <IconComp size={14} className="text-[#D66A89]" />}
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Development Domain */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D66A89]" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#D66A89] block font-semibold">
                    DEVELOPMENT & PLATFORMS
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {[...CAPABILITIES.development, 'Shopify'].map((skill) => {
                    const IconComp = TOOL_ICONS[skill];
                    return (
                      <span
                        key={skill}
                        data-cursor="button"
                        className="glass-chip px-3.5 py-1.5 rounded-full text-xs font-mono text-[#F4ECEE]/90 hover:text-white hover:border-[#D66A89] hover:shadow-[0_0_16px_rgba(214,106,137,0.35)] transition-all duration-300 flex items-center gap-2"
                      >
                        {IconComp && <IconComp size={14} className="text-[#D66A89]" />}
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
