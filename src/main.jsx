import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import "./blog.css";
import Home from "./pages/home/Page";
import BlogView from "./pages/blogs/Page";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:category/:title" element={<BlogView />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
