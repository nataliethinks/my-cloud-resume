import { Routes, Route, Link, Navigate } from "react-router-dom";
import ResumePage from "./pages/ResumePage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

export default function App() {
  return (
    <>
      <nav className="nav-right">
        <Link to="/" className="nav-btn">Resume</Link>
        <Link to="/blog" className="nav-btn">Blog</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ResumePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
