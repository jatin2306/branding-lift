import Link from 'next/link';
import { formatBlogDate } from '@/lib/config/blogs';
import './BlogCard.css';

export default function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <Link href={`/blogs/${post.slug}`} className="blog-card__media-link">
        <img src={post.image} alt="" className="blog-card__image" />
        <span className="blog-card__category">{post.category}</span>
      </Link>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
          <span className="blog-card__dot" aria-hidden />
          <span>{post.readTime}</span>
        </div>
        <h3 className="blog-card__title">
          <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <Link href={`/blogs/${post.slug}`} className="blog-card__action">
          READ MORE
        </Link>
      </div>
    </article>
  );
}
