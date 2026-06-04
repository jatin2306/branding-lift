import type { Metadata } from 'next';
import SiteShell from '@/components/layout/SiteShell/SiteShell';
import ContactSection from '@/components/sections/ContactSection/ContactSection';
import { siteConfig } from '@/config/siteConfig';

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.brand.name}`,
  description: 'Get in touch with BrandingLift for brand strategy, design, and digital solutions.',
};

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactSection id="contact" />
    </SiteShell>
  );
}
