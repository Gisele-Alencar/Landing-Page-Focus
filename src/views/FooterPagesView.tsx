import React, { useState } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Users,
  MessageCircle,
  Globe,
  Linkedin,
  Github,
  Mail,
  CheckCircle2,
  Send,
  Layers,
  Code2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { ActivePage } from '../types';
import { ParticipationPathsSection } from '../components/ParticipationPathsSection';
import { FAQSection } from '../components/FAQSection';
import { JourneySection } from '../components/JourneySection';
import { PlatformPillarsSection } from '../components/PlatformPillarsSection';

interface PageViewProps {
  onBack: () => void;
  onNavigate: (page: ActivePage) => void;
  onOpenParticipate?: () => void;
  isDarkMode: boolean;
}

export const HowToParticipateView: React.FC<PageViewProps> = ({
  onBack,
  onNavigate,
  onOpenParticipate,
  isDarkMode,
}) => {
  return (
    <div className="py-8 sm:py-12">
      <div className="px-4 sm:px-6 max-w-6xl mx-auto">
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
      </div>

      <ParticipationPathsSection isDarkMode={isDarkMode} />

      <JourneySection
        isDarkMode={isDarkMode}
        onOpenParticipate={() => onOpenParticipate && onOpenParticipate()}
        onNavigate={onNavigate}
      />
    </div>
  );
};

export const FAQView: React.FC<PageViewProps> = ({
  onBack,
  onNavigate,
  isDarkMode,
}) => {
  return (
    <div className="py-8 sm:py-12">
      <div className="px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
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
      </div>

      <FAQSection isDarkMode={isDarkMode} />

      <div className="px-4 sm:px-6 max-w-6xl mx-auto mt-4">
        <div
          className={`p-6 sm:p-8 rounded-none border flex flex-col sm:flex-row sm:items-center justify-between gap-6 ${
            isDarkMode
              ? 'bg-neutral-900/70 border-neutral-800'
              : 'bg-white border-neutral-200'
          }`}
        >
          <div>
            <h3
              className={`text-lg sm:text-xl font-bold mb-1 ${
                isDarkMode ? 'text-white' : 'text-neutral-950'
              }`}
            >
              Ainda tem alguma dúvida?
            </h3>
            <p
              className={`text-xs sm:text-sm ${
                isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              Fale diretamente com a nossa equipe ou conecte-se com a comunidade no Discord.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('contato')}
              className="px-5 py-2.5 rounded-none text-xs font-bold bg-[#ff5419] hover:bg-[#ea4409] text-white transition-colors cursor-pointer"
            >
              Contato e suporte
            </button>
            <button
              onClick={() => onNavigate('comunidade')}
              className={`px-5 py-2.5 rounded-none text-xs font-bold border transition-colors cursor-pointer ${
                isDarkMode
                  ? 'border-neutral-700 text-neutral-200 hover:border-[#ff5419]'
                  : 'border-neutral-300 text-neutral-800 hover:border-[#ff5419]'
              }`}
            >
              Ir para Comunidade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AboutAcademyView: React.FC<PageViewProps> = ({
  onBack,
  onNavigate,
  onOpenParticipate,
  isDarkMode,
}) => {
  return (
    <div className="py-8 sm:py-12">
      <div className="px-4 sm:px-6 max-w-6xl mx-auto">
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

        {/* Header */}
        <div className="mb-12">
          <span className="text-[11px] font-bold tracking-[0.18em] text-[#ff5419] uppercase block mb-2">
            INSTITUCIONAL / SOBRE A FOCUS ACADEMY
          </span>
          <h1
            className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
              isDarkMode ? 'text-white' : 'text-neutral-950'
            }`}
          >
            Formação prática através de projetos reais e colaboração.
          </h1>
          <p
            className={`text-sm sm:text-base max-w-3xl leading-relaxed ${
              isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
            }`}
          >
            A Focus Academy é o ecossistema educacional e de comunidade criado para aproximar estudantes e profissionais da vivência real do mercado de tecnologia por meio de squads multidisciplinares, mentoria contínua e cultura open source.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="p-6 rounded-none bg-gradient-to-br from-[#ff5419]/15 via-[#ff5419]/8 to-[#ff5419]/3 border border-[#ff5419]/20">
            <Layers className="w-6 h-6 text-[#ff5419] mb-4" />
            <h3
              className={`text-lg font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-neutral-950'
              }`}
            >
              Squads Multidisciplinares
            </h3>
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}
            >
              Times organizados com Front-end, Back-end, UI/UX, DevOps, Dados e Cibersegurança construindo soluções reais do zero ao deploy.
            </p>
          </div>

          <div className="p-6 rounded-none bg-gradient-to-br from-[#ff5419]/15 via-[#ff5419]/8 to-[#ff5419]/3 border border-[#ff5419]/20">
            <Code2 className="w-6 h-6 text-[#ff5419] mb-4" />
            <h3
              className={`text-lg font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-neutral-950'
              }`}
            >
              Metodologia de Mercado
            </h3>
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}
            >
              Ciclos de entrega com ritos ágeis, versionamento em equipe no GitHub, code review estruturado e documentação técnica.
            </p>
          </div>

          <div className="p-6 rounded-none bg-gradient-to-br from-[#ff5419]/15 via-[#ff5419]/8 to-[#ff5419]/3 border border-[#ff5419]/20">
            <Sparkles className="w-6 h-6 text-[#ff5419] mb-4" />
            <h3
              className={`text-lg font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-neutral-950'
              }`}
            >
              Portfólio Vivo
            </h3>
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDarkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}
            >
              Cada projeto entregue gera histórico verificável de colaboração, fortalecendo a transição e evolução de carreira na tecnologia.
            </p>
          </div>
        </div>
      </div>

      <PlatformPillarsSection />

      <JourneySection
        isDarkMode={isDarkMode}
        onOpenParticipate={() => onOpenParticipate && onOpenParticipate()}
        onNavigate={onNavigate}
      />
    </div>
  );
};

export const FocusTechView: React.FC<PageViewProps> = ({
  onBack,
  onNavigate,
  isDarkMode,
}) => {
  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
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

      <div className="mb-12">
        <span className="text-[11px] font-bold tracking-[0.18em] text-[#ff5419] uppercase block mb-2">
          INSTITUCIONAL / FOCUS TECNOLOGIA
        </span>
        <h1
          className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
            isDarkMode ? 'text-white' : 'text-neutral-950'
          }`}
        >
          Focus Tecnologia
        </h1>
        <p
          className={`text-sm sm:text-base max-w-3xl leading-relaxed ${
            isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
          }`}
        >
          Nascida no Ceará, a Focus Tecnologia impulsiona o desenvolvimento de software, inovação aberta e formação de talentos através da tecnologia e colaboração em comunidade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div
          className={`p-8 rounded-none border flex flex-col justify-between ${
            isDarkMode
              ? 'bg-neutral-900/70 border-neutral-800'
              : 'bg-white border-neutral-200 shadow-xs'
          }`}
        >
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#ff5419] block mb-2">
              ECOSSISTEMA & ENGENHARIA
            </span>
            <h2
              className={`text-2xl font-bold mb-3 ${
                isDarkMode ? 'text-white' : 'text-neutral-950'
              }`}
            >
              Tecnologia que conecta propósito e execução
            </h2>
            <p
              className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
              }`}
            >
              A Focus Tecnologia mantém a infraestrutura da Focus Academy, fomenta projetos open source e conecta desenvolvedores, designers e especialistas em segurança a desafios técnicos reais.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-800/60">
            <a
              href="https://focustech.dev"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-none text-xs font-bold bg-[#ff5419] hover:bg-[#ea4409] text-white transition-all flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              <span>Acessar focustech.dev</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/company/focus-tecnologia-co/home/"
              target="_blank"
              rel="noreferrer"
              className={`px-5 py-2.5 rounded-none text-xs font-bold border transition-all flex items-center gap-2 ${
                isDarkMode
                  ? 'border-neutral-700 text-neutral-200 hover:border-[#ff5419]'
                  : 'border-neutral-300 text-neutral-800 hover:border-[#ff5419]'
              }`}
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Oficial</span>
            </a>
          </div>
        </div>

        <div
          className={`p-8 rounded-none border flex flex-col justify-between ${
            isDarkMode
              ? 'bg-neutral-900/70 border-neutral-800'
              : 'bg-white border-neutral-200 shadow-xs'
          }`}
        >
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#ff5419] block mb-2">
              OPEN SOURCE & COMUNIDADE
            </span>
            <h2
              className={`text-2xl font-bold mb-3 ${
                isDarkMode ? 'text-white' : 'text-neutral-950'
              }`}
            >
              Iniciativas abertas e impacto regional
            </h2>
            <p
              className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
              }`}
            >
              Explore nossos repositórios, acompanhe as entregas dos squads da Focus Academy e faça parte da evolução tecnológica construída em rede.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-800/60">
            <a
              href="https://github.com/FocusTech42"
              target="_blank"
              rel="noreferrer"
              className={`px-5 py-2.5 rounded-none text-xs font-bold border transition-all flex items-center gap-2 ${
                isDarkMode
                  ? 'border-neutral-700 text-neutral-200 hover:border-[#ff5419]'
                  : 'border-neutral-300 text-neutral-800 hover:border-[#ff5419]'
              }`}
            >
              <Github className="w-4 h-4" />
              <span>GitHub FocusTech42</span>
            </a>
            <button
              onClick={() => onNavigate('projetos')}
              className="px-5 py-2.5 rounded-none text-xs font-bold text-[#ff5419] hover:underline cursor-pointer"
            >
              Ver Projetos da Academy →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactSupportView: React.FC<PageViewProps> = ({
  onBack,
  onNavigate,
  isDarkMode,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Dúvida sobre Squads');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSent(true);
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
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

      <div className="mb-10">
        <span className="text-[11px] font-bold tracking-[0.18em] text-[#ff5419] uppercase block mb-2">
          INSTITUCIONAL / CONTATO E SUPORTE
        </span>
        <h1
          className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-3 ${
            isDarkMode ? 'text-white' : 'text-neutral-950'
          }`}
        >
          Fale com a equipe Focus Academy.
        </h1>
        <p
          className={`text-sm sm:text-base max-w-2xl leading-relaxed ${
            isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
          }`}
        >
          Precisa de suporte com sua inscrição em squads, parcerias institucionais ou dúvidas sobre a comunidade? Escolha um canal direto ou envie sua mensagem.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Direct Channels */}
        <div className="lg:col-span-5 space-y-4">
          <div
            className={`p-6 rounded-none border ${
              isDarkMode
                ? 'bg-neutral-900/70 border-neutral-800'
                : 'bg-white border-neutral-200'
            }`}
          >
            <div className="flex items-center gap-2 text-[#5865F2] font-bold text-xs uppercase tracking-wider mb-2">
              <Users className="w-4 h-4" />
              <span>Suporte na Comunidade (Discord)</span>
            </div>
            <p
              className={`text-xs leading-relaxed mb-4 ${
                isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              Canal oficial de suporte rápido para membros, mentoria de squads e dúvidas técnicas.
            </p>
            <button
              onClick={() => window.open('https://discord.gg/focusacademy', '_blank')}
              className="px-4 py-2 rounded-none text-xs font-bold bg-[#5865F2] hover:bg-[#4752c4] text-white transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Acessar Discord</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          <div
            className={`p-6 rounded-none border ${
              isDarkMode
                ? 'bg-neutral-900/70 border-neutral-800'
                : 'bg-white border-neutral-200'
            }`}
          >
            <div className="flex items-center gap-2 text-[#25D366] font-bold text-xs uppercase tracking-wider mb-2">
              <MessageCircle className="w-4 h-4" />
              <span>Grupo Oficial no WhatsApp</span>
            </div>
            <p
              className={`text-xs leading-relaxed mb-4 ${
                isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              Receba avisos de novos ciclos de projetos, eventos e converse com a coordenação da comunidade.
            </p>
            <button
              onClick={() => window.open('https://chat.whatsapp.com/focusacademy', '_blank')}
              className="px-4 py-2 rounded-none text-xs font-bold bg-[#25D366] hover:bg-[#20ba5a] text-white transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Entrar no WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          <div
            className={`p-6 rounded-none border ${
              isDarkMode
                ? 'bg-neutral-900/70 border-neutral-800'
                : 'bg-white border-neutral-200'
            }`}
          >
            <div className="flex items-center gap-2 text-[#ff5419] font-bold text-xs uppercase tracking-wider mb-2">
              <Mail className="w-4 h-4" />
              <span>Dúvidas Frequentes (FAQ)</span>
            </div>
            <p
              className={`text-xs leading-relaxed mb-4 ${
                isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              Confira as respostas para as principais dúvidas sobre participação, pré-requisitos e funcionamento dos squads.
            </p>
            <button
              onClick={() => onNavigate('faq')}
              className="px-4 py-2 rounded-none text-xs font-bold bg-[#ff5419] hover:bg-[#ea4409] text-white transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Ver página de FAQ</span>
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div
            className={`p-6 sm:p-8 rounded-none border ${
              isDarkMode
                ? 'bg-neutral-900/70 border-neutral-800'
                : 'bg-white border-neutral-200 shadow-xs'
            }`}
          >
            {sent ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#ff5419] mx-auto" />
                <h3
                  className={`text-2xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-neutral-950'
                  }`}
                >
                  Mensagem enviada com sucesso!
                </h3>
                <p
                  className={`text-xs sm:text-sm max-w-md mx-auto ${
                    isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
                  }`}
                >
                  Nossa equipe recebeu seu contato e responderá em breve no e-mail informado.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="px-6 py-2.5 rounded-none text-xs font-bold bg-[#ff5419] hover:bg-[#ea4409] text-white transition-colors cursor-pointer"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-neutral-950'
                  }`}
                >
                  Envie uma mensagem para o suporte
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-none border focus:outline-none focus:border-[#ff5419] ${
                        isDarkMode
                          ? 'bg-neutral-950 border-neutral-800 text-white'
                          : 'bg-neutral-50 border-neutral-300 text-neutral-900'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="voce@exemplo.com"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-none border focus:outline-none focus:border-[#ff5419] ${
                        isDarkMode
                          ? 'bg-neutral-950 border-neutral-800 text-white'
                          : 'bg-neutral-50 border-neutral-300 text-neutral-900'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                    Assunto
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={`w-full px-3.5 py-2.5 text-xs rounded-none border focus:outline-none focus:border-[#ff5419] ${
                      isDarkMode
                        ? 'bg-neutral-950 border-neutral-800 text-white'
                        : 'bg-neutral-50 border-neutral-300 text-neutral-900'
                    }`}
                  >
                    <option value="Dúvida sobre Squads">Dúvida sobre Squads</option>
                    <option value="Como participar">Como participar</option>
                    <option value="Suporte técnico na plataforma">Suporte técnico na plataforma</option>
                    <option value="Parceria / Institucional">Parceria / Institucional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Descreva como podemos ajudar..."
                    className={`w-full px-3.5 py-2.5 text-xs rounded-none border focus:outline-none focus:border-[#ff5419] ${
                      isDarkMode
                        ? 'bg-neutral-950 border-neutral-800 text-white'
                        : 'bg-neutral-50 border-neutral-300 text-neutral-900'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-none text-xs font-bold bg-[#ff5419] hover:bg-[#ea4409] text-white transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar mensagem</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
