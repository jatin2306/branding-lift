import type { Metadata } from 'next';
import SiteShell from '@/shared/layout/SiteShell/SiteShell';
import BlogListPage from '@/features/blog/components/BlogListPage/BlogListPage';
import { siteConfig } from '@/lib/config/siteConfig';

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
