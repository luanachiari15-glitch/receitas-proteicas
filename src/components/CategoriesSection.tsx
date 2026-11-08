import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CategoryItem } from '../types/offer';

interface Props {
  categories: CategoryItem[];
}

export const CategoriesSection: React.FC<Props> = ({ categories }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show top 6 categories initially, or all 15 when expanded
  const visibleCategories = isExpanded ? categories : categories.slice(0, 6);

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-stone-300/60 bg-[#faf8f4]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1c1917] tracking-tight uppercase mb-2 leading-tight">
          15 CATEGORIAS, 10 RECEITAS EM CADA
        </h2>

        <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-xl mx-auto">
          Cada ficha traz dificuldade, tempo total, rendimento, custo por porção e proteína por porção calculados.
        </p>

        {/* Compact Responsive Grid: 1 col on mobile, 2 on sm, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
          {visibleCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white p-3 sm:p-3.5 rounded-xl border border-stone-200/90 shadow-2xs flex items-center justify-between gap-3 hover:border-emerald-300 hover:shadow-xs transition-all duration-200 animate-fade-in"
            >
              <div className="min-w-0 pr-1">
                <h3 className="font-bold text-xs sm:text-[13px] text-stone-900 leading-snug">
                  {cat.title}
                </h3>
                <p className="text-[11px] text-stone-500 mt-0.5 leading-snug line-clamp-1">
                  {cat.subtitle}
                </p>
              </div>

              <div className="shrink-0">
                <span className="inline-flex items-center justify-center w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-lg bg-emerald-700 text-white text-[11px] sm:text-xs font-black shadow-xs">
                  {cat.count}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Toggle Button */}
        <div className="mt-5 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-bold shadow-2xs transition-all active:scale-95 cursor-pointer"
          >
            <span>
              {isExpanded
                ? 'Mostrar menos categorias'
                : `Ver todas as 15 categorias (+${categories.length - 6} categorias)`}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-emerald-600" />
            ) : (
              <ChevronDown className="w-4 h-4 text-emerald-600" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
