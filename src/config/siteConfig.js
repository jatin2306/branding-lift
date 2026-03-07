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
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: {
    primary: 'Contact Us',
    hero: 'Contact now',
  },
  hero: {
    title: 'Amazing & creative brand agency',
    subtitle: 'We are a creative agency specializing in brand strategy, design, and digital that lifts your business.',
    tags: ['Brand Strategy', 'Design', 'Digital'],
  },
  whatsapp: {
    number: '+91 9717882400',
    message: 'Hi, I\'d like to know more about brandinglift.',
  },
};
