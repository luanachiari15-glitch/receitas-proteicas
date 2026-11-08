import React from 'react';
import { Sparkles } from 'lucide-react';
import { RecipeItem, OfferConfig } from '../types/offer';

interface Props {
  recipes: RecipeItem[];
  config: OfferConfig;
  onCtaClick: () => void;
}

export const RecipesSection: React.FC<Props> = ({ recipes, config, onCtaClick }) => {
  // Duplicate recipes to create a seamless infinite continuous loop
  const duplicatedRecipes = [...recipes, ...recipes];

  return (
    <section className="py-12 sm:py-16 border-t border-stone-300/60 bg-[#f4f0e6] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1c1917] tracking-tight uppercase mb-2 leading-tight">
          {config.recipeSectionTitle}
        </h2>

        <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto">
          {config.recipeSectionSubtitle}
        </p>
      </div>

      {/* Infinite Continuous Sliding Carousel Track */}
      <div className="relative w-full overflow-hidden py-4 select-none group">
        {/* Subtle Edge Blur Scrims for continuous infinite feel */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#f4f0e6] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#f4f0e6] to-transparent z-10" />

        {/* Marquee Track */}
        <div className="animate-infinite-scroll flex gap-5 px-4">
          {duplicatedRecipes.map((recipe, index) => (
            <div
              key={`${recipe.id}-${index}`}
              className="w-[270px] sm:w-[310px] shrink-0 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-stone-200/90 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Food Image */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100 relative">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  {/* Floating Cost Tag on top of photo */}
                  <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-sm">
                    {recipe.cost}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 text-left">
                  <h3 className="font-extrabold text-sm sm:text-base text-stone-900 mb-1 line-clamp-1">
                    {recipe.title}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed mb-4 min-h-[36px] line-clamp-2">
                    {recipe.description}
                  </p>

                  {/* Macros Row */}
                  <div className="grid grid-cols-2 gap-1.5 text-[11px] font-semibold text-stone-700">
                    <span className="bg-stone-50 px-2 py-1 rounded-md border border-stone-200 text-center">
                      {recipe.kcal} kcal
                    </span>
                    <span className="bg-emerald-600 text-white px-2 py-1 rounded-md font-bold text-center shadow-xs">
                      {recipe.protein}
                    </span>
                    <span className="bg-stone-50 px-2 py-1 rounded-md border border-stone-200 text-center">
                      {recipe.carbs}
                    </span>
                    <span className="bg-stone-50 px-2 py-1 rounded-md border border-stone-200 text-center">
                      {recipe.fat}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom footer tag */}
              <div className="px-4 py-2.5 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                <span className="flex items-center gap-1 font-medium">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  Pronto em 15 min
                </span>
                <span className="text-emerald-700 font-bold">150 no livro</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button below carousel */}
      <div className="mt-8 max-w-md mx-auto px-4 text-center">
        <button
          onClick={onCtaClick}
          className="w-full py-4 px-6 rounded-xl font-black text-sm sm:text-base tracking-wide uppercase transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-lg hover:shadow-xl bg-amber-400 hover:bg-amber-300 text-stone-950 border-b-4 border-amber-600 hover:border-amber-500"
        >
          {config.recipeCtaText}
        </button>
      </div>
    </section>
  );
};
