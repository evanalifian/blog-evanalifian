import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import "./blog.css";
import HomePage from "./pages/home/HomePage";
import BlogPage from "./pages/blogs/BlogPage";
import MainLayout from "./components/MainLayout";
import { blogs } from "./pages/blogs/BlogRoute";
import NotFoundPage from "./pages/404/NotFoundPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route element={<BlogPage />}>
            {blogs.map(blog => (
              <Route key={blog.title} path={`/blog/${blog.category}/${blog.title}`} element={blog.content} />
            ))}
            {/* <Route path="/blog/:category/:title" element={<BlogPage />} /> */}
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
