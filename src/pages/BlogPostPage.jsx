import { useParams, Link } from "react-router-dom";
import { posts } from "../posts/posts";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
  <div className="container">
  <div className="card post">
    <Link to="/blog" className="backlink">← Back to Blog</Link>
    <h1>{post.title}</h1>
    <div className="date">{post.date}</div>

    {post.content.trim().split("\n").map((line, i) => (
      <p key={i}>{line}</p>
    ))}
  </div>
</div>
  );
}
