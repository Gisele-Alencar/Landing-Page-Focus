import React from 'react';
import { X, CheckCircle2, Sparkles, FolderPlus } from 'lucide-react';
import { ActivePage } from '../types';

interface ProjectProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: ActivePage) => void;
  isDarkMode: boolean;
}

export const ProjectProposalModal: React.FC<ProjectProposalModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  isDarkMode,
}) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [stack, setStack] = React.useState('');
  const [roles, setRoles] = React.useState('Front-end React, Back-end Node, UI/UX Designer');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setTitle('');
    setDescription('');
    setStack('');
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
              CAMINHO B / SUBMETER PROPOSTA
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Propor um Novo Projeto Focus
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
            <h3 className="text-xl font-bold mb-2">Proposta publicada com sucesso!</h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed max-w-sm mx-auto">
              Sua iniciativa <strong>"{title}"</strong> foi enviada para o canal de projetos da Focus no Discord para atração de membros de squad.
            </p>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  handleReset();
                  onNavigate('projetos');
                }}
                className="w-full py-3 rounded-xl font-bold text-xs bg-[#ff5419] hover:bg-[#ea4409] text-white transition-all shadow-xs"
              >
                Ver Catálogo de Projetos
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
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold mb-1">Nome da Iniciativa / Projeto</label>
              <input
                type="text"
                required
                placeholder="Ex: Plataforma de Coleta Seletiva Inteligente"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`w-full p-2.5 rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#ff5419] ${
                  isDarkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-200 text-neutral-900'
                }`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Descrição do Problema & Solução</label>
              <textarea
                required
                rows={3}
                placeholder="Qual problema esse squad vai resolver? Qual o escopo básico do MVP?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`w-full p-2.5 rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#ff5419] resize-none ${
                  isDarkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-200 text-neutral-900'
                }`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Stack Tecnológica Sugerida</label>
              <input
                type="text"
                required
                placeholder="Ex: React, Node.js, PostgreSQL, Tailwind"
                value={stack}
                onChange={(e) => setStack(e.target.value)}
                className={`w-full p-2.5 rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#ff5419] ${
                  isDarkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-200 text-neutral-900'
                }`}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Perfis Necessários para o Squad</label>
              <input
                type="text"
                value={roles}
                onChange={(e) => setRoles(e.target.value)}
                className={`w-full p-2.5 rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#ff5419] ${
                  isDarkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-200 text-neutral-900'
                }`}
              />
            </div>

            <p className="text-[11px] text-neutral-400">
              Propostas publicadas passam por moderação dos mentores antes de abrirem canal dedicado no Discord.
            </p>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl font-bold bg-[#ff5419] hover:bg-[#ea4409] text-white shadow-xs"
              >
                Submeter Proposta
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
