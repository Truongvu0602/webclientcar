import React, { useState, useEffect } from "react";
import { heroImages, models, newsData, communityPosts } from "../data/data";
import Header from "../components/Menu";
import BannerSection from "../components/BannerSection";
import FeaturesSection from "../components/FeaturesSection";
import ModelSection from "../components/ModelSection";
import NewsSection from "../components/NewsSection";
import CommunitySection from "../components/CommunitySection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("2024");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* Banner Section */}
      <BannerSection
        heroImages={heroImages}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
      {/* Features Section */}
      <FeaturesSection />
      {/* Models Section */}
      <ModelSection
        models={models}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
      />
      {/* News Section */}
      <NewsSection newsData={newsData} />
      {/* Community Section */}
      <CommunitySection communityPosts={communityPosts} />
      {/* Contact Section */}
      <ContactSection />
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Home;
