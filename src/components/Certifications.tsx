import React from 'react';

const CERTIFICATIONS = [
  {
    year: '2025',
    type: 'PROFESSIONAL CERTIFICATION',
    title: 'Graphic Design',
    description:
      'Professional training and certification focused on visual communication, composition, typography and digital graphic design.',
    number: '01',
    accent: 'rose',
  },
  {
    year: '2025',
    type: 'PROFESSIONAL CERTIFICATION',
    title: 'UI/UX Design',
    description:
      'Professional training and certification focused on interface design, user experience, visual hierarchy and digital product design.',
    number: '02',
    accent: 'violet',
  },
];

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#050505] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-[#D66A89] to-[#8B5CF6]" />

            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#D66A89]">
              Certifications
            </span>
          </div>

          <h2 className="font-heading text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
            LEARNING.
            <br />
            <span className="bg-gradient-to-r from-[#D66A89] via-[#F4ECEE] to-[#8B5CF6] bg-clip-text text-transparent">
              CERTIFIED.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#8E8287]">
            Professional certifications that support my design practice and
            strengthen the foundation behind my creative work.
          </p>
        </div>

        {/* Certificates */}
        <div className="grid gap-6 lg:grid-cols-2">
          {CERTIFICATIONS.map((certificate) => (
            <article
              key={certificate.title}
              className={`cert-card cert-${certificate.accent} group`}
            >
              <div className="relative z-10 p-7 sm:p-9 lg:p-10">
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="cert-mark">
                    <span>{certificate.number}</span>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[9px] font-semibold tracking-[0.18em] text-[#BFB4B8]">
                    {certificate.year}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-14">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.2em] text-[#D66A89]">
                    {certificate.type}
                  </span>

                  <h3 className="mt-4 font-heading text-3xl font-black tracking-tight text-white sm:text-4xl">
                    {certificate.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#8E8287] sm:text-base">
                    {certificate.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-10 flex items-center justify-between border-t border-white/[0.08] pt-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6F666A]">
                    Professional Development
                  </span>

                  <span className="text-xl text-[#D66A89] transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};