import React from "react";
import { Mail, MapPin } from "lucide-react";

const FooterHeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-gray-900 py-16 border-t border-gray-700 overflow-hidden">
      {/* Geometric SVG background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        fill="none"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 0 L 400 0 L 800 320 L 0 320 Z"
          stroke="#2d3748"
          strokeWidth="1"
        />
        <path
          d="M 1440 0 L 1040 0 L 640 320 L 1440 320 Z"
          stroke="#2d3748"
          strokeWidth="1"
        />
        <rect
          x="900"
          y="40"
          width="300"
          height="120"
          rx="20"
          stroke="#2d3748"
          strokeWidth="1"
          fill="none"
        />
        <rect
          x="200"
          y="120"
          width="200"
          height="80"
          rx="20"
          stroke="#2d3748"
          strokeWidth="1"
          fill="none"
        />
      </svg>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Left: Heading, description, button */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              We’re the future
              <br />
              of metallurgy industry
            </h2>
            <p className="text-gray-300 mb-8">
              Lorem ipsum dolor sit amet consectetur tortor donec ut nulla
              mattis vitae purus a cursus mauris eu non dictum sit adipiscing
              nulla.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition-colors font-semibold">
              Get a quote →
            </button>
          </div>
          {/* Right: Contact and Location */}
          <div className="md:w-1/2 flex flex-col sm:flex-row gap-8 md:gap-16">
            {/* Contact us */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 flex items-center space-x-2">
                <Mail className="w-5 h-5 text-red-500" />
                <span>Contact us</span>
              </h3>
              <div className="text-gray-300 text-sm mb-1">
                Email:{" "}
                <span className="text-white font-medium">
                  contact@industrial.com
                </span>
              </div>
              <div className="text-gray-300 text-sm">
                Phone:{" "}
                <span className="text-white font-medium">(123) 456 - 789</span>
              </div>
            </div>
            {/* Our location */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Our location</span>
              </h3>
              <div className="text-gray-300 text-sm">
                16 Finland St
                <br />
                Pittsburgh,
                <br />
                Pennsylvania, PA, 15219
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterHeroSection;
