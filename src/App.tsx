import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { CommandPalette } from './components/CommandPalette';
import { ProjectModal } from './components/ProjectModal';

import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { EducationSection } from './sections/EducationSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';
import { SkillDetailPage } from './pages/SkillDetailPage';

import { ProjectData } from './types';

export function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeSkillCategory, setActiveSkillCategory] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.startsWith('#skills/')) {
        return hash.replace('#skills/', '');
      }
    }
    return null;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#skills/')) {
        const cat = hash.replace('#skills/', '');
        setActiveSkillCategory(cat);
      } else if (activeSkillCategory && !hash.startsWith('#skills/')) {
        setActiveSkillCategory(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activeSkillCategory]);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Trigger command palette with '/' or (⌘+K / Ctrl+K)
      if (
        (e.key === '/' && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) ||
        ((e.metaKey || e.ctrlKey) && e.key === 'k')
      ) {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const handleSelectSkillCategory = (categoryId: string) => {
    setActiveSkillCategory(categoryId);
    window.location.hash = `skills/${categoryId}`;
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const handleBackFromSkillDetail = () => {
    setActiveSkillCategory(null);
    window.location.hash = 'skills';
    setTimeout(() => {
      const el = document.getElementById('skills');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen font-sans bg-[#F7F3EA] text-[#1C1B18] relative selection:bg-[#B08D3C]/20 selection:text-[#1C1B18]">
      {/* Global subtle premium paper grain & tactile background texture */}
      <div className="paper-grain-overlay pointer-events-none fixed inset-0 z-0" aria-hidden="true" />

      {/* Scroll Progress Bar at top */}
      <ScrollProgress />

      {/* Sticky Top Navigation Bar */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onNavigateHome={() => {
          if (activeSkillCategory) {
            setActiveSkillCategory(null);
          }
        }}
      />

      {/* View Switcher: Dedicated Detail Page vs Main Portfolio */}
      {activeSkillCategory ? (
        <div className="relative z-10">
          <SkillDetailPage
            categoryId={activeSkillCategory}
            onBack={handleBackFromSkillDetail}
            onSelectCategory={handleSelectSkillCategory}
          />
        </div>
      ) : (
        <div className="relative z-10">
          {/* Main Content Sections */}
          <main id="main-content" className="relative">
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <SkillsSection onSelectCategory={handleSelectSkillCategory} />
            <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
            <ExperienceSection />
            <AchievementsSection />
            <CertificationsSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}

      {/* Interactive Global Modals & Overlays */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
