/* ==========================================
   PORTFOLIO INTERACTIVE LOGIC
   Angelo Vaz: Product & Visual Designer
   ========================================== */

// CASE STUDY DATABASE
const CASE_STUDIES = {
  "squad-fitness": {
    title: "Squad Fitness Boutique",
    subtitle: "Brand identity and visual direction for a boutique gym in Porto, built to look as tough as the training.",
    client: "Squad Fitness Boutique / Porto",
    role: "Brand Designer & Visual Director",
    year: "2024",
    deliverables: "Logo & Stencil Wordmark, Window Graphics, Lightbox Signage, Apparel, Photo Direction",
    url: "https://squadporto.com/pt/",
    images: [
      "assets/squad_lightbox_sign.jpg",
      "assets/squad_make_reps.jpg",
      "assets/squad_test_your_limits.jpg",
      "assets/squad_tshirt.jpg"
    ],
    portrait: true,
    embedType: "carousel",
    problem: "Squad wanted to stand apart from glossy chain gyms: a small, community-driven boutique where the brand feels raw, honest and a little military in its discipline.",
    solution: "A stencil wordmark locked inside a bold rectangular frame, inspired by equipment crates and field markings, rolled out across window vinyls (\"Test Your Limits\", \"Make Reps Not Selfies\"), a backlit lightbox sign and training apparel. Moody, desaturated photography with copper accents keeps every touchpoint in the same gritty register.",
    colors: [
      { hex: "#0E0E0E", name: "Iron Black" },
      { hex: "#F2F2F2", name: "Chalk White" },
      { hex: "#B5704A", name: "Copper" },
      { hex: "#5A5A5A", name: "Concrete Grey" }
    ],
    typographies: ["Stencil Display Sans", "Condensed Grotesk Caps", "Hand-drawn Accent Caps"]
  },
  "toscano-ristorante": {
    title: "Toscano Ristorante",
    subtitle: "Editorial poster and social visuals for an Italian restaurant, cooking since 1992.",
    client: "Toscano Ristorante",
    role: "Visual & Brand Designer",
    year: "2026",
    deliverables: "Poster Design, Social Media Visuals, Stacked Wordmark Lockup, Art Direction",
    images: [
      "assets/toscano_poster.jpg"
    ],
    embedType: "carousel",
    problem: "Restaurant marketing often defaults to bright, busy food photography. Toscano needed visuals that felt as considered as its kitchen: warm, classic and a little cinematic.",
    solution: "A dark, film-grain composition that lets a single forkful of spaghetti carry the whole frame, paired with an elegant high-contrast serif \"Buon Appetito!\" and a stacked TOS / CA / NO wordmark with a discreet \"Since 1992\" seal. A faint green arc nods to the Italian flag without spelling it out.",
    colors: [
      { hex: "#1C1C1C", name: "Charcoal Grain" },
      { hex: "#F2EEE8", name: "Cream Serif" },
      { hex: "#1F4A2A", name: "Basil Green" },
      { hex: "#C8642D", name: "Pomodoro" }
    ],
    typographies: ["High-Contrast Display Serif", "Stacked Wordmark"]
  },
  "dirty-tattoos": {
    title: "Dirty Tattoos",
    subtitle: "A hand-lettered identity for a tattoo studio, with a brush script that feels drawn by the same hand that holds the needle.",
    client: "Dirty Tattoos / Tattoo Studio",
    role: "Brand & Lettering Designer",
    year: "2021",
    deliverables: "Logotype, Custom Script Lettering, Badge Lockup, Brand Applications",
    images: [
      "assets/dirty_tattoos_logo.jpg"
    ],
    embedType: "carousel",
    problem: "Tattoo studios live or die by their craft, and generic fonts make a studio look like every other shop on the street. The brand needed to feel handmade, confident and a little rebellious.",
    solution: "A custom brush-script wordmark with a sweeping underline swash that ties \"Dirty Tattoos\" into one gesture, framed by a condensed, slightly irregular \"Since 2021 / Tattoo Studio\" lockup that echoes old-school flash lettering.",
    colors: [
      { hex: "#1A1A1A", name: "Ink Black" },
      { hex: "#FFFFFF", name: "Skin White" }
    ],
    typographies: ["Custom Brush Script", "Condensed Display Caps"]
  },
  "sportiz-app": {
    title: "Sportiz",
    subtitle: "The ultimate sports quiz challenge: answer trivia, unlock collectible achievements, keep your streak alive and climb the leaderboard.",
    client: "Sportiz",
    role: "Product Designer",
    year: "2026",
    deliverables: "Mobile App UI, Quiz Flows, Achievement Cards, Leaderboard, App Store Screenshots",
    video: "assets/sportiz.mp4",
    images: [
      "assets/sportiz_1.jpg",
      "assets/sportiz_2.jpg",
      "assets/sportiz_3.jpg",
      "assets/sportiz_4.jpg",
      "assets/sportiz_5.jpg"
    ],
    phoneScreens: true,
    embedType: "carousel",
    problem: "Sports trivia apps tend to feel like plain multiple-choice forms, with little reason to come back once the novelty of the first quiz wears off.",
    solution: "A dark, stadium-lit interface with neon green accents that turns every quiz into progress: collectible player cards for each finished quiz, daily streaks, a global ranking and a profile level that grows with every right answer.",
    colors: [
      { hex: "#12603B", name: "Pitch Green" },
      { hex: "#1DE57E", name: "Neon Green" },
      { hex: "#111111", name: "Stadium Black" },
      { hex: "#FFFFFF", name: "White" }
    ],
    typographies: []
  },
  "pickswise": {
    title: "Pickswise",
    subtitle: "Expert sports picks, predictions and betting offers for US bettors, across the mobile app and the website.",
    client: "Pickswise / Spotlight Sports Group",
    role: "Product & Web Designer",
    year: "2026",
    deliverables: "Mobile App UI, Homepage, Expert Pick Cards, Odds Comparison Rows, Exclusive Offers & Promo Codes",
    url: "https://www.pickswise.com/",
    images: [
      "assets/pickswise_app.jpg"
    ],
    video: "assets/pickswise.mp4",
    imagesFirst: true,
    embedType: "carousel",
    problem: "Bettors want a quick, trustworthy answer to \"who should I back today?\", but picks, odds and sportsbook offers usually live on separate pages and compete for attention with ads.",
    solution: "A homepage built around expert pick cards: each one shows the analyst, matchup, pick type and a short rationale, with live odds from multiple sportsbooks right underneath. A sidebar groups today's picks by sport and surfaces exclusive offers and promo codes.",
    colors: [
      { hex: "#061F2F", name: "Deep Navy" },
      { hex: "#00A3E0", name: "Pick Blue" },
      { hex: "#FFB80C", name: "Bonus Gold" },
      { hex: "#F6F6F6", name: "Canvas" }
    ],
    typographies: []
  },
  "promoradar": {
    title: "Promoradar",
    subtitle: "Compare the best sportsbook bonuses in Brazil, with 50+ bookmakers ranked and updated daily.",
    client: "Promoradar / Clever Advertising Group",
    role: "Product & Web Designer",
    year: "2026",
    deliverables: "Landing Page, Bonus Comparison Cards, Promotions Ranking Table, Alerts Sign-up",
    video: "assets/promoradar.mp4",
    embedType: "carousel",
    problem: "Bettors in Brazil jump between dozens of sportsbooks to work out which welcome bonus, freebet or odds boost is actually worth it, while the real terms (rollover, minimum deposit, validity) are buried in fine print.",
    solution: "A comparison site that puts the three best offers up front, lets users filter by deposit amount and bonus type, and lays out every promotion in a ranked table with rollover, minimum deposit and validity side by side, plus free alerts for new offers.",
    colors: [
      { hex: "#4E3FFF", name: "Radar Violet" },
      { hex: "#111827", name: "Ink" },
      { hex: "#F5F5FA", name: "Soft Surface" },
      { hex: "#FFFFFF", name: "White" }
    ],
    typographies: []
  },
  "social-proof-notifications": {
    title: "Social Proof Notifications",
    subtitle: "Testing interactive social proof & e-commerce notification micro-animations.",
    client: "Daily Creative Challenge / Personal",
    role: "Interaction Designer",
    year: "2020",
    deliverables: "Micro-interactions, Motion Prototype, Social Proof UI",
    video: "assets/XD_DCC_Day 3 - Social Proof_v1.mp4",
    embedType: "video",
    problem: "Exploration Concept: Created in 2020 as part of an Adobe XD Daily Creative Challenge exploring how subtle, high-trust notification cards can increase user conversion without interrupting the browsing experience.",
    solution: "Designed smooth slide-in notification states with live social proof badges, clean avatar highlights, and subtle dismissal gestures.",
    colors: [
      { hex: "#3B82F6", name: "Notification Blue" },
      { hex: "#10B981", name: "Live Success Green" },
      { hex: "#0F172A", name: "Slate Dark" },
      { hex: "#FFFFFF", name: "Card White" }
    ],
    typographies: ["SF Pro Text", "Inter Semi-Bold"]
  },
  "cave-wine": {
    title: "CAVE",
    subtitle: "A modern, high-contrast visual identity and brand motion film for CAVE.",
    client: "CAVE / Personal",
    role: "Visual & Motion Designer",
    year: "2026",
    deliverables: "Brand Identity, Motion Reel, Visual Guidelines, Packaging Concepts",
    video: "assets/CAVE_movie.mp4",
    embedType: "video",
    problem: "Developing an impactful, atmospheric visual identity and motion reel that captures the raw texture, depth, and elegance of CAVE.",
    solution: "Created a high-contrast typographic system paired with a cinematic motion reel showcasing brand motion dynamics, tactile material finishes, and dark minimalist aesthetics.",
    colors: [
      { hex: "#0A0A0A", name: "Cave Dark" },
      { hex: "#FFFFFF", name: "Pure Light" },
      { hex: "#262626", name: "Charcoal Texture" }
    ],
    typographies: ["Custom Serif Display", "Inter Medium"]
  },
  "snapchat-redesign": {
    title: "Snapchat Redesign",
    subtitle: "A conceptual UI & interaction exploration reimagining Snapchat's core navigation, Snap Map, and social discovery feeds.",
    client: "Personal Concept (Just for fun)",
    role: "Product Designer",
    year: "2020",
    deliverables: "Mobile UI Design, Snap Map UI, Discovery Feeds, Camera Filters",
    image: "assets/Snapchat_Thumb03.jpg",
    images: [
      "assets/Snapchat_Thumb03.jpg",
      "assets/Snapchat_Thumb01.jpg",
      "assets/Snapchat_Thumb02.jpg",
      "assets/Snapchat_Thumb04.jpg"
    ],
    embedType: "carousel",
    problem: "Designed in 2020 as a personal 'just for fun' concept exploring how Snapchat could simplify its navigation architecture, unify Snap Map location sharing, and create cleaner, higher-contrast social discovery feeds.",
    solution: "Reimagined bottom navigation bar with a prominent central snap action button, streamlined Quick Add & Discover feeds with vibrant citrus yellow accents (#FFFC00), and a modernized touch ID login flow.",
    colors: [
      { hex: "#FFFC00", name: "Snapchat Yellow" },
      { hex: "#000000", name: "Midnight Black" },
      { hex: "#F3F4F6", name: "Light Canvas Gray" }
    ],
    typographies: ["SF Pro Display", "Avenir Next Rounded"]
  },
  "habit-tracker": {
    title: "Habit Tracker App",
    subtitle: "A minimalist daily calendar and fitness tracking mobile companion.",
    client: "Clever Advertising / Personal",
    role: "Lead UI/UX Designer",
    year: "2025",
    deliverables: "Mobile App Flow, Calendar Components, Progress Curves, Data Visualization",
    image: "assets/habit_tracker.png",
    embedType: "image",
    problem: "Modern productivity apps feel overwhelming, with clunky schedule layouts that fail to help users coordinate health metrics with work calendars.",
    solution: "Designed a clean, light-blue interface showing both scheduling and biometric progress. Uses smooth curves and highly tactile card states for maximum visual comfort.",
    colors: [
      { hex: "#0F172A", name: "Slate Navy" },
      { hex: "#38BDF8", name: "Focus Blue" },
      { hex: "#FFFFFF", name: "Surface White" },
      { hex: "#F8FAFC", name: "Off-White Soft" }
    ],
    typographies: ["Inter Regular (Metrics)", "Inter Medium (Headers)", "System-Sans Slim"]
  },
  "fintrust-audit": {
    title: "FinTrust Audit",
    subtitle: "An elegant, sensory digital brand identity and audit consulting system.",
    client: "FinTrust Group / Corporate",
    role: "Lead Visual Designer",
    year: "2026",
    deliverables: "Editorial Typography, Web Layouts, Brand Guidelines, Visual Assets",
    image: "assets/fintrust_audit.png",
    embedType: "image",
    problem: "Financial consulting platforms usually feel cold, rigid, and text-heavy, lacking an editorial rhythm that inspires client trust and engagement.",
    solution: "Created an organic, high-end editorial identity with soft cream backgrounds, bespoke geometric line patterns, and an outstanding typographic system.",
    colors: [
      { hex: "#1A1A1A", name: "Primary Dark" },
      { hex: "#C29A63", name: "Accent Bronze" },
      { hex: "#FAF8F5", name: "Soft Linen" },
      { hex: "#FFFFFF", name: "Pure White" }
    ],
    typographies: ["Editorial Serif Regular", "Inter Sans-Serif", "Sub-Caption Slim"]
  },
  "dashboard-task": {
    title: "Dashboard Task Manager",
    subtitle: "A modular, drag-and-drop web analytics panel for task management.",
    client: "Clever Advertising Group",
    role: "Product Designer & Front-End Developer",
    year: "2025",
    deliverables: "Widget System, Flexible Responsive Grid Layouts, Task Tracking Panel",
    image: "assets/dashboard_task_manager.png",
    embedType: "image",
    problem: "Enterprise teams often experience dashboard fatigue, getting lost in overly dense layouts with no visual hierarchy or personalized panels.",
    solution: "Engineered a modular SaaS analytics dashboard featuring clean card separations, generous whitespace margins, and a beautiful typography system.",
    colors: [
      { hex: "#090D16", name: "Slate Dark" },
      { hex: "#10B981", name: "Success Green" },
      { hex: "#FCFCFC", name: "Canvas Matte" },
      { hex: "#FFFFFF", name: "Card White" }
    ],
    typographies: ["Inter Medium (KPIs)", "Inter Regular (Labels)", "Caption Mono"]
  },
  "smartwatch-tracker": {
    title: "Smartwatch Time Tracker",
    subtitle: "Sleek, high-contrast time-tracking widgets for active smartwatch interfaces.",
    client: "Fitness Wearables Inc.",
    role: "Visual & Interaction Designer",
    year: "2026",
    deliverables: "Watch Face Widgets, Telemetry Indicators, Biometric Alert States",
    image: "assets/wearable_watch.png",
    embedType: "image",
    problem: "Time-tracking and performance indicators are often unreadable during fast activities, with crowded information layouts that distract athletes.",
    solution: "Designed dark high-contrast smartwatch screens showing large circular indicators, minimal numerical metrics, and neon accent alerts for instant readability.",
    colors: [
      { hex: "#000000", name: "Absolute Black" },
      { hex: "#E11D48", name: "Active Rose (Accent)" },
      { hex: "#FFFFFF", name: "Primary Metrics" },
      { hex: "#1F2937", name: "Widget Gray" }
    ],
    typographies: ["Inter Bold (Numerics)", "Inter Medium (Activity)", "System-Mono Time"]
  },
  "crypto-wallet-dashboard": {
    title: "Crypto Wallet Dashboard",
    subtitle: "A high-fidelity digital wallet interface with sleek data visualization and exchange tools.",
    client: "Fintech Platform / Personal",
    role: "Senior Product Designer",
    year: "2026",
    deliverables: "Mobile Dashboard Flow, Biometric Balances, Currency Conversion UI, Custom Analytics Charts",
    image: "assets/crypto_wallet_screens.jpg",
    images: [
      "assets/crypto_wallet_screens.jpg",
      "assets/crypto_wallet_composition.jpg",
      "assets/crypto_wallet_dashboard.jpg"
    ],
    embedType: "carousel",
    problem: "Cryptocurrency wallets are notoriously complex, cluttered with confusing exchange data, which compromises security and discourages daily financial micro-management.",
    solution: "Designed a clean, light-grey brutalist UI with blue glassmorphic accents, focusing on essential balances, modular wallet-cards, and high-fidelity currency converting toggles.",
    colors: [
      { hex: "#1A49E6", name: "Electric Blue" },
      { hex: "#EC4899", name: "Neon Rose" },
      { hex: "#FFFFFF", name: "Card White" },
      { hex: "#EBECEF", name: "Linen Grey" }
    ],
    typographies: ["San Francisco Bold", "SF Pro Text", "System Mono"]
  },
  "gravity-branding": {
    title: "Gravity Fly Fitness",
    subtitle: "A modern, high-energy typographic brand identity and system for an aerial fitness studio.",
    client: "Gravity Studio / Porto",
    role: "Brand & Identity Designer",
    year: "2026",
    deliverables: "Logo Design, Monogram Signature, Social Collaterals, Custom Brand Guidelines",
    url: "https://gravityflyfitness.pt/",
    images: [
      "assets/gravity_branding_logo.png",
      "assets/gravity_branding_card.png"
    ],
    embedType: "carousel",
    problem: "Aerial fitness studios usually lack a professional, energetic brand mark, relying on standard generic stock graphics that fail to communicate dynamic movement and structural safety.",
    solution: "Developed a premium modernist visual identity. Used custom thick rounded typography with an elevated dot on the 'i' to symbolize vertical suspension and anti-gravity movement, balanced with a bold, high-contrast royal blue and turquoise palette.",
    colors: [
      { hex: "#1A49E6", name: "Gravity Blue" },
      { hex: "#5EEAD4", name: "Suspension Aqua" },
      { hex: "#FFFFFF", name: "Solid White" }
    ],
    typographies: ["Custom Modern Geometric Sans", "SF Pro Text", "System Mono"]
  },
  "polycord-app": {
    title: "Polycord.io",
    subtitle: "The fastest execution layer to trade on Polymarket directly from Discord.",
    client: "Polycord / Web3",
    role: "Lead UI/UX & Brand Designer",
    year: "2026",
    deliverables: "Web Landing Page, Discord Bot Trading UI, Brand Identity, Real-Time Odds Dashboard",
    url: "https://polycord.io",
    images: [
      "assets/polycord_web.jpg",
      "assets/polycord_icon.png"
    ],
    embedType: "carousel",
    problem: "Traders on Polymarket currently have to navigate away from their active Discord communities and group chats to execute prediction market positions, creating friction and delay.",
    solution: "Designed a frictionless execution layer allowing users to track real-time odds, manage portfolio positions, and trade directly within Discord servers, paired with a high-contrast futuristic web landing page.",
    colors: [
      { hex: "#1A49E6", name: "Electric Blue" },
      { hex: "#030712", name: "Deep Space Black" },
      { hex: "#FFFFFF", name: "Pure White" }
    ],
    typographies: ["San Francisco Display", "Inter Bold", "JetBrains Mono"]
  },
  "dreampills-brand": {
    title: "Dream Pills",
    subtitle: "A playful, vibrant packaging & brand identity system for custom candy gifting.",
    client: "Dream Pills / Portugal",
    role: "Brand & Packaging Designer",
    year: "2026",
    deliverables: "Visual Identity, Bottle Packaging Design, Custom Label Typography, E-Commerce Strategy",
    url: "https://dreampills.pt",
    images: [
      "assets/dreampills_bottle.png"
    ],
    embedType: "carousel",
    problem: "Traditional confectionery packaging relies on generic plastic pouches that lack emotional connection, gift appeal, and modern editorial shelf-presence.",
    solution: "Designed a clean, pharmaceutical-inspired candy bottle concept ('Dream Pills'). Features crisp white labels, playful cyan typography ('Indicado para partilhar com os amigos!'), and transparent packaging highlighting the vibrant colors of the sweets inside.",
    colors: [
      { hex: "#00B4D8", name: "Dream Cyan" },
      { hex: "#FFFFFF", name: "Pure White" },
      { hex: "#111827", name: "Deep Charcoal" }
    ],
    typographies: ["Inter Bold", "SF Pro Text", "System Mono"]
  },
  "maze-branding": {
    title: "Maze Legal",
    subtitle: "A modern, seed-stage brand identity and protocol design system for legal-tech innovation.",
    client: "Maze Legal / Porto",
    role: "Brand & Visual Identity Designer",
    year: "2026",
    deliverables: "Brand Identity, Protocol UI Cards, Stationery Mockups, Tactile Print System",
    images: [
      "assets/maze_web_hero.png",
      "assets/maze_protocol_cards.png",
      "assets/maze_stationery_mockup.png",
      "assets/maze_business_cards.jpg"
    ],
    embedType: "carousel",
    problem: "Legal technology platforms often struggle to project both corporate trust and modern protocol innovation, relying on traditional conservative navy aesthetics that feel rigid.",
    solution: "Created a distinct deep forest green brand identity featuring custom geometric line patterns, tactile paper textures ('seed your future'), and modular protocol card UI blocks ('Unleash your protocol potential').",
    colors: [
      { hex: "#064E3B", name: "Deep Forest Green" },
      { hex: "#10B981", name: "Emerald Accent" },
      { hex: "#F3F4F6", name: "Soft Paper Grey" }
    ],
    typographies: ["Custom Geometric Sans", "SF Pro Text", "System Mono"]
  },
  "betty-redesign": {
    title: "Betty Redesign",
    subtitle: "A redesign of the Betty app: shout goaaaaaal before everyone else, with live scores, smart forecasts and odds side by side.",
    client: "Betty Sports",
    role: "Product Designer",
    year: "2026",
    deliverables: "App Redesign, Home & Fixtures, Match Dashboard, Odds Comparison, Light & Dark Mode",
    images: [
      "assets/betty_screen_home_dark.webp",
      "assets/betty_screen_match.webp",
      "assets/betty_screen_home_light.webp"
    ],
    phoneScreens: true,
    embedType: "carousel",
    problem: "The original Betty app crammed fixtures, odds and promos into dense lists. Fans had to dig to see what mattered right now: which games are on today, how they are going, and where the value is.",
    solution: "A calmer, bolder layout built around a date strip and a single hero card per day, a match dashboard that turns stats into quick reads (likely outcome, expected goals, a \"Safe\" signal) and a clean 1x2 odds table across bookmakers. Every screen ships in light and dark mode.",
    colors: [
      { hex: "#0A1AFF", name: "Betty Blue" },
      { hex: "#12131C", name: "Night Pitch" },
      { hex: "#E3E3FB", name: "Lavender Card" },
      { hex: "#2BD45B", name: "Safe Green" }
    ],
    typographies: ["Inter Display Bold", "Inter Regular"]
  },
  "betty-app": {
    title: "Betty",
    subtitle: "Shout goaaaaaal before everyone else with ultra-fast real-time sports tracking.",
    client: "Betty Sports / Personal",
    role: "Lead UI/UX & Mobile Product Designer",
    year: "2026",
    deliverables: "Mobile App Flow, Live Ticker Components, Ultra-Low Latency Scoreboard UI, Brand Identity",
    images: [
      "assets/betty_app_icon.png",
      "assets/betty_app_screens.png"
    ],
    embedType: "carousel",
    problem: "Standard sports betting and live score applications suffer from noticeable broadcast delays, cluttering the interface with aggressive advertisements instead of real-time match momentum.",
    solution: "Designed a high-contrast electric blue iOS mobile experience featuring dark/light mode toggles, instant live goal alerts, clean expected goals (xG) telemetries, and an intuitive daily kick-off calendar.",
    colors: [
      { hex: "#0038FF", name: "Electric Betty Blue" },
      { hex: "#0F172A", name: "Night Pitch Dark" },
      { hex: "#FFFFFF", name: "Stadium White" }
    ],
    typographies: ["San Francisco Bold", "SF Pro Text", "System Mono"]
  },
  "lemonday-app": {
    title: "Lemonday",
    subtitle: "Your daily dose of news, freshly squeezed by AI.",
    client: "Lemonday App / Personal",
    role: "Lead UI/UX & AI Product Designer",
    year: "2026",
    deliverables: "Mobile App Flow, AI News Summarization Engine, Editorial Typography, Web Landing Page",
    url: "https://lemonday.app/",
    video: "assets/lemonday.webm",
    images: [
      "assets/lemonday_fullscreen.png"
    ],
    embedType: "carousel",
    problem: "Modern news feeds are polluted with clickbait headlines, sensationalism, and overwhelming text walls that cause reader fatigue and cognitive overload.",
    solution: "Designed a refreshing, AI-curated news experience ('freshly squeezed by AI'). Features intelligent bullet-point summaries, smooth card animations, vibrant citrus yellow accents, and clean editorial typography.",
    colors: [
      { hex: "#FACC15", name: "Lemon Citrus Yellow" },
      { hex: "#0F172A", name: "Night Slate" },
      { hex: "#FFFFFF", name: "Paper White" }
    ],
    typographies: ["Figtree Semi-Bold", "SF Pro Text", "System Mono"]
  },
  "book-paul-arden": {
    title: "It's Not How Good You Are, It's How Good You Want To Be",
    subtitle: "The world's best-selling book by Paul Arden: A pocket guide to making the most of yourself.",
    client: "Paul Arden",
    role: "Creative Philosophy & Advertising",
    year: "2003",
    deliverables: "Phaidon Press, Creative Thinking, Self-Inspiration",
    url: "https://www.amazon.com/Its-Not-How-Good-Want/dp/0714843377",
    images: [
      "assets/book_paul_arden.jpg"
    ],
    embedType: "carousel",
    problem: "Former Saatchi & Saatchi executive creative director Paul Arden offers quirky, witty, and punchy insights on how to solve problems, communicate ideas, and make the impossible possible.",
    solution: "A timeless, fast-paced handbook for designers and creative thinkers. It challenges conventional wisdom and encourages taking bold risks, embracing failure, and striving for excellence.",
    colors: [
      { hex: "#FFFFFF", name: "Paper White" },
      { hex: "#111827", name: "Ink Black" },
      { hex: "#EAB308", name: "Gold Accent" }
    ],
    typographies: ["Compact Sans Bold", "Phaidon Serif", "System Mono"]
  },
  "book-hooked": {
    title: "Hooked: How to Build Habit-Forming Products",
    subtitle: "An essential guide to understanding how technologies engage us through the 4-step Hook Model.",
    client: "Nir Eyal (with Ryan Hoover)",
    role: "Behavioral Design & Product Psychology",
    year: "2014",
    deliverables: "The Hook Model, User Engagement Frameworks, Product Retention Strategy",
    url: "https://www.amazon.com/Hooked-How-Build-Habit-Forming-Products/dp/1591847788",
    images: [
      "assets/book_hooked.jpg"
    ],
    embedType: "carousel",
    problem: "Nir Eyal breaks down the four-step process (Trigger, Action, Variable Reward, Investment) behind the products we use daily, explaining why some digital experiences successfully capture user habits while others fail.",
    solution: "An indispensable playbook for product designers and software founders. It provides actionable frameworks for crafting subtle user loops, driving organic retention, and building ethically engaging software experiences.",
    colors: [
      { hex: "#EAB308", name: "Citrus Yellow" },
      { hex: "#111827", name: "Ink Charcoal" },
      { hex: "#FFFFFF", name: "Pure White" }
    ],
    typographies: ["Inter Bold", "SF Pro Text", "System Mono"]
  }
};

// ==========================================
// LAYOUT CONSTANTS
// ==========================================
const SCROLL_COLLAPSE_AT = 100;
// Per-column scroll offset: positive = column lags behind (slower), negative = runs ahead (faster).
const COLUMN_SPEEDS = [0, 0.14, -0.06, 0.2, 0.08];
const PARALLAX_EASE = 0.12;
const canHover = window.matchMedia("(hover: hover)").matches;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ARROW_ICON = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H5.5M12 4V10.5" stroke="#000" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const columnCount = (width) => {
  if (width >= 1880) return 5;
  if (width >= 1280) return 4;
  if (width >= 920) return 3;
  if (width >= 768) return 2;
  return 1;
};

const escapeHtml = (str) => String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// ==========================================
// UI SOUNDS — tiny synthesized clicks (Web Audio, no audio files)
// Each sound is a few millisecond-long layers: filtered noise for the "tick",
// plus short oscillator sweeps for the body. Muting is remembered per visitor.
// ==========================================
const SOUND_KEY = "av-sound";
const SOUNDS = {
  press: [
    { noise: true, filter: 2400, q: 1, decay: 0.006, gain: 0.12 },
    { type: "triangle", from: 540, to: 420, decay: 0.035, gain: 0.6 },
    { type: "sine", from: 1250, to: 900, fm: [0.5, 30], decay: 0.018, gain: 0.2 },
  ],
  select: [
    { noise: true, filter: 3200, q: 1, decay: 0.004, gain: 0.08 },
    { type: "sine", from: 880, to: 1060, decay: 0.045, gain: 0.4 },
  ],
  open: [{ type: "sine", from: 440, to: 780, attack: 0.002, decay: 0.085, gain: 0.34 }],
  close: [{ type: "sine", from: 760, to: 380, attack: 0.002, decay: 0.075, gain: 0.34 }],
  toggleOn: [
    { type: "sine", from: 540, decay: 0.06, gain: 0.3 },
    { type: "sine", from: 780, decay: 0.06, gain: 0.3, delay: 0.03 },
  ],
  toggleOff: [
    { type: "sine", from: 640, decay: 0.055, gain: 0.3 },
    { type: "sine", from: 420, decay: 0.055, gain: 0.3, delay: 0.03 },
  ],
  success: [
    { type: "sine", from: 523, decay: 0.28, gain: 0.14 },
    { type: "sine", from: 659, decay: 0.26, gain: 0.12, delay: 0.07 },
    { type: "sine", from: 784, to: 880, decay: 0.3, gain: 0.13, delay: 0.14 },
  ],
};

const sfx = (() => {
  let ctx = null;
  let master = null;
  let noiseBuffer = null;
  let enabled = true;
  try { enabled = localStorage.getItem(SOUND_KEY) !== "off"; } catch { /* storage blocked */ }

  const ensure = () => {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ctx) {
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.35;
      master.connect(ctx.destination);
      noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.1), ctx.sampleRate);
      const data = noiseBuffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  };

  const layer = (l, t0) => {
    const t = t0 + (l.delay || 0);
    const attack = l.attack || 0.001;
    const end = t + attack + l.decay;
    const amp = ctx.createGain();
    amp.gain.setValueAtTime(0.0001, t);
    amp.gain.exponentialRampToValueAtTime(l.gain, t + attack);
    amp.gain.exponentialRampToValueAtTime(0.0001, end);
    amp.connect(master);

    let src;
    if (l.noise) {
      src = ctx.createBufferSource();
      src.buffer = noiseBuffer;
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = l.filter;
      bp.Q.value = l.q || 1;
      src.connect(bp);
      bp.connect(amp);
    } else {
      src = ctx.createOscillator();
      src.type = l.type;
      src.frequency.setValueAtTime(l.from, t);
      if (l.to) src.frequency.exponentialRampToValueAtTime(l.to, end);
      if (l.fm) {
        const mod = ctx.createOscillator();
        const depth = ctx.createGain();
        mod.frequency.value = l.from * l.fm[0];
        depth.gain.value = l.fm[1];
        mod.connect(depth);
        depth.connect(src.frequency);
        mod.start(t);
        mod.stop(end + 0.02);
      }
      src.connect(amp);
    }
    src.start(t);
    src.stop(end + 0.02);
  };

  return {
    get enabled() { return enabled; },
    play(name) {
      if (!enabled || !SOUNDS[name] || !ensure()) return;
      const t0 = ctx.currentTime + 0.005;
      SOUNDS[name].forEach((l) => layer(l, t0));
    },
    setEnabled(on) {
      enabled = on;
      try { localStorage.setItem(SOUND_KEY, on ? "on" : "off"); } catch { /* storage blocked */ }
    },
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  const placeholder = grid.querySelector(".placeholder-item");
  const cards = [...grid.querySelectorAll(".grid-item:not(.placeholder-item)")];

  const box = document.getElementById("intro-box");
  const boxToggle = document.getElementById("intro-toggle");
  const boxContent = document.getElementById("intro-content");
  const pills = [...document.querySelectorAll(".pill[data-filter]")];

  const panel = document.getElementById("panel");
  const panelBackdrop = document.getElementById("panel-backdrop");
  const panelScroller = document.getElementById("panel-scroller");
  const panelClose = document.getElementById("panel-close");

  let colWidth = 0;
  let hasScrolled = false;
  let collapsed = false;
  let activeFilter = "all";

  // ==========================================
  // 1. MASONRY (shortest-column placement)
  // ==========================================
  const readVar = (name) => parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name)) || 0;

  const expandedBoxHeight = () => boxContent.offsetHeight;
  const collapsedBoxHeight = () => (window.innerWidth < 768 ? 70 : 80);

  const layout = () => {
    const pad = readVar("--pad");
    const gutter = readVar("--gutter");
    const cols = columnCount(window.innerWidth);
    colWidth = (grid.clientWidth - pad * 2 - gutter * (cols - 1)) / cols;
    grid.style.setProperty("--col-w", `${colWidth}px`);

    // Intro box sits in the first column; the placeholder reserves its slot.
    sizeBox();
    placeholder.style.height = `${expandedBoxHeight()}px`;

    const heights = new Array(cols).fill(0);
    // Pinned cards (e.g. the experience card) always sit right under the intro box.
    const shown = cards.filter((c) => !c.classList.contains("filtered-out"));
    const pinned = shown.filter((c) => c.hasAttribute("data-pin-under-intro"));
    const items = [placeholder, ...pinned, ...shown.filter((c) => !pinned.includes(c))];

    items.forEach((item) => {
      // data-stack-under="<id>" keeps a card directly beneath another one, in its column.
      const anchor = item.dataset.stackUnder && items.find((i) => i.dataset.id === item.dataset.stackUnder);
      const col = item === placeholder || pinned.includes(item)
        ? 0
        : anchor && anchor._col !== undefined
          ? anchor._col
          : heights.indexOf(Math.min(...heights));
      item._col = col;
      item.style.left = `${pad + col * (colWidth + gutter)}px`;
      item.style.top = `${pad + heights[col]}px`;
      heights[col] += item.offsetHeight + gutter;
    });

    // Parallax: each column scrolls at its own speed. Columns that lag behind
    // need extra room at the bottom so they never spill out of the grid.
    const parallaxOn = cols > 1 && !reduceMotion;
    parallax.items = items;
    parallax.speeds = heights.map((h, i) => (parallaxOn ? COLUMN_SPEEDS[i % COLUMN_SPEEDS.length] : 0));

    const natural = Math.max(...heights);
    let extra = 0;
    for (let i = 0; i < 3; i++) {
      const maxScroll = Math.max(0, natural + extra + pad * 2 - gutter - window.innerHeight);
      extra = Math.max(0, ...heights.map((h, c) => h + parallax.speeds[c] * maxScroll)) - natural;
    }

    grid.style.height = `${natural + extra - gutter + pad * 2}px`;
    updateParallax(true);
  };

  // ==========================================
  // 1b. COLUMN PARALLAX (smoothed with a lerp)
  // ==========================================
  const parallax = { items: [], speeds: [], current: [], frame: null };

  const parallaxTargets = () => {
    const y = Math.max(0, window.scrollY);
    return parallax.speeds.map((speed) => speed * y);
  };

  const applyParallax = () => {
    parallax.items.forEach((item) => {
      const y = parallax.current[item._col] || 0;
      item.style.translate = `0 ${y.toFixed(2)}px`;
    });
  };

  const tickParallax = () => {
    const targets = parallaxTargets();
    let moving = false;
    parallax.current = targets.map((target, i) => {
      const cur = parallax.current[i] ?? target;
      const next = cur + (target - cur) * PARALLAX_EASE;
      if (Math.abs(target - next) < 0.1) return target;
      moving = true;
      return next;
    });
    applyParallax();
    parallax.frame = moving ? requestAnimationFrame(tickParallax) : null;
  };

  const updateParallax = (immediate = false) => {
    if (immediate) {
      parallax.current = parallaxTargets();
      applyParallax();
      return;
    }
    if (!parallax.frame) parallax.frame = requestAnimationFrame(tickParallax);
  };

  window.addEventListener("scroll", () => updateParallax(), { passive: true });

  let layoutFrame = null;
  const requestLayout = () => {
    if (layoutFrame) return;
    layoutFrame = requestAnimationFrame(() => {
      layoutFrame = null;
      layout();
    });
  };

  // ==========================================
  // 2. INTRO BOX (expand / collapse on scroll)
  // ==========================================
  const sizeBox = () => {
    // Pin the content width so its height can be measured independently of the animating box width.
    const padX = parseFloat(getComputedStyle(box).paddingLeft) * 2;
    boxContent.style.width = `${colWidth - padX}px`;
    box.style.width = `${colWidth + (hasScrolled ? 10 : 0)}px`;
    box.style.height = `${collapsed ? collapsedBoxHeight() : expandedBoxHeight()}px`;
  };

  const collapseBox = () => {
    if (collapsed) return;
    collapsed = true;
    box.classList.add("collapsing", "collapsed");
    boxToggle.setAttribute("aria-expanded", "false");
    sizeBox();
    setTimeout(() => box.classList.remove("collapsing"), 300);
  };

  const expandBox = () => {
    if (!collapsed) return;
    collapsed = false;
    box.classList.remove("collapsing", "collapsed");
    boxToggle.setAttribute("aria-expanded", "true");
    sizeBox();
  };

  const onScroll = () => {
    const nowScrolled = window.scrollY > SCROLL_COLLAPSE_AT;
    const focusInBox = box.contains(document.activeElement) && document.activeElement !== boxToggle;

    if (nowScrolled !== hasScrolled) {
      hasScrolled = nowScrolled;
      box.classList.toggle("scrolled", hasScrolled);
      document.getElementById("intro-top").tabIndex = hasScrolled ? 0 : -1;
    }

    if (hasScrolled && !focusInBox) collapseBox();
    else if (!hasScrolled) expandBox();
    sizeBox();
  };

  const toggleBox = () => {
    if (!hasScrolled) return;
    collapsed ? expandBox() : collapseBox();
  };

  boxToggle.addEventListener("click", toggleBox);
  boxToggle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleBox();
    }
  });
  window.addEventListener("scroll", onScroll, { passive: true });

  // ==========================================
  // 3. CARDS: overlay, lazy reveal, video hover
  // ==========================================
  const revealObserver = new IntersectionObserver((entries) => {
    let stagger = 0;
    entries.forEach((entry) => {
      const card = entry.target;
      card._inView = entry.isIntersecting;
      if (entry.isIntersecting) {
        revealCard(card, 100 + stagger * 60);
        stagger++;
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  const revealCard = (card, delay) => {
    if (!card._loaded || !card._inView || card.classList.contains("filtered-out")) return;
    clearTimeout(card._revealTimer);
    card._revealTimer = setTimeout(() => card.classList.add("visible"), reduceMotion ? 0 : delay);
  };

  cards.forEach((card) => {
    // Info cards (experience, to-do) have no media and don't open a panel.
    if (card.classList.contains("info-card")) {
      card._loaded = true;
      revealObserver.observe(card);
      return;
    }

    const title = card.dataset.title || "";
    const meta = card.dataset.meta || "";
    const frameEl = card.querySelector(".grid-media");

    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.innerHTML = `
      <div class="top-row">
        <div class="name-group">
          <p>${escapeHtml(title)}</p>
        </div>
        <div class="link-icon">${ARROW_ICON}</div>
      </div>
      ${meta && !card.dataset.cta ? `<div class="bottom-text"><p>${escapeHtml(meta)}</p></div>` : ""}
    `;

    // Media + overlay live in their own frame so an optional footer can sit below.
    const frame = document.createElement("div");
    frame.className = "card-media";
    frame.append(frameEl, overlay);
    card.prepend(frame);

    if (card.dataset.cta && card.dataset.url) {
      const blurb = (CASE_STUDIES[card.dataset.id] || {}).subtitle || meta;
      const footer = document.createElement("div");
      footer.className = "card-footer";
      footer.innerHTML = `
        <p class="info-title">${escapeHtml(title)}</p>
        <p class="info-text">${escapeHtml(blurb)}</p>
        <a class="card-cta" href="${card.dataset.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(card.dataset.cta)} <span aria-hidden="true">↗</span></a>
      `;
      footer.querySelector(".card-cta").addEventListener("click", (e) => e.stopPropagation());
      card.appendChild(footer);
    }
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${title} — ${meta}`);

    // A .grid-media wrapper (e.g. the phone stage) waits on the image inside it.
    const media = frameEl.matches("img, video") ? frameEl : frameEl.querySelector("img, video");
    const markLoaded = () => {
      if (card._loaded) return;
      card._loaded = true;
      requestLayout();
      revealCard(card, 100);
    };

    if (media.tagName === "VIDEO") {
      if (media.readyState >= 2) markLoaded();
      else media.addEventListener("loadeddata", markLoaded, { once: true });
      media.addEventListener("error", markLoaded, { once: true });

      if (media.hasAttribute("data-autoplay")) {
        // Auto-scrolling site previews play whenever they're on screen.
        new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) media.play().catch(() => {});
          else media.pause();
        }, { threshold: 0.3 }).observe(media);
      } else if (canHover) {
        card.addEventListener("mouseenter", () => media.play().catch(() => {}));
        card.addEventListener("mouseleave", () => {
          media.pause();
          media.currentTime = 0.1;
        });
      } else {
        new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) media.play().catch(() => {});
          else media.pause();
        }, { threshold: 0.5 }).observe(media);
      }
    } else {
      if (media.complete && media.naturalWidth) markLoaded();
      else {
        media.addEventListener("load", markLoaded, { once: true });
        media.addEventListener("error", markLoaded, { once: true });
      }
    }

    card.addEventListener("click", () => openCaseStudy(card.dataset.id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter") openCaseStudy(card.dataset.id);
    });

    revealObserver.observe(card);
  });

  // ==========================================
  // 3b. SCREEN CAROUSELS (auto-advance on hover, dots + play)
  // ==========================================
  const CAROUSEL_STEP_MS = 1800;

  document.querySelectorAll("[data-carousel]").forEach((root) => {
    const slides = [...root.querySelectorAll(".sc-slide")];
    const dotsWrap = root.querySelector(".sc-dots");
    const playBtn = root.querySelector(".sc-play");
    const card = root.closest(".grid-item");
    let index = 0;
    let timer = null;
    let pinned = false; // started from the play button: keeps running without hover

    const dots = slides.map((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "sc-dot";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Screen ${i + 1}`);
      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        go(i);
        if (timer) restart();
      });
      dotsWrap.appendChild(dot);
      return dot;
    });

    const go = (i) => {
      index = (i + slides.length) % slides.length;
      root.style.setProperty("--i", index);
      slides.forEach((s, k) => s.classList.toggle("is-active", k === index));
      dots.forEach((d, k) => d.setAttribute("aria-selected", String(k === index)));
    };

    const start = (delay = CAROUSEL_STEP_MS) => {
      if (timer) return;
      root.classList.add("is-playing");
      playBtn.setAttribute("aria-label", "Pause slideshow");
      const tick = () => {
        go(index + 1);
        timer = setTimeout(tick, CAROUSEL_STEP_MS);
      };
      timer = setTimeout(tick, delay);
    };
    const stop = () => {
      clearTimeout(timer);
      timer = null;
      root.classList.remove("is-playing");
      playBtn.setAttribute("aria-label", "Play slideshow");
    };
    const restart = () => { stop(); start(); };

    playBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (timer) { pinned = false; stop(); }
      else { pinned = true; go(index + 1); start(); }
    });
    // Keyboard on the controls shouldn't trigger the card's "open project" shortcut.
    root.querySelector(".sc-controls").addEventListener("keydown", (e) => e.stopPropagation());

    if (canHover) {
      card.addEventListener("mouseenter", () => { if (!reduceMotion) start(700); });
      card.addEventListener("mouseleave", () => { if (!pinned) stop(); });
    } else if (!reduceMotion) {
      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) start(1200);
        else if (!pinned) stop();
      }, { threshold: 0.5 }).observe(root);
    }

    // Drag / swipe between screens (horizontal only, so vertical page scroll still works).
    let drag = null;
    let suppressClick = false;
    const stepPx = () => slides[1].offsetLeft - slides[0].offsetLeft; // slide width + gap, as laid out

    root.addEventListener("pointerdown", (e) => {
      if (e.button !== 0 || e.target.closest(".sc-controls")) return;
      drag = { x: e.clientX, y: e.clientY, dx: 0, active: false, id: e.pointerId };
    });

    root.addEventListener("pointermove", (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.x;
      const dy = e.clientY - drag.y;
      if (!drag.active) {
        if (Math.abs(dx) < 6 || Math.abs(dx) < Math.abs(dy)) return;
        drag.active = true;
        try { root.setPointerCapture(e.pointerId); } catch { /* pointer already released */ }
        root.classList.add("is-dragging");
        stop();
      }
      // Rubber-band past the first/last screen.
      const atEdge = (index === 0 && dx > 0) || (index === slides.length - 1 && dx < 0);
      drag.dx = atEdge ? dx * 0.35 : dx;
      root.style.setProperty("--drag", `${drag.dx}px`);
    });

    const endDrag = (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const { active, dx } = drag;
      drag = null;
      if (!active) return;
      suppressClick = true;
      setTimeout(() => (suppressClick = false), 80); // the click (if any) fires right after pointerup
      root.classList.remove("is-dragging");
      root.style.setProperty("--drag", "0px");
      let delta = -Math.round(dx / stepPx());
      if (delta === 0 && Math.abs(dx) > stepPx() * 0.15) delta = dx < 0 ? 1 : -1;
      go(Math.min(slides.length - 1, Math.max(0, index + delta)));
      if (pinned || (canHover && card.matches(":hover"))) start();
    };
    root.addEventListener("pointerup", endDrag);
    root.addEventListener("pointercancel", endDrag);

    // A drag must not count as a click that opens the project.
    root.addEventListener("click", (e) => {
      if (!suppressClick) return;
      suppressClick = false;
      e.stopPropagation();
      e.preventDefault();
    }, true);
    slides.forEach((img) => img.setAttribute("draggable", "false"));

    go(0);
  });

  // ==========================================
  // 4. FILTERS
  // ==========================================
  const matchesFilter = (card, filter) => {
    const cats = (card.dataset.category || "").split(" ");
    return filter === "all" ? !cats.includes("reading") : cats.includes(filter);
  };

  const applyFilter = (filter, animate = true) => {
    activeFilter = filter;
    pills.forEach((p) => p.classList.toggle("active", p.dataset.filter === filter));

    const swap = () => {
      cards.forEach((card) => {
        const show = matchesFilter(card, filter);
        card.classList.toggle("filtered-out", !show);
        clearTimeout(card._revealTimer);
        card.classList.remove("visible");
      });
      layout();
      // Re-observe so the observer re-reports what is on screen and staggers it in.
      cards.forEach((card) => {
        revealObserver.unobserve(card);
        card._inView = false;
        if (!card.classList.contains("filtered-out")) revealObserver.observe(card);
      });
    };

    if (!animate) return swap();

    cards.forEach((card) => card.classList.remove("visible"));
    if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    setTimeout(swap, 280);
  };

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      if (pill.dataset.filter !== activeFilter) applyFilter(pill.dataset.filter);
    });
  });

  // ==========================================
  // 5. SIDE PANEL (case studies + about)
  // ==========================================
  let lastFocus = null;

  const showPanel = (html, origin) => {
    lastFocus = document.activeElement;
    panelScroller.innerHTML = html;
    panelScroller.scrollTop = 0;

    // Grow the modal out of the clicked card; without an origin it just rises in.
    if (origin && !panel.classList.contains("active")) {
      const r = origin.getBoundingClientRect();
      panel.style.setProperty("--from-x", `${r.left + r.width / 2 - window.innerWidth / 2}px`);
      panel.style.setProperty("--from-y", `${r.top + r.height / 2 - window.innerHeight / 2}px`);
      panel.style.setProperty("--from-s", "0.35");
    } else if (!panel.classList.contains("active")) {
      ["--from-x", "--from-y", "--from-s"].forEach((v) => panel.style.removeProperty(v));
    }

    // Restart the staggered entrance even if the panel was already open.
    panel.classList.remove("shown");
    void panel.offsetWidth;
    if (!panel.classList.contains("active")) sfx.play("open");
    panel.classList.add("active", "shown");
    panel.setAttribute("aria-hidden", "false");
    panelBackdrop.classList.add("active");
    document.body.classList.add("modal-open");
    panelClose.focus({ preventScroll: true });
  };

  const closePanel = () => {
    if (!panel.classList.contains("active")) return;
    sfx.play("close");
    panel.classList.remove("active");
    panel.setAttribute("aria-hidden", "true");
    panelBackdrop.classList.remove("active");
    document.body.classList.remove("modal-open");
    panelScroller.querySelectorAll("video").forEach((v) => v.pause());
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  };

  const LABELS = {
    default: { eyebrow: "Case study", client: "Client", role: "Role", deliverables: "Deliverables", problem: "The challenge", solution: "The solution" },
    reading: { eyebrow: "Reading", client: "Author", role: "Genre", deliverables: "Publisher", problem: "Synopsis", solution: "Why I recommend it" },
    "ai-experiments": { eyebrow: "AI experiment", client: "Client", role: "Role", deliverables: "Deliverables", problem: "Concept", solution: "Results & learnings" }
  };

  const openCaseStudy = (id) => {
    const data = CASE_STUDIES[id];
    if (!data) return;

    const card = cards.find((c) => c.dataset.id === id);
    const cats = card ? card.dataset.category.split(" ") : [];
    const isBook = cats.includes("reading");
    const L = isBook ? LABELS.reading : cats.includes("ai-experiments") ? LABELS["ai-experiments"] : LABELS.default;

    const media = (data.images || (data.image ? [data.image] : [])).map(
      (src) => `<img src="${src}" alt="${escapeHtml(data.title)}" loading="lazy">`
    );
    if (data.video) {
      const video = `<video src="${data.video}" autoplay loop muted playsinline></video>`;
      data.imagesFirst ? media.push(video) : media.unshift(video);
    }

    const url = data.url
      ? `<dt>Website</dt><dd><a href="${data.url}" target="_blank" rel="noopener noreferrer">${data.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗</a></dd>`
      : "";

    const visual = !isBook && data.colors && data.colors.length
      ? `<section class="panel-section">
           <h3 class="panel-section-title">Visual language</h3>
           <div class="swatches">
             ${data.colors.map((c) => `<span class="swatch"><i style="background:${c.hex}"></i>${escapeHtml(c.name)}</span>`).join("")}
           </div>
           <div class="type-list">${(data.typographies || []).map((t) => `<span>${escapeHtml(t)}</span>`).join("")}</div>
         </section>`
      : "";

    showPanel(`
      <header class="panel-header">
        <span class="panel-eyebrow">${L.eyebrow} · ${escapeHtml(data.year)}</span>
        <h2 class="panel-title">${escapeHtml(data.title)}</h2>
        <p class="panel-subtitle">${escapeHtml(data.subtitle)}</p>
      </header>
      <dl class="panel-meta">
        <dt>${L.client}</dt><dd>${escapeHtml(data.client)}</dd>
        <dt>${L.role}</dt><dd>${escapeHtml(data.role)}</dd>
        <dt>${L.deliverables}</dt><dd>${escapeHtml(data.deliverables)}</dd>
        ${url}
      </dl>
      ${media.length ? `<div class="panel-media${media.length > 1 ? " multi" : ""}${data.phoneScreens || data.portrait ? " phones" : ""}">${media.join("")}</div>` : ""}
      <section class="panel-section">
        <h3 class="panel-section-title">${L.problem}</h3>
        <p class="panel-text">${escapeHtml(data.problem)}</p>
      </section>
      <section class="panel-section">
        <h3 class="panel-section-title">${L.solution}</h3>
        <p class="panel-text">${escapeHtml(data.solution)}</p>
      </section>
      ${visual}
    `, card);
  };

  const openAbout = () => {
    showPanel(document.getElementById("about-template").innerHTML);
  };

  document.querySelectorAll("[data-open='about']").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openAbout();
    });
  });

  panelClose.addEventListener("click", closePanel);
  panelBackdrop.addEventListener("click", closePanel);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePanel();
  });

  // ==========================================
  // 7. INFO CARDS (playful to-do)
  // ==========================================
  const todo = document.querySelector(".todo-card");
  if (todo) {
    const boxes = [...todo.querySelectorAll("input[type='checkbox']")];
    const countEl = todo.querySelector("[data-todo-count]");
    const updateCount = () => {
      countEl.textContent = `${boxes.filter((b) => b.checked).length}/${boxes.length}`;
    };
    boxes.forEach((b) => b.addEventListener("change", () => {
      sfx.play(b.checked ? "toggleOn" : "toggleOff");
      updateCount();
    }));
    updateCount();
  }

  // ==========================================
  // 8. PILL: back to top
  // ==========================================
  const topBtn = document.getElementById("intro-top");
  topBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

  // ==========================================
  // 8b. INLINE CONTACT (expands the intro box)
  // ==========================================
  const introForm = document.getElementById("intro-form");
  const introCta = document.getElementById("intro-cta");
  const introCtaLabel = introCta.querySelector(".btn-text");
  const introFormClose = document.getElementById("intro-form-close");
  const introFields = [...introForm.querySelectorAll("input, textarea, button")];
  let contactOpen = false;
  let morphTimer;

  const morph = () => {
    // Drop the box's height transition so it follows the form's own animation.
    box.classList.add("morphing");
    clearTimeout(morphTimer);
    morphTimer = setTimeout(() => box.classList.remove("morphing"), 650);
  };

  const setContact = (open) => {
    if (open === contactOpen) return;
    contactOpen = open;
    morph();
    box.classList.toggle("contact-open", open);
    introForm.setAttribute("aria-hidden", String(!open));
    introCta.setAttribute("aria-expanded", String(open));
    introFields.forEach((el) => (el.tabIndex = open ? 0 : -1));
    introCtaLabel.textContent = open ? "Send message" : "Get in touch";
    if (open) setTimeout(() => introForm.querySelector("input").focus({ preventScroll: true }), 120);
  };

  introCta.addEventListener("click", () => {
    if (!contactOpen) return setContact(true);
    introForm.requestSubmit();
  });
  introFormClose.addEventListener("click", () => setContact(false));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && contactOpen && !panel.classList.contains("active")) setContact(false);
  });

  introForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (introCta.disabled) return;
    introCtaLabel.textContent = "Sending…";
    introCta.disabled = true;

    setTimeout(() => {
      introCtaLabel.textContent = "Sent, talk soon!";
      introCta.classList.add("is-sent");
      sfx.play("success");
      setTimeout(() => {
        introForm.reset();
        setContact(false);
        introCta.classList.remove("is-sent");
        introCta.disabled = false;
      }, 2200);
    }, 900);
  });

  // ==========================================
  // 8c. CLICK SOUNDS + mute toggle
  // ==========================================
  // pointerdown (not click) so the tick lands the moment a finger/button goes down.
  document.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    const el = e.target.closest("a, button, label, [role='button'], .pill");
    if (!el) return;
    if (el.closest(".todo-list")) return;                       // checkboxes have their own toggle sound
    if (el.matches(".grid-item") || el.id === "sound-toggle") return; // cards play "open"; the toggle has its own
    sfx.play(el.matches(".pill[data-filter]") ? "select" : "press");
  }, { passive: true });

  const soundBtn = document.getElementById("sound-toggle");
  const syncSoundBtn = () => {
    soundBtn.classList.toggle("is-off", !sfx.enabled);
    soundBtn.setAttribute("aria-pressed", String(sfx.enabled));
    soundBtn.setAttribute("aria-label", sfx.enabled ? "Turn sounds off" : "Turn sounds on");
  };
  soundBtn.addEventListener("click", () => {
    sfx.setEnabled(!sfx.enabled);
    if (sfx.enabled) sfx.play("toggleOn");
    syncSoundBtn();
  });
  syncSoundBtn();

  // ==========================================
  // 9. INIT
  // ==========================================
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layout, 80);
  });

  applyFilter("all", false);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(requestLayout);
  window.addEventListener("load", requestLayout);
  // Any card changing height (fonts, wrapping text, late media) re-flows the grid.
  if ("ResizeObserver" in window) {
    const sizeWatcher = new ResizeObserver(requestLayout);
    cards.forEach((card) => sizeWatcher.observe(card));
    sizeWatcher.observe(boxContent);
  }
  requestAnimationFrame(() => box.classList.remove("is-hidden"));
  onScroll();
});
