import React from 'react';
import { ActivePage } from '../types';
import { FocusAcademyLogo } from './FocusAcademyLogo';
import { FOCUS_STORE_URL, FOCUS_BLOG_URL } from './EcosystemSection';
import { Github, Linkedin, ArrowUp, ExternalLink, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    onNavigate('home');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const scrollToSection = (sectionId: string) => {
    onNavigate('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);
  };

  const navigateToTab = (page: ActivePage, sectionId?: string) => {
    onNavigate(page);
    setTimeout(() => {
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 80);
  };

  return (
    <footer className="w-full bg-[#0a0a0c] text-white border-t border-neutral-800/80 shadow-2xl transition-colors">
      {/* Main Footer Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-neutral-800">
          {/* Brand Column (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <button 
                onClick={scrollToTop}
                className="text-left cursor-pointer focus:outline-none mb-4 inline-block"
              >
                <FocusAcademyLogo isDarkMode={true} size="md" />
              </button>
              
              <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                Acelerando novos talentos e conectando a comunidade de tecnologia através de squads práticos, projetos open source e vivência com metodologias de mercado.
              </p>

              {/* Badges / Origin */}
              <div className="flex flex-wrap items-center gap-2 mt-4 text-[11px] font-mono text-neutral-400">
                <span className="px-2.5 py-1 bg-neutral-900 text-neutral-300 font-semibold border border-neutral-800">
                  Ceará • Brasil
                </span>
              </div>
            </div>

            {/* Social & Community Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/FocusTech42"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 flex items-center justify-center bg-neutral-900 hover:bg-[#ff5419] text-neutral-300 hover:text-white transition-all border border-neutral-800 shadow-xs"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/focus-tecnologia-co/home/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center bg-neutral-900 hover:bg-[#ff5419] text-neutral-300 hover:text-white transition-all border border-neutral-800 shadow-xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://focustech.dev"
                target="_blank"
                rel="noreferrer"
                aria-label="Website Focus Tech"
                className="w-9 h-9 flex items-center justify-center bg-neutral-900 hover:bg-[#ff5419] text-neutral-300 hover:text-white transition-all border border-neutral-800 shadow-xs"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Plataforma */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => scrollToSection('ecossistema')}
              className="text-left group cursor-pointer block focus:outline-none"
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#ff5419] group-hover:text-white transition-colors font-mono">
                Plataforma
              </h4>
              <p className="text-[11px] text-neutral-500 group-hover:text-neutral-300 transition-colors mt-0.5">
                Explorar a experiência
              </p>
            </button>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-[#ff5419] transition-colors cursor-pointer text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToTab('cursos')}
                  className="hover:text-[#ff5419] transition-colors cursor-pointer text-left"
                >
                  Jornadas de aprendizado
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToTab('projetos')}
                  className="hover:text-[#ff5419] transition-colors cursor-pointer text-left"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToTab('eventos')}
                  className="hover:text-[#ff5419] transition-colors cursor-pointer text-left"
                >
                  Eventos
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Comunidade */}
          <div
            onClick={() => navigateToTab('comunidade')}
            className="lg:col-span-3 space-y-4 cursor-pointer"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateToTab('comunidade');
              }}
              className="text-left group cursor-pointer block focus:outline-none"
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#ff5419] group-hover:text-white transition-colors font-mono">
                Comunidade
              </h4>
              <p className="text-[11px] text-neutral-500 group-hover:text-neutral-300 transition-colors mt-0.5">
                Conectar e participar
              </p>
            </button>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToTab('como-participar');
                  }}
                  className="hover:text-[#ff5419] transition-colors cursor-pointer text-left"
                >
                  Como participar
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToTab('comunidade', 'comunidade-discord');
                  }}
                  className="hover:text-[#ff5419] transition-colors cursor-pointer text-left"
                >
                  Discord
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToTab('comunidade', 'comunidade-whatsapp');
                  }}
                  className="hover:text-[#ff5419] transition-colors cursor-pointer text-left"
                >
                  WhatsApp
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToTab('faq');
                  }}
                  className="hover:text-[#ff5419] transition-colors cursor-pointer text-left"
                >
                  Dúvidas frequentes (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Institucional */}
          <div
            onClick={() => navigateToTab('sobre')}
            className="lg:col-span-2 space-y-4 cursor-pointer"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateToTab('sobre');
              }}
              className="text-left group cursor-pointer block focus:outline-none"
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#ff5419] group-hover:text-white transition-colors font-mono">
                Institucional
              </h4>
            </button>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToTab('sobre');
                  }}
                  className="hover:text-[#ff5419] transition-colors cursor-pointer text-left"
                >
                  Sobre a Focus Academy
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToTab('focus-tecnologia');
                  }}
                  className="hover:text-[#ff5419] transition-colors cursor-pointer text-left"
                >
                  Focus Tecnologia
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToTab('contato');
                  }}
                  className="hover:text-[#ff5419] transition-colors cursor-pointer text-left"
                >
                  Contato e suporte
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links, Back to top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© 2026 Focus Academy. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-[#ff5419] font-medium transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
