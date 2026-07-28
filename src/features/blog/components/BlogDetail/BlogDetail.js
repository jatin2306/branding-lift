import Link from 'next/link';
import { formatBlogDate } from '@/lib/config/blogs';
import './BlogDetail.css';

export default function BlogDetail({ post }) {
  return (
    <article className="blog-detail">
      <div className="blog-detail__hero">
        <div className="blog-detail__hero-inner">
          <Link href="/blogs" className="blog-detail__back">
            ← Back to all blogs
          </Link>
          <span className="blog-detail__category">{post.category}</span>
          <h1 className="blog-detail__title">{post.title}</h1>
          <div className="blog-detail__meta">
            <span>{post.author}</span>
            <span className="blog-detail__dot" aria-hidden />
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            <span className="blog-detail__dot" aria-hidden />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="blog-detail__media-wrap">
        <img src={post.image} alt="" className="blog-detail__image" />
      </div>

      <div className="blog-detail__content">
        {post.content.map((paragraph, i) => (
          <p key={i} className="blog-detail__paragraph">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="blog-detail__footer">
        <Link href="/blogs" className="blog-detail__back-link">
          View all blogs
        </Link>
      </div>
    </article>
  );
}
