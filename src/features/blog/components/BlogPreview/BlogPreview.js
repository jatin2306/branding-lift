import { getFeaturedBlogs } from '@/lib/config/blogs';
import BlogGrid from '@/features/blog/components/BlogGrid/BlogGrid';
import Button from '@/shared/ui/Button/Button';
import './BlogPreview.css';

export default function BlogPreview() {
  const posts = getFeaturedBlogs();

  return (
    <div className="blog-preview">
      <BlogGrid posts={posts} />
      <div className="blog-preview__actions">
        <Button href="/blogs" variant="primary" className="blog-preview__view-all">
          View all blogs
        </Button>
      </div>
    </div>
  );
}
