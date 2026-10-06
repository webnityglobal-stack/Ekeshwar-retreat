import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/contact" element={<ContactUs />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;