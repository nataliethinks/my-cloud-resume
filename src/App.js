import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles/site.css";
import ResumePage from "./pages/ResumePage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import "./App.css";


export default function App() {
  return (
    <BrowserRouter>
      <nav className="nav-right">
        <Link to="/" className="nav-btn">Resume</Link>
        <Link to="/blog" className="nav-btn">Blog</Link>
      </nav>

      <Routes>
        <Route path="*" element={<ResumePage />} />
        <Route path="/blog" element={<BlogPage />} />
         <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}
