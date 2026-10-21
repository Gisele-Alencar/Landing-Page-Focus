import React from 'react';
import { 
  ArrowLeft, 
  Users, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';

interface CommunityViewProps {
  onBack: () => void;
  isDarkMode: boolean;
}

export const CommunityView: React.FC<CommunityViewProps> = ({ onBack, isDarkMode }) => {
  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 text-xs font-bold transition-colors cursor-pointer px-4 py-2 rounded-none border ${
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
        <span className="text-[11px] font-bold tracking-[0.18em] text-[#ff5419] uppercase block mb-2">
          06 / COMUNIDADE & CONEXÕES TECH
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-3 ${
          isDarkMode ? 'text-white' : 'text-neutral-950'
        }`}>
          Conhecimento e conexões que impulsionam.
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
          A tecnologia conecta pessoas com diferentes experiências, habilidades e objetivos. Na comunidade Focus Academy, você pode trocar conhecimentos, compartilhar experiências e se conectar com pessoas que também querem crescer na área.
        </p>
      </div>

      {/* Discord Connect CTA Card */}
      <div
        id="comunidade-discord"
        className={`p-6 sm:p-8 rounded-none border mb-4 flex flex-col md:flex-row md:items-center justify-between gap-6 ${
          isDarkMode ? 'bg-[#5865F2]/10 border-[#5865F2]/30' : 'bg-[#5865F2]/5 border-[#5865F2]/20 shadow-xs'
        }`}
      >
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-[#5865F2] font-bold text-xs uppercase tracking-wider mb-2">
            <Users className="w-4 h-4" />
            <span>Comunidade no Discord</span>
          </div>
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight mb-2 ${isDarkMode ? 'text-white' : 'text-neutral-950'}`}>
            Conecte-se, compartilhe e aprenda em conjunto.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
            Um espaço para conversar sobre tecnologia, trocar ideias, tirar dúvidas e acompanhar as iniciativas da comunidade.
          </p>
        </div>

        <button
          onClick={() => window.open('https://discord.gg/focusacademy', '_blank')}
          className="px-6 py-3 rounded-none text-xs font-bold bg-[#5865F2] hover:bg-[#4752c4] text-white transition-all shadow-md shadow-[#5865F2]/20 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Conheça nosso Discord</span>
        </button>
      </div>

      {/* WhatsApp Community CTA Card */}
      <div
        id="comunidade-whatsapp"
        className={`p-6 sm:p-8 rounded-none border mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 ${
          isDarkMode ? 'bg-[#25D366]/10 border-[#25D366]/30' : 'bg-[#25D366]/5 border-[#25D366]/20 shadow-xs'
        }`}
      >
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-[#25D366] font-bold text-xs uppercase tracking-wider mb-2">
            <MessageCircle className="w-4 h-4" />
            <span>Comunidade no WhatsApp</span>
          </div>
          <h2 className={`text-xl sm:text-2xl font-bold tracking-tight mb-2 ${isDarkMode ? 'text-white' : 'text-neutral-950'}`}>
            A comunidade mais perto de você.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
            Acompanhe comunicados, compartilhe experiências e mantenha contato com outras pessoas da comunidade de forma simples e direta.
          </p>
        </div>

        <button
          onClick={() => window.open('https://chat.whatsapp.com/focusacademy', '_blank')}
          className="px-6 py-3 rounded-none text-xs font-bold bg-[#25D366] hover:bg-[#20ba5a] text-white transition-all shadow-md shadow-[#25D366]/20 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Participe do grupo</span>
        </button>
      </div>
    </div>
  );
};
