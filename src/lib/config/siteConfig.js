/**
 * Site-wide configuration. Edit this file to update contact info, nav links, and content.
 */
export const siteConfig = {
  brand: {
    name: 'brandinglift',
    tagline: 'Brand that lifts',
  },
  contact: {
    email: 'info@brandinglift.com',
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
    // Old fields — kept in case other components still use these
    title: 'Amazing & creative brand agency',
    subtitle: 'We combine creativity, technology and data-driven strategies to help businesses build a strong digital presence and achieve measurable growth.',
    tags: ['Brand Strategy', 'Design', 'Digital'],
    images: [
      '/slider/hero.png',
    ],
    carouselIntervalMs: 3000,

    // New fields required by HeroSection.js
    eyebrow: 'STRATEGY. TECHNOLOGY. GROWTH.',
    titleLine1: 'Digital Solutions',
    titleHighlight: 'That Grow',
    titleLine2: 'Your Business',
    features: [
      { label: 'Web & App Development', icon: 'web' },
      { label: 'SEO & Digital Marketing', icon: 'seo' },
      { label: 'Social Media Marketing', icon: 'marketing' },
      { label: 'AI Automation & Integration', icon: 'ai' },
      { label: 'Branding & Design', icon: 'brand' },
      { label: 'Business Growth', icon: 'orm' },
    ],
    dashboard: {
      laptop: {
        kicker: 'Performance Overview',
        titlePlain: 'Grow your ',
        titleHighlight1: 'brand',
        titleMid: ' with ',
        titleHighlight2: 'data',
        note1: 'Track every campaign,',
        note2: 'see results in real time.',
        chartPoints: [10, 25, 18, 32, 28, 45, 38, 52, 48, 60],
        growthBadge: {
          value: '+98%',
          title: 'Growth',
          label: 'this year',
        },
        stats: [
          { value: '250+', delta: '+12%', label: 'Projects' },
          { value: '98%', delta: '+5%', label: 'Satisfaction' },
        ],
        donut: {
          value: '98%',
          label: 'Success Rate',
        },
      },
      phone: {
        title: 'Client Growth',
        subtitle: 'Real-time analytics',
        avatarsCount: 4,
        clientsLabel: '+250 clients',
      },
    },
  },
  whatsapp: {
    number: '+91 9717882400',
    message: 'Hi, I\'d like to know more about brandinglift.',
  },

  about: {
    // ============ NEW About-section design (used by AboutBlock.js) ============
    badge: 'About Us',
    headingPlain: 'We Build Digital Experiences That Drive ',
    headingHighlight: 'Growth & Impact.',
    subtitle: 'Branding Lift is a creative technology and digital marketing agency helping businesses transform ideas into powerful digital solutions.',
    stats: [
      { icon: 'clients', value: '50+', label: 'Happy Clients' },
      { icon: 'projects', value: '120+', label: 'Projects Delivered' },
      { icon: 'countries', value: '10+', label: 'Countries Served' },
    ],
    ctaPrimary: { label: "Let's Work Together", href: '/contact' },
    ctaSecondary: { label: 'Our Services', href: '/services' },

    collage: {
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=700&q=80',
      imageAlt: 'BrandingLift creative work',
      tags: [
        { avatar: 'https://randomuser.me/api/portraits/women/44.jpg', title: 'Strategy', text: 'Turning ideas into results' },
        { avatar: 'https://randomuser.me/api/portraits/men/32.jpg', title: 'Design', text: 'Crafting memorable brand experiences' },
        { avatar: 'https://randomuser.me/api/portraits/men/65.jpg', title: 'Development', text: 'Building fast, scalable & smart solutions' },
      ],
    },

    mission: {
      badge: 'Our Mission',
      headingPlain: 'The Only AI For Respond ',
      headingHighlight: 'To Your Messages',
      text: 'We combine creativity, technology and data-driven strategies to help brands connect with the right audience and achieve measurable success.',
      cta: { label: 'Explore More', href: '/services' },
      insightImage: 'https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?w=300&q=80',
      trustedLabel: 'Trusted by growing brands worldwide',
      trustedAvatars: [
        'https://randomuser.me/api/portraits/women/68.jpg',
        'https://randomuser.me/api/portraits/men/12.jpg',
        'https://randomuser.me/api/portraits/women/25.jpg',
        'https://randomuser.me/api/portraits/men/77.jpg',
      ],
    },

    story: {
      badge: 'Our Story',
      heading: 'Create Unit Teams To Promote Your Brand',
      text: 'From a small team of dreamers to a full-service digital agency — our journey has been all about solving real problems and creating impactful solutions.',
      cta: { label: 'Our Journey', href: '/about' },
      timeline: [
        { year: '2018', icon: 'flag', title: 'The Beginning', text: 'A small team with a big vision to help businesses grow online.' },
        { year: '2019', icon: 'team', title: 'The Growth', text: 'Helped 50+ brands find their voice and stand out.' },
        { year: '2021', icon: 'rocket', title: 'The Expansion', text: 'Expanded our team and services to serve global clients.' },
        { year: '2024', icon: 'star', title: 'The Future', text: 'Continuing to innovate and create impact through technology.' },
      ],
    },

    devices: {
      heading: 'Units Operate From Virtual Devices',
      departments: [
        { label: 'All Departments', icon: 'grid', active: true },
        { label: 'Design', icon: 'design' },
        { label: 'Development', icon: 'dev' },
        { label: 'Marketing', icon: 'marketing' },
        { label: 'Strategy', icon: 'strategy' },
        { label: 'Support', icon: 'support' },
      ],
      tasks: [
        { title: 'Brand Strategy Call', time: '10:00 AM – 11:00 AM' },
        { title: 'UI/UX Design Review', time: '12:00 PM – 01:00 PM' },
        { title: 'Campaign Performance', time: '02:00 PM – 03:00 PM' },
        { title: 'Client Feedback Session', time: '04:00 PM – 05:00 PM' },
      ],
      taskAvatars: [
        'https://randomuser.me/api/portraits/women/33.jpg',
        'https://randomuser.me/api/portraits/men/45.jpg',
      ],
      testimonial: {
        avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
        name: 'James Carter',
        role: 'Marketing Head',
        quote: 'Great collaboration today! The new campaign looks amazing.',
      },
    },

    coreValues: [
      { icon: 'bulb', title: 'Innovation', description: 'We embrace new ideas and technologies to build smarter solutions.' },
      { icon: 'pencil', title: 'Creativity', description: 'We design experiences that inspire, engage, and leave a lasting impression.' },
      { icon: 'shield', title: 'Integrity', description: 'We believe in transparency, honesty, and building trust with every partnership.' },
      { icon: 'growth', title: 'Results', description: 'We focus on measurable outcomes that drive real growth for your business.' },
    ],

    // ============ LEGACY About content — kept in case other pages/components still read it ============
    legacy: {
      tagline: 'Empowering Businesses Through Technology, Creativity & Digital Growth',
      intro: [
        'At BrandingLift, we believe every business deserves the opportunity to thrive in the digital world. Our mission is to help companies transform their ideas into powerful digital experiences that drive growth, improve customer engagement, and create lasting success.',
        'We are a full-service technology, branding, and digital marketing agency specializing in website development, software solutions, mobile applications, AI automation, digital marketing, and brand growth strategies.',
        'By combining innovation, creativity, and technology, we help businesses establish a strong online presence, streamline operations, attract customers, and achieve measurable results.',
      ],
      whoWeAre: [
        'BrandingLift was founded with a simple vision: to provide businesses with complete digital solutions under one roof.',
        'In today\'s competitive marketplace, businesses need more than just a website. They need a strategic partner who understands technology, marketing, branding, and customer behavior.',
        'Our team works closely with startups, small businesses, established enterprises, and organizations across various industries to create solutions that not only look great but also deliver real business value.',
        'From launching websites and mobile applications to implementing AI-powered automation and digital marketing campaigns, we help businesses stay ahead in an ever-evolving digital landscape.',
      ],
      missionStatement: 'To empower businesses with innovative digital solutions that enhance visibility, improve efficiency, strengthen brand identity, and accelerate sustainable growth.',
      vision: 'To become a globally trusted digital transformation partner, helping businesses leverage technology, creativity, and innovation to achieve extraordinary success.',
      whatWeDoIntro: 'At BrandingLift, we provide end-to-end digital solutions tailored to your business goals.',
      whatWeDo: [
        { title: 'Website Development', description: 'Professional websites designed to create strong first impressions, generate leads, and improve customer experiences.' },
        { title: 'Software Development', description: 'Custom software solutions that streamline operations, automate workflows, and improve business efficiency.' },
        { title: 'Mobile App Development', description: 'Innovative Android and iOS applications that connect businesses with customers anytime, anywhere.' },
        { title: 'AI Agent Development', description: 'Intelligent AI-powered solutions that automate customer support, lead generation, and business processes.' },
        { title: 'UI/UX Design', description: 'User-centered digital experiences that improve engagement and increase conversions.' },
        { title: 'Graphic Design & Branding', description: 'Creative visual solutions that strengthen brand identity and improve recognition.' },
        { title: 'Digital Marketing', description: 'Data-driven marketing strategies designed to increase visibility, traffic, and sales.' },
        { title: 'Search Engine Optimization (SEO)', description: 'Helping businesses rank higher on Google and attract qualified organic traffic.' },
        { title: 'Social Media Marketing', description: 'Building meaningful connections between brands and their audiences.' },
        { title: 'Paid Advertising', description: 'Strategic Google Ads, Meta Ads, and LinkedIn Ads campaigns that generate measurable business results.' },
        { title: 'Content Marketing', description: 'Creating valuable content that educates, engages, and converts customers.' },
        { title: 'Online Reputation Management', description: 'Helping businesses build trust and maintain a positive online presence.' },
      ],
      whyChooseUs: [
        { title: 'Client-Focused Approach', description: 'Every business is unique, and every solution we create is tailored to meet specific goals and challenges.' },
        { title: 'Innovation-Driven', description: 'We stay ahead of industry trends and leverage the latest technologies to deliver future-ready solutions.' },
        { title: 'Results-Oriented', description: 'Our focus is not just on delivering projects but on achieving measurable business outcomes.' },
        { title: 'Transparency & Trust', description: 'We believe in open communication, honest advice, and long-term partnerships.' },
        { title: 'End-to-End Expertise', description: 'From strategy and design to development and marketing, we provide comprehensive solutions under one roof.' },
        { title: 'Continuous Support', description: 'Our relationship does not end after project delivery. We continue to support our clients as they grow and evolve.' },
      ],
      industriesIntro: 'We proudly work with businesses across a wide range of industries, including:',
      industries: [
        'Real Estate',
        'Travel & Tourism',
        'Umrah & Hajj Services',
        'Healthcare',
        'Education',
        'Restaurants & Hospitality',
        'E-Commerce',
        'Retail',
        'Construction',
        'Professional Services',
        'Financial Services',
        'Startups & Entrepreneurs',
      ],
      values: [
        { title: 'Excellence', description: 'Delivering high-quality solutions that exceed expectations.' },
        { title: 'Innovation', description: 'Continuously exploring new ideas, technologies, and opportunities.' },
        { title: 'Integrity', description: 'Building relationships based on honesty, transparency, and trust.' },
        { title: 'Collaboration', description: 'Working closely with clients to achieve shared success.' },
        { title: 'Growth', description: 'Helping businesses unlock their full potential through digital transformation.' },
      ],
      partnerTitle: 'More Than an Agency — Your Growth Partner',
      partnerText: 'At BrandingLift, we do not simply build websites or run marketing campaigns. We become an extension of your business, working alongside you to identify opportunities, solve challenges, and create sustainable growth. Whether you are launching a new venture, expanding into new markets, or transforming your business digitally, we are here to help you succeed.',
      cta: {
        title: 'Let\'s Build the Future Together',
        subtitle: 'Ready to elevate your business with innovative technology, strategic marketing, and creative branding solutions?',
        button: 'Partner with BrandingLift Today',
        tagline: 'Transform Ideas Into Results.',
      },
      image: '/images/about-team.jpg',
      imageAlt: 'The BrandingLift team collaborating on digital strategy',
    },
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
      description: 'Robust, scalable & high-performance solutions.',
      services: [
        { name: 'Web Development', short: 'Web Dev', icon: 'web', description: 'Custom websites and web applications built for speed, SEO, and conversion. We deliver responsive, scalable sites that rank and convert.', image: '/images/services/web-development.jpg' },
        { name: 'Portal Development', short: 'Portal Dev', icon: 'portal', description: 'Enterprise portals, intranets, and client-facing platforms. Secure, role-based access and workflows tailored to your business.', image: '/images/services/portal-development.jpg' },
        { name: 'Software Development', short: 'SoftDev', icon: 'software', description: 'Desktop and cloud software tailored to your workflow. From MVPs to full product builds, we ship on time.', image: '/images/services/software-development.jpg' },
        { name: 'E-commerce Development', short: 'E-com Dev', icon: 'ecom', description: 'Online stores, payment integration, and inventory systems. Sell more with a store that’s fast, secure, and easy to manage.', image: '/images/services/e-commerce-development.jpg' },
        { name: 'Application Development (Android & iOS)', short: 'App Dev', icon: 'app', description: 'Native and cross-platform mobile apps for Android and iOS. Design, build, and launch apps that users love.', image: '/images/services/application-development-android-and-ios.jpg' },
      ],
    },
    {
      label: 'AI & Automation',
      description: 'Intelligent automation for smarter business.',
      services: [
        { name: 'Artificial Intelligence Agent', short: 'AI Agent', icon: 'ai', description: 'AI-powered automation, chatbots, and intelligent workflows. We integrate and train models that save time and delight users.', image: '/images/services/artificial-intelligence-agent.jpg' },
        { name: 'Workflow Automation', short: 'Workflow', icon: 'automation', description: 'Automate repetitive tasks, streamline operations, and free up your team for high-value work.', image: '/images/services/workflow-automation.jpg' },
        { name: 'Chatbot Development', short: 'Chatbots', icon: 'chatbot', description: 'Custom AI chatbots for sales, support, and lead qualification. Deploy across web, WhatsApp, and social platforms.', image: '/images/services/chatbot-development.jpg' },
        { name: 'Data Analytics', short: 'Analytics', icon: 'analytics', description: 'Turn raw data into actionable insights. Dashboards, reports, and AI-driven recommendations to guide your strategy.', image: '/images/services/data-analytics.jpg' },
      ],
    },
    {
      label: 'Design',
      description: 'Creative designs that communicate clearly.',
      services: [
        { name: 'User Interface & User Experience Design', short: 'UI/UX Design', icon: 'uiux', description: 'User research, wireframes, and interfaces that users love. We improve usability and conversion with evidence-based design.', image: '/images/services/user-interface-and-user-experience-design.jpg' },
        { name: 'Graphic Design', short: 'Graphic Design', icon: 'graphic', description: 'Brand identity, print, and digital visual assets. Logos, guidelines, and campaigns that look consistent everywhere.', image: '/images/services/graphic-design.jpg' },
        { name: 'Brand Strategy', short: 'Brand Strategy', icon: 'brand', description: 'Positioning, messaging, and identity that differentiates your business. We help you stand out and stay memorable.', image: '/images/services/brand-strategy.jpg' },
        { name: 'Brand Identity', short: 'Brand Identity', icon: 'identity', description: 'Visual identity systems that capture your brand’s personality. Logos, typography, color palettes, and design guidelines.', image: '/images/services/brand-identity.jpg' },
      ],
    },
    {
      label: 'Marketing',
      description: 'Data-driven marketing that delivers growth.',
      services: [
        { name: 'Digital Marketing', short: 'Digital Mktg', icon: 'marketing', description: 'End-to-end digital strategy and campaign execution. We plan, run, and optimize so you grow.', image: '/images/services/digital-marketing.jpg' },
        { name: 'Search Engine Optimization', short: 'SEO', icon: 'seo', description: 'Search engine optimization to grow organic traffic and rankings. Keyword research, on-page and technical SEO, and content that ranks.', image: '/images/services/search-engine-optimization.jpg' },
        { name: 'Online Reputation Management', short: 'ORM', icon: 'orm', description: 'Monitor, respond, and improve how your brand appears online. Reviews, social listening, and crisis response.', image: '/images/services/online-reputation-management.jpg' },
        { name: 'Content Marketing', short: 'Content Mktg', icon: 'content', description: 'Blogs, guides, and content that attracts and converts. Strategy, creation, and distribution that builds authority.', image: '/images/services/content-marketing.jpg' },
      ],
    },
    {
      label: 'Advertising',
      description: 'High-impact ads that drive real results.',
      services: [
        { name: 'Google Ads', short: 'Google Ads', icon: 'google', description: 'PPC campaigns on Google Search, Display, and YouTube. We maximize ROI with smart bidding and creative testing.', image: '/images/services/google-ads.jpg' },
        { name: 'Meta Ads', short: 'Meta Ads', icon: 'meta', description: 'Facebook and Instagram advertising that drives results. Targeting, creatives, and funnels that scale.', image: '/images/services/meta-ads.jpg' },
        { name: 'Social Media Advertising', short: 'Social Ads', icon: 'smm', description: 'Paid social campaigns across LinkedIn, Twitter, TikTok, and more. Reach your audience where they spend their time.', image: '/images/services/social-media-advertising.jpg' },
        { name: 'LinkedIn Ads', short: 'LinkedIn Ads', icon: 'linkedin', description: 'B2B and professional targeting on LinkedIn. Lead gen and brand campaigns for decision-makers.', image: '/images/services/linkedin-ads.jpg' },
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