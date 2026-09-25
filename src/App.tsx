import React, { useState } from 'react';

import { Project } from './types';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroMarquee } from './components/IntroMarquee';
import { Work } from './components/Work';
import { ProjectMarquee } from './components/ProjectMarquee';
import { Services } from './components/Services';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Research } from './components/Research';
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
      <CustomCursor />

      <Navbar />

      <main>
        <Hero />

        <IntroMarquee />

        <Work
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <ProjectMarquee
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <Services />

        <About />

        <Education />

        <Skills />

        <Certifications />

        <Research />

        <Process />

        <Elsewhere />

        <Contact />
      </main>

      <Footer />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}