import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteShell from '@/shared/layout/SiteShell/SiteShell';
import ServiceDetailPage from '@/components/services/ServiceDetailPage/ServiceDetailPage';
import {
  getAllServiceSlugs,
  getServiceWithCategory,
  siteConfig,
} from '@/lib/config/siteConfig';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceWithCategory(slug);
  if (!service) return { title: `Services | ${siteConfig.brand.name}` };

  return {
    title: `${service.name} | ${siteConfig.brand.name}`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceWithCategory(slug);

  if (!service) notFound();

  return (
    <SiteShell>
      <ServiceDetailPage service={service} />
    </SiteShell>
  );
}
