import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ArrowDown,
  Star,
  Users,
  Package,
  Award,
  TrendingUp,
} from "lucide-react";

const RotaryPickFillSealMachine: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("features");
  const [showMore, setShowMore] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    "Complete Automation: Handles the entire process from pouch feeding to sealing.",
    "Pouch Versatility: Works with a wide range of pre-made pouches (stand-up, zipper, 3-side seal).",
    "Accurate Filling: Integrates seamlessly with various fillers for liquids, powders, and solids.",
    "High-Speed Operation: Significantly increases your packaging throughput.",
  ];

  const applications = [
    "Ready-to-eat meals",
    "Snacks",
    "Pet food",
    "Liquids",
    "Powders",
    "Granules in stand-up pouches",
  ];

  return (
    <div
      className={`transition-opacity duration-1000 ease-in-out min-h-screen bg-gray-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative bg-red-600 h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
        <img
          src="/images/rotary-pfs-hero.jpg"
          alt="Rotary Pick Fill Seal Machine"
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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">
                Fully Automated Solution
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Rotary <span className="text-red-100">Pick Fill Seal</span>{" "}
              Machine
            </h1>
            <p className="text-lg md:text-xl text-red-50 mb-8">
              Automated packaging for pre-made pouches with a premium finish.
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
              <div className="text-3xl font-bold text-gray-800 mb-2">100+</div>
              <p className="text-gray-600 font-medium">Global Installations</p>
            </div>
            <div>
              <div className="text-red-600 mb-3 flex justify-center">
                <Package className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">500M+</div>
              <p className="text-gray-600 font-medium">Pouches Filled</p>
            </div>
            <div>
              <div className="text-red-600 mb-3 flex justify-center">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">99.9%</div>
              <p className="text-gray-600 font-medium">Operational Uptime</p>
            </div>
            <div>
              <div className="text-red-600 mb-3 flex justify-center">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">60</div>
              <p className="text-gray-600 font-medium">PPM High Speed</p>
            </div>
          </div>
        </section>

        {/* Machine Showcase Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-16 h-1 bg-red-600 rounded mb-6"></div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Premium Automated Packaging
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Take your packaging to the next level with our fully automated
                Rotary Pick-Fill-Seal Machine. This sophisticated system is
                designed to handle pre-made pouches, including popular stand-up
                and zippered bags. The machine's rotary turret expertly picks up
                a pouch, opens it, fills it with your product, and then creates
                a secure, clean seal.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                It's the ultimate solution for achieving a premium look for your
                product with high efficiency and minimal labor.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/contact"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 font-semibold transform hover:scale-105"
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-red-600 hover:text-red-600 transition-colors font-semibold transform hover:scale-105">
                  Technical Specs
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/images/rotary-pfs-machine.jpg"
                  alt="Rotary Pick Fill Seal Machine"
                  className="w-full h-auto"
                />
                <div className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-gray-800">Zipper</div>
                  <div className="text-sm text-gray-600">Pouch Ready</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="md:col-span-2">
            {/* Interactive Tab System */}
            <div className="mb-12">
              <div className="flex border-b border-gray-300 mb-6">
                <button
                  onClick={() => setActiveTab("features")}
                  className={`px-6 py-3 font-medium text-sm ${
                    activeTab === "features"
                      ? "border-b-2 border-red-500 text-red-500"
                      : "text-gray-600 hover:text-red-400"
                  }`}
                >
                  Features & Benefits
                </button>
                <button
                  onClick={() => setActiveTab("applications")}
                  className={`px-6 py-3 font-medium text-sm ${
                    activeTab === "applications"
                      ? "border-b-2 border-red-500 text-red-500"
                      : "text-gray-600 hover:text-red-400"
                  }`}
                >
                  Applications
                </button>
                <button
                  onClick={() => setActiveTab("specifications")}
                  className={`px-6 py-3 font-medium text-sm ${
                    activeTab === "specifications"
                      ? "border-b-2 border-red-500 text-red-500"
                      : "text-gray-600 hover:text-red-400"
                  }`}
                >
                  Specifications
                </button>
              </div>

              {/* Tab Content */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                {activeTab === "features" && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      Key Features & Benefits
                    </h3>
                    <ul className="space-y-3">
                      {features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start p-2 hover:bg-white rounded-md transition-colors duration-300"
                          style={{
                            animationDelay: `${index * 100}ms`,
                            opacity: 0,
                            animation: "fadeIn 0.5s ease-out forwards",
                          }}
                        >
                          <Check
                            className="text-green-500 mt-1 mr-2 flex-shrink-0"
                            size={18}
                          />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "applications" && (
                  <div className="animate-fadeIn">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      Ideal Applications
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {applications.map((app, index) => (
                        <div
                          key={index}
                          className="bg-white p-4 rounded-lg border border-gray-200 hover:border-red-400 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                          style={{
                            animationDelay: `${index * 100}ms`,
                            opacity: 0,
                            animation: "fadeIn 0.5s ease-out forwards",
                          }}
                        >
                          <p className="text-gray-700">{app}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "specifications" && (
                  <div className="animate-fadeIn">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      Technical Specifications
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="p-3 border border-gray-300">
                              Specification
                            </th>
                            <th className="p-3 border border-gray-300">
                              Details
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-3 border border-gray-300">
                              Stations
                            </td>
                            <td className="p-3 border border-gray-300">
                              6 or 8 stations
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-300">
                              Pouch Width
                            </td>
                            <td className="p-3 border border-gray-300">
                              100-300 mm
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-300">
                              Pouch Length
                            </td>
                            <td className="p-3 border border-gray-300">
                              150-400 mm
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-300">
                              Speed
                            </td>
                            <td className="p-3 border border-gray-300">
                              Up to 60 pouches/min
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-300">
                              Control System
                            </td>
                            <td className="p-3 border border-gray-300">
                              PLC with HMI Touchscreen
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Interactive Expand Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Sophisticated Rotary Technology
              </h3>
              <p className="text-gray-600 mb-4">
                Our machine's rotary design ensures smooth, high-speed, and
                reliable operation for a variety of pre-made pouches.
              </p>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  showMore ? "max-h-[1000px]" : "max-h-20"
                }`}
              >
                <p className="text-gray-600 mb-4">
                  Each station on the rotary turret performs a specific
                  function: pouch picking, date coding, pouch opening, filling,
                  settling, sealing, and discharging. This modular approach
                  allows for flexibility and customization to meet your exact
                  packaging needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Key Stations</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Pouch Magazine & Picking</li>
                      <li>Zipper Opening Device</li>
                      <li>Accurate Dosing & Filling</li>
                      <li>Robust Sealing Jaws</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Safety & Control</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>"No Pouch, No Fill" sensor</li>
                      <li>"No Open, No Fill" sensor</li>
                      <li>Jam detection sensors</li>
                      <li>Full safety guarding</li>
                    </ul>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowMore(!showMore)}
                className="flex items-center text-red-500 font-medium mt-2 hover:text-red-600"
              >
                {showMore ? "Show Less" : "Show More"}
                <ArrowDown
                  className={`ml-1 transition-transform duration-300 ${
                    showMore ? "rotate-180" : "rotate-0"
                  }`}
                  size={16}
                />
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              {/* Contact Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
                <h3 className="text-xl font-bold mb-4">Interested?</h3>
                <p className="text-gray-600 mb-6">
                  Contact our experts to discuss your pre-made pouch
                  requirements and get a customized solution.
                </p>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Requirements"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>

              {/* Related Products */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Related Products</h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/products/multi-head-weigh"
                      className="flex items-center group"
                    >
                      <div className="w-16 h-16 bg-gray-200 rounded-md mr-3 overflow-hidden">
                        <div className="w-full h-full bg-gray-300"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 group-hover:text-red-500 transition-colors">
                          Multi-Head Weigher
                        </h4>
                        <p className="text-sm text-gray-500">
                          For accurate filling
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/z-elevator"
                      className="flex items-center group"
                    >
                      <div className="w-16 h-16 bg-gray-200 rounded-md mr-3 overflow-hidden">
                        <div className="w-full h-full bg-gray-300"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 group-hover:text-red-500 transition-colors">
                          Z Elevator
                        </h4>
                        <p className="text-sm text-gray-500">
                          For product feeding
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/band-sealer"
                      className="flex items-center group"
                    >
                      <div className="w-16 h-16 bg-gray-200 rounded-md mr-3 overflow-hidden">
                        <div className="w-full h-full bg-gray-300"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 group-hover:text-red-500 transition-colors">
                          Band Sealer
                        </h4>
                        <p className="text-sm text-gray-500">
                          For simpler bag sealing
                        </p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotaryPickFillSealMachine;
