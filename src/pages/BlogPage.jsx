import { Link } from "react-router-dom";
import { posts } from "../posts/posts";

export default function BlogPage() {
  return (
    <div className="container">
      <div className="card">
        <h1>Blog</h1>
        <ul className="list">
          {posts.map((post) => (
            <li key={post.slug} className="post-item">
              <Link to={`/blog/${post.slug}`} className="post-title">
                {post.title}
              </Link>
              <div className="post-meta">{post.date}</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6 }}>
                {post.tags?.map((t) => (
                  <span key={t} style={{
                    fontSize: 12, padding: "2px 10px",
                    border: "1px solid #e5e7eb", borderRadius: 999
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
