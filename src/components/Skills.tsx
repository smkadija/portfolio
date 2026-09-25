import React from 'react';
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

type Skill = {
  name: string;
  icon?: React.FC<{ size?: number; className?: string }>;
};

const SKILL_GROUPS: {
  number: string;
  title: string;
  subtitle: string;
  accent: string;
  skills: Skill[];
}[] = [
  {
    number: '01',
    title: 'DESIGN',
    subtitle: 'Visual systems & digital experiences',
    accent: '#D66A89',
    skills: [
      { name: 'Figma', icon: FigmaIcon },
      { name: 'Illustrator', icon: IllustratorIcon },
      { name: 'Photoshop', icon: PhotoshopIcon },
      { name: 'InDesign' },
      { name: 'UI/UX' },
      { name: 'Typography' },
      { name: 'Design Systems' },
    ],
  },
  {
    number: '02',
    title: 'DEVELOPMENT',
    subtitle: 'Web & application development',
    accent: '#8B5CF6',
    skills: [
      { name: 'HTML', icon: HtmlIcon },
      { name: 'CSS', icon: CssIcon },
      { name: 'JavaScript', icon: JsIcon },
      { name: 'React', icon: ReactIcon },
      { name: 'PHP' },
      { name: 'Flutter', icon: FlutterIcon },
      { name: 'Dart' },
      { name: 'Firebase', icon: FirebaseIcon },
    ],
  },
  {
    number: '03',
    title: 'RESEARCH & TECH',
    subtitle: 'Academic & technical exploration',
    accent: '#38BDF8',
    skills: [
      { name: 'Python' },
      { name: 'Data Analysis' },
      { name: 'Data Visualization' },
      { name: 'Cybersecurity' },
      { name: 'Cryptography' },
      { name: 'Post-Quantum Cryptography' },
      { name: 'Embedded Systems' },
    ],
  },
  {
    number: '04',
    title: 'TOOLS & PLATFORMS',
    subtitle: 'Workflow & development ecosystem',
    accent: '#F59E0B',
    skills: [
      { name: 'Git / GitHub' },
      { name: 'VS Code' },
      { name: 'Kaggle' },
      { name: 'MATLAB' },
      { name: 'Shopify', icon: ShopifyIcon },
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] py-24 sm:py-32"
    >
      {/* Background lights */}
      <div className="skills-orb skills-orb-one" />
      <div className="skills-orb skills-orb-two" />
      <div className="skills-orb skills-orb-three" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-[#7C3AED] to-[#38BDF8]" />

              <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#B58CFF]">
                Capabilities
              </span>
            </div>

            <h2 className="font-heading text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              SKILLS THAT
              <br />
              <span className="bg-gradient-to-r from-[#D66A89] via-[#B58CFF] to-[#38BDF8] bg-clip-text text-transparent">
                CONNECT BOTH WORLDS.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#8E8287] lg:text-right">
            A blend of visual design, front-end development and technical
            research — built around curiosity and continuous learning.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <article
              key={group.number}
              className="skill-card group"
              style={{ '--skill-accent': group.accent } as React.CSSProperties}
            >
              <div className="relative z-10 p-6 sm:p-8">
                <div className="mb-8 flex items-start justify-between">
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.2em] text-[#8E8287]">
                      {group.number}
                    </span>

                    <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight text-white">
                      {group.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#8E8287]">
                      {group.subtitle}
                    </p>
                  </div>

                  <div className="skill-icon-orbit">
                    <span />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <span
                        key={skill.name}
                        className="skill-pill"
                      >
                        {Icon && (
                          <Icon
                            size={15}
                            className="transition-transform duration-300 group-hover:scale-110"
                          />
                        )}
                        <span>{skill.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};