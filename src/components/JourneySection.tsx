import React from 'react';
import { ExternalLink, Users } from 'lucide-react';
import { ActivePage } from '../types';

interface JourneySectionProps {
  isDarkMode: boolean;
  onOpenParticipate: () => void;
  onNavigate?: (page: ActivePage) => void;
}

const STEPS = [
  {
    title: 'Cadastro',
    number: '01',
    description: 'Apresente suas áreas de interesse e habilidades.',
  },
  {
    title: 'Escolha do projeto',
    number: '02',
    description: 'Explore projetos ou comece a partir de uma iniciativa Focus.',
  },
  {
    title: 'Formação da equipe',
    number: '03',
    description: 'Reúna pessoas para desenvolver em equipe.',
  },
  {
    title: 'Desenvolvimento',
    number: '04',
    description: 'Organize as atividades e construa a solução.',
  },
  {
    title: 'Conclusão',
    number: '05',
    description: 'Encerre o projeto e registre a participação.',
  },
];

export const JourneySection: React.FC<JourneySectionProps> = ({
  isDarkMode,
  onNavigate,
}) => {
  const handleOpenSquadsPlatform = () => {
    // Direct link to the squads platform where users choose projects
    window.open('https://squads.focustech.dev', '_blank');
  };

  const handleOpenCommunity = () => {
    if (onNavigate) {
      onNavigate('comunidade');
    }
  };

  return (
    <section id="jornada" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-neutral-200/80 dark:border-neutral-800">
      {/* Kicker & Heading row */}
      <div className="mb-12">
        <span className="text-[11px] font-bold tracking-[0.18em] text-[#ff5419] uppercase">
          01 / A JORNADA
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-3 items-start">
          <div className="lg:col-span-7">
            <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] ${
              isDarkMode ? 'text-white' : 'text-neutral-950'
            }`}>
              Um processo simples, do primeiro acesso à conclusão.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <p className={`text-sm sm:text-base leading-relaxed ${
              isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              A Focus Academy organiza a colaboração em etapas. Você escolhe o que quer construir, participa de um squad e acompanha a evolução do projeto até sua finalização.
            </p>
          </div>
        </div>
      </div>

      {/* 5 Step numbered horizontal cards in LARANJA GLASS - SQUARE WITHOUT ROUNDED CORNERS, WITHOUT BORDERS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-10">
        {STEPS.map((step) => {
          return (
            <div
              key={step.number}
              className="p-5 rounded-none text-left transition-all duration-300 relative flex flex-col justify-between min-h-[180px] bg-gradient-to-br from-[#ff5419]/15 via-[#ff5419]/8 to-[#ff5419]/3 backdrop-blur-md shadow-lg shadow-[#ff5419]/5 hover:shadow-xl hover:shadow-[#ff5419]/10 group border-0"
            >
              <div>
                <h3 className={`text-sm sm:text-base font-bold leading-tight ${
                  isDarkMode ? 'text-white' : 'text-neutral-950'
                }`}>
                  {step.title}
                </h3>
                <span className="text-2xl sm:text-3xl font-mono font-black text-[#ff5419] block my-2.5 tabular-nums tracking-tight">
                  {step.number}
                </span>
              </div>

              <p className={`text-xs leading-relaxed ${
                isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Direct Link Banner to the Squads Platform - SQUARE WITHOUT ROUNDED CORNERS, WITHOUT BORDERS, button reads 'Acessar Plataforma' */}
      <div className="rounded-none p-8 sm:p-10 bg-gradient-to-br from-[#ff5419]/20 via-[#ff5419]/10 to-[#ff5419]/5 backdrop-blur-xl shadow-xl shadow-[#ff5419]/10 border-0 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left mb-6">
        <div className="max-w-2xl">
          <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 ${
            isDarkMode ? 'text-white' : 'text-neutral-950'
          }`}>
            Escolha o projeto que mais te interessa e forme seu squad
          </h3>

          <p className={`text-xs sm:text-sm leading-relaxed ${
            isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
          }`}>
            A formação, seleção de squads e matching entre desenvolvedores ocorrem diretamente no portal oficial de squads. Acesse para visualizar os projetos abertos, stacks disponíveis e garantir sua vaga.
          </p>
        </div>

        <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={handleOpenSquadsPlatform}
            className="px-7 py-3.5 rounded-none text-xs sm:text-sm font-bold bg-[#ff5419] hover:bg-[#ea4409] text-white transition-all shadow-lg shadow-[#ff5419]/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Acessar Plataforma</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Comunidade Focus Banner Card - Same visual style to enter the community */}
      <div className="rounded-none p-8 sm:p-10 bg-gradient-to-br from-[#ff5419]/20 via-[#ff5419]/10 to-[#ff5419]/5 backdrop-blur-xl shadow-xl shadow-[#ff5419]/10 border-0 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left">
        <div className="max-w-2xl">
          <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 ${
            isDarkMode ? 'text-white' : 'text-neutral-950'
          }`}>
            Comunidade Focus
          </h3>

          <p className={`text-xs sm:text-sm leading-relaxed ${
            isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
          }`}>
            Espaço vivo no Discord: canais por tecnologia, fórum colaborativo de dúvidas, pareamento de código, Grupo WhatsApp ativo e networking real.
          </p>
        </div>

        <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={handleOpenCommunity}
            className="px-7 py-3.5 rounded-none text-xs sm:text-sm font-bold bg-[#ff5419] hover:bg-[#ea4409] text-white transition-all shadow-lg shadow-[#ff5419]/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Entrar na Comunidade</span>
            <Users className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
