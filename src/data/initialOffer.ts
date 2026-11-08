import { OfferConfig, RecipeItem, CategoryItem, BonusItem, FaqItem } from '../types/offer';

export const initialOfferConfig: OfferConfig = {
  topBarText: "Oferta Especial de Lançamento — R$ 29,90 só nesta página",
  productName: "Receitas Proteicas de Pobre Premium",
  headlineMain: "RECEITAS PROTEICAS DE POBRE PREMIUM",
  headlineSubtitle: "150 RECEITAS para você bater a meta de proteína todos os dias gastando pouco, com o que já tem em casa e no mercado da esquina.",
  headlineDescription: "Doces, salgados, marmitas, shakes, sorvetes e miúdos — cada receita com calorias, macros e custo por porção.",
  ctaTextHero: "QUERO AS 150 RECEITAS PREMIUM",
  ctaTrustText: "Acesso imediato  •  Pagamento único  •  7 dias de garantia",
  
  // Problem section
  problemTitle: "BATER A META DE PROTEÍNA FICOU CARO E CHATO",
  problemParagraph1: "Peito de frango grelhado com batata-doce todo dia. Whey a R$ 200 o pote. Receita 'fit' que pede pasta de amendoim integral, farinha de amêndoas e iogurte grego importado.",
  problemHighlight: "No fim do mês, ou você fura a dieta ou fura o orçamento.",
  problemSolution: "Este material resolve os dois de uma vez: proteína alta com ingrediente de mercado de bairro.",
  
  // Rules section
  rulesTitle: "TRÊS REGRAS SIMPLES EM TODAS AS 150 RECEITAS",
  rule1Title: "01 - Proteína barata primeiro",
  rule1Desc: "Ovo, coxa e sobrecoxa, leite em pó desnatado, sardinha, grão-de-bico, fígado e moela. Fontes que custam por volta de R$ 1 a R$ 3 por porção e entregam de 20g a 45g de proteína.",
  rule2Title: "02 - Textura no lugar de açúcar",
  rule2Desc: "Leite em pó, iogurte natural, cacau e banana congelada fazem o creme, o 'puxa-puxa' e o doce. É o que transforma um shake em milkshake e uma massa de caneca em brownie.",
  rule3Title: "03 - Frigideira, airfryer ou pressão",
  rule3Desc: "Nada de equipamento caro nem de duas horas de cozinha. A maioria das receitas fica pronta em até 15 minutos, com uma panela só.",

  // Recipe section
  recipeSectionTag: "8 DAS 150 RECEITAS",
  recipeSectionTitle: "VEJA O QUE VOCÊ VAI FAZER AMANHÃ",
  recipeSectionSubtitle: "Cada receita vem com calorias, proteína, carboidrato, gordura e custo médio por porção.",
  recipeCtaText: "QUERO ESSAS E AS OUTRAS 142 RECEITAS",
  
  // Pricing & Checkout
  checkoutUrl: "https://pay.cakto.com.br/ok5vtcu_1299020",
  priceOriginal: "97,00",
  pricePromotional: "29,90",
  installmentsText: "Pagamento único",
  offerBadge: "SUPER OFERTA EXCLUSIVA",
  offerTitle: "150 RECEITAS PROTEICAS DE POBRE PREMIUM",
  offerCtaText: "COMPRAR AGORA",
  checkoutTrustText: "Compra 100% Segura • Acesso Imediato",
  
  offerFeatures: [
    "Material completo com as 150 receitas premium",
    "Calorias, macros e custo por porção em cada receita",
    "Acesso vitalício + atualizações gratuitas",
    "Entrega imediata no e-mail",
    "Bônus 1 — Planner Semanal Imprimível",
    "Bônus 2 — Lista Inteligente de Substituições",
  ],
  
  // Guarantee
  guaranteeDays: 7,
  guaranteeTitle: "SEU RISCO É ZERO — 7 DIAS DE GARANTIA INCONDICIONAL",
  guaranteeText: "Você tem 7 dias completos para testar as receitas. Se não gostar do sabor de algum prato, achar o preparo complicado ou se arrepender por qualquer motivo, basta nos enviar um e-mail para receber 100% de reembolso.",
  guaranteeHighlight: "SEM PERGUNTAS • SEM ENROLAÇÃO • SEM BUROCRACIA",
  
  // Footer
  footerCopyright: "© 2025 Receitas Proteicas de Pobre Premium. Todos os direitos reservados.",
  footerDisclaimer: "Este material é educativo e não substitui acompanhamento nutricional ou médico. Resultados variam de pessoa para pessoa.",
  whatsappSupportNumber: "",
};

export const sampleRecipes: RecipeItem[] = [
  {
    id: "panqueca-banana",
    title: "Panqueca proteica de banana",
    description: "Três ingredientes, frigideira, 8 minutos. Café da manhã que sustenta até o almoço.",
    image: "/images/recipe_panqueca.webp",
    kcal: 312,
    protein: "34g proteína",
    carbs: "28g carbo",
    fat: "7g gordura",
    cost: "≈ R$ 2,10",
  },
  {
    id: "milkshake-ovomaltine",
    title: "Milkshake proteico de Ovomaltine",
    description: "Grosso de colher, sem whey. Leite em pó e banana congelada fazem o trabalho.",
    image: "/images/recipe_milkshake.webp",
    kcal: 248,
    protein: "26g proteína",
    carbs: "25g carbo",
    fat: "4g gordura",
    cost: "≈ R$ 3,40",
  },
  {
    id: "brownie-caneca",
    title: "Brownie proteico de caneca",
    description: "Dois minutos no micro-ondas. Mata a vontade de doce à noite sem sair da meta.",
    image: "/images/recipe_brownie.webp",
    kcal: 235,
    protein: "21g proteína",
    carbs: "22g carbo",
    fat: "8g gordura",
    cost: "≈ R$ 2,50",
  },
  {
    id: "sorvete-banana-cacau",
    title: "Sorvete proteico de banana com cacau",
    description: "Cremoso de verdade, sem máquina e sem creme de leite. Congela e está pronto.",
    image: "/images/recipe_sorvete.webp",
    kcal: 189,
    protein: "18g proteína",
    carbs: "24g carbo",
    fat: "3g gordura",
    cost: "≈ R$ 2,20",
  },
  {
    id: "coxinha-airfryer",
    title: "Coxinha de frango na airfryer",
    description: "Massa sem farinha de trigo, recheio de frango desfiado. Duas unidades já são refeição.",
    image: "/images/recipe_coxinha.webp",
    kcal: 274,
    protein: "31g proteína",
    carbs: "21g carbo",
    fat: "6g gordura",
    cost: "≈ R$ 3,10",
  },
  {
    id: "escondidinho-frango",
    title: "Escondidinho proteico de frango",
    description: "Rende quatro marmitas. Congela bem e esquenta sem virar borracha.",
    image: "/images/recipe_escondidinho.webp",
    kcal: 398,
    protein: "42g proteína",
    carbs: "34g carbo",
    fat: "10g gordura",
    cost: "≈ R$ 4,30",
  },
  {
    id: "figado-acebolado",
    title: "Fígado acebolado macio",
    description: "A proteína mais barata do açougue, com o truque do leite para não ficar duro nem amargo.",
    image: "/images/recipe_figado.webp",
    kcal: 285,
    protein: "36g proteína",
    carbs: "5g carbo",
    fat: "11g gordura",
    cost: "≈ R$ 1,90",
  },
  {
    id: "pate-frango",
    title: "Patê de frango com iogurte",
    description: "O potinho que salva o lanche da tarde. Dura quatro dias na geladeira.",
    image: "/images/recipe_pate.webp",
    kcal: 168,
    protein: "27g proteína",
    carbs: "3g carbo",
    fat: "4g gordura",
    cost: "≈ R$ 2,70",
  },
];

export const initialCategories: CategoryItem[] = [
  { id: 1, title: "Vitaminas, shakes e milkshakes", subtitle: "o copo que substitui o pote de whey", count: 10 },
  { id: 2, title: "Café da manhã proteico", subtitle: "começar o dia com 30 g de proteína", count: 10 },
  { id: 3, title: "Doces virais proteicos", subtitle: "os formatos que a internet já curtiu", count: 10 },
  { id: 4, title: "Sorvetes proteicos", subtitle: "sobremesa que cabe na dieta e no bolso", count: 10 },
  { id: 5, title: "Salgados e lanches proteicos", subtitle: "para quando bater a vontade de besteira", count: 10 },
  { id: 6, title: "Refeições e marmitas de alta proteína", subtitle: "o almoço que resolve 40 g em uma vez", count: 10 },
  { id: 7, title: "Miúdos: proteína de centavos", subtitle: "a maior margem de proteína por real do livro", count: 10 },
  { id: 8, title: "Ovos: 10 jeitos de comer", subtitle: "a proteína mais barata do Brasil sem enjoar", count: 10 },
  { id: 9, title: "Sardinha e atum de lata", subtitle: "a despensa que salva o dia sem cozinhar", count: 10 },
  { id: 10, title: "Frango de corte barato", subtitle: "sobrecoxa custa metade do peito e tem mais sabor", count: 10 },
  { id: 11, title: "Pão e leguminosas", subtitle: "rende muito com 20 gramas de proteína", count: 10 },
  { id: 12, title: "Pudins e sobremesas geladas", subtitle: "o pote que segura a fome da noite", count: 10 },
  { id: 13, title: "Pães, bolos e pão de queijo", subtitle: "clássicos que cabem na meta", count: 10 },
  { id: 14, title: "Bebidas quentes proteicas", subtitle: "o café da tarde que conta na meta", count: 10 },
  { id: 15, title: "Potinhos de levar", subtitle: "proteína fora de casa sem jogo de suplemento", count: 10 },
];

export const targetAudiencePoints: string[] = [
  "você treina, quer proteína alta e o salário não acompanha o preço do frango",
  "você já desistiu de dieta por enjoar da mesma comida",
  "você quer doce, salgado e sorvete sem estourar as calorias do dia",
  "você cozinha pouco e precisa de passo a passo curto",
  "você quer saber exatamente quantos gramas de proteína tem no prato",
];

export const initialBonuses: BonusItem[] = [
  {
    id: 1,
    badge: "BÔNUS 1",
    title: "Planner Semanal Imprimível",
    description: "Imprime e cola na geladeira: café, almoço, jantar e lanche dos sete dias em uma folha. Você decide a semana no domingo e para de improvisar no meio da correria.",
    originalPrice: "R$ 39,90",
    image: "/images/bonus_planner.webp",
  },
  {
    id: 2,
    badge: "BÔNUS 2",
    title: "Lista Inteligente de Substituições",
    description: "Faltou whey, iogurte grego ou pasta de amendoim? A lista mostra o que usar no lugar, na quantidade certa, sem mudar a proteína da receita.",
    originalPrice: "R$ 24,90",
    image: "/images/bonus_substituicoes.webp",
  },
];

export const initialFaqs: FaqItem[] = [
  {
    question: "Como recebo as receitas?",
    answer: "Logo após a confirmação do pagamento você recebe o acesso por e-mail. Abre no celular, no computador ou imprime.",
  },
  {
    question: "Preciso de whey ou suplemento?",
    answer: "Não. Todas as receitas fecham a proteína com alimento de mercado. Quando o whey aparece, sempre há a versão sem ele.",
  },
  {
    question: "Os macros são confiáveis?",
    answer: "Cada receita traz calorias, proteína, carboidrato e gordura por porção, calculados a partir das quantidades exatas usadas no preparo.",
  },
  {
    question: "Serve para quem quer emagrecer e para quem quer ganhar massa?",
    answer: "Sim. Com os macros na mão você escolhe as receitas mais leves para déficit ou as mais calóricas para superavit.",
  },
  {
    question: "Preciso de airfryer?",
    answer: "Ajuda, mas não é obrigatória. As receitas de airfryer trazem a versão de forno ou frigideira.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer: "Para sempre. Você paga uma vez e consulta quando quiser.",
  },
];
