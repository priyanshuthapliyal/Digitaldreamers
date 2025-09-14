import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Brands from "./components/Brands";
import CTA from "./components/CTA";
import About from "./pages/About"; // About moved to /pages
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import BrandShoots from "./pages/BrandShoots";
import GraphicDesign from "./pages/GraphicDesign";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import VideoEditing from "./pages/Videoediting";
import Ads from "./pages/Ads";
import SocialMediaManagement from "./pages/SocialMediaManagement";

export default function App() {
  return (
    <div className="w-full">
      <ScrollToTop />
      <Navbar />
      {/* Push everything down so it's not hidden by fixed navbar */}
      <div className="pt-20">
        <Routes>
          {/* Main homepage */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Brands />
                <Services />
                <Portfolio />
                <Team />
                <CTA />
                <Contact />
                <Footer />
              </>
            }
          />
          {/* About page */}
          <Route path="/about" element={<About />} />

          {/* Service detail pages */}
          <Route path="/services/brand-shoots" element={<BrandShoots />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route
            path="/services/social-media-marketing"
            element={<SocialMediaMarketing />}
          />
          <Route path="/services/video-editing" element={<VideoEditing />} />
          <Route path="/services/ads" element={<Ads />} />
          <Route
            path="/services/social-media-management"
            element={<SocialMediaManagement />}
          />
        </Routes>
      </div>
    </div>
  );
}
