import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem, OfferConfig } from '../types/offer';

interface Props {
  faqs: FaqItem[];
  config: OfferConfig;
  onCtaClick: () => void;
}

export const FaqSection: React.FC<Props> = ({ faqs, config, onCtaClick }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-stone-300/60 bg-[#f7f4ee]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-stone-200/80 text-stone-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          <HelpCircle className="w-4 h-4 text-stone-600" />
          <span>Tire Suas Dúvidas</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1c1917] tracking-tight uppercase mb-8 leading-tight">
          PERGUNTAS FREQUENTES
        </h2>

        <div className="space-y-3 text-left mb-10">
          {faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-2xs transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-bold text-xs sm:text-sm text-stone-900 gap-4 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-stone-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final CTA Button */}
        <div className="max-w-md mx-auto">
          <button
            onClick={onCtaClick}
            className="w-full py-4 px-6 rounded-xl font-black text-sm sm:text-base tracking-wide uppercase transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-lg hover:shadow-xl bg-amber-400 hover:bg-amber-300 text-stone-950 border-b-4 border-amber-600 hover:border-amber-500"
          >
            COMEÇAR POR R$ {config.pricePromotional}
          </button>
        </div>
      </div>
    </section>
  );
};
