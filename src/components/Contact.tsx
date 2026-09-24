import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, Copy, Check, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });

  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.project || 'New Project'} - ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject: ${formData.project}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setSent(true);
  };

  const scrollToForm = () => {
    const el = document.getElementById('inquiry-form');

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-36 relative bg-[#050505] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Giant subtle background watermark word: CREATE */}
      <div
        aria-hidden="true"
        className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[22vw] font-heading font-black tracking-tighter text-white/[0.025] leading-none whitespace-nowrap z-0"
      >
        CREATE
      </div>

      {/* Large soft burgundy ambient glow behind section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[850px] h-[700px] sm:h-[850px] bg-ambient-burgundy rounded-full blur-[180px] pointer-events-none" />

      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-ambient-rose rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Final CTA Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-16 sm:mb-24 relative">

          {/* Left Column */}
          <div className="lg:col-span-7 text-left space-y-6 z-10">

            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D66A89] animate-pulse" />

              <span className="text-xs font-mono uppercase tracking-widest text-[#D66A89] block font-semibold">
                HAVE A PROJECT?
              </span>
            </div>

            <h2 className="text-[3.2rem] xs:text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-heading font-black tracking-tighter text-white leading-[0.92]">
              LET&apos;S MAKE
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F4ECEE] to-[#D66A89]">
                SOMETHING
              </span>

              <br />

              MEMORABLE.
            </h2>

            <p className="text-sm sm:text-base text-[#8E8287] font-normal max-w-lg">
              Available for selected freelance projects worldwide.
            </p>

            {/* Premium Final CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">

              <button
                type="button"
                onClick={scrollToForm}
                data-cursor="button"
                className="btn-shimmer px-7 py-4 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-[rgba(165,42,82,0.28)] border border-[rgba(214,106,137,0.75)] text-[#F4ECEE] hover:bg-[rgba(165,42,82,0.45)] hover:border-[#D66A89] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(165,42,82,0.5)] active:scale-95 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>START A PROJECT</span>

                <ArrowUpRight className="w-4 h-4 text-[#D66A89] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>

              <a
                href={PERSONAL_INFO.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="button"
                className="btn-shimmer px-7 py-4 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-white/[0.04] border border-white/15 text-white hover:bg-white/[0.08] hover:border-[#D66A89] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(165,42,82,0.3)] active:scale-95 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>HIRE ME ON FIVERR</span>

                <ArrowUpRight className="w-4 h-4 text-[#D66A89] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>

            </div>
          </div>

          {/* Right Column: Circular Profile Portrait */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end py-6 lg:py-0 select-none">

            {/* Atmospheric glow */}
            <div
              aria-hidden="true"
              className="absolute w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] rounded-full bg-[radial-gradient(circle,rgba(165,42,82,0.22)_0%,rgba(110,23,53,0.12)_50%,transparent_70%)] blur-[60px] pointer-events-none"
            />

            {/* Portrait Wrapper */}
            <div className="relative animate-float-gently">

              {/* Orbital ring */}
              <div
                aria-hidden="true"
                className="absolute -inset-5 sm:-inset-6 rounded-full border border-[rgba(214,106,137,0.22)] shadow-[0_0_20px_rgba(165,42,82,0.15)] pointer-events-none animate-slow-orbit"
              >
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#D66A89] shadow-[0_0_10px_#D66A89,0_0_20px_rgba(165,42,82,0.8)]" />
              </div>

              {/* Main Circular Profile */}
              <div
                data-cursor="portrait"
                className="relative w-[270px] h-[270px] sm:w-[320px] sm:h-[320px] lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border border-[rgba(165,42,82,0.45)] bg-[#0B080A] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_25px_rgba(165,42,82,0.20),inset_0_1px_2px_rgba(255,255,255,0.15)] group"
              >
                <img
                  src={PERSONAL_INFO.profileImages.main}
                  alt={PERSONAL_INFO.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 max-md:grayscale-0 transition-all duration-700 ease-out"
                />

                {/* Subtle dark vignette */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(5,5,5,0.6)] pointer-events-none" />
              </div>

            </div>
          </div>
        </div>

        {/* Contact Layout Grid */}
        <div
          id="inquiry-form"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-10 border-t border-white/[0.08] text-left"
        >

          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl glass-panel flex flex-col space-y-6">

            <div className="space-y-6">

              {/* Direct Email */}
              <div className="space-y-2">

                <span className="text-sm font-mono uppercase tracking-widest text-[#D66A89] block font-semibold">
                  DIRECT EMAIL
                </span>

                <div className="flex items-center gap-3">

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-lg sm:text-xl font-mono text-white hover:text-[#D66A89] transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    data-cursor="button"
                    className="p-2 rounded-lg glass-chip text-[#8E8287] hover:text-white hover:border-[#D66A89] transition-colors flex-shrink-0"
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-[#D66A89]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 text-sm font-mono text-[#8E8287] pt-3 border-t border-white/[0.06]">

                <div className="flex items-center justify-between gap-4">
                  <span className="text-white">Location:</span>
                  <span className="text-right">
                    {PERSONAL_INFO.location}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-white">Timezone:</span>
                  <span className="text-right">
                    BST (UTC+6)
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-white">Availability:</span>
                  <span className="text-[#D66A89] text-right">
                    Worldwide (Remote)
                  </span>
                </div>

              </div>
            </div>

            {/* Fiverr */}
            <div className="pt-4 border-t border-white/[0.06]">

              <a
                href={PERSONAL_INFO.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="button"
                className="glass-btn-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-mono text-[#D66A89] hover:text-white"
              >
                <span>FIVERR PROFILE</span>

                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-2xl glass-panel">

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8E8287] mb-1.5">
                    Name
                  </label>

                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] backdrop-blur-md border border-[#A52A52]/30 text-sm text-white placeholder-[#8E8287]/40 focus:outline-none focus:border-[#D66A89] focus:bg-white/[0.07] transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8E8287] mb-1.5">
                    Email
                  </label>

                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] backdrop-blur-md border border-[#A52A52]/30 text-sm text-white placeholder-[#8E8287]/40 focus:outline-none focus:border-[#D66A89] focus:bg-white/[0.07] transition-all"
                    placeholder="Your email address"
                  />
                </div>

              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#8E8287] mb-1.5">
                  Project
                </label>

                <input
                  type="text"
                  required
                  value={formData.project}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      project: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] backdrop-blur-md border border-[#A52A52]/30 text-sm text-white placeholder-[#8E8287]/40 focus:outline-none focus:border-[#D66A89] focus:bg-white/[0.07] transition-all"
                  placeholder="e.g. Mobile App UI or Shopify Store"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#8E8287] mb-1.5">
                  Message
                </label>

                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] backdrop-blur-md border border-[#A52A52]/30 text-sm text-white placeholder-[#8E8287]/40 focus:outline-none focus:border-[#D66A89] focus:bg-white/[0.07] transition-all resize-y"
                  placeholder="Tell me about what you are building..."
                />
              </div>

              <button
                type="submit"
                data-cursor="button"
                className="glass-btn-primary btn-shimmer w-full py-4 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>SEND INQUIRY</span>
              </button>

              {sent && (
                <div className="p-3 rounded-xl bg-[#3A0D1C]/80 border border-[#A52A52] text-xs font-mono text-[#D66A89] text-center">
                  Opening your email client to send your message.
                </div>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};