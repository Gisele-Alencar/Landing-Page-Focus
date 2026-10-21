import React from 'react';

interface NextStepBannerProps {
  onOpenParticipate: () => void;
  isDarkMode: boolean;
}

export const NextStepBanner: React.FC<NextStepBannerProps> = ({
  onOpenParticipate,
  isDarkMode,
}) => {
  return (
    <section id="comunidade-cta" className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Square card without rounded corners, orange border removed as requested */}
      <div className="p-8 sm:p-12 rounded-none backdrop-blur-xl transition-all flex flex-col md:flex-row md:items-center justify-between gap-8 bg-gradient-to-br from-[#ff5419]/20 via-[#ff5419]/10 to-[#ff5419]/5 border-0 shadow-xl shadow-[#ff5419]/10">
        <div className="max-w-xl">
          <span className="text-[11px] font-bold tracking-[0.18em] text-[#ff5419] uppercase block mb-3">
            PRÓXIMO PASSO
          </span>

          <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-3 ${
            isDarkMode ? 'text-white' : 'text-neutral-950'
          }`}>
            Entendeu o processo? Agora encontre onde você pode contribuir.
          </h2>

          <p className={`text-xs sm:text-sm leading-relaxed ${
            isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
          }`}>
            Explore os projetos em formação ou compartilhe uma proposta com a comunidade.
          </p>
        </div>

        <div className="shrink-0">
          <button
            onClick={onOpenParticipate}
            className="px-8 py-3.5 rounded-none text-sm font-bold bg-[#ff5419] hover:bg-[#ea4409] text-white transition-all shadow-md shadow-[#ff5419]/25 hover:shadow-lg hover:shadow-[#ff5419]/35 active:scale-98 cursor-pointer whitespace-nowrap"
          >
            Acessar Plataforma
          </button>
        </div>
      </div>
    </section>
  );
};
