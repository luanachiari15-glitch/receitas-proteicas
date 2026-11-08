import { useState } from 'react';
import { OfferConfig } from './types/offer';
import {
  initialOfferConfig,
  sampleRecipes,
  initialCategories,
  targetAudiencePoints,
  initialBonuses,
  initialFaqs,
} from './data/initialOffer';

import { HeaderAnnouncement } from './components/HeaderAnnouncement';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { RulesSection } from './components/RulesSection';
import { RecipesSection } from './components/RecipesSection';
import { CategoriesSection } from './components/CategoriesSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { BonusesSection } from './components/BonusesSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutTestModal } from './components/CheckoutTestModal';
import { PurchaseNotification } from './components/PurchaseNotification';

const STORAGE_KEY = 'receitas_proteicas_premium_config_v4';

export default function App() {
  const [config] = useState<OfferConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...initialOfferConfig, ...JSON.parse(saved) };
      }
    } catch {
      // ignore
    }
    return initialOfferConfig;
  });

  const [isCheckoutTestOpen, setIsCheckoutTestOpen] = useState(false);

  // Anchor handler: scrolls smoothly to the offer section (#checkout)
  const handleScrollToOffer = () => {
    const offerElement = document.getElementById('checkout');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#ebe4d8] text-[#1c1917] selection:bg-amber-200">
      {/* Top Announcement Bar (Red banner with OFERTA RELAMPAGO and 17m timer) */}
      <HeaderAnnouncement />

      {/* Real-time Purchase Social Proof Popup in Top-Right Corner */}
      <PurchaseNotification />

      {/* Main Responsive Page Wrapper: fluid on mobile, up to max-w-6xl on desktop */}
      <main className="w-full max-w-6xl mx-auto bg-[#faf8f4] min-h-screen shadow-2xl relative border-x border-stone-300/40 pb-16 overflow-x-hidden">
        {/* 1. Hero Section (Clean headline with Gold Metallic POBRE PREMIUM) */}
        <HeroSection config={config} onCtaClick={handleScrollToOffer} />

        {/* 2. Problem Section */}
        <ProblemSection config={config} />

        {/* 3. Rules Section */}
        <RulesSection config={config} />

        {/* 4. Recipe Showcase Section (Continuous Infinite Carousel) */}
        <RecipesSection
          recipes={sampleRecipes}
          config={config}
          onCtaClick={handleScrollToOffer}
        />

        {/* 5. Categories Section */}
        <CategoriesSection categories={initialCategories} />

        {/* 6. Target Audience Section */}
        <TargetAudienceSection
          points={targetAudiencePoints}
          onCtaClick={handleScrollToOffer}
        />

        {/* 7. Bonuses Section */}
        <BonusesSection bonuses={initialBonuses} />

        {/* 8. Main Offer / Pricing Section (ONLY place with checkout link) */}
        <PricingSection config={config} />

        {/* 9. Guarantee Section */}
        <GuaranteeSection config={config} />

        {/* 10. FAQ Section */}
        <FaqSection
          faqs={initialFaqs}
          config={config}
          onCtaClick={handleScrollToOffer}
        />

        {/* 11. Footer */}
        <Footer config={config} />
      </main>

      {/* Simulated Checkout Modal (Used when no external checkout URL is configured yet) */}
      <CheckoutTestModal
        isOpen={isCheckoutTestOpen}
        onClose={() => setIsCheckoutTestOpen(false)}
        config={config}
      />
    </div>
  );
}
