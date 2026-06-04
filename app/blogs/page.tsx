import type { Metadata } from 'next';
import SiteShell from '@/components/layout/SiteShell/SiteShell';
import BlogListPage from '@/components/blog/BlogListPage/BlogListPage';
import { siteConfig } from '@/config/siteConfig';

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.brand.name}`,
  description: 'Insights on brand strategy, design, marketing, and digital growth from BrandingLift.',
};

export default function BlogsPage() {
  return (
    <SiteShell>
      <BlogListPage />
    </SiteShell>
  );
}
