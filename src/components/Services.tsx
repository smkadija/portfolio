import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#050505]">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-ambient-burgundy rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/[0.08] gap-6">
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#D66A89] block">
              Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white">
              WHAT I DO
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#8E8287] max-w-sm font-normal">
            Disciplines focused on elevating digital presence and user interaction.
          </p>
        </div>

        {/* Minimal Editorial List with High-End Interactive States */}
        <div className="divide-y divide-white/[0.08]">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              onClick={handleScrollToContact}
              data-cursor="button"
              className="group cursor-pointer relative py-8 sm:py-10 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6 px-4 sm:px-6 rounded-2xl hover:bg-gradient-to-r hover:from-[rgba(165,42,82,0.12)] hover:to-transparent"
            >
              {/* Expanding burgundy bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-[1.5px] bg-[#A52A52] shadow-[0_0_12px_rgba(214,106,137,0.7)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left pointer-events-none" />

              <div className="flex items-baseline gap-6 sm:gap-10">
                {/* Number becomes brighter and glows on hover */}
                <span className="text-sm sm:text-base font-mono font-bold text-[#A52A52] group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(214,106,137,0.8)] transition-all duration-300">
                  {service.number}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white group-hover:text-[#F4ECEE] transition-colors tracking-tight">
                  {service.title}
                </h3>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 md:w-1/2">
                <p className="text-sm sm:text-base text-[#8E8287] group-hover:text-[#F4ECEE]/90 transition-colors">
                  {service.description}
                </p>
                <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-[#D66A89] group-hover:bg-[#260A13] group-hover:shadow-[0_0_16px_rgba(165,42,82,0.4)] flex items-center justify-center transition-all duration-300 flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4 text-[#8E8287] group-hover:text-[#D66A89] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
