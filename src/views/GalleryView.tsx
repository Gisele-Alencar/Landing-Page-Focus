import React from 'react';
import { ALL_GALLERY_PROJECTS } from '../data/mockData';
import { 
  ArrowLeft, 
  ExternalLink, 
  Linkedin,
  Search
} from 'lucide-react';

interface GalleryViewProps {
  onBack: () => void;
  isDarkMode: boolean;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onBack, isDarkMode }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredProjects = ALL_GALLERY_PROJECTS.filter(p => {
    return p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
           p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
  });

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
        <span className="text-[11px] font-bold tracking-[0.18em] text-[#ff5419] uppercase block mb-2">
          GALERIA INTERATIVA • FRONT-END & DATA ANALYTICS
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-3 ${
          isDarkMode ? 'text-white' : 'text-neutral-950'
        }`}>
          Projetos Front End & Análise de Dados
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
          Explore as interfaces desenvolvidas pelos nossos voluntários em projetos práticos de Front-End e Análise de Dados. Navegue pelas aplicações reais e teste cada solução ao vivo.
        </p>
      </div>

      {/* Search Input */}
      <div className="mb-8 max-w-md">
        <div className="relative">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por projeto de Front-End, Dashboard ou tecnologia..."
            className={`w-full pl-9 pr-4 py-2.5 rounded-xl text-xs border focus:outline-none focus:ring-1 focus:ring-[#ff5419] ${
              isDarkMode ? 'bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500' : 'bg-white border-neutral-200 text-neutral-900 placeholder-neutral-400'
            }`}
          />
        </div>
      </div>

      {/* Projects Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          return (
            <div
              key={project.id}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                isDarkMode 
                  ? 'bg-neutral-900 border-neutral-800 hover:border-neutral-700' 
                  : 'bg-white border-neutral-200/90 shadow-xs hover:border-neutral-300'
              }`}
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-[11px] font-mono text-[#ff5419] font-bold">
                    {project.squadName}
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    {project.deliveredDate}
                  </span>
                </div>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/title inline-block"
                >
                  <h3 className={`text-xl font-bold tracking-tight mb-2 group-hover/title:text-[#ff5419] transition-colors flex items-center gap-1.5 ${
                    isDarkMode ? 'text-white' : 'text-neutral-950'
                  }`}>
                    <span>{project.title}</span>
                    <ExternalLink className="w-4 h-4 text-[#ff5419] opacity-75 group-hover/title:opacity-100 shrink-0" />
                  </h3>
                </a>

                <p className={`text-xs leading-relaxed mb-4 ${
                  isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  {project.description}
                </p>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-2">
                <a
                  href={project.linkedinUrl || "https://www.linkedin.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors ${
                    isDarkMode
                      ? 'border-neutral-800 text-neutral-300 hover:text-white hover:border-[#0A66C2] hover:bg-[#0A66C2]/15'
                      : 'border-neutral-200 text-neutral-700 hover:text-[#0A66C2] hover:border-[#0A66C2]'
                  }`}
                  title="Ver LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-3.5 rounded-lg text-xs font-bold bg-[#ff5419] hover:bg-[#ea4409] text-white flex items-center gap-1.5 shadow-xs transition-colors"
                >
                  <span>Acessar Site</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
