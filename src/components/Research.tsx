import React from 'react';

const RESEARCH_TAGS = [
  'POST-QUANTUM CRYPTOGRAPHY',
  'EMBEDDED SYSTEMS',
  'CYBERSECURITY',
  'ENERGY EFFICIENCY',
  'CRYPTOGRAPHIC PERFORMANCE',
];

const TOOLS = [
  'Linux',
  'OpenSSL',
  'liboqs',
  'Raspberry Pi 4',
  'Python',
];

type ResearchImage = {
  src: string;
  number: string;
  label: string;
  title: string;
  description: string;
  className?: string;
};

const RESEARCH_IMAGES: ResearchImage[] = [
  {
    src: '/images/projects/research/01.jpg',
    number: '01',
    label: 'EXPERIMENTAL SETUP',
    title: 'Raspberry Pi 4',
    description:
      'Physical embedded hardware used as the experimental platform.',
    className: 'research-media-large',
  },
  {
    src: '/images/projects/research/02.jpg',
    number: '02',
    label: 'RESEARCH ENVIRONMENT',
    title: 'Experimental Workspace',
    description:
      'Hands-on setup prepared for embedded cryptographic experimentation.',
    className: 'research-media-small',
  },
  {
    src: '/images/projects/research/03.jpg',
    number: '03',
    label: 'COMPUTING ENVIRONMENT',
    title: 'Linux Environment',
    description:
      'Linux-based development and testing environment for the research.',
    className: 'research-media-small',
  },
  {
    src: '/images/projects/research/04.jpg',
    number: '04',
    label: 'CONNECTIVITY',
    title: 'Wireless / SSH Connection',
    description:
      'Connected embedded environment used during development and testing.',
    className: 'research-media-wide',
  },
  {
    src: '/images/projects/research/05.jpg',
    number: '05',
    label: 'IMPLEMENTATION',
    title: 'Cryptography Code',
    description:
      'Implementation and testing of cryptographic algorithms.',
    className: 'research-media-wide',
  },
  {
    src: '/images/projects/research/06.jpg',
    number: '06',
    label: 'BENCHMARKING',
    title: 'Cryptographic Benchmark',
    description:
      'Experimental benchmark and performance-testing workflow.',
    className: 'research-media-small',
  },
  {
    src: '/images/projects/research/07.jpg',
    number: '07',
    label: 'RESULTS',
    title: 'Comparison Graph',
    description:
      'Visual comparison of measured experimental results.',
    className: 'research-media-large',
  },
  {
    src: '/images/projects/research/08.jpg',
    number: '08',
    label: 'RESULTS',
    title: 'Comparison Table',
    description:
      'Structured comparison of experimental measurements.',
    className: 'research-media-wide',
  },
];

const ResearchMedia: React.FC<ResearchImage> = ({
  src,
  number,
  label,
  title,
  description,
  className = '',
}) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <article className={`research-media-card ${className}`}>
      <div className="research-media-inner">
        {!imageError ? (
          <img
            src={src}
            alt={`${title} — ${label}`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="research-media-image"
          />
        ) : (
          <div className="research-media-placeholder">
            <div className="research-placeholder-orbit">
              <span />
              <span />
              <span />
            </div>

            <div className="research-placeholder-content">
              <span className="research-placeholder-number">
                {number}
              </span>

              <span className="research-placeholder-label">
                ADD {number}.JPG
              </span>

              <span className="research-placeholder-hint">
                {title}
              </span>
            </div>
          </div>
        )}

        <div className="research-media-overlay" />

        <div className="research-media-number">
          {number}
        </div>

        <div className="research-media-caption">
          <span className="research-media-label">
            {label}
          </span>

          <h4>{title}</h4>

          <p>{description}</p>
        </div>

        <div className="research-media-corner research-media-corner-tl" />
        <div className="research-media-corner research-media-corner-br" />
      </div>
    </article>
  );
};

export const Research: React.FC = () => {
  return (
    <section
      id="research"
      className="research-section"
    >
      {/* Ambient background */}
      <div className="research-glow research-glow-left" />
      <div className="research-glow research-glow-right" />
      <div className="research-grid-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="research-header">

          <div className="research-eyebrow">
            <span className="research-eyebrow-line" />
            <span>RESEARCH &amp; ACADEMIC WORK</span>
          </div>

          <h2 className="research-main-title">
            WHERE
            <br />
            <span>TECHNOLOGY MEETS RESEARCH.</span>
          </h2>

          <p className="research-intro">
            Academic research combining cybersecurity, post-quantum
            cryptography and resource-constrained embedded platforms.
          </p>

        </div>


        {/* =====================================================
            THESIS FEATURE CARD
        ====================================================== */}
        <article className="research-thesis-card">

          <div className="research-thesis-glow" />

          <div className="research-thesis-content">

            {/* Left visual */}
            <div className="research-thesis-visual">

              <div className="research-ring research-ring-one" />
              <div className="research-ring research-ring-two" />
              <div className="research-ring research-ring-three" />

              <div className="research-thesis-core">
                <span className="research-thesis-small">
                  THESIS
                </span>

                <span className="research-thesis-number">
                  01
                </span>

                <div className="research-thesis-divider" />

                <span className="research-thesis-meta">
                  SECURITY × ENERGY
                </span>
              </div>

              <span className="research-node research-node-one" />
              <span className="research-node research-node-two" />
              <span className="research-node research-node-three" />
              <span className="research-node research-node-four" />

            </div>


            {/* Right content */}
            <div className="research-thesis-info">

              <div className="research-thesis-kicker">
                POST-QUANTUM CRYPTOGRAPHY
                <span>×</span>
                EMBEDDED PLATFORMS
              </div>

              <h3 className="research-thesis-title">
                Energy-security tradeoff modeling of classical and post
                quantum cryptography on resource-constrained embedded
                platforms.
              </h3>

              <p className="research-thesis-description">
                Investigating the performance and energy-security tradeoffs
                of classical and post-quantum cryptographic algorithms on
                resource-constrained embedded platforms.
              </p>


              {/* Research tags */}
              <div className="research-tag-list">
                {RESEARCH_TAGS.map((tag, index) => (
                  <span
                    key={tag}
                    className={`research-tag research-tag-${index + 1}`}
                  >
                    <span className="research-tag-dot" />
                    {tag}
                  </span>
                ))}
              </div>


              {/* Tools */}
              <div className="research-tools">
                <span className="research-tools-label">
                  RESEARCH ENVIRONMENT
                </span>

                <div className="research-tools-list">
                  {TOOLS.map((tool) => (
                    <span
                      key={tool}
                      className="research-tool"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          <div className="research-card-bottom-line" />

        </article>


        {/* =====================================================
            RESEARCH WORK / EXPERIMENTAL DOCUMENTATION
        ====================================================== */}
        <div className="research-work-section">

          <div className="research-work-header">

            <div>

              <div className="research-sub-eyebrow">
                <span />
                <span>RESEARCH WORK</span>
              </div>

              <h3 className="research-work-title">
                FROM
                <span> SETUP </span>
                TO
                <span> RESULTS.</span>
              </h3>

            </div>

            <p className="research-work-description">
              Selected documentation showing the hardware setup,
              computing environment, implementation workflow and
              experimental results behind the research.
            </p>

          </div>


          {/* =====================================================
              01 — EXPERIMENTAL SETUP
          ====================================================== */}
          <div className="research-subsection">

            <div className="research-subsection-heading">

              <div className="research-step">
                <span>01</span>
                <div />
              </div>

              <div>
                <span className="research-subsection-label">
                  EXPERIMENTAL SETUP
                </span>

                <h4>
                  HARDWARE &amp; WORKSPACE
                </h4>
              </div>

            </div>


            <div className="research-media-grid research-grid-setup">

              <ResearchMedia {...RESEARCH_IMAGES[0]} />
              <ResearchMedia {...RESEARCH_IMAGES[1]} />

            </div>

          </div>


          {/* =====================================================
              02 — COMPUTING ENVIRONMENT
          ====================================================== */}
          <div className="research-subsection">

            <div className="research-subsection-heading">

              <div className="research-step">
                <span>02</span>
                <div />
              </div>

              <div>
                <span className="research-subsection-label">
                  COMPUTING ENVIRONMENT
                </span>

                <h4>
                  LINUX &amp; CONNECTIVITY
                </h4>
              </div>

            </div>


            <div className="research-media-grid research-grid-environment">

              <ResearchMedia {...RESEARCH_IMAGES[2]} />
              <ResearchMedia {...RESEARCH_IMAGES[3]} />

            </div>

          </div>


          {/* =====================================================
              03 — IMPLEMENTATION
          ====================================================== */}
          <div className="research-subsection">

            <div className="research-subsection-heading">

              <div className="research-step">
                <span>03</span>
                <div />
              </div>

              <div>
                <span className="research-subsection-label">
                  IMPLEMENTATION
                </span>

                <h4>
                  CODE &amp; BENCHMARKING
                </h4>
              </div>

            </div>


            <div className="research-media-grid research-grid-implementation">

              <ResearchMedia {...RESEARCH_IMAGES[4]} />
              <ResearchMedia {...RESEARCH_IMAGES[5]} />

            </div>

          </div>


          {/* =====================================================
              04 — RESULTS
          ====================================================== */}
          <div className="research-subsection research-results-section">

            <div className="research-subsection-heading">

              <div className="research-step research-step-results">
                <span>04</span>
                <div />
              </div>

              <div>
                <span className="research-subsection-label">
                  EXPERIMENTAL RESULTS
                </span>

                <h4>
                  COMPARISON &amp; ANALYSIS
                </h4>
              </div>

            </div>


            <div className="research-media-grid research-grid-results">

              <ResearchMedia {...RESEARCH_IMAGES[6]} />
              <ResearchMedia {...RESEARCH_IMAGES[7]} />

            </div>

          </div>


          {/* =====================================================
              RESEARCH FOCUS
          ====================================================== */}
          <div className="research-focus">

            <div className="research-focus-main">

              <span className="research-focus-label">
                RESEARCH FOCUS
              </span>

              <p>
                Evaluating the relationship between cryptographic security,
                computational performance and energy consumption on
                resource-constrained embedded platforms.
              </p>

            </div>

            <div className="research-focus-side">

              <div className="research-focus-orb">
                <span>01</span>
              </div>

              <div>
                <span className="research-focus-side-title">
                  CSE
                </span>

                <span className="research-focus-side-subtitle">
                  ACADEMIC RESEARCH
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};