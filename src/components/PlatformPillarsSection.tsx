import React from 'react';
import { PLATFORM_PILLARS } from '../data/mockData';

export const PlatformPillarsSection: React.FC = () => {
  return (
    <section id="plataforma" className="bg-white text-neutral-900 py-20 sm:py-28 px-4 sm:px-6 border-y border-neutral-200 transition-colors">
      <div className="max-w-6xl mx-auto bg-white text-neutral-900">
        {/* Kicker & Heading */}
        <div className="mb-14">
          <span className="text-[11px] font-bold tracking-[0.18em] text-[#ff5419] uppercase">
            03 / A PLATAFORMA
          </span>

          <div className="mt-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-neutral-900">
              O que sustenta a experiência.
            </h2>
          </div>
        </div>

        {/* 6 Grid Cards matching image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-neutral-200 bg-white">
          {PLATFORM_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="p-8 border-r border-b border-neutral-200 bg-white transition-colors hover:bg-neutral-50/80 text-left flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <span className="text-[11px] font-mono tracking-wider text-neutral-500 uppercase block mb-3">
                  {pillar.number} / {pillar.category}
                </span>

                <h3 className="text-lg font-bold text-neutral-900 mb-3 tracking-tight">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout banner matching image */}
        <div className="mt-8 pt-6 border-t border-neutral-200">
          <p className="text-xs sm:text-sm text-neutral-600">
            <span className="font-bold text-neutral-900">Um espaço para diferentes áreas:</span> cada projeto pode reunir pessoas de programação, design, qualidade, produto e outras especialidades, de acordo com sua necessidade.
          </p>
        </div>
      </div>
    </section>
  );
};
