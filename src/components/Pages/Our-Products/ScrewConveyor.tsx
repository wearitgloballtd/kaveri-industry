import React, { useState, useEffect, useRef } from "react";
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

// This component will be displayed at the route "/products/screw-conveyor"
const ScrewConveyor: React.FC = () => {
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
    "Gentle Product Handling: Minimizes product degradation and breakage",
    "Dust-Free Operation: Keeps your workspace clean and reduces material loss",
    "Customizable Design: Engineered to fit your specific application and space",
    "Low Maintenance: Built with high-quality materials for long-lasting, reliable service",
    "Versatile Installation: Can be mounted horizontally, vertically, or at an incline",
    "Energy Efficient: Optimized design reduces power consumption",
  ];

  const applications = [
    "Spices & Seasonings",
    "Flour & Bakery Ingredients",
    "Cement & Construction Materials",
    "Plastic Granules",
    "Animal Feed",
    "Agricultural Products",
    "Pharmaceutical Powders",
    "Food Processing",
  ];

  return (
    <div
      className={`transition-opacity duration-1000 ease-in-out min-h-screen bg-gray-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
      `}</style>

      {/* Hero Section (themed like BandSealer) */}
      <div className="relative bg-red-600 h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
        <img
          src="/Our-Products/ScrewConveyor/Screw Conveyor Systems.jpg"
          alt="Screw Conveyor System"
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
                Industry Leading Technology
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Screw Conveyor <span className="text-red-100">Systems</span>
            </h1>
            <p className="text-lg md:text-xl text-red-50 mb-0">
              Efficient, reliable and customizable solutions for your material
              handling needs
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Stats Section (match BandSealer styling) */}
        <section className="py-16 bg-white rounded-xl mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-red-600 mb-3 flex justify-center">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
              <p className="text-gray-600 font-medium">Systems Installed</p>
            </div>
            <div>
              <div className="text-red-600 mb-3 flex justify-center">
                <Package className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">30m</div>
              <p className="text-gray-600 font-medium">Max Length Options</p>
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

        {/* Machine Showcase Section (match BandSealer layout) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-16 h-1 bg-red-600 rounded mb-6"></div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Advanced Material Transfer Solutions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Move your bulk materials efficiently and gently with our Screw
                Conveyor Systems. A dust-free and contained method for
                transferring powders, granules, and free-flowing materials.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Designed for durability and performance, we customize length,
                diameter, and incline to match your facility layout and
                production needs.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/contact"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 font-semibold transform hover:scale-105"
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-red-600 hover:text-red-600 transition-colors font-semibold transform hover:scale-105">
                  Technical Specs
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/Our-Products/ScrewConveyor/Advanced Material Transfer Solutions.jpg"
                  alt="Screw Conveyor"
                  className="w-full h-auto"
                />
                <div className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-gray-800">
                    Dust-Free
                  </div>
                  <div className="text-sm text-gray-600">
                    Contained Transfer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Original content retained */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Advanced Material Transfer Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Move your bulk materials efficiently and gently with our Screw
              Conveyor Systems. An essential component in any processing plant,
              the screw conveyor (or auger conveyor) provides a dust-free and
              contained method for transferring powders, granules, and other
              free-flowing materials.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              At Kaveri Industries, we design our conveyor systems for
              durability and performance, customizing the length, diameter, and
              incline to perfectly match your facility's layout and production
              needs.
            </p>

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
                  <div>
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
                              Capacity
                            </td>
                            <td className="p-3 border border-gray-300">
                              Up to application requirements
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-300">
                              Length Options
                            </td>
                            <td className="p-3 border border-gray-300">
                              Custom up to 30m
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-300">
                              Incline Angle
                            </td>
                            <td className="p-3 border border-gray-300">
                              Horizontal/Inclined/Vertical
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-300">
                              Materials
                            </td>
                            <td className="p-3 border border-gray-300">
                              Carbon Steel / SS304 / SS316
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 border border-gray-300">
                              Drive Options
                            </td>
                            <td className="p-3 border border-gray-300">
                              VFD, geared motor
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
                Customization Options
              </h3>
              <p className="text-gray-600 mb-4">
                Every industry has unique requirements. That's why we offer
                extensive customization options for our screw conveyor systems.
              </p>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  showMore ? "max-h-[1000px]" : "max-h-20"
                }`}
              >
                <p className="text-gray-600 mb-4">
                  Our engineering team works closely with you to design a screw
                  conveyor system that meets your specific requirements. We
                  consider factors such as material characteristics, flow rate,
                  temperature, humidity, and space constraints.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      Design Customizations
                    </h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>U-trough or tubular designs</li>
                      <li>Variable pitch configurations</li>
                      <li>Multiple inlet/outlet options</li>
                      <li>Special coatings for abrasive materials</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Control Systems</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Variable speed drives</li>
                      <li>PLC integration capabilities</li>
                      <li>Automated load sensing</li>
                      <li>Remote monitoring options</li>
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
                  Contact our experts to discuss your specific requirements and
                  get a customized solution.
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
                    <a
                      href="/products/z-elevator"
                      className="flex items-center group"
                    >
                      <div className="w-16 h-16 bg-gray-200 rounded-md mr-3 overflow-hidden">
                        <div className="w-full h-full bg-gray-300"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 group-hover:text-red-500 transition-colors">
                          Industrial Z Elevator
                        </h4>
                        <p className="text-sm text-gray-500">
                          Vertical material transport
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/products/vertical-mixer"
                      className="flex items-center group"
                    >
                      <div className="w-16 h-16 bg-gray-200 rounded-md mr-3 overflow-hidden">
                        <div className="w-full h-full bg-gray-300"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 group-hover:text-red-500 transition-colors">
                          Industrial Vertical Mixer
                        </h4>
                        <p className="text-sm text-gray-500">
                          For uniform blending
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/products/ribbon-blender"
                      className="flex items-center group"
                    >
                      <div className="w-16 h-16 bg-gray-200 rounded-md mr-3 overflow-hidden">
                        <div className="w-full h-full bg-gray-300"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 group-hover:text-red-500 transition-colors">
                          Ribbon Blender
                        </h4>
                        <p className="text-sm text-gray-500">
                          Homogeneous mixing solution
                        </p>
                      </div>
                    </a>
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

export default ScrewConveyor;
