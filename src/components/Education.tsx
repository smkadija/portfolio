import React from 'react';

const EDUCATION = [
  {
    year: '2022 — 2026',
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Leading University, Sylhet',
    description:
      'Completed undergraduate studies with a focus on computer science, software development, cybersecurity and research-oriented technical work.',
    tags: [
      'Computer Science',
      'Cybersecurity',
      'Computer Graphics',
      'Research',
    ],
  },
  {
    year: '2020',
    degree: 'Higher Secondary Certificate',
    institution: 'Blue Bird School & College, Sylhet',
    description:
      'Completed HSC with a GPA of 5.00/5.00, building a strong academic foundation for higher studies in technology.',
    tags: ['GPA 5.00/5.00', 'Science'],
  },
];

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#050505] py-24 sm:py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#7C3AED]/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#A52A52]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-[#A52A52] to-[#D66A89]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#D66A89]">
              Education
            </span>
          </div>

          <h2 className="font-heading text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
            THE FOUNDATION
            <br />
            <span className="bg-gradient-to-r from-white via-[#F4ECEE] to-[#D66A89] bg-clip-text text-transparent">
              BEHIND MY WORK.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#8E8287] sm:text-lg">
            My academic journey connects computer science, design,
            development and research — giving me a multidisciplinary approach
            to digital products.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[17px] top-4 hidden h-[calc(100%-32px)] w-px bg-gradient-to-b from-[#A52A52] via-[#7C3AED] to-transparent md:block" />

          <div className="space-y-8">
            {EDUCATION.map((item, index) => (
              <article
                key={item.year}
                className="group relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-7 hidden h-9 w-9 items-center justify-center rounded-full border border-[#D66A89]/40 bg-[#080608] md:flex">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#A52A52] to-[#D66A89] shadow-[0_0_15px_rgba(214,106,137,0.8)] transition-transform duration-300 group-hover:scale-150" />
                </div>

                <div className="premium-card group-hover:-translate-y-1">
                  <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[180px_1fr] lg:p-10">
                    {/* Year */}
                    <div>
                      <span className="font-mono text-sm font-semibold uppercase tracking-widest text-[#D66A89]">
                        {item.year}
                      </span>

                      <div className="mt-4 hidden h-px w-16 bg-gradient-to-r from-[#A52A52] to-transparent lg:block" />
                    </div>

                    {/* Content */}
                    <div>
                      <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
                            {item.degree}
                          </h3>

                          <p className="mt-2 text-sm font-medium text-[#D66A89]">
                            {item.institution}
                          </p>
                        </div>

                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#8E8287]">
                          {index === 0 ? 'Degree' : 'Academic'}
                        </span>
                      </div>

                      <p className="max-w-2xl text-sm leading-7 text-[#8E8287] sm:text-base">
                        {item.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#D66A89]/15 bg-[#D66A89]/[0.05] px-3 py-1.5 font-mono text-[11px] text-[#C9BFC3] transition-all duration-300 group-hover:border-[#D66A89]/30 group-hover:bg-[#D66A89]/[0.08]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};