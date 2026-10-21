import React, { useState, useEffect } from 'react';
import { ActivePage } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { JourneySection } from './components/JourneySection';
import { EcosystemSection } from './components/EcosystemSection';
import { ParticipationPathsSection } from './components/ParticipationPathsSection';
import { PlatformPillarsSection } from './components/PlatformPillarsSection';
import { ProfessionalExperienceSection } from './components/ProfessionalExperienceSection';
import { RoadmapFutureSection } from './components/RoadmapFutureSection';
import { FAQSection } from './components/FAQSection';
import { NextStepBanner } from './components/NextStepBanner';
import { Footer } from './components/Footer';
import { ParticipationModal } from './components/ParticipationModal';
import { ProjectProposalModal } from './components/ProjectProposalModal';

import { CoursesView } from './views/CoursesView';
import { ProjectsView } from './views/ProjectsView';
import { EventsView } from './views/EventsView';
import { CommunityView } from './views/CommunityView';
import { GalleryView } from './views/GalleryView';
import { ArticlesView } from './views/ArticlesView';
import { StoreView } from './views/StoreView';
import {
  HowToParticipateView,
  FAQView,
  AboutAcademyView,
  FocusTechView,
  ContactSupportView,
} from './views/FooterPagesView';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isParticipationModalOpen, setIsParticipationModalOpen] = useState(false);
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);

  // Sync dark class on root document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0a0a0c';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f7f6f2';
    }
  }, [isDarkMode]);

  // Sync hash routing with activePage
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as ActivePage;
      const validPages: ActivePage[] = [
        'home', 
        'cursos', 
        'projetos', 
        'eventos', 
        'comunidade', 
        'galeria', 
        'artigos', 
        'Loja Focus',
        'como-participar',
        'faq',
        'sobre',
        'focus-tecnologia',
        'contato',
      ];
      if (validPages.includes(hash)) {
        setActivePage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (!hash) {
        setActivePage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'dark bg-[#0a0a0c] text-neutral-100' 
        : 'bg-[#f7f6f2] text-neutral-900'
    }`}>
      {/* Top Floating Pill Navigation */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenParticipate={() => setIsParticipationModalOpen(true)}
      />

      {/* Main Content Router */}
      <main className="w-full">
        {activePage === 'home' && (
          <>
            <Hero
              onNavigate={handleNavigate}
              onOpenParticipate={() => setIsParticipationModalOpen(true)}
              isDarkMode={isDarkMode}
            />

            <JourneySection
              isDarkMode={isDarkMode}
              onOpenParticipate={() => setIsParticipationModalOpen(true)}
              onNavigate={handleNavigate}
            />

            {/* Core requested section: 7 Ecosystem Cards */}
            <EcosystemSection
              onNavigate={handleNavigate}
              isDarkMode={isDarkMode}
            />

            <ParticipationPathsSection
              isDarkMode={isDarkMode}
            />

            <PlatformPillarsSection />

            <ProfessionalExperienceSection
              isDarkMode={isDarkMode}
            />

            <RoadmapFutureSection
              isDarkMode={isDarkMode}
            />

            <FAQSection
              isDarkMode={isDarkMode}
            />

            <NextStepBanner
              onOpenParticipate={() => setIsParticipationModalOpen(true)}
              isDarkMode={isDarkMode}
            />
          </>
        )}

        {/* Detailed Interactive Pages */}
        {activePage === 'cursos' && (
          <CoursesView
            onBack={() => handleNavigate('home')}
            isDarkMode={isDarkMode}
          />
        )}

        {activePage === 'projetos' && (
          <ProjectsView
            onBack={() => handleNavigate('home')}
            onOpenProposalModal={() => setIsProposalModalOpen(true)}
            isDarkMode={isDarkMode}
          />
        )}

        {activePage === 'eventos' && (
          <EventsView
            onBack={() => handleNavigate('home')}
            isDarkMode={isDarkMode}
          />
        )}

        {activePage === 'comunidade' && (
          <CommunityView
            onBack={() => handleNavigate('home')}
            isDarkMode={isDarkMode}
          />
        )}

        {activePage === 'galeria' && (
          <GalleryView
            onBack={() => handleNavigate('home')}
            isDarkMode={isDarkMode}
          />
        )}

        {activePage === 'artigos' && (
          <ArticlesView
            onBack={() => handleNavigate('home')}
            isDarkMode={isDarkMode}
          />
        )}

        {activePage === 'store' && (
          <StoreView
            onBack={() => handleNavigate('home')}
            isDarkMode={isDarkMode}
          />
        )}

        {activePage === 'como-participar' && (
          <HowToParticipateView
            onBack={() => handleNavigate('home')}
            onNavigate={handleNavigate}
            onOpenParticipate={() => setIsParticipationModalOpen(true)}
            isDarkMode={isDarkMode}
          />
        )}

        {activePage === 'faq' && (
          <FAQView
            onBack={() => handleNavigate('home')}
            onNavigate={handleNavigate}
            isDarkMode={isDarkMode}
          />
        )}

        {activePage === 'sobre' && (
          <AboutAcademyView
            onBack={() => handleNavigate('home')}
            onNavigate={handleNavigate}
            onOpenParticipate={() => setIsParticipationModalOpen(true)}
            isDarkMode={isDarkMode}
          />
        )}

        {activePage === 'focus-tecnologia' && (
          <FocusTechView
            onBack={() => handleNavigate('home')}
            onNavigate={handleNavigate}
            isDarkMode={isDarkMode}
          />
        )}

        {activePage === 'contato' && (
          <ContactSupportView
            onBack={() => handleNavigate('home')}
            onNavigate={handleNavigate}
            isDarkMode={isDarkMode}
          />
        )}
      </main>

      {/* Bottom Footer */}
      <Footer
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
      />

      {/* Modals */}
      <ParticipationModal
        isOpen={isParticipationModalOpen}
        onClose={() => setIsParticipationModalOpen(false)}
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
      />

      <ProjectProposalModal
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
