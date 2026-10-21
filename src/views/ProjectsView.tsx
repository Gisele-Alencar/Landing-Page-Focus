import React from 'react';
import { ALL_PROJECTS } from '../data/mockData';
import { ProjectSquad } from '../types';
import { 
  ArrowLeft, 
  Search, 
  Users, 
  Code, 
  CheckCircle2, 
  PlusCircle, 
  Briefcase, 
  Sparkles,
  X,
  ExternalLink
} from 'lucide-react';

interface ProjectsViewProps {
  onBack: () => void;
  onOpenProposalModal: () => void;
  isDarkMode: boolean;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  onBack,
  onOpenProposalModal,
  isDarkMode,
}) => {
  const [selectedStatus, setSelectedStatus] = React.useState<string>('Todos');
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [applyingSquad, setApplyingSquad] = React.useState<ProjectSquad | null>(null);
  const [applicationSuccess, setApplicationSuccess] = React.useState<string | null>(null);
  const [applicantRole, setApplicantRole] = React.useState<string>('');
  const [applicantGithub, setApplicantGithub] = React.useState<string>('');

  const statuses = ['Todos', 'EM FORMAÇÃO', 'EM DESENVOLVIMENTO', 'CONCLUÍDO'];

  const filteredProjects = ALL_PROJECTS.filter((proj) => {
    const matchesStatus = selectedStatus === 'Todos' || proj.status === selectedStatus;
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.stack.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (applyingSquad) {
      setApplicationSuccess(`Candidatura enviada para o squad "${applyingSquad.title}" na vaga "${applicantRole || 'Membro do Squad'}"! Notificamos o Tech Lead no Discord.`);
      setApplyingSquad(null);
      setApplicantRole('');
      setApplicantGithub('');
      setTimeout(() => setApplicationSuccess(null), 6000);
    }
  };

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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-[11px] font-bold tracking-[0.18em] text-[#ff5419] uppercase block mb-2">
            PROJETOS REAIS & SQUADS MULTIDISCIPLINARES
          </span>
          <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-3 ${
            isDarkMode ? 'text-white' : 'text-neutral-950'
          }`}>
            Catálogo de Projetos & Vagas Abertas
          </h1>
          <p className={`text-sm sm:text-base max-w-2xl leading-relaxed ${
            isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
          }`}>
            Escolha uma iniciativa em formação para ingressar como membro ou crie sua própria proposta de projeto para reunir um time.
          </p>
        </div>

        <button
          onClick={onOpenProposalModal}
          className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#ff5419] hover:bg-[#ea4409] text-white transition-all shadow-xs flex items-center gap-2 self-start md:self-auto cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Propor Nova Ideia</span>
        </button>
      </div>

      {/* Success banner */}
      {applicationSuccess && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center justify-between animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{applicationSuccess}</span>
          </div>
          <button onClick={() => setApplicationSuccess(null)} className="text-neutral-400 hover:text-white">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Filters Bar */}
      <div className={`p-4 rounded-2xl border mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
        isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-200 shadow-xs'
      }`}>
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por projeto, tecnologia (React, Node, etc.)..."
            className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs border focus:outline-none focus:ring-1 focus:ring-[#ff5419] ${
              isDarkMode 
                ? 'bg-neutral-950 border-neutral-800 text-white placeholder-neutral-500' 
                : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400'
            }`}
          />
        </div>

        {/* Status Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {statuses.map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStatus(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedStatus === st
                  ? 'bg-[#ff5419] text-white shadow-xs'
                  : isDarkMode 
                    ? 'text-neutral-400 hover:text-white hover:bg-neutral-800' 
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const isFull = project.currentMembers >= project.totalSlots;
          const statusBadgeColor = 
            project.status === 'EM FORMAÇÃO'
              ? 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60'
              : project.status === 'EM DESENVOLVIMENTO'
                ? 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60'
                : 'bg-neutral-100 text-neutral-800 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700';

          const progressPercent = Math.min(100, Math.round((project.currentMembers / project.totalSlots) * 100));

          return (
            <div
              key={project.id}
              className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between transition-all ${
                isDarkMode 
                  ? 'bg-neutral-900 border-neutral-800 hover:border-neutral-700' 
                  : 'bg-white border-neutral-200/90 shadow-xs hover:border-neutral-300'
              }`}
            >
              <div>
                {/* Header: Title + Status */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className={`text-lg font-bold tracking-tight ${
                    isDarkMode ? 'text-white' : 'text-neutral-950'
                  }`}>
                    {project.title}
                  </h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase whitespace-nowrap ${statusBadgeColor}`}>
                    {project.status}
                  </span>
                </div>

                <p className={`text-xs leading-relaxed mb-4 ${
                  isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  {project.description}
                </p>

                {/* Progress Bar of squad slots */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-[11px] mb-1.5">
                    <span className="text-neutral-500 font-medium">Ocupação do Squad:</span>
                    <span className="font-mono font-bold text-neutral-700 dark:text-neutral-300 tabular-nums">
                      {project.currentMembers} de {project.totalSlots} membros ({progressPercent}%)
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        isFull ? 'bg-emerald-500' : 'bg-[#ff5419]'
                      }`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Open Roles */}
                {project.openRoles.length > 0 ? (
                  <div className="mb-4 p-3 rounded-xl border border-neutral-200/70 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/40 text-xs">
                    <span className="font-bold text-[#ff5419] block mb-1.5 text-[11px] uppercase">
                      Vagas em aberto no time:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.openRoles.map((role, rIdx) => (
                        <span key={rIdx} className="px-2 py-0.5 rounded bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[11px] font-medium text-neutral-800 dark:text-neutral-200">
                          {role.role} ({role.count} vaga)
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="mb-4 p-3 rounded-xl border border-neutral-200/70 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/40 text-xs text-neutral-500 italic">
                    Squad fechado. Acompanhe a entrega no Demo Day da comunidade.
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer info & CTA */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-3 text-xs">
                <div className="text-neutral-500">
                  <span>Líder: <strong>{project.leader}</strong></span>
                </div>

                {project.status === 'EM FORMAÇÃO' && !isFull ? (
                  <button
                    onClick={() => {
                      setApplyingSquad(project);
                      setApplicantRole(project.openRoles[0]?.role || '');
                    }}
                    className="py-2 px-4 rounded-xl font-bold bg-[#ff5419] hover:bg-[#ea4409] text-white transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Candidatar-se</span>
                  </button>
                ) : (
                  <button
                    onClick={() => alert(`Acompanhando o squad "${project.title}". Notificações ativadas no Discord Focus!`)}
                    className={`py-2 px-3 rounded-xl font-semibold border transition-colors cursor-pointer text-xs ${
                      isDarkMode ? 'border-neutral-800 hover:bg-neutral-800 text-neutral-300' : 'border-neutral-200 hover:bg-neutral-50 text-neutral-700'
                    }`}
                  >
                    Acompanhar Squad
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Candidacy Application Modal */}
      {applyingSquad && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className={`w-full max-w-lg rounded-2xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto ${
            isDarkMode ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900'
          }`}>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold text-[#ff5419] uppercase tracking-wider">
                  CANDIDATURA DE SQUAD
                </span>
                <h3 className="text-xl font-bold mt-1">
                  Ingressar no {applyingSquad.title}
                </h3>
              </div>
              <button 
                onClick={() => setApplyingSquad(null)}
                className="p-1 rounded-lg hover:bg-neutral-800/40 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleApply} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold mb-1">Qual papel você quer assumir?</label>
                <select
                  value={applicantRole}
                  onChange={(e) => setApplicantRole(e.target.value)}
                  className={`w-full p-2.5 rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#ff5419] ${
                    isDarkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-200 text-neutral-900'
                  }`}
                  required
                >
                  {applyingSquad.openRoles.map((r, idx) => (
                    <option key={idx} value={r.role}>{r.role}</option>
                  ))}
                  <option value="Colaborador Geral">Colaborador Geral (Apoio multidisciplinar)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-1">Link do seu GitHub ou Portfólio</label>
                <input
                  type="url"
                  placeholder="https://github.com/seuperfil"
                  value={applicantGithub}
                  onChange={(e) => setApplicantGithub(e.target.value)}
                  required
                  className={`w-full p-2.5 rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#ff5419] ${
                    isDarkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-200 text-neutral-900'
                  }`}
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Quantas horas semanais você pode dedicar?</label>
                <select
                  className={`w-full p-2.5 rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#ff5419] ${
                    isDarkMode ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-neutral-50 border-neutral-200 text-neutral-900'
                  }`}
                >
                  <option>4 a 6 horas por semana (Recomendado)</option>
                  <option>7 a 10 horas por semana</option>
                  <option>Mais de 10 horas por semana</option>
                </select>
              </div>

              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setApplyingSquad(null)}
                  className="px-4 py-2 rounded-xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl font-bold bg-[#ff5419] hover:bg-[#ea4409] text-white shadow-xs"
                >
                  Confirmar Candidatura
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
