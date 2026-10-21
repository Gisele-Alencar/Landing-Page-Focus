import React from 'react';
import { ActivePage } from '../types';
import { HeroBannerCarousel } from './HeroBannerCarousel';

interface HeroProps {
  onNavigate: (page: ActivePage) => void;
  onOpenParticipate: () => void;
  isDarkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  onOpenParticipate,
  isDarkMode,
}) => {
  return (
    <section className="relative w-full bg-black text-white pt-8 pb-20 sm:pt-12 sm:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Subtle orange ambient glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-[#ff5419]/18 blur-[140px] rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[350px] bg-[#00d2ff]/10 blur-[130px] rounded-full"></div>

        {/* Subtle dark grid texture */}
        <div 
          className="absolute inset-0 opacity-[0.06]" 
          style={{ 
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Banner Principal com Carrossel Automático de Imagens */}
        <div className="w-full mb-12 transition-transform duration-300">
          <HeroBannerCarousel onOpenParticipate={onOpenParticipate} />
        </div>

        {/* Manifesto requested by user */}
        <div className="pt-10 pb-6 border-t border-neutral-800/90 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white">
                Um lugar para aprender,{' '}
                <span className="text-[#ff5419]">criar</span> e evoluir.
              </h2>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center space-y-5 lg:pl-8 lg:border-l lg:border-neutral-800">
              <p className="text-lg sm:text-2xl text-neutral-100 font-semibold leading-relaxed tracking-tight">
                A tecnologia começa com uma ideia. A inovação acontece quando pessoas se conectam para construí-la.
              </p>
              <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
                A Focus Academy conecta aprendizado, colaboração e experiências práticas. Um ecossistema nascido no Ceará para transformar conhecimento em possibilidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

