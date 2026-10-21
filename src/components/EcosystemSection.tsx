import React from 'react';
import { ActivePage } from '../types';
import { 
  GraduationCap, 
  FolderKanban, 
  CalendarDays, 
  LayoutGrid, 
  BookOpen, 
  ShoppingBag, 
  ArrowUpRight, 
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const FOCUS_STORE_URL = 'https://store.focusacademy.dev';
export const FOCUS_BLOG_URL = 'https://focus-techblog.vercel.app';

interface EcosystemSectionProps {
  onNavigate: (page: ActivePage) => void;
  isDarkMode: boolean;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({
  onNavigate,
  isDarkMode,
}) => {
  const cards: {
    id: ActivePage;
    number: string;
    title: string;
    badge: string;
    description: string;
    highlight: string;
    icon: React.ElementType;
    tagList: string[];
    accentColor: string;
    externalUrl?: string;
  }[] = [
    {
      id: 'cursos',
      number: '01',
      title: 'Cursos',
      badge: '6 Formações Práticas',
      description: 'Trilhas técnicas do zero ao deploy: React, Node, DevOps, Mobile e UI/UX com mentoria e exercícios aplicados.',
      highlight: 'Aprenda antes ou durante o squad',
      icon: GraduationCap,
      tagList: ['React & Next.js', 'Node.js & TS', 'Git Flow', 'UI/UX'],
      accentColor: 'from-orange-500/10 to-amber-500/5',
    },
    {
      id: 'eventos',
      number: '03',
      title: 'Eventos',
      badge: 'Hackathons & Demo Days',
      description: 'Encontros ao vivo no Discord, hackathons de final de semana, workshops de code review e palestras com tech leads convidados.',
      highlight: 'Demo Day #08 chegando',
      icon: CalendarDays,
      tagList: ['Hackathons', 'Demo Days', 'Workshops', 'Tech Talks'],
      accentColor: 'from-purple-500/10 to-pink-500/5',
    },
    {
      id: 'galeria',
      number: '04',
      title: 'Galeria',
      badge: 'MVPs Entregues em Produção',
      description: 'Showcase dos projetos construídos e entregues pelos squads da Focus Academy. Explore demos ao vivo, arquiteturas e repositórios.',
      highlight: 'Projetos reais com métricas',
      icon: LayoutGrid,
      tagList: ['Demos Online', 'Repositórios GitHub', 'Créditos do Squad'],
      accentColor: 'from-indigo-500/10 to-violet-500/5',
    },
    {
      id: 'artigos',
      number: '05',
      title: 'Artigos',
      badge: 'Publicações Técnicas',
      description: 'Conteúdos práticos e aprofundados sobre boas práticas de programação, dinâmicas de squad, Git sem dor de cabeça e carreira tech.',
      highlight: 'Escrito por quem atua no mercado',
      icon: BookOpen,
      tagList: ['Git Flow', 'Code Review', 'Arquitetura', 'Carreira'],
      accentColor: 'from-rose-500/10 to-orange-500/5',
      externalUrl: FOCUS_BLOG_URL,
    },
    {
      id: 'store',
      number: '06',
      title: 'Focus Store',
      badge: 'Loja Oficial Externa',
      description: 'Moletom oficial de squad, camisetas exclusivas, deskmats de atalhos e resgate de produtos oficiais na nossa loja virtual exclusiva.',
      highlight: 'Redirecionamento para a loja externa',
      icon: ShoppingBag,
      tagList: ['store.focusacademy.dev', 'Moletom Squad', 'Deskmats', 'Link Externo'],
      accentColor: 'from-amber-500/10 to-yellow-500/5',
      externalUrl: FOCUS_STORE_URL,
    },
  ];

  return (
    <section id="ecossistema" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-neutral-200/80 dark:border-neutral-800">
      {/* Kicker & Heading */}
      <div className="mb-12">
        <span className="text-[11px] font-bold tracking-[0.18em] text-[#ff5419] uppercase">
          ECOSSISTEMA FOCUS / ONDE A PRÁTICA ACONTECE
        </span>

        <div className="mt-3">
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] ${
            isDarkMode ? 'text-white' : 'text-neutral-950'
          }`}>
            Um ecossistema completo para sua evolução.
          </h2>
        </div>
      </div>

      {/* Grid of 7 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          const isLarge = idx === 0 || idx === 1;
          const isExternal = Boolean(card.externalUrl);

          const CardTag = isExternal ? 'a' : 'div';
          const linkProps = isExternal
            ? {
                href: card.externalUrl,
                target: '_blank',
                rel: 'noopener noreferrer',
              }
            : {
                onClick: () => onNavigate(card.id),
              };

          return (
            <CardTag
              key={card.id}
              {...linkProps}
              className={`group p-6 rounded-none backdrop-blur-md transition-all duration-300 cursor-pointer text-left relative flex flex-col justify-between hover:shadow-xl hover:shadow-[#ff5419]/15 hover:-translate-y-1 bg-gradient-to-br from-[#ff5419]/15 via-[#ff5419]/8 to-[#ff5419]/3 border border-[#ff5419]/30 hover:border-[#ff5419]/60 block ${
                isLarge ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header of card: Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#ff5419]/10 text-[#ff5419] flex items-center justify-center group-hover:bg-[#ff5419] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Title & Badge */}
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className={`text-xl font-extrabold tracking-tight group-hover:text-[#ff5419] transition-colors ${
                    isDarkMode ? 'text-white' : 'text-neutral-950'
                  }`}>
                    {card.title}
                  </h3>
                </div>

                <p className="text-xs font-semibold text-[#ff5419] mb-3">
                  {card.badge}
                </p>

                {/* Description */}
                <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                  isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  {card.description}
                </p>
              </div>

              {/* Action row */}
              <div className="pt-4 border-t border-[#ff5419]/20">
                <div className="flex items-center justify-between text-xs font-bold text-[#ff5419]">
                  <span>{card.id === 'store' ? 'Ir para a Loja Oficial' : `Abrir ${card.title}`}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </CardTag>
          );
        })}
      </div>
    </section>
  );
};
