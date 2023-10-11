import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:blogId" element={<BlogPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
