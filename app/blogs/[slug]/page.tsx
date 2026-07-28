import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteShell from '@/shared/layout/SiteShell/SiteShell';
import BlogDetail from '@/features/blog/components/BlogDetail/BlogDetail';
import { getAllBlogSlugs, getBlogBySlug } from '@/lib/config/blogs';
import { siteConfig } from '@/lib/config/siteConfig';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: `Blog | ${siteConfig.brand.name}` };

  return {
    title: `${post.title} | ${siteConfig.brand.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  return (
    <SiteShell>
      <BlogDetail post={post} />
    </SiteShell>
  );
}
