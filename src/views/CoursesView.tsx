import React from 'react';
import { ALL_COURSES } from '../data/mockData';
import { Course, ActivePage } from '../types';
import { 
  ArrowLeft, 
  Search, 
  Clock, 
  Star, 
  Users, 
  CheckCircle2, 
  Play, 
  BookOpen, 
  SlidersHorizontal,
  ChevronRight,
  X
} from 'lucide-react';

interface CoursesViewProps {
  onBack: () => void;
  isDarkMode: boolean;
}

export const CoursesView: React.FC<CoursesViewProps> = ({ onBack, isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('Todos');
  const [selectedLevel, setSelectedLevel] = React.useState<string>('Todos');
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [enrolledCourseIds, setEnrolledCourseIds] = React.useState<string[]>(['course-3']);
  const [activeCourseModal, setActiveCourseModal] = React.useState<Course | null>(null);
  const [enrollSuccessMessage, setEnrollSuccessMessage] = React.useState<string | null>(null);

  const categories = ['Todos', 'Frontend', 'Backend', 'UI/UX', 'Cibersegurança'];
  const levels = ['Todos', 'Iniciante', 'Intermediário', 'Avançado'];

  const filteredCourses = ALL_COURSES.filter((course) => {
    const matchesCategory = selectedCategory === 'Todos' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'Todos' || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const handleEnroll = (courseId: string, courseTitle: string) => {
    if (!enrolledCourseIds.includes(courseId)) {
      setEnrolledCourseIds([...enrolledCourseIds, courseId]);
      setEnrollSuccessMessage(`Matrícula realizada com sucesso no curso "${courseTitle}"!`);
      setTimeout(() => setEnrollSuccessMessage(null), 4000);
    }
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Top Breadcrumb & Back action */}
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
        <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
          isDarkMode ? 'text-white' : 'text-neutral-950'
        }`}>
          Cursos Práticos & Trilhas de Especialização
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
          Aprenda o que o mercado realmente cobra: Clean Architecture, Git Flow sem conflitos, design systems modernos e infraestrutura em nuvem.
        </p>
      </div>

      {/* Success Notification */}
      {enrollSuccessMessage && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center justify-between animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{enrollSuccessMessage}</span>
          </div>
          <button onClick={() => setEnrollSuccessMessage(null)} className="text-neutral-400 hover:text-white">
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
            placeholder="Buscar por curso, tecnologia ou instrutor..."
            className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs border focus:outline-none focus:ring-1 focus:ring-[#ff5419] ${
              isDarkMode 
                ? 'bg-neutral-950 border-neutral-800 text-white placeholder-neutral-500' 
                : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400'
            }`}
          />
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#ff5419] text-white shadow-xs'
                  : isDarkMode 
                    ? 'text-neutral-400 hover:text-white hover:bg-neutral-800' 
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => {
          const isEnrolled = enrolledCourseIds.includes(course.id);

          return (
            <div
              key={course.id}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                isDarkMode 
                  ? 'bg-neutral-900 border-neutral-800 hover:border-neutral-700' 
                  : 'bg-white border-neutral-200/90 shadow-xs hover:border-neutral-300'
              }`}
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-semibold text-[#ff5419] uppercase tracking-wider text-[11px]">
                    {course.category}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                    {course.level}
                  </span>
                </div>

                <h3 className={`text-lg font-bold tracking-tight mb-2.5 leading-snug ${
                  isDarkMode ? 'text-white' : 'text-neutral-950'
                }`}>
                  {course.title}
                </h3>

                <p className={`text-xs leading-relaxed mb-4 line-clamp-3 ${
                  isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  {course.description}
                </p>

                {/* Key specs */}
                <div className="flex items-center gap-3 text-[11px] text-neutral-500 dark:text-neutral-400 mb-4 pb-4 border-b border-neutral-100 dark:border-neutral-800">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{course.duration}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="font-bold text-neutral-700 dark:text-neutral-200">{course.rating}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="tabular-nums">{course.enrolledStudents}</span>
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => setActiveCourseModal(course)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                    isDarkMode 
                      ? 'border-neutral-800 hover:bg-neutral-800 text-neutral-200' 
                      : 'border-neutral-200 hover:bg-neutral-50 text-neutral-800'
                  }`}
                >
                  Ver Ementa
                </button>

                <button
                  onClick={() => handleEnroll(course.id, course.title)}
                  className={`py-2 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isEnrolled
                      ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30'
                      : 'bg-[#ff5419] hover:bg-[#ea4409] text-white shadow-xs'
                  }`}
                >
                  {isEnrolled ? 'Matriculado' : 'Inscrever-se'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Course Detail Modal */}
      {activeCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className={`w-full max-w-xl rounded-2xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto ${
            isDarkMode ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900'
          }`}>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold text-[#ff5419] uppercase tracking-wider">
                  {activeCourseModal.category} · {activeCourseModal.level}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1">
                  {activeCourseModal.title}
                </h3>
              </div>
              <button 
                onClick={() => setActiveCourseModal(null)}
                className="p-1 rounded-lg hover:bg-neutral-800/40 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
              {activeCourseModal.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Módulos e Tópicos Abordados
              </h4>
              <div className="space-y-2">
                {activeCourseModal.topics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/40 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#ff5419] shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-4">
              <div className="text-xs text-neutral-500">
                <span>Duração: <strong>{activeCourseModal.duration}</strong></span>
              </div>
              <button
                onClick={() => {
                  handleEnroll(activeCourseModal.id, activeCourseModal.title);
                  setActiveCourseModal(null);
                }}
                className="px-6 py-2.5 rounded-xl font-bold text-xs bg-[#ff5419] hover:bg-[#ea4409] text-white shadow-xs cursor-pointer"
              >
                {enrolledCourseIds.includes(activeCourseModal.id) ? 'Já Matriculado' : 'Garantir Acesso Gratuito'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
