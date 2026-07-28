import type { Metadata } from 'next';
import SiteShell from '@/shared/layout/SiteShell/SiteShell';
import ContactSection from '@/features/contact/components/ContactSection/ContactSection';
import { siteConfig } from '@/lib/config/siteConfig';

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
