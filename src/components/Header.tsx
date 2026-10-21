import React from 'react';
import { ActivePage } from '../types';
import { FocusAcademyLogo } from './FocusAcademyLogo';
import { FOCUS_STORE_URL, FOCUS_BLOG_URL } from './EcosystemSection';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ChevronDown,
  ExternalLink
} from 'lucide-react';

interface HeaderProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenParticipate: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  isDarkMode,
  onToggleDarkMode,
  onOpenParticipate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [ecosystemMenuOpen, setEcosystemMenuOpen] = React.useState(false);

  // Updated navigation according to user prompt:
  // "retire Roadmap, por Focus store troque metodo por jornada e jornada por participe"
  const navLinks = [
    { label: 'Participe', target: 'jornada' },
    { label: 'Plataforma', target: 'plataforma' },
    { label: 'Jornada', target: 'como-participar' },
  ];

  const ecosystemItems: { id: ActivePage; label: string; desc: string; externalUrl?: string }[] = [
    { id: 'cursos', label: 'Cursos', desc: 'Trilhas técnicas do zero ao deploy' },
    { id: 'projetos', label: 'Projetos', desc: 'Catálogo de squads abertos e vagas' },
    { id: 'eventos', label: 'Eventos', desc: 'Hackathons, Demo Days e Workshops' },
    { id: 'comunidade', label: 'Comunidade Focus', desc: 'Discord, fórum e mentorias' },
    { id: 'galeria', label: 'Galeria', desc: 'Showcase de projetos entregues' },
    { id: 'artigos', label: 'Artigos', desc: 'Tutoriais de Git, arquitetura e carreira', externalUrl: FOCUS_BLOG_URL },
    { id: 'store', label: 'Focus Store', desc: 'Loja oficial externa e swag', externalUrl: FOCUS_STORE_URL },
  ];

  const handleScrollTo = (id: string) => {
    if (activePage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      style={{ backgroundColor: '#100808' }}
      className="relative z-50 w-full px-3 sm:px-6 max-w-6xl mx-auto pt-4 pb-2 transition-all duration-300 bg-[#100808]"
    >
      <div 
        style={{ backgroundColor: '#100808' }}
        className="flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-xl bg-[#100808] border border-neutral-900 text-white shadow-black"
      >
        
        {/* Brand Lockup with Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="text-left cursor-pointer focus:outline-none"
        >
          <FocusAcademyLogo isDarkMode={true} size="sm" />
        </button>

        {/* Desktop & Tablet Nav Links - visible from md (768px) and up */}
        <nav className="hidden md:flex items-center gap-3.5 lg:gap-6 text-xs lg:text-[13px] font-medium">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleScrollTo(link.target)}
              className="text-white/90 hover:text-white transition-colors cursor-pointer py-1 whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}

          {/* Focus Store direct link - redirects to external store */}
          <a
            href={FOCUS_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors cursor-pointer py-1 font-semibold whitespace-nowrap text-white/90 hover:text-white flex items-center gap-1.5 group"
            title="Acessar loja oficial externa da Focus Store"
          >
            <span>Focus Store</span>
            <ExternalLink className="w-3.5 h-3.5 text-white opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </a>

          {/* Ecossistema Trigger */}
          <div className="relative">
            <button
              onClick={() => {
                if (activePage === 'home') {
                  handleScrollTo('ecossistema');
                }
                setEcosystemMenuOpen(!ecosystemMenuOpen);
              }}
              onMouseEnter={() => setEcosystemMenuOpen(true)}
              className="flex items-center gap-1 text-white/90 hover:text-white transition-colors cursor-pointer py-1 whitespace-nowrap"
            >
              <span>Explorar</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {/* Dropdown Menu */}
            {ecosystemMenuOpen && (
              <div 
                onMouseLeave={() => setEcosystemMenuOpen(false)}
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 p-2 rounded-2xl border shadow-2xl grid gap-1 z-50 text-left ${
                  isDarkMode 
                    ? 'bg-neutral-950/95 border-[#ff5419]/30 shadow-black/70 backdrop-blur-xl' 
                    : 'bg-neutral-900 border-neutral-800 text-white shadow-black/50'
                }`}
              >
                {ecosystemItems.map((item) => {
                  if (item.externalUrl) {
                    return (
                      <a
                        key={item.id}
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setEcosystemMenuOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl transition-all text-left hover:bg-neutral-800/80 text-neutral-300 hover:text-white group"
                      >
                        <div>
                          <div className="text-xs font-semibold flex items-center gap-1.5 text-[#ff5419]">
                            <span>{item.label}</span>
                            <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>
                          <div className="text-[11px] text-neutral-400 mt-0.5">{item.desc}</div>
                        </div>
                      </a>
                    );
                  }

                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        setEcosystemMenuOpen(false);
                      }}
                      className={`flex items-start gap-3 p-2.5 rounded-xl transition-all text-left ${
                        activePage === item.id 
                          ? 'bg-[#ff5419]/20 text-[#ff5419] font-bold' 
                          : 'hover:bg-neutral-800/80 text-neutral-300 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold flex items-center gap-1.5">
                          {item.label}
                          {activePage === item.id && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5419]"></span>
                          )}
                        </div>
                        <div className="text-[11px] text-neutral-400 mt-0.5">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5 md:hidden">
          {/* Mobile hamburger - clearly visible below md */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl border border-neutral-900 shadow-2xl bg-black text-white shadow-black">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className={`text-left py-2 px-3 rounded-lg text-sm font-medium ${
                isDarkMode ? 'hover:bg-neutral-900' : 'hover:bg-neutral-100'
              }`}
            >
              Início
            </button>
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleScrollTo(link.target)}
                className={`text-left py-2 px-3 rounded-lg text-sm font-medium ${
                  isDarkMode ? 'text-neutral-300 hover:bg-neutral-900 hover:text-white' : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {link.label}
              </button>
            ))}

            <a
              href={FOCUS_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 px-3 rounded-lg text-sm font-bold text-[#ff5419] flex items-center justify-between hover:bg-neutral-900"
            >
              <span>Focus Store</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className={`pt-2 mt-1 border-t ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
              <p className="text-[11px] font-semibold text-neutral-400 px-3 uppercase tracking-wider mb-1">
                Ecossistema Focus
              </p>
              <div className="grid grid-cols-2 gap-1">
                {ecosystemItems.map((item) => {
                  if (item.externalUrl) {
                    return (
                      <a
                        key={item.id}
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-left text-xs py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                          isDarkMode ? 'text-neutral-300 hover:bg-neutral-900 text-[#ff5419]' : 'text-neutral-700 hover:bg-neutral-100 text-[#ff5419]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    );
                  }

                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`text-left text-xs py-2 px-3 rounded-lg transition-colors ${
                        activePage === item.id 
                          ? 'bg-[#ff5419] text-white font-semibold' 
                          : isDarkMode ? 'text-neutral-300 hover:bg-neutral-900' : 'text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
