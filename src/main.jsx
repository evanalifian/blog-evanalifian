import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import "./blog.css";
import MainTemplateLayout from "./components/templates/MainTemplateWrap";
import Home from "./pages/home/Home";
import Blog from "./pages/blogs/Blog";
import BlogView from "./pages/blogs/BlogView";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:category/:title" element={<BlogView />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
