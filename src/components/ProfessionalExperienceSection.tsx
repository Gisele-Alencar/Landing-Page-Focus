import React from 'react';
import { GIT_FLOW_STEPS } from '../data/mockData';

interface ProfessionalExperienceSectionProps {
  isDarkMode: boolean;
}

export const ProfessionalExperienceSection: React.FC<ProfessionalExperienceSectionProps> = ({
  isDarkMode,
}) => {
  const [activeStep, setActiveStep] = React.useState<number>(0);

  return (
    <section id="metodo" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-neutral-200/80 dark:border-neutral-800">
      {/* Kicker & Heading */}
      <div className="mb-12">
        <span className="text-[11px] font-bold tracking-[0.18em] text-[#ff5419] uppercase">
          04 / EXPERIÊNCIA EM COMUNIDADE
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-3 items-start">
          <div className="lg:col-span-7">
            <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] ${
              isDarkMode ? 'text-white' : 'text-neutral-950'
            }`}>
              Aprenda na prática. Evolua em equipe.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-6">
            <p className={`text-sm sm:text-base leading-relaxed ${
              isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              Na Focus Academy, o aprendizado vai além da teoria. A proposta é vivenciar experiências colaborativas, trocar conhecimentos com pessoas de diferentes áreas e transformar ideias em projetos reais, desenvolvendo habilidades técnicas e profissionais ao longo do caminho.
            </p>
          </div>
        </div>
      </div>

      {/* 2 Column Box matching image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: APRENDIZADO / COLABORAÇÃO / PRÁTICA */}
        <div className={`lg:col-span-6 p-8 rounded-none border flex flex-col justify-between ${
          isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-200/90 shadow-xs'
        }`}>
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6 text-[#ff5419]">
              Diferentes habilidades. Um objetivo em comum.
            </h3>
          </div>

          {/* Tag row matching image */}
          <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
            <div className="flex flex-wrap gap-2 text-[11px]">
              <span className="px-2.5 py-1 rounded-none bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                Troca de conhecimentos
              </span>
              <span className="px-2.5 py-1 rounded-none bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                Desenvolvimento colaborativo
              </span>
              <span className="px-2.5 py-1 rounded-none bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                Experiência prática
              </span>
              <span className="px-2.5 py-1 rounded-none bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                Evolução profissional
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: 01 — 04 */}
        <div className={`lg:col-span-6 p-8 rounded-none border flex flex-col justify-between ${
          isDarkMode ? 'bg-[#141417] border-neutral-800' : 'bg-[#faf8f4] border-neutral-200/90 shadow-xs'
        }`}>
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] font-bold tracking-wider text-neutral-500 dark:text-neutral-400 uppercase">
                PILARES DA EXPERIÊNCIA
              </span>
            </div>

            {/* Steps list */}
            <div className="divide-y divide-neutral-200/80 dark:divide-neutral-800">
              {GIT_FLOW_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full py-3.5 flex items-start justify-between text-left transition-colors cursor-pointer group ${
                      isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className={`text-xs font-bold font-mono pt-0.5 ${
                        isActive ? 'text-[#ff5419]' : 'text-neutral-400'
                      }`}>
                        {step.number}
                      </span>
                      <div>
                        <h4 className={`text-xs sm:text-sm font-bold ${
                          isActive 
                            ? isDarkMode ? 'text-white' : 'text-neutral-950' 
                            : isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
                        }`}>
                          {step.title}
                        </h4>
                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
