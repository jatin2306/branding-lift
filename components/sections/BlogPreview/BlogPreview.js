import { getFeaturedBlogs } from '@/config/blogs';
import BlogGrid from '@/components/blog/BlogGrid/BlogGrid';
import Button from '@/components/ui/Button/Button';
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
