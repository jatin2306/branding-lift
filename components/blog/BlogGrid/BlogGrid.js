import BlogCard from '@/components/blog/BlogCard/BlogCard';
import './BlogGrid.css';

export default function BlogGrid({ posts }) {
  if (!posts?.length) return null;

  return (
    <div className="blog-grid">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
