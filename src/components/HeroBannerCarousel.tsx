import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Estrutura de dados de cada slide do carrossel.
 * Para adicionar ou alterar imagens, basta atualizar ou adicionar itens na lista BANNER_SLIDES abaixo.
 */
export interface BannerSlide {
  id: string;
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  imageUrl: string;
  linkUrl?: string;
  altText: string;
  ctaText?: string;
  ctaTargetId?: string;
  isOfficialGraphicBanner?: boolean;
  imagePosition?: string;
}

/**
 * Lista de banners do carrossel principal.
 * - Reutiliza imagens de tecnologia, squads, hackathons e comunidade existentes no projeto.
 * - Fácil de editar para adicionar imagens enviadas pelo usuário posteriormente.
 */
export const BANNER_SLIDES: BannerSlide[] = [
  {
    id: 'banner-futuro-pessoas',
    badge: 'Focus Academy • Ceará Inovação',
    title: 'O Futuro da tecnologia começa com',
    titleHighlight: 'pessoas.',
    subtitle: 'Conhecimento, projetos e oportunidades para transformar ideias em impacto real.',
    imageUrl: 'https://i.ibb.co/zHVGtH85/Whats-App-Image-2026-10-15-at-17-38-10-1.jpg',
    linkUrl: 'https://ibb.co/x8qJr8ms',
    altText: 'Focus Academy - Túnel de inovação tecnológica com olho digital e iluminação neon',
    ctaText: 'Ver Formas de Participar',
    ctaTargetId: 'jornada',
  },
  {
    id: 'banner-squads',
    badge: 'Projetos Colaborativos',
    title: 'Desenvolvimento em Equipes',
    titleHighlight: 'Reais.',
    subtitle: 'Vivencie a rotina de tecnologia trabalhando em equipe na construção de projetos práticos, trocando experiências e evoluindo junto com outros talentos.',
    imageUrl: 'https://i.ibb.co/nqNrsNWk/Whats-App-Image-2026-10-15-at-16-32-24.jpg',
    linkUrl: 'https://ibb.co/j9PhvPp4',
    altText: 'Whats-App-Image-2026-10-15-at-16-32-24',
    ctaText: 'Explorar Projetos',
    ctaTargetId: 'ecossistema',
    imagePosition: '12% center',
  },
  {
    id: 'banner-hackathons',
    badge: 'Inovação & Desafios',
    title: 'Ideação, Hackathons e',
    titleHighlight: 'Deploy.',
    subtitle: 'Espaço dinâmico para criar protótipos, validar ideias com a comunidade e colocar soluções no ar do zero ao deploy.',
    imageUrl: 'https://i.ibb.co/1fJ2pvRj/Whats-App-Image-2026-10-15-at-17-38-18.jpg',
    altText: 'Whats-App-Image-2026-10-15-at-17-38-18',
    ctaText: 'Ver Eventos',
    ctaTargetId: 'ecossistema',
  },
  {
    id: 'banner-workshops',
    badge: 'Aprendizado na Prática',
    title: 'Capacitação Técnica &',
    titleHighlight: 'Workshops.',
    subtitle: 'Workshops aplicados de frontend, backend, arquitetura e boas práticas com apoio contínuo de mentores experientes.',
    imageUrl: 'https://i.ibb.co/G45dz2bc/Whats-App-Image-2026-10-15-at-17-37-59.jpg',
    linkUrl: 'https://ibb.co/q3rDTsPk',
    altText: 'Whats-App-Image-2026-10-15-at-17-37-59',
    ctaText: 'Conhecer Trilhas',
    ctaTargetId: 'ecossistema',
  },
  {
    id: 'banner-ceara',
    badge: 'Ceará Tech Summit • Comunidade',
    title: 'Conectando Talentos do',
    titleHighlight: 'Ceará.',
    subtitle: 'Um ecossistema nascido para transformar conhecimento em possibilidades e abrir portas reais no mercado tech.',
    imageUrl: 'https://i.ibb.co/pBxV3Lzf/Whats-App-Image-2026-10-15-at-16-48-09.jpg',
    linkUrl: 'https://imgbb.com/',
    altText: 'Whats App Image 2026 10 15 at 16 48 09',
    ctaText: 'Fazer Parte',
    ctaTargetId: 'jornada',
  },
];

interface HeroBannerCarouselProps {
  onOpenParticipate?: () => void;
  slides?: BannerSlide[];
}

export const HeroBannerCarousel: React.FC<HeroBannerCarouselProps> = ({
  slides = BANNER_SLIDES,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Duração de 3 segundos sem pausa conforme solicitado
  const SLIDE_DURATION = 3000;
  const PROGRESS_TICK = 23; // atualiza a cada 30ms para animação fluida

  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressStartTimeRef = useRef<number>(Date.now());

  // Referências para suporte a gestos de swipe em mobile
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const touchDeltaXRef = useRef<number>(0);

  // Navegar para próximo slide com reset do temporizador
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
    progressStartTimeRef.current = Date.now();
  }, [slides.length]);

  // Navegar para slide anterior com reset do temporizador
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
    progressStartTimeRef.current = Date.now();
  }, [slides.length]);


  // Temporizador contínuo de 3 segundos sem pausa
  useEffect(() => {
    progressStartTimeRef.current = Date.now();

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - progressStartTimeRef.current;
      const currentProg = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(currentProg);

      if (elapsed >= SLIDE_DURATION) {
        handleNext();
      }
    }, PROGRESS_TICK);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [currentIndex, handleNext, SLIDE_DURATION]);

  // Gestos de toque (swipe) para dispositivos móveis sem pausar
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    touchDeltaXRef.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - touchStartXRef.current;
    const diffY = currentY - touchStartYRef.current;

    // Apenas considera movimento horizontal se for maior que o vertical
    if (Math.abs(diffX) > Math.abs(diffY)) {
      touchDeltaXRef.current = diffX;
    }
  };

  const handleTouchEnd = () => {
    const minSwipeDistance = 45; // limite em pixels para considerar swipe
    if (touchDeltaXRef.current < -minSwipeDistance) {
      handleNext();
    } else if (touchDeltaXRef.current > minSwipeDistance) {
      handlePrev();
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
    touchDeltaXRef.current = 0;
  };

  // Suporte a teclas de seta do teclado
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  return (
    <div 
      className="relative w-full group focus:outline-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Carrossel de banners principais da Focus Academy"
    >
      {/* 
        Container principal com proporção fixa e sem corte ou distorção:
        - Mobile: altura de 340px
        - Tablet: altura de 420px
        - Desktop: altura de 480px / 500px
      */}
      <div className="relative w-full h-[340px] sm:h-[420px] md:h-[470px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800/80 bg-[#07070a] shadow-2xl">
        
        {/* Trilho de slides com transição horizontal suave */}
        <div
          className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => {
            const isSlideActive = index === currentIndex;
            const clipPathId = `banner-curve-clip-${slide.id}`;
            const ribbonGradId = `banner-ribbon-grad-${slide.id}`;
            const secondaryGradId = `banner-sec-grad-${slide.id}`;

            const SlideInner = (
              <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between overflow-hidden bg-[#07070a]">
                {/* Brilho ambiente sutil nas cores do site */}
                <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#ff5419]/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-24 right-1/3 w-72 h-72 bg-[#ff7a38]/10 blur-[90px] rounded-full pointer-events-none" />

                {/* 
                  LADO ESQUERDO: Textos atuais do banner (Título com destaque e Subtítulo)
                */}
                <div className="relative z-20 w-full md:w-[50%] lg:w-[46%] h-full flex flex-col justify-center px-6 py-6 sm:px-10 md:pl-12 md:pr-4 lg:pl-14">
                  <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.15] mb-3 sm:mb-4 group-hover/slide-link:text-white transition-colors">
                    {slide.title}{' '}
                    {slide.titleHighlight && (
                      <span className="text-[#ff5419] font-black block sm:inline">
                        {slide.titleHighlight}
                      </span>
                    )}
                  </h2>

                  <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed max-w-md mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                    {slide.subtitle}
                  </p>

                  {slide.ctaText && (
                    <div>
                      <span className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#ff5419] to-[#ff7a38] shadow-lg shadow-[#ff5419]/25 group-hover/slide-link:brightness-110 transition-all">
                        {slide.ctaText}
                      </span>
                    </div>
                  )}
                </div>

                {/* 
                  LADO DIREITO / MOLDURA ORGÂNICA CURVA:
                  Renderiza a foto diretamente em alta resolução (HTML <img> nativo sem rasterização de foreignObject)
                  com filtro SVG de nitidez óptica e recorte curvo responsivo, mantendo a paleta oficial do site.
                */}
                <div className="relative md:absolute md:inset-0 w-full h-full pointer-events-none">
                  {/* Definições de recorte responsivo e filtro de alta nitidez (HD Sharpness) */}
                  <svg width="0" height="0" className="absolute pointer-events-none">
                    <defs>
                      <clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
                        <path d="M 0.4625,0 C 0.404,0.17 0.471,0.48 0.5625,0.69 C 0.6625,0.92 0.80,0.89 1,0.75 L 1,0 Z" />
                      </clipPath>
                      <filter id={`sharp-${slide.id}`} x="0%" y="0%" width="100%" height="100%">
                        {/* Micro-contraste e nitidez sutil (Unsharp Mask) para melhorar a definição das fotos */}
                        <feConvolveMatrix
                          order="3 3"
                          preserveAlpha="true"
                          kernelMatrix="0 -0.35 0 -0.35 2.4 -0.35 0 -0.35 0"
                          divisor="1"
                        />
                      </filter>
                    </defs>
                  </svg>

                  {/* Camada de vetores decorativos de fundo (círculos, pontos e faixas curvas) */}
                  <svg
                    viewBox="0 0 1200 500"
                    preserveAspectRatio="none"
                    className="absolute inset-0 w-full h-full block"
                  >
                    <defs>
                      {/* Gradiente principal da faixa curva nas cores do site */}
                      <linearGradient id={ribbonGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff5419" />
                        <stop offset="55%" stopColor="#ff7a38" />
                        <stop offset="100%" stopColor="#ff5419" />
                      </linearGradient>

                      {/* Gradiente secundário translúcido */}
                      <linearGradient id={secondaryGradId} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ff5419" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#ff7a38" stopOpacity="0.08" />
                      </linearGradient>
                    </defs>

                    {/* Círculos concêntricos decorativos superiores (atrás da curva) */}
                    <g opacity="0.28" stroke="#ff5419" strokeWidth="1.2" fill="none">
                      <circle cx="535" cy="115" r="24" />
                      <circle cx="535" cy="115" r="32" />
                      <circle cx="535" cy="115" r="40" />
                      <circle cx="535" cy="115" r="48" />
                      <circle cx="535" cy="115" r="56" />
                    </g>

                    {/* Círculos concêntricos decorativos inferiores (atrás da curva inferior) */}
                    <g opacity="0.25" stroke="#ff7a38" strokeWidth="1.3" fill="none">
                      <circle cx="725" cy="345" r="45" />
                      <circle cx="725" cy="345" r="57" />
                      <circle cx="725" cy="345" r="69" />
                      <circle cx="725" cy="345" r="81" />
                      <circle cx="725" cy="345" r="93" />
                      <circle cx="725" cy="345" r="105" />
                      <circle cx="725" cy="345" r="117" />
                    </g>

                    {/* Grade de pontos (dot matrix) central perto da curva */}
                    <g fill="#ff5419" opacity="0.35">
                      {[0, 1, 2, 3].map((row) =>
                        [0, 1, 2, 3, 4].map((col) => (
                          <circle
                            key={`dots-mid-${row}-${col}`}
                            cx={500 + col * 14}
                            cy={180 + row * 14}
                            r="2"
                          />
                        ))
                      )}
                    </g>

                    {/* Grade de pontos (dot matrix) no canto inferior direito */}
                    <g fill="#ff5419" opacity="0.35">
                      {[0, 1, 2, 3].map((row) =>
                        [0, 1, 2, 3, 4].map((col) => (
                          <circle
                            key={`dots-br-${row}-${col}`}
                            cx={1060 + col * 18}
                            cy={415 + row * 16}
                            r="2.2"
                          />
                        ))
                      )}
                    </g>

                    {/* Faixa fluida larga inferior (sombra translúcida da moldura) */}
                    <path
                      d="M 535,0 C 460,95 545,265 660,375 C 785,495 965,480 1200,415 L 1200,365 C 960,435 790,450 675,335 C 565,230 485,80 555,0 Z"
                      fill={`url(#${secondaryGradId})`}
                    />

                    {/* Faixa fluida principal contornando a foto (em laranja vibrante da marca) */}
                    <path
                      d="M 542,0 C 470,90 552,250 668,360 C 790,475 960,462 1200,395 L 1200,370 C 960,440 795,455 675,342 C 565,238 485,85 555,0 Z"
                      fill={`url(#${ribbonGradId})`}
                    />
                  </svg>

                  {/* 
                    Foto nativa em alta resolução (sem perda de qualidade do foreignObject)
                    recortada pela moldura curva
                  */}
                  <div
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    style={{
                      clipPath: `url(#${clipPathId})`,
                      WebkitClipPath: `url(#${clipPathId})`,
                    }}
                  >
                    <div className="absolute top-0 right-0 w-[62%] h-[92%] overflow-hidden bg-neutral-900">
                      <img
                        src={slide.imageUrl}
                        alt={slide.altText}
                        decoding="async"
                        fetchPriority={index === 0 ? 'high' : 'auto'}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out will-change-transform"
                        style={{
                          objectPosition: slide.imagePosition || 'center center',
                          transform: isSlideActive ? 'scale(1) translateZ(0)' : 'scale(1.04) translateZ(0)',
                          filter: `url(#sharp-${slide.id}) brightness(1.06) contrast(1.06) saturate(1.08)`,
                          imageRendering: 'auto',
                          backfaceVisibility: 'hidden',
                        }}
                        loading="eager"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (target.src.includes('16-32-24') && !target.src.endsWith('/Whats-App-Image-2026-10-15-at-16-32-24.jpg')) {
                            target.src = '/Whats-App-Image-2026-10-15-at-16-32-24.jpg';
                          } else if (target.src.includes('16-48-09') && !target.src.endsWith('/Whats-App-Image-2026-10-15-at-16-48-09.jpg')) {
                            target.src = '/Whats-App-Image-2026-10-15-at-16-48-09.jpg';
                          } else if (target.src.includes('17-37-59') && !target.src.endsWith('/Whats-App-Image-2026-10-15-at-17-37-59.jpg')) {
                            target.src = '/Whats-App-Image-2026-10-15-at-17-37-59.jpg';
                          } else if (target.src.includes('17-38-10') && !target.src.endsWith('/Whats-App-Image-2026-10-15-at-17-38-10-1.jpg')) {
                            target.src = '/Whats-App-Image-2026-10-15-at-17-38-10-1.jpg';
                          } else if (target.src.includes('17-38-18') && !target.src.endsWith('/Whats-App-Image-2026-10-15-at-17-38-18.jpg')) {
                            target.src = '/Whats-App-Image-2026-10-15-at-17-38-18.jpg';
                          } else if (target.src.includes('DSC_8982')) {
                            target.src = '/DSC_8982.svg';
                          } else if (target.src.includes('20261007_170749')) {
                            target.src = '/20261007_170749.svg';
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Linha interna sutil sobre a foto e elementos geométricos (sem os X) */}
                  <svg
                    viewBox="0 0 1200 500"
                    preserveAspectRatio="none"
                    className="absolute inset-0 w-full h-full block pointer-events-none"
                  >
                    {/* Linha interna branca acompanhando a curva por dentro da foto */}
                    <path
                      d="M 568,0 C 500,82 578,232 688,334 C 805,442 965,430 1200,360"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      strokeOpacity="0.65"
                    />

                    {/* Elementos geométricos sutis (apenas círculo e losango, X removidos) */}
                    <g stroke="#ff5419" strokeWidth="2" strokeLinecap="round" opacity="0.55" fill="none">
                      <circle cx="568" cy="258" r="6" />
                      <polygon points="825,435 833,443 825,451 817,443" />
                    </g>
                  </svg>

                  {/* Sombra gradiente no mobile para garantir leitura perfeita do texto */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#07070a] via-[#07070a]/85 to-transparent md:hidden pointer-events-none" />
                </div>
              </div>
            );

            return (
              <div
                key={slide.id}
                className="w-full h-full shrink-0 basis-full relative select-none overflow-hidden bg-[#07070a]"
                aria-hidden={!isSlideActive}
              >
                {slide.linkUrl ? (
                  <a
                    href={slide.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full cursor-pointer group/slide-link"
                    title={`Acessar ${slide.title}`}
                  >
                    {SlideInner}
                  </a>
                ) : (
                  <div className="w-full h-full">{SlideInner}</div>
                )}
              </div>
            );
          })}
        </div>

        {/* 
          Linha de progresso fluida e sutil no rodapé do carrossel (3 segundos contínuos sem pausa)
          Os botões foram removidos conforme solicitado pelo usuário.
        */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-white/10 z-20 pointer-events-none overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#ff5419] to-[#ff7a38] transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
