/**
 * Site-wide configuration. Edit this file to update contact info, nav links, and content.
 */
export const siteConfig = {
  brand: {
    name: 'brandinglift',
    tagline: 'Brand that lifts',
  },
  contact: {
    email: 'arham@brandinglift.com',
    phone2: '+91 9717882400',
    phone2Label: 'India',
  },
  social: [
    { label: 'Facebook', url: 'https://www.facebook.com/share/1FYxuW5mZJ/?mibextid=wwXIfr', icon: 'facebook' },
    { label: 'Instagram', url: 'https://www.instagram.com/brandinglift_?igsh=bDZ6d3d2M2JvaHp3&utm_source=qr', icon: 'instagram' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/company/brandinglift/posts/?feedView=all', icon: 'linkedin' },
  ],
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Blogs', href: '#blogs' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: {
    primary: 'Contact Us',
    primaryHref: '/contact',
    hero: 'Contact now',
  },
  hero: {
    title: 'Amazing & creative brand agency',
    subtitle: 'We are a creative agency specializing in brand strategy, design, and digital that lifts your business.',
    tags: ['Brand Strategy', 'Design', 'Digital'],
    images: [
      '/slider/hero.png',
    ],
    carouselIntervalMs: 3000,
  },
  whatsapp: {
    number: '+91 9717882400',
    message: 'Hi, I\'d like to know more about brandinglift.',
  },
  about: {
    intro: 'BrandingLift is a brand and digital agency that helps businesses stand out. We combine strategy, design, and execution so your brand connects with the right audience and grows.',
    points: [
      'We shape clear brand identity and messaging so you’re memorable and distinct in your market.',
      'We build websites, content, and campaigns that are on-brand, easy to use, and built to convert.',
      'We focus on outcomes—visibility, leads, and growth—so your investment in brand and digital pays off.',
    ],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
    imageAlt: 'Collaborative work at BrandingLift',
  },
  cities: [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Pune',
    'Ahmedabad',
    'Other',
  ],
  /** Services grouped by category for nav dropdown; flat list derived for services section */
  serviceCategories: [
    {
      label: 'Development',
      services: [
        { name: 'Web Development', short: 'Web Dev', icon: 'web', description: 'Custom websites and web applications built for speed, SEO, and conversion. We deliver responsive, scalable sites that rank and convert.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' },
        { name: 'Portal Development', short: 'Portal Dev', icon: 'portal', description: 'Enterprise portals, intranets, and client-facing platforms. Secure, role-based access and workflows tailored to your business.', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80' },
        { name: 'Software Development', short: 'SoftDev', icon: 'software', description: 'Desktop and cloud software tailored to your workflow. From MVPs to full product builds, we ship on time.', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80' },
        { name: 'E-commerce Development', short: 'E-com Dev', icon: 'ecom', description: 'Online stores, payment integration, and inventory systems. Sell more with a store that’s fast, secure, and easy to manage.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80' },
        { name: 'Application Development (Android & iOS)', short: 'App Dev', icon: 'app', description: 'Native and cross-platform mobile apps for Android and iOS. Design, build, and launch apps that users love.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80' },
      ],
    },
    {
      label: 'AI & Automation',
      services: [
        { name: 'Artificial Intelligence Agent', short: 'AI Agent', icon: 'ai', description: 'AI-powered automation, chatbots, and intelligent workflows. We integrate and train models that save time and delight users.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80' },
      ],
    },
    {
      label: 'Design',
      services: [
        { name: 'User Interface & User Experience Design', short: 'UI/UX Design', icon: 'uiux', description: 'User research, wireframes, and interfaces that users love. We improve usability and conversion with evidence-based design.', image: 'https://images.unsplash.com/photo-1561070791-2526d41294b4?w=800&q=80' },
        { name: 'Graphic Design', short: 'Graphic Design', icon: 'graphic', description: 'Brand identity, print, and digital visual assets. Logos, guidelines, and campaigns that look consistent everywhere.', image: 'https://images.unsplash.com/photo-1561070791-2526d41294b4?w=800&q=80' },
        { name: 'Brand Strategy', short: 'Brand Strategy', icon: 'brand', description: 'Positioning, messaging, and identity that differentiates your business. We help you stand out and stay memorable.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80' },
      ],
    },
    {
      label: 'Marketing',
      services: [
        { name: 'Digital Marketing', short: 'Digital Mktg', icon: 'marketing', description: 'End-to-end digital strategy and campaign execution. We plan, run, and optimize so you grow.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' },
        { name: 'Search Engine Optimization', short: 'SEO', icon: 'seo', description: 'Search engine optimization to grow organic traffic and rankings. Keyword research, on-page and technical SEO, and content that ranks.', image: 'https://images.unsplash.com/photo-1432888622747-411eb8890d6e?w=800&q=80' },
        { name: 'Online Reputation Management', short: 'ORM', icon: 'orm', description: 'Monitor, respond, and improve how your brand appears online. Reviews, social listening, and crisis response.', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80' },
        { name: 'Content Marketing', short: 'Content Mktg', icon: 'content', description: 'Blogs, guides, and content that attracts and converts. Strategy, creation, and distribution that builds authority.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80' },
      ],
    },
    {
      label: 'Advertising',
      services: [
        { name: 'Google Ads', short: 'Google Ads', icon: 'google', description: 'PPC campaigns on Google Search, Display, and YouTube. We maximize ROI with smart bidding and creative testing.', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80' },
        { name: 'Social Media Marketing', short: 'SMM', icon: 'smm', description: 'Content, community, and paid social across platforms. We grow followers and engagement that converts.', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80' },
        { name: 'Meta Ads', short: 'Meta Ads', icon: 'meta', description: 'Facebook and Instagram advertising that drives results. Targeting, creatives, and funnels that scale.', image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80' },
        { name: 'LinkedIn Ads', short: 'LinkedIn Ads', icon: 'linkedin', description: 'B2B and professional targeting on LinkedIn. Lead gen and brand campaigns for decision-makers.', image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&q=80' },
      ],
    },
  ],
};

/** Flat list of all services for the services section grid */
export function getAllServices(config) {
  return (config?.serviceCategories || []).flatMap((cat) => cat.services);
}

/** Slug for service anchor (e.g. web-development) */
export function serviceSlug(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/&/g, 'and')
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9-]/g, '');
}

/** Get one service by slug from config */
export function getServiceBySlug(slug, config = siteConfig) {
  const services = getAllServices(config);
  return services.find((s) => serviceSlug(s.name) === slug) || null;
}

/** Get service with its category label */
export function getServiceWithCategory(slug, config = siteConfig) {
  for (const category of config.serviceCategories || []) {
    const service = (category.services || []).find((s) => serviceSlug(s.name) === slug);
    if (service) {
      return { ...service, categoryLabel: category.label };
    }
  }
  return null;
}

export function getAllServiceSlugs(config = siteConfig) {
  return getAllServices(config).map((s) => serviceSlug(s.name));
}

const categoryHelpDefaults = {
  Development: [
    'We map your goals, users, and technical requirements before development begins.',
    'BrandingLift delivers clean, scalable code with strong UX and on-brand design.',
    'We test, launch, and support your product with analytics and ongoing improvements.',
  ],
  'AI & Automation': [
    'We identify high-impact automation opportunities in your workflow.',
    'BrandingLift integrates AI tools tailored to your business—not generic one-size-fits-all bots.',
    'We train, monitor, and refine solutions so they save time and improve customer experience.',
  ],
  Design: [
    'We research your audience and competitors to inform every design decision.',
    'BrandingLift creates cohesive visual systems that work across web, print, and social.',
    'We iterate with you until the design feels unmistakably yours and drives results.',
  ],
  Marketing: [
    'We build data-driven strategies aligned with your growth goals and budget.',
    'BrandingLift executes campaigns across channels with consistent brand messaging.',
    'We track performance, optimize continuously, and report on measurable outcomes.',
  ],
  Advertising: [
    'We define target audiences and craft ad creative that speaks to their needs.',
    'BrandingLift manages campaigns with smart bidding, A/B testing, and budget control.',
    'We optimize for ROI—leads, sales, and brand awareness you can measure.',
  ],
};

const defaultHelpPoints = [
  'We start with your business goals and tailor our approach to your audience.',
  'BrandingLift combines strategy, creativity, and execution under one roof.',
  'We focus on measurable outcomes—visibility, leads, and growth you can track.',
];

/** How BrandingLift helps — per-service override or category defaults */
export function getServiceHelpPoints(service, categoryLabel) {
  if (service?.howWeHelp?.length) return service.howWeHelp;
  return categoryHelpDefaults[categoryLabel] || defaultHelpPoints;
}
