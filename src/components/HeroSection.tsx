import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/Home-Page/Precision Engineering for FMCG Packaging Machines.jpg",
    "/Home-Page/We’re the future of metallurgy industry.jpg",
    "/Home-Page/A Legacy of Quality and Innovation.jpg",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-advance images every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900/60"></div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-red-500 scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-8 animate-fade-in">
              Precision Engineering for Tabacco industries,Nicotine Snus
              Machinery and FMCG Packaging Machines
            </h2>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="text-gray-400 text-sm mb-2">
                  Clients satisfaction
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    100
                  </span>
                  <span className="text-red-500 text-2xl font-bold">%</span>
                </div>
              </div>
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="text-gray-400 text-sm mb-2">Clients worldwide</p>
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    150
                  </span>
                  <span className="text-red-500 text-2xl font-bold">+</span>
                </div>
              </div>
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <p className="text-gray-400 text-sm mb-2">
                  Years of experience
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    35
                  </span>
                  <span className="text-red-500 text-2xl font-bold">+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:pl-8">
            <p
              className="text-gray-300 text-lg leading-relaxed mb-8 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              Your trusted partner in innovative and reliable packaging
              solutions that drive efficiency and growth.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "1s" }}
            >
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg">
                <span>Get a quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-gray-600 hover:border-gray-400 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
