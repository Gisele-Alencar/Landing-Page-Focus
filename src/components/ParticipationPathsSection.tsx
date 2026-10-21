import React from 'react';
import { ArrowRight, UserCheck, FolderGit2, Info, ExternalLink } from 'lucide-react';

interface ParticipationPathsSectionProps {
  isDarkMode: boolean;
}

export const ParticipationPathsSection: React.FC<ParticipationPathsSectionProps> = ({
  isDarkMode,
}) => {
  const handleOpenSquadsPlatform = () => {
    window.open('https://squads.focustech.dev', '_blank') || alert('Redirecionando para a plataforma oficial de Squads da Focus Tech...');
  };

  return (
    <section id="como-participar" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-neutral-200/80 dark:border-neutral-800">
      {/* Kicker & Heading */}
      <div className="mb-12">
        <span className="text-[11px] font-bold tracking-[0.18em] text-[#ff5419] uppercase">
          02 / COMO PARTICIPAR
        </span>

        <div className="mt-3">
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] ${
            isDarkMode ? 'text-white' : 'text-neutral-950'
          }`}>
            Existem dois caminhos para começar.
          </h2>
        </div>
      </div>

      {/* 2 Path Explanatory Cards in LARANJA GLASS - SQUARE WITHOUT ROUNDED CORNERS, WITHOUT BORDERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* CAMINHO A / PARTICIPANTE */}
        <div className="p-8 rounded-none text-left flex flex-col justify-between bg-gradient-to-br from-[#ff5419]/15 via-[#ff5419]/8 to-[#ff5419]/3 backdrop-blur-md border-0 shadow-xl shadow-[#ff5419]/5 transition-all">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-[11px] font-bold tracking-wider text-[#ff5419] uppercase font-mono">
                CAMINHO A / PARTICIPANTE
              </span>
            </div>

            <h3 className={`text-2xl font-extrabold tracking-tight mb-4 ${
              isDarkMode ? 'text-white' : 'text-neutral-950'
            }`}>
              Entrar em um projeto existente
            </h3>

            <p className={`text-sm leading-relaxed mb-6 ${
              isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
            }`}>
              Consulte os projetos em formação e encontre um que combine com seus interesses. Participe da equipe e ajude a transformar uma proposta em algo concreto.
            </p>

            {/* Informational bullet points */}
            <div className="space-y-2.5 pt-4 border-t border-[#ff5419]/20 text-xs">
              <div className="flex items-start gap-2">
                <span className="text-[#ff5419] font-bold">•</span>
                <span className={isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                  <strong>Vagas especializadas:</strong> Escolha entre papéis de Front-end, Back-end, Cibersegurança ou Dados.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#ff5419] font-bold">•</span>
                <span className={isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                  <strong>Alinhamento e onboarding:</strong> Receba o link do repositório no GitHub e canal de voz dedicado.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#ff5419] font-bold">•</span>
                <span className={isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                  <strong>Mentoria contínua:</strong> Dúvidas de arquitetura e Git Flow respondidas por seniores.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CAMINHO B / RESPONSÁVEL */}
        <div className="p-8 rounded-none text-left flex flex-col justify-between bg-gradient-to-br from-[#ff5419]/15 via-[#ff5419]/8 to-[#ff5419]/3 backdrop-blur-md border-0 shadow-xl shadow-[#ff5419]/5 transition-all">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-[11px] font-bold tracking-wider text-[#ff5419] uppercase font-mono">
                CAMINHO B / RESPONSÁVEL
              </span>
            </div>

            <h3 className={`text-2xl font-extrabold tracking-tight mb-4 ${
              isDarkMode ? 'text-white' : 'text-neutral-950'
            }`}>
              Criar seu próprio projeto
            </h3>

            <p className={`text-sm leading-relaxed mb-6 ${
              isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
            }`}>
              Publique uma proposta original ou utilize uma iniciativa da Focus como ponto de partida. Outros membros poderão se juntar ao projeto enquanto o squad estiver em formação.
            </p>

            {/* Informational bullet points */}
            <div className="space-y-2.5 pt-4 border-t border-[#ff5419]/20 text-xs">
              <div className="flex items-start gap-2">
                <span className="text-[#ff5419] font-bold">•</span>
                <span className={isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                  <strong>Definição do MVP:</strong> Apresente o problema real que a aplicação pretende resolver.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#ff5419] font-bold">•</span>
                <span className={isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                  <strong>Montagem do time:</strong> Estabeleça a stack tecnológica e a quantidade de vagas necessárias.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#ff5419] font-bold">•</span>
                <span className={isDarkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                  <strong>Liderança técnica:</strong> Pratique gestão ágil, facilitação de sprints e code review.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explanatory Info Card: Directing to the Squads Platform - SQUARE */}
      <div className="p-4 sm:p-5 rounded-none bg-neutral-900/60 dark:bg-neutral-900/40 border border-[#ff5419]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2.5 text-neutral-300">
          <Info className="w-4 h-4 text-[#ff5419] shrink-0" />
          <span>
            Todas as inscrições de membros, publicação de ideias e formação dos squads são centralizadas na plataforma oficial de squads da Focus Tech.
          </span>
        </div>

        <button
          onClick={handleOpenSquadsPlatform}
          className="text-[#ff5419] hover:text-white font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
        >
          <span>Acessar Plataforma</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
