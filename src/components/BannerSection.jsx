// // components/HeroSection.jsx
// import { ChevronLeft, ChevronRight, Play } from "lucide-react";

// const BannerSection = ({
//   currentSlide,
//   heroImages,
//   nextSlide,
//   prevSlide,
//   setCurrentSlide,
// }) => {
//   return (
//     <section id="home" className="relative h-screen overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src={heroImages[currentSlide]?.image_url}
//           alt="Toyota Fortuner"
//           className="w-full h-full object-cover transition-transform duration-700"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
//       </div>

//       {/* Content Overlay */}
//       <div className="relative z-10 flex items-center h-full">
//         <div className="container mx-auto px-4">
//           <div className="max-w-2xl">
//             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//               TOYOTA
//               <span className="block text-red-500 text-4xl md:text-6xl">
//                 FORTUNER
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
//               Sức mạnh bền bỉ, phong cách đẳng cấp. Khám phá thế giới cùng
//               Toyota Fortuner.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2">
//                 <Play className="w-5 h-5" />
//                 <span>Xem video</span>
//               </button>
//               <button className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
//                 Khám phá ngay
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Slide Controls */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors z-10"
//       >
//         <ChevronLeft className="w-6 h-6 text-white" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors z-10"
//       >
//         <ChevronRight className="w-6 h-6 text-white" />
//       </button>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
//         {heroImages.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-colors ${
//               index === currentSlide ? "bg-red-500" : "bg-white/50"
//             }`}
//           />
//         ))}
//         {/* {heroImages.map((img, index) => (
//           <button
//             key={img.id} // dùng id thay vì index
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-colors ${
//               index === currentSlide ? "bg-red-500" : "bg-white/50"
//             }`}
//           />
//         ))} */}
//       </div>
//     </section>
//   );
// };

// export default BannerSection;
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

const BannerSection = ({
  currentSlide,
  heroImages,
  nextSlide,
  prevSlide,
  setCurrentSlide,
}) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImages[currentSlide]?.image_url}
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
              <button
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2"
                onClick={() => setShowVideo(true)}
              >
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

      {/* Video Popup */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="relative w-full max-w-3xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/GxigvJrT-fc?autoplay=1"
              title="The All New Toyota Fortuner | TVC"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-4 -right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BannerSection;
