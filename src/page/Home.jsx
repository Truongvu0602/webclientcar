import React, { useState, useEffect } from "react";
import Header from "../components/Menu";
import BannerSection from "../components/BannerSection";
import FeaturesSection from "../components/FeaturesSection";
import ModelSection from "../components/ModelSection";
import NewsSection from "../components/NewsSection";
import CommunitySection from "../components/CommunitySection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroImages } from "../thunk/heroImgThunk";
import { fetchCarModel } from "../thunk/carModelThunk";
import { fetchCarModelFeaturn } from "../thunk/carModelFeaturnThunk";
import { fetchNews } from "../thunk/newsThunk";
import { fetchCommunity } from "../thunk/communityThunk";
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("2024");
  const dispatch = useDispatch();
  const heroImages = useSelector((state) => state.heroImg.heroImages);
  const carModel = useSelector((state) => state.carModel.carModel);
  const newsData = useSelector((state) => state.newsData.newsData);
  const communityPosts = useSelector(
    (state) => state.communityPosts.communityPosts
  );
  const carModelFeaturn = useSelector(
    (state) => state.carModelFeaturn.carModelFeaturn
  );

  // call api của BannerSection
  useEffect(() => {
    dispatch(fetchHeroImages());
  }, []);
  // call api của ModelSection
  useEffect(() => {
    dispatch(fetchCarModel());
  }, []);
  // call api của ModelSection
  useEffect(() => {
    dispatch(fetchCarModelFeaturn());
  }, []);
  // call api news
  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  useEffect(() => {
    dispatch(fetchCommunity());
  }, []);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages]);

  const nextSlide = () => {
    if (heroImages.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    if (heroImages.length === 0) return;
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* Banner Section */}
      {heroImages.length === 0 ? (
        <div className="h-screen flex items-center justify-center text-xl">
          Đang tải ảnh...
        </div>
      ) : (
        <BannerSection
          heroImages={heroImages}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      )}
      {/* Features Section */}
      <FeaturesSection />
      {/* Models Section */}
      <ModelSection
        carModel={carModel}
        carModelFeaturn={carModelFeaturn}
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
