import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Wide Glass Navigation Bar */}
      <nav
        aria-label="Primary Navigation"
        className="fixed top-4 sm:top-6 left-0 right-0 z-40 pointer-events-none flex justify-center px-3 sm:px-6"
      >
        <div
          className={`pointer-events-auto relative w-full max-w-6xl transition-all duration-300 rounded-[32px] sm:rounded-full flex items-center justify-between px-4 sm:px-8 ${
            isScrolled ? 'glass-navbar-scrolled h-[60px] sm:h-[64px]' : 'glass-navbar h-[64px] sm:h-[68px]'
          }`}
          data-cursor="nav"
        >
          {/* ================= LEFT SECTION ================= */}
          {/* Small circular profile photo (32-38px) inside navbar, name beside it */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-3 text-white focus:outline-none flex-shrink-0"
            data-cursor="button"
          >
            {/* Small circular profile photo (36px) - completely inside navbar */}
            <div className="relative w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] rounded-full overflow-hidden border border-[#A52A52]/70 shadow-[0_0_12px_rgba(165,42,82,0.4)] bg-[#0B080A] flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src={PERSONAL_INFO.profileImages.main}
                alt="S M Kadija Munni"
                onError={() => setAvatarError(true)}
                className="w-full h-full object-cover object-top"
              />
              {avatarError && (
                <div className="w-full h-full flex items-center justify-center bg-[#260A13] text-[#D66A89] text-[10px] font-mono font-bold">
                  SMK
                </div>
              )}
            </div>

            {/* Clean bold name without profession */}
            <span className="font-heading font-black text-sm sm:text-base tracking-tight text-white group-hover:text-[#D66A89] transition-colors whitespace-nowrap">
              S M KADIJA MUNNI
            </span>
          </a>

          {/* ================= RIGHT SECTION ================= */}
          {/* Navigation Links + AVAILABLE Button (NO SOCIAL ICONS) */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-tight text-[#8E8287] hover:text-white hover:drop-shadow-[0_0_8px_rgba(214,106,137,0.7)] transition-all rounded-full hover:bg-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Available Button */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              data-cursor="button"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3A0D1C]/65 border border-[#A52A52]/70 hover:border-[#D66A89] shadow-[0_0_16px_rgba(165,42,82,0.30)] hover:shadow-[0_0_24px_rgba(214,106,137,0.5)] transition-all text-xs font-mono font-medium text-[#F4ECEE]"
            >
              <span className="w-2 h-2 rounded-full bg-[#D66A89] animate-pulse" />
              <span className="tracking-wider uppercase text-[#D66A89] font-semibold text-[11px] sm:text-xs">
                AVAILABLE
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#8E8287] hover:text-white md:hidden focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Full-Screen Glass Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#070707]/95 backdrop-blur-2xl flex flex-col justify-between pt-20 pb-10 px-6 animate-in fade-in duration-200">
          <div className="space-y-6 text-left">
            {/* Header Identity Row */}
            <div className="flex items-center justify-between pb-5 border-b border-[#3A0D1C]/70">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#A52A52] bg-[#0B080A] shadow-[0_0_14px_rgba(165,42,82,0.4)] flex-shrink-0">
                  <img
                    src={PERSONAL_INFO.profileImages.main}
                    alt="S M Kadija Munni"
                    className="w-full h-full object-cover object-top"
                    onError={() => setAvatarError(true)}
                  />
                </div>
                <div>
                  <div className="text-base font-heading font-black text-white">
                    S M KADIJA MUNNI
                  </div>
                  <div className="text-xs font-mono text-[#D66A89]">
                    UI/UX Designer &amp; Web Developer
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full text-[#8E8287] hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#D66A89] pt-1">
                Navigation
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block text-2xl font-heading font-bold text-[#F4ECEE] hover:text-[#D66A89] transition-colors py-3 border-b border-white/[0.06]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 text-left pt-6 border-t border-white/[0.08]">
            <div className="flex items-center justify-between text-xs font-mono text-[#8E8287]">
              <span>Sylhet, Bangladesh</span>
              <span className="text-[#D66A89]">Available Worldwide</span>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="glass-btn-primary w-full py-3.5 px-4 rounded-full text-center text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
            >
              <span>GET IN TOUCH</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
