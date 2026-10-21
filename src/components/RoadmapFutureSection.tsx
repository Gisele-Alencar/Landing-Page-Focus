import React from 'react';

interface RoadmapFutureSectionProps {
  isDarkMode: boolean;
}

export const RoadmapFutureSection: React.FC<RoadmapFutureSectionProps> = ({
  isDarkMode,
}) => {
  const cards = [
    {
      number: '01',
      title: 'Plataforma de aprendizado',
      description: 'Um espaço para explorar conteúdos, acompanhar jornadas e desenvolver conhecimentos em tecnologia.',
    },
    {
      number: '02',
      title: 'Projetos colaborativos',
      description: 'Experiências que incentivam a prática, a troca de conhecimentos e o desenvolvimento em equipe.',
    },
    {
      number: '03',
      title: 'Comunidade tech',
      description: 'Um ambiente para conhecer pessoas, compartilhar experiências e descobrir diferentes caminhos na tecnologia.',
    },
    {
      number: '04',
      title: 'Oportunidades de participação',
      description: 'Possibilidades de se envolver nas iniciativas da comunidade, contribuir com ideias e construir experiências em conjunto.',
    },
  ];

  return (
    <section id="roadmap" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-neutral-200/80 dark:border-neutral-800">
      {/* Parte 1: 05 / CONHEÇA A FOCUS ACADEMY */}
      <div className="mb-12">
        <span className="text-[11px] font-bold tracking-[0.18em] text-[#ff5419] uppercase">
          05 / CONHEÇA A FOCUS ACADEMY
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-3 items-start">
          <div className="lg:col-span-7">
            <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] ${
              isDarkMode ? 'text-white' : 'text-neutral-950'
            }`}>
              Um espaço para aprender, colaborar e construir.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <p className={`text-sm sm:text-base leading-relaxed ${
              isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              A Focus Academy conecta pessoas interessadas em tecnologia em uma experiência que une aprendizado, projetos e colaboração. Mais do que consumir conteúdo, a proposta é compartilhar conhecimentos, desenvolver habilidades e transformar ideias em experiências práticas dentro de uma comunidade.
            </p>
          </div>
        </div>
      </div>

      {/* Subcabeçalho */}
      <div className="mb-8">
        <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
          isDarkMode ? 'text-white' : 'text-neutral-950'
        }`}>
          Tudo conectado em uma só jornada.
        </h3>
      </div>

      {/* 4 Cards in LARANJA GLASS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cards.map((card) => (
          <div
            key={card.number}
            className="p-7 rounded-none flex flex-col justify-between transition-all bg-gradient-to-br from-[#ff5419]/15 via-[#ff5419]/8 to-[#ff5419]/3 backdrop-blur-md border border-[#ff5419]/30 hover:border-[#ff5419]/60 shadow-lg shadow-[#ff5419]/5"
          >
            <div>
              <h4 className={`text-lg font-bold tracking-tight mb-3 ${
                isDarkMode ? 'text-white' : 'text-neutral-950'
              }`}>
                {card.title}
              </h4>

              <p className={`text-xs sm:text-sm leading-relaxed ${
                isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

