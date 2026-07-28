/**
 * Blog posts. Add new entries here to publish articles.
 */
export const blogPosts = [
  {
    slug: 'why-brand-strategy-matters',
    title: 'Why Brand Strategy Matters More Than Ever',
    excerpt:
      'A clear brand strategy helps you stand out, connect with the right audience, and grow with purpose—not guesswork.',
    content: [
      'In a crowded market, products and services can look similar. What sets businesses apart is how they show up—consistently, clearly, and with a story people remember. That is the job of brand strategy.',
      'A strong brand strategy defines who you are, who you serve, and why you matter. It shapes your messaging, visual identity, and every touchpoint from your website to social media and sales conversations.',
      'Without strategy, marketing becomes reactive. With it, every campaign, design decision, and piece of content reinforces the same promise. That builds trust—and trust drives growth.',
      'At BrandingLift, we help businesses clarify their positioning, sharpen their voice, and build identities that lift them above the noise. Whether you are launching or repositioning, strategy is the foundation everything else builds on.',
    ],
    image: '/blogs/why-brand-strategy-matters.jpg',
    date: '2026-05-12',
    category: 'Brand Strategy',
    author: 'BrandingLift Team',
    readTime: '4 min read',
  },
  {
    slug: 'seo-tips-that-actually-work',
    title: '5 SEO Tips That Actually Work in 2026',
    excerpt:
      'Skip the shortcuts. These proven SEO practices help you rank higher, attract qualified traffic, and convert visitors into leads.',
    content: [
      'Search engines reward sites that are fast, useful, and trustworthy. The fundamentals still win: quality content, clear structure, and a great user experience.',
      'Start with keyword research tied to real intent—what problems are your customers trying to solve? Build pages and blog posts that answer those questions thoroughly.',
      'Technical SEO matters too: mobile-friendly design, fast load times, clean URLs, and proper meta titles and descriptions help crawlers understand and rank your content.',
      'Links still carry weight, but focus on earning them through valuable content rather than buying them. Internal linking between related pages helps both users and search engines navigate your site.',
      'Track what works. Use analytics to see which pages drive traffic and conversions, then double down on topics and formats that perform.',
    ],
    image: '/blogs/seo-tips-that-actually-work.jpg',
    date: '2026-05-08',
    category: 'SEO',
    author: 'BrandingLift Team',
    readTime: '5 min read',
  },
  {
    slug: 'ai-changing-digital-marketing',
    title: 'How AI Is Changing Digital Marketing',
    excerpt:
      'From automation to personalization, AI is reshaping how brands reach customers. Here is what to embrace—and what to keep human.',
    content: [
      'Artificial intelligence is no longer a future trend—it is embedded in ad platforms, email tools, analytics, and content workflows today.',
      'AI excels at repetitive tasks: scheduling posts, A/B testing headlines, segmenting audiences, and surfacing insights from large datasets. That frees marketers to focus on strategy and creativity.',
      'Personalization at scale is another win. AI can tailor recommendations, email content, and ad creative based on user behavior—when used responsibly and with clear privacy practices.',
      'What AI cannot replace is authentic brand voice and genuine relationships. The best results come from combining smart automation with human judgment, empathy, and storytelling.',
      'Brands that learn to work with AI—not against it or blindly through it—will move faster and connect more meaningfully with their audiences.',
    ],
    image: '/blogs/ai-changing-digital-marketing.jpg',
    date: '2026-04-28',
    category: 'AI & Automation',
    author: 'BrandingLift Team',
    readTime: '4 min read',
  },
  {
    slug: 'website-that-converts',
    title: 'Building a Website That Converts Visitors into Customers',
    excerpt:
      'Your website is your hardest-working salesperson. Learn the design and content choices that turn traffic into leads and sales.',
    content: [
      'A beautiful website that does not convert is a missed opportunity. Conversion-focused design starts with clarity: who you help, what you offer, and what action you want visitors to take.',
      'Above the fold, lead with a strong headline and a single primary call-to-action. Reduce friction—fewer form fields, obvious next steps, and trust signals like testimonials or client logos.',
      'Speed and mobile experience are non-negotiable. Most visitors will arrive on a phone; if your site is slow or hard to use, they will leave before they ever see your offer.',
      'Use social proof strategically. Case studies, reviews, and results-focused copy build credibility and answer the question every visitor asks: "Can these people actually help me?"',
      'Test and iterate. Small changes to headlines, button copy, and page layout can significantly improve conversion rates over time.',
    ],
    image: '/blogs/website-that-converts.jpg',
    date: '2026-04-15',
    category: 'Web Development',
    author: 'BrandingLift Team',
    readTime: '5 min read',
  },
  {
    slug: 'social-media-trends-small-business',
    title: 'Social Media Trends Small Businesses Should Know',
    excerpt:
      'You do not need a huge budget to win on social. These trends help small businesses build community and drive real results.',
    content: [
      'Short-form video continues to dominate attention. Reels, Stories, and quick tips perform well because they are easy to consume and share—even with a smartphone and minimal editing.',
      'Authenticity beats polish. Behind-the-scenes content, founder stories, and honest customer interactions often outperform overly produced ads, especially for local and niche brands.',
      'Community over follower count. Engaging with comments, collaborating with complementary businesses, and showing up consistently matters more than chasing vanity metrics.',
      'Paid social remains valuable when targeted well. Even modest budgets on Meta or LinkedIn can reach precise audiences if your creative and landing pages are aligned with their needs.',
      'Repurpose content across platforms. Turn a blog post into carousel slides, a video script, and an email snippet to maximize the value of every piece you create.',
    ],
    image: '/blogs/social-media-trends-small-business.jpg',
    date: '2026-04-02',
    category: 'Social Media',
    author: 'BrandingLift Team',
    readTime: '4 min read',
  },
  {
    slug: 'power-of-consistent-brand-identity',
    title: 'The Power of a Consistent Brand Identity',
    excerpt:
      'Consistency builds recognition and trust. Here is how to keep your brand cohesive across every channel and touchpoint.',
    content: [
      'Your brand identity is more than a logo—it is the full experience people have when they interact with your business. Colors, typography, tone of voice, photography style, and layout all contribute.',
      'Consistency does not mean boring. It means every piece of communication feels unmistakably yours, whether someone sees an Instagram post, a proposal, or your storefront.',
      'Brand guidelines help teams and partners stay aligned. Document your colors, fonts, logo usage, and voice principles so nothing goes off-brand as you scale.',
      'Audit your touchpoints regularly. Websites, social profiles, email signatures, and printed materials should all tell the same story. Gaps in consistency create confusion and weaken trust.',
      'When identity is cohesive, marketing becomes easier. You spend less time reinventing and more time connecting—because your brand already speaks with one clear voice.',
    ],
    image: '/blogs/power-of-consistent-brand-identity.jpg',
    date: '2026-03-20',
    category: 'Design',
    author: 'BrandingLift Team',
    readTime: '4 min read',
  },
];

/** Number of posts shown on the homepage preview */
export const homepageBlogCount = 3;

export function getAllBlogs() {
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getFeaturedBlogs(limit = homepageBlogCount) {
  return getAllBlogs().slice(0, limit);
}

export function getBlogBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}

export function getAllBlogSlugs() {
  return blogPosts.map((post) => post.slug);
}

export function formatBlogDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
