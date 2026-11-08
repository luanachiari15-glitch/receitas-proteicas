export interface RecipeItem {
  id: string;
  title: string;
  description: string;
  image: string;
  kcal: number;
  protein: string;
  carbs: string;
  fat: string;
  cost: string;
}

export interface CategoryItem {
  id: number;
  title: string;
  subtitle: string;
  count: number;
}

export interface BonusItem {
  id: number;
  badge: string;
  title: string;
  description: string;
  originalPrice: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface OfferConfig {
  topBarText: string;
  productName: string;
  headlineMain: string;
  headlineSubtitle: string;
  headlineDescription: string;
  ctaTextHero: string;
  ctaTrustText: string;
  
  // Problem section
  problemTitle: string;
  problemParagraph1: string;
  problemHighlight: string;
  problemSolution: string;
  
  // Rules section
  rulesTitle: string;
  rule1Title: string;
  rule1Desc: string;
  rule2Title: string;
  rule2Desc: string;
  rule3Title: string;
  rule3Desc: string;

  // Recipe showcase section
  recipeSectionTag: string;
  recipeSectionTitle: string;
  recipeSectionSubtitle: string;
  recipeCtaText: string;
  
  // Pricing & Checkout
  checkoutUrl: string;
  priceOriginal: string;
  pricePromotional: string;
  installmentsText: string;
  offerBadge: string;
  offerTitle: string;
  offerCtaText: string;
  checkoutTrustText: string;
  
  // Checklist items in offer box
  offerFeatures: string[];
  
  // Guarantee
  guaranteeDays: number;
  guaranteeTitle: string;
  guaranteeText: string;
  guaranteeHighlight: string;
  
  // Footer
  footerCopyright: string;
  footerDisclaimer: string;
  whatsappSupportNumber?: string;
}
