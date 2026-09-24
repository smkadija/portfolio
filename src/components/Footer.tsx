import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import {
  LinkedInIcon,
  GitHubIcon,
  BehanceIcon,
  FiverrIcon,
} from './BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Work', id: 'work' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Process', id: 'process' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: PERSONAL_INFO.linkedinUrl,
      icon: LinkedInIcon,
    },
    {
      name: 'GitHub',
      href: PERSONAL_INFO.githubUrl,
      icon: GitHubIcon,
    },
    {
      name: 'Behance',
      href: PERSONAL_INFO.behanceUrl,
      icon: BehanceIcon,
    },
    {
      name: 'Fiverr',
      href: PERSONAL_INFO.fiverrUrl,
      icon: FiverrIcon,
    },
  ];

  return (
    <footer className="pt-20 pb-16 bg-[#070707] border-t border-white/[0.08] relative overflow-hidden">
      {/* Soft ambient background lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-ambient-burgundy rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">

        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/[0.08]">

          {/* Profile */}
          <div className="md:col-span-5 flex items-center gap-4">
            <div className="w-[46px] h-[46px] sm:w-[52px] sm:h-[52px] rounded-full overflow-hidden border border-[#A52A52]/70 shadow-[0_0_14px_rgba(165,42,82,0.4)] bg-[#0B080A] flex-shrink-0">
              <img
                src={PERSONAL_INFO.profileImages.main}
                alt="S M Kadija"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg sm:text-xl font-heading font-black tracking-tight text-[#F5EEF0]">
                S M KADIJA
              </h3>

              <p className="text-sm sm:text-[15px] font-mono text-[#8E8287]">
                UI/UX Designer &amp; Web Developer
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                data-cursor="button"
                className="text-sm font-mono uppercase tracking-wider text-[#8E8287] hover:text-[#F5EEF0] hover:drop-shadow-[0_0_8px_rgba(214,106,137,0.7)] transition-all"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-3">
            {socialLinks.map((item) => {
              const IconComponent = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="button"
                  title={item.name}
                  className="w-10 h-10 rounded-full glass-chip flex items-center justify-center text-[#8E8287] hover:text-[#D66A89] hover:border-[#D66A89] hover:shadow-[0_0_12px_rgba(214,106,137,0.4)] transition-all"
                >
                  <IconComponent size={17} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Information */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[#8E8287] text-xs sm:text-sm">

          {/* Location / Availability / Email */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="text-[#F5EEF0]">
              Sylhet, Bangladesh
            </span>

            <span className="text-white/20">•</span>

            <span className="text-[#D66A89] flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D66A89] animate-pulse" />
              Available Worldwide
            </span>

            <span className="text-white/20">•</span>

            <a
              href={'mailto:' + PERSONAL_INFO.email}
              className="text-[#8E8287] hover:text-[#F5EEF0] transition-colors break-all"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          {/* Copyright / Back to Top */}
          <div className="flex items-center gap-6 self-end md:self-auto">
            <span>
              © {new Date().getFullYear()} S M Kadija. All rights reserved.
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              data-cursor="button"
              className="p-2.5 rounded-full glass-chip text-[#8E8287] hover:text-white hover:border-[#D66A89] transition-all flex items-center gap-1 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-[#D66A89]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};