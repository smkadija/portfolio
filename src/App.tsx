import React, { useState } from 'react';
import { Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroMarquee } from './components/IntroMarquee';
import { Work } from './components/Work';
import { ProjectMarquee } from './components/ProjectMarquee';
import { Services } from './components/Services';
import { About } from './components/About';
import { Process } from './components/Process';
import { Elsewhere } from './components/Elsewhere';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFFFFF] selection:bg-[#5E1630] selection:text-[#F4ECEE] relative font-sans-body">
      {/* Subtle Desktop Cursor Follower */}
      <CustomCursor />

      {/* Floating Glass Navigation Capsule */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero: Editorial Composition */}
        <Hero />

        {/* 2. Full-Width Typography Marquee */}
        <IntroMarquee />

        {/* 3. Selected Work: Visual Centerpiece (Immediately after Hero/Marquee) */}
        <Work onSelectProject={(project) => setSelectedProject(project)} />

        {/* 4. Wide Horizontal Project Image Marquee */}
        <ProjectMarquee onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Services: What I Do (Concise Editorial List) */}
        <Services />

        {/* 6. About & Typographic Capabilities (Design & Tech) */}
        <About />

        {/* 7. Process: Minimal 4-Phase Timeline */}
        <Process />

        {/* 8. Elsewhere: Verified Channels (Behance, GitHub, LinkedIn, Fiverr) */}
        <Elsewhere />

        {/* 9. Final CTA & Minimal Contact Form */}
        <Contact />
      </main>

      {/* 10. Minimal Footer */}
      <Footer />

      {/* Project Case Study Detail Modal & Full-Screen Lightbox */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
