import React from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Users
} from 'lucide-react';

interface EventsViewProps {
  onBack: () => void;
  isDarkMode: boolean;
}

export const EventsView: React.FC<EventsViewProps> = ({ onBack, isDarkMode }) => {
  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 text-xs font-bold transition-colors cursor-pointer px-3 py-1.5 rounded-full border ${
            isDarkMode 
              ? 'border-neutral-800 text-neutral-300 hover:text-white bg-neutral-900' 
              : 'border-neutral-200 text-neutral-700 hover:text-neutral-950 bg-white'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar para a Home</span>
        </button>
      </div>

      {/* Header Banner */}
      <div className="mb-10">
        <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-3 ${
          isDarkMode ? 'text-white' : 'text-neutral-950'
        }`}>
          Eventos e Workshops
        </h1>
        <p
          style={{
            height: '80px',
            width: '673px',
            fontSize: '17px',
            lineHeight: '26px',
            textDecorationLine: 'none',
            textAlign: 'left',
            paddingLeft: '2px',
            marginLeft: '-4px',
            marginTop: '3px',
          }}
          className={`h-[80px] w-[673px] max-w-full text-[17px] leading-[26px] no-underline text-left pl-[2px] -ml-[4px] mt-[3px] ${
            isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
          }`}
        >
          Das apresentações dos projetos de voluntariado a palestras e oficinas práticas: confira nossa programação de encontros e impulsione o seu desenvolvimento enquanto gera impacto positivo na comunidade.
        </p>
      </div>

      {/* Descrição dos eventos que terão */}
      <span className="text-[11px] font-bold tracking-[0.18em] text-[#ff5419] uppercase block mb-3">
        Confira a agenda dos nossos próximos eventos
      </span>

      {/* Featured Event Highlight Box */}
      <div className="mb-10 p-6 sm:p-8 rounded-none backdrop-blur-md bg-gradient-to-br from-[#ff5419]/15 via-[#ff5419]/8 to-[#ff5419]/3 border border-[#ff5419]/30 hover:border-[#ff5419]/60 transition-all duration-300 relative overflow-hidden">
        <div className="max-w-2xl">
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 ${
            isDarkMode ? 'text-white' : 'text-neutral-950'
          }`}>
            Evento em Parceria com a Faculdade Unicearense
          </h2>

          <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
            isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
          }`}>
            Das apresentações dos projetos de voluntariado a palestras e oficinas práticas: confira nossa programação de encontros e impulsione o seu desenvolvimento enquanto gera impacto positivo na comunidade.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-600 dark:text-neutral-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#ff5419]" />
              <span>Faculdade Unicearense • Fortaleza, CE</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#ff5419]" />
              <span>Fazer inscrição</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
