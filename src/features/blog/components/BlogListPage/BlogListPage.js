import { getAllBlogs } from '@/lib/config/blogs';
import BlogGrid from '@/features/blog/components/BlogGrid/BlogGrid';
import './BlogListPage.css';

export default function BlogListPage() {
  const posts = getAllBlogs();

  return (
    <div className="blog-list-page">
      <div className="blog-list-page__hero">
        <div className="blog-list-page__hero-inner">
          <p className="blog-list-page__eyebrow">Insights &amp; ideas</p>
          <h1 className="blog-list-page__title">Our Blog</h1>
          <p className="blog-list-page__subtitle">
            Strategy, design, marketing, and growth—expert tips to help your brand lift higher.
          </p>
        </div>
      </div>
      <div className="blog-list-page__content">
        <BlogGrid posts={posts} />
      </div>
    </div>
  );
}
