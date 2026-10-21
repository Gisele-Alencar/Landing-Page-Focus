import React from 'react';
import { FAQ_LIST } from '../data/mockData';
import { Plus, Minus } from 'lucide-react';

interface FAQSectionProps {
  isDarkMode: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ isDarkMode }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-neutral-200/80 dark:border-neutral-800">
      {/* Kicker & Heading */}
      <div className="mb-12">
        <span className="text-[11px] font-bold tracking-[0.18em] text-[#ff5419] uppercase">
          06 / PERGUNTAS FREQUENTES
        </span>

        <div className="mt-3">
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] ${
            isDarkMode ? 'text-white' : 'text-neutral-950'
          }`}>
            O que você precisa saber antes de começar.
          </h2>
        </div>
      </div>

      {/* Accordion list matching image */}
      <div className="divide-y divide-neutral-200/90 dark:divide-neutral-800 border-y border-neutral-200/90 dark:border-neutral-800">
        {FAQ_LIST.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="transition-colors">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-5 flex items-center justify-between text-left gap-4 cursor-pointer group"
                aria-expanded={isOpen}
              >
                <span className={`text-sm sm:text-base font-bold transition-colors ${
                  isOpen 
                    ? 'text-[#ff5419]' 
                    : isDarkMode 
                      ? 'text-white group-hover:text-[#ff5419]' 
                      : 'text-neutral-900 group-hover:text-[#ff5419]'
                }`}>
                  {faq.question}
                </span>

                <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                  isOpen 
                    ? 'bg-[#ff5419] text-white' 
                    : isDarkMode 
                      ? 'text-neutral-400 group-hover:text-white' 
                      : 'text-neutral-500 group-hover:text-neutral-900'
                }`}>
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              {isOpen && (
                <div className="pb-6 pr-12 text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 animate-fadeIn">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
