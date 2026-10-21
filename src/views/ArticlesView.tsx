import React from 'react';
import { ALL_ARTICLES } from '../data/mockData';
import { Article } from '../types';
import { 
  ArrowLeft, 
  Clock, 
  Heart, 
  Share2, 
  BookOpen, 
  Search, 
  X, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ArticlesViewProps {
  onBack: () => void;
  isDarkMode: boolean;
}

export const ArticlesView: React.FC<ArticlesViewProps> = ({ onBack, isDarkMode }) => {
  const [articlesList, setArticlesList] = React.useState<Article[]>(ALL_ARTICLES);
  const [selectedArticle, setSelectedArticle] = React.useState<Article | null>(null);
  const [clappedArticles, setClappedArticles] = React.useState<Record<string, number>>({});
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleClap = (articleId: string) => {
    const currentClaps = clappedArticles[articleId] || 0;
    setClappedArticles({
      ...clappedArticles,
      [articleId]: currentClaps + 1,
    });
    setArticlesList(prev =>
      prev.map(art => art.id === articleId ? { ...art, claps: art.claps + 1 } : art)
    );
  };

  const filteredArticles = articlesList.filter(art => {
    return art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
           art.author.toLowerCase().includes(searchQuery.toLowerCase());
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
          CONHECIMENTO TÉCNICO & EXPERIÊNCIA DE MERCADO
        </span>
        <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-3 ${
          isDarkMode ? 'text-white' : 'text-neutral-950'
        }`}>
          Artigos & Ensaios sobre Squads e Engenharia
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
          Insights práticos sobre como lidar com Git Flow, como redigir pull requests exemplares e como acelerar seu crescimento profissional em equipe.
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
            placeholder="Buscar por artigos, autor ou assunto..."
            className={`w-full pl-9 pr-4 py-2.5 rounded-xl text-xs border focus:outline-none focus:ring-1 focus:ring-[#ff5419] ${
              isDarkMode ? 'bg-neutral-900 border-neutral-800 text-white placeholder-neutral-500' : 'bg-white border-neutral-200 text-neutral-900 placeholder-neutral-400'
            }`}
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
              isDarkMode 
                ? 'bg-neutral-900 border-neutral-800 hover:border-neutral-700' 
                : 'bg-white border-neutral-200/90 shadow-xs hover:border-neutral-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="text-[11px] font-bold text-[#ff5419] uppercase">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-neutral-400">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              <h3 className={`text-xl font-bold tracking-tight mb-3 leading-snug ${
                isDarkMode ? 'text-white' : 'text-neutral-950'
              }`}>
                {article.title}
              </h3>

              <p className={`text-xs leading-relaxed mb-6 line-clamp-3 ${
                isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                {article.excerpt}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {article.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
              <div className="text-neutral-500 text-[11px]">
                <span>{article.author}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleClap(article.id)}
                  className="flex items-center gap-1 text-neutral-400 hover:text-[#ff5419] transition-colors cursor-pointer"
                  title="Palmas"
                >
                  <Heart className={`w-3.5 h-3.5 ${clappedArticles[article.id] ? 'fill-[#ff5419] text-[#ff5419]' : ''}`} />
                  <span className="tabular-nums font-mono">{article.claps}</span>
                </button>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="font-bold text-[#ff5419] hover:text-[#ea4409] flex items-center gap-1 cursor-pointer"
                >
                  <span>Ler</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className={`w-full max-w-2xl rounded-3xl border p-6 sm:p-10 max-h-[90vh] overflow-y-auto ${
            isDarkMode ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900'
          }`}>
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-[#ff5419] uppercase tracking-wider block mb-2">
                  {selectedArticle.category} · {selectedArticle.readTime}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {selectedArticle.title}
                </h2>
                <div className="text-xs text-neutral-500 mt-2">
                  Por <strong>{selectedArticle.author}</strong> ({selectedArticle.authorRole}) · {selectedArticle.date}
                </div>
              </div>

              <button 
                onClick={() => setSelectedArticle(null)}
                className="p-1 rounded-lg hover:bg-neutral-800/40 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 pt-4 border-t border-neutral-200 dark:border-neutral-800 mb-8">
              {selectedArticle.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Footer with claps and share */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <button
                onClick={() => handleClap(selectedArticle.id)}
                className="px-4 py-2 rounded-full border border-[#ff5419]/40 bg-[#ff5419]/10 text-[#ff5419] font-bold text-xs flex items-center gap-2 cursor-pointer hover:bg-[#ff5419]/20"
              >
                <Heart className="w-4 h-4 fill-[#ff5419]" />
                <span>Aplaudir ({selectedArticle.claps})</span>
              </button>

              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200"
              >
                Fechar Artigo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
