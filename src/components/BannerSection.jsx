// components/HeroSection.jsx
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const BannerSection = ({
  currentSlide,
  heroImages,
  nextSlide,
  prevSlide,
  setCurrentSlide,
}) => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImages[currentSlide]}
          alt="Toyota Fortuner"
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              TOYOTA
              <span className="block text-red-500 text-4xl md:text-6xl">
                FORTUNER
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              Sức mạnh bền bỉ, phong cách đẳng cấp. Khám phá thế giới cùng
              Toyota Fortuner.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Xem video</span>
              </button>
              <button className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Khám phá ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors z-10"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors z-10"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-red-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerSection;
