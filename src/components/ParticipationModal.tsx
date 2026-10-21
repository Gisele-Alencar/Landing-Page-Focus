import React from 'react';
import { X, CheckCircle2, User, Mail, Code, Sparkles, ArrowRight } from 'lucide-react';
import { ActivePage } from '../types';

interface ParticipationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: ActivePage) => void;
  isDarkMode: boolean;
}

export const ParticipationModal: React.FC<ParticipationModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  isDarkMode,
}) => {
  const [selectedPath, setSelectedPath] = React.useState<'A' | 'B'>('A');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [area, setArea] = React.useState('Front-end');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
      <div className={`w-full max-w-lg rounded-3xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto ${
        isDarkMode ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900'
      }`}>
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold text-[#ff5419] uppercase tracking-wider block mb-1">
              FOCUS ACADEMY
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Faça parte da comunidade
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-neutral-800/40 text-neutral-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-6 text-center animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Bem-vindo(a) à Focus Academy, {name}!</h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed max-w-sm mx-auto">
              Seu perfil preliminar foi registrado. Enviamos o convite do Discord oficial para <strong>{email}</strong>.
            </p>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  handleReset();
                  onNavigate('projetos');
                }}
                className="w-full py-3 rounded-xl font-bold text-xs bg-[#ff5419] hover:bg-[#ea4409] text-white transition-all shadow-xs"
              >
                Explorar Projetos em Formação Agora
              </button>
              <button
                onClick={handleReset}
                className="w-full py-2.5 rounded-xl font-medium text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              >
                Fechar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-xs">
            {/* Path Selection */}
            <div>
              <label className="block font-semibold mb-2">Como você deseja começar?</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedPath('A')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedPath === 'A'
                      ? 'border-[#ff5419] bg-[#ff5419]/10 text-neutral-900 dark:text-white font-bold'
                      : isDarkMode ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-600'
                  }`}
                >
                  <span className="text-[10px] uppercase font-mono text-[#ff5419] block mb-1">Caminho A</span>
                  <span className="text-xs">Entrar em um squad existente</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPath('B')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedPath === 'B'
                      ? 'border-[#ff5419] bg-[#ff5419]/10 text-neutral-900 dark:text-white font-bold'
                      : isDarkMode ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-600'
                  }`}
                >
                  <span className="text-[10px] uppercase font-mono text-[#ff5419] block mb-1">Caminho B</span>
                  <span className="text-xs">Criar e liderar um projeto</span>
                </button>
              </div>
            </div>

            {/* Inputs */}
            <div>
              <label className="block font-semibold mb-1">Seu Nome Completo</label>
              <input
                type="text"
                required
                placeholder="Ex: Gabriela Santos"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full p-2.5 rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#ff5419] ${
                  isDarkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-200 text-neutral-900'
                }`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Seu Melhor E-mail</label>
              <input
                type="email"
                required
                placeholder="Ex: gabriela@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-2.5 rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#ff5419] ${
                  isDarkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-200 text-neutral-900'
                }`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Sua Área Principal de Atuação</label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className={`w-full p-2.5 rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#ff5419] ${
                  isDarkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-200 text-neutral-900'
                }`}
              >
                <option value="Front-end">Front-end (React, Next.js, Vue, Tailwind)</option>
                <option value="Back-end">Back-end (Node.js, Python, Java, Go)</option>
                <option value="Mobile">Mobile (React Native, Flutter, Swift)</option>
                <option value="UI/UX Design">UI/UX & Product Design (Figma)</option>
                <option value="QA / Testes">QA & Testes Automatizados</option>
                <option value="Engenharia de Dados">Engenharia de Dados / Analytics</option>
              </select>
            </div>

            <p className="text-[11px] text-neutral-400">
              Ao continuar, você concorda com o código de conduta colaborativo da Focus Academy.
            </p>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-xs bg-[#ff5419] hover:bg-[#ea4409] text-white transition-all shadow-md shadow-[#ff5419]/25 cursor-pointer"
            >
              Concluir Inscrição e Acessar Discord
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
