import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import IndustryFutureSection from "./components/IndustryFutureSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import QualitySection from "./components/QualitySection";
import FooterHeroSection from "./components/FooterHeroSection";
import TestimonialSection from "./components/TestimonialSection";
import ClientWorkSection from "./components/ClientWorkSection";
import ContactQuoteSection from "./components/ContactQuoteSection";
import NewsArticlesSection from "./components/NewsArticlesSection";
import BrandsCompaniesSection from "./components/BrandsCompaniesSection";
import Footer from "./components/Footer";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/Get-In-Touch/ContactPage";
import ProductsSection from "./components/Pages/Pages-Navigation/OurProducts";
import ArticlesResourcesSection from "./components/Pages/Pages-Navigation/ArticlesResourcesSection";
import BlogPage from "./components/Pages/Pages-Navigation/BlogPage";
import Innovation from "./components/Innovation";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <BrowserRouter>
      <Navigation isScrolled={isScrolled} showNavbar={showNavbar} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <IndustryFutureSection />
              <ServicesSection />
              <ProcessSection />
              <QualitySection />
              <FooterHeroSection />
              <TestimonialSection />
              <ClientWorkSection />
              <ContactQuoteSection />
              <NewsArticlesSection />
              <BrandsCompaniesSection />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/our-products" element={<ProductsSection />} />
        <Route
          path="/articles-resources"
          element={<ArticlesResourcesSection />}
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/innovation" element={<Innovation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
