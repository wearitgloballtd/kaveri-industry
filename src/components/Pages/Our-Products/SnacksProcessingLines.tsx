import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Zap,
  Settings,
  Thermometer,
  Droplets,
  Star,
  Users,
  Package,
  Award,
  TrendingUp,
} from "lucide-react";

const SnacksProcessingLines: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutions = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Mixing and Extrusion",
      description: "For creating the perfect base shape and texture.",
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Frying and Baking",
      description: "Precision-controlled systems for that perfect crunch.",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Seasoning and Coating",
      description: "Evenly applies flavors for a delicious final product.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cooling and Conveying",
      description: "Gently handles the product to prepare it for packaging.",
    },
  ];

  const applications = [
    "Potato chips",
    "Corn puffs",
    "Pellet-based snacks",
    "Ethnic savories (namkeen)",
    "Other fried or baked snacks",
  ];

  return (
    <div
      className={`transition-opacity duration-1000 ease-in-out min-h-screen bg-gray-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
      `}</style>

      {/* Hero Section (BandSealer themed) */}
      <div className="relative bg-red-600 h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70" />
        <img
          src="/Our-Products/Snacks-Processing-Lines/Snacks Processing Lines (Complete end-to-end solutions for efficient snack manufacturing).jpg"
          alt="Snacks Processing Lines"
          className="w-full h-full object-cover transform scale-105 transition-transform duration-10000 hover:scale-100"
        />
        <div className="absolute inset-0 flex items-center justify-start px-8 md:px-20">
          <div
            className="max-w-2xl transform transition-all duration-1000 translate-y-0"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">
                Industry Leading Technology
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Snacks Processing Lines
            </h1>
            <p className="text-lg md:text-xl text-red-50 mb-0">
              Complete end-to-end solutions for efficient snack manufacturing
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Stats Section */}
        <section className="py-16 bg-white rounded-xl mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-red-600 mb-3 flex justify-center">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">200+</div>
              <p className="text-gray-600 font-medium">Lines Delivered</p>
            </div>
            <div>
              <div className="text-red-600 mb-3 flex justify-center">
                <Package className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">100+</div>
              <p className="text-gray-600 font-medium">SKUs Supported</p>
            </div>
            <div>
              <div className="text-red-600 mb-3 flex justify-center">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">15+</div>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div>
              <div className="text-red-600 mb-3 flex justify-center">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">99.9%</div>
              <p className="text-gray-600 font-medium">Uptime Reliability</p>
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-16 h-1 bg-red-600 rounded mb-6"></div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                End-to-End Snack Production
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We offer a complete Snacks Processing Line designed to
                streamline your entire production from start to finish. Our
                solutions integrate every stage of snack manufacturing for a
                smooth, efficient workflow across a wide variety of snack
                products.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're making potato chips, extruded snacks like corn
                puffs, or traditional namkeen, our processing lines are
                engineered for maximum efficiency and hygiene.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/contact"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 font-semibold transform hover:scale-105"
                >
                  Contact Experts
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="#solutions"
                  className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-red-600 hover:text-red-600 transition-colors font-semibold transform hover:scale-105"
                >
                  Explore Solutions
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/Our-Products/Snacks-Processing-Lines/End-to-End Snack Production.jpg"
                  alt="Snack Line"
                  className="w-full h-auto"
                />
                <div className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-gray-800">
                    End-to-End
                  </div>
                  <div className="text-sm text-gray-600">Hygienic Design</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two-column: left content + right sidebar form card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            {/* Our Solutions */}
            <div
              id="solutions"
              className={`mb-16 transition-all duration-800 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                Our Solutions Include
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                      activeFeature === index
                        ? "ring-2 ring-red-500 bg-red-50"
                        : ""
                    }`}
                    onMouseEnter={() => setActiveFeature(index)}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`inline-flex p-3 rounded-lg mb-4 transition-colors duration-300 ${
                        activeFeature === index
                          ? "bg-red-500 text-white"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div
              className={`bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl p-12 transition-all duration-800 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                Applications
              </h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {applications.map((app, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center transform hover:scale-105 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <ChevronRight className="w-5 h-5 text-red-400" />
                    </div>
                    <p className="text-white font-medium">{app}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Interested Card */}
          <aside className="md:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Interested?</h3>
                <p className="text-gray-600 mb-4">
                  Contact our experts to discuss your snack line requirements
                  and get a customized solution.
                </p>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                    <input
                      type="tel"
                      placeholder="Phone (optional)"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Requirements"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Snack Production?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to design a custom snacks processing
            line that meets your specific requirements.
          </p>
          <a
            href="/contact"
            className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span className="font-semibold">Contact Our Experts</span>
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SnacksProcessingLines;
