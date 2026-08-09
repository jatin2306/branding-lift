import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import SiteShell from '@/shared/layout/SiteShell/SiteShell';
import ServiceDetailPage from '@/features/services/components/ServiceDetailPage/ServiceDetailPage';
import {
  getAllServiceSlugs,
  getServiceWithCategory,
  siteConfig,
} from '@/lib/config/siteConfig';

type PageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Generate static paths for ALL possible slugs:
 * - Service slugs (e.g., "web-development")
 * - Category slugs (e.g., "design", "ai-automation")
 * This prevents 500 errors for category slugs.
 */
export async function generateStaticParams() {
  // Get all service slugs
  const serviceSlugs = getAllServiceSlugs();

  // Get all category slugs (normalize to kebab-case like service slugs)
  const categorySlugs = (siteConfig.serviceCategories || []).map((cat) =>
    cat.label
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9-]/g, '')
  );

  // Combine and deduplicate
  const allSlugs = [...new Set([...serviceSlugs, ...categorySlugs])];

  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceWithCategory(slug);

  if (!service) {
    // If it's a category slug, return generic metadata
    const category = siteConfig.serviceCategories.find(
      (cat) =>
        cat.label
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/&/g, 'and')
          .replace(/[^a-z0-9-]/g, '') === slug
    );
    if (category) {
      return {
        title: `${category.label} Services | ${siteConfig.brand.name}`,
        description: category.description || `Explore our ${category.label} services.`,
      };
    }
    return { title: `Services | ${siteConfig.brand.name}` };
  }

  return {
    title: `${service.name} | ${siteConfig.brand.name}`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  // 1. Check if this slug is a category slug
  const isCategory = siteConfig.serviceCategories.some(
    (cat) =>
      cat.label
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9-]/g, '') === slug
  );

  // If it's a category, redirect to the services section on the homepage
  if (isCategory) {
    redirect('/#services');
  }

  // 2. Otherwise, try to get the service
  const service = getServiceWithCategory(slug);

  if (!service) {
    notFound();
  }

  return (
    <SiteShell>
      <ServiceDetailPage service={service} />
    </SiteShell>
  );
}