import React from "react";
import { ArrowRight } from "lucide-react";
import { Mail, MapPin } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url(/28820.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900/60"></div>
      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-8">
              Precision Engineering for FMCG Packaging Machines
            </h1>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
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
              <div>
                <p className="text-gray-400 text-sm mb-2">Clients worldwide</p>
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    560
                  </span>
                  <span className="text-red-500 text-2xl font-bold">+</span>
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">
                  Years of experience
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    24
                  </span>
                  <span className="text-red-500 text-2xl font-bold">+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:pl-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Your trusted partner in innovative and reliable packaging
              solutions that drive efficiency and growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition-colors flex items-center justify-center space-x-2">
                <span>Get a quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-gray-600 hover:border-gray-400 text-white px-6 py-3 rounded-full transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Full-width Contact Bar */}
      <div className="w-full flex justify-center absolute left-0 right-0 -bottom-20 z-20 mr-8">
        <div className="max-w-7xl w-full bg-gray-900 rounded-xl shadow-2xl px-8 py-10 grid md:grid-cols-3 gap-8 border border-gray-800 ml-auto">
          {/* Contact Us */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4 flex items-center space-x-2">
              <Mail className="w-5 h-5 text-red-500" />
              <span>Contact us</span>
            </h3>
            <div className="space-y-2">
              <div>
                <p className="text-gray-400 text-sm">
                  Email:{" "}
                  <span className="text-white font-medium">
                    contact@industrial.com
                  </span>
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">
                  Phone:{" "}
                  <span className="text-white font-medium">
                    (123) 456 - 789
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Our Location */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4 flex items-center space-x-2">
              <span className="inline-block">
                <MapPin className="w-5 h-5 text-red-500" />
              </span>
              <span>Our location</span>
            </h3>
            <div className="text-gray-300">
              <p>16 Finland St·Pittsburgh,</p>
              <p>Pennsylvania, PA, 15219</p>
            </div>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Stay tunned for more news
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white text-gray-900 px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-r-full transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
