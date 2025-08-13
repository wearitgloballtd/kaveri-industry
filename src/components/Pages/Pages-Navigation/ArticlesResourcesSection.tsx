import React from "react";
import { ArrowRight } from "lucide-react";

const ArticlesResourcesSection: React.FC = () => {
  const articleCards = [
    {
      id: 1,
      image: "/160.jpg",
      alt: "Industrial component",
      category: "NEWS",
      date: "JAN 30, 2025",
      title: "Metallurgy unveiled: Science behind stronger materials",
      description:
        "Lorem ipsum dolor sit amet consectetur nullam cras vitae tortor at facilisis lacus.",
    },
    {
      id: 2,
      image: "/317.jpg",
      alt: "Welding work",
      category: "GUIDES",
      date: "JAN 27, 2025",
      title: "Unlocking metallurgic marvels: A comprehensive guide",
      description:
        "Lorem ipsum dolor sit amet consectetur nullam cras vitae tortor at facilisis lacus.",
    },
    {
      id: 3,
      image: "/28820.jpg",
      alt: "Metal pipes",
      category: "RESOURCES",
      date: "JAN 24, 2025",
      title: "Metallurgic innovations: Forging the future of industry",
      description:
        "Lorem ipsum dolor sit amet consectetur nullam cras vitae tortor at facilisis lacus.",
    },
    {
      id: 4,
      image: "/160.jpg",
      alt: "Welding torch",
      category: "GUIDES",
      date: "JAN 21, 2025",
      title: "The art and science of metallurgic welding techniques",
      description:
        "Lorem ipsum dolor sit amet consectetur nullam cras vitae tortor at facilisis lacus.",
    },
    {
      id: 5,
      image: "/317.jpg",
      alt: "Rocket launch",
      category: "RESOURCES",
      date: "JAN 18, 2025",
      title: "Metallurgy's role in aerospace advancements",
      description:
        "Lorem ipsum dolor sit amet consectetur nullam cras vitae tortor at facilisis lacus.",
    },
    {
      id: 6,
      image: "/28820.jpg",
      alt: "Car parking lot",
      category: "NEWS",
      date: "JAN 15, 2025",
      title: "Metallurgy in motion: Powering modern transportation",
      description:
        "Lorem ipsum dolor sit amet consectetur nullam cras vitae tortor at facilisis lacus.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Articles & Resources Section */}
      <section className="py-16 md:py-24 lg:py-16 px-4 md:px-6 max-w-7xl mx-auto text-center mt-10">
        <h2 className="text-4xl md:text-5xl lg:text-8xl tracking-tight mb-4">
          Articles & resources
        </h2>
        <p className="text-lg md:text-lg text-gray-600 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur sit sit orci aliquet sed nulla
          porttitor mauris dolor molestie suscipit id. Egestas mauris justo
          laoreet.
        </p>
      </section>

      {/* Main Article Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-10"></div>

        {/* Image section that extends to the right edge */}
        <div className="relative">
          <div className="mr-56 mr-0 mt-16">
            <div className="relative rounded-l-xl overflow-hidden h-[500px]">
              <img
                src="/317.jpg"
                alt="Factory worker in an industrial setting"
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute bottom-0 right-0 w-1/3 bg-gray-200 p-10 shadow-2xl transform translate-y-8 translate-x-4 hover:translate-y-6 hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-red-600 font-semibold text-sm uppercase">
                    NEWS
                  </span>
                  <span className="text-gray-500 text-sm">JAN 30, 2025</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4 text-gray-900">
                  Metallurgy unveiled: Science behind stronger materials
                </h3>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet consectetur. Cursus vitae
                  condimentum facilisi aenean dictum ac congue ipsum.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-red-600 font-semibold group"
                >
                  Read article
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-black/85 text-white py-16 md:py-24 lg:py-32 px-4 md:px-6">
        <div className="max-w-7xl ml-0 mr-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:pr-12 ml-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
              Subscribe to our weekly newsletter
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Lorem ipsum dolor sit amet consectetur. Locus purus tincidunt
              mauris dolor molestie suscipit id. Egestas mauris justo laoreet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:ring-red-600 focus:border-red-600 px-4 py-2 rounded-md outline-none"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-md">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[450px] h-[300px] md:w-[600px] md:h-[400px] lg:w-[700px] lg:h-[450px] transform -rotate-12 translate-x-8 translate-y-8 lg:translate-x-16 lg:translate-y-16">
              <img
                src="/317.jpg"
                alt="Laptop displaying an article page"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="bg-white py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-7xl  text-gray-900">
              Latest articles
            </h2>
            <div className="flex space-x-8">
              <button className="text-red-600 font-semibold border-b-2 border-red-600 pb-2">
                ALL
              </button>
              <button className="text-gray-500 hover:text-gray-900 transition-colors">
                NEWS
              </button>
              <button className="text-gray-500 hover:text-gray-900 transition-colors">
                GUIDES
              </button>
              <button className="text-gray-500 hover:text-gray-900 transition-colors">
                RESOURCES
              </button>
            </div>
          </div>

          {/* Article Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {articleCards.slice(0, 3).map((card) => (
              <div key={card.id} className="bg-white">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-64 object-cover mb-4"
                />
                <div className="mb-3">
                  <span className="text-red-600 text-sm font-semibold uppercase">
                    {card.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-4">
                    {card.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-12"></div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {articleCards.slice(3, 6).map((card) => (
              <div key={card.id} className="bg-white">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-64 object-cover mb-4"
                />
                <div className="mb-3">
                  <span className="text-red-600 text-sm font-semibold uppercase">
                    {card.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-4">
                    {card.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-4">
            <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <span className="text-gray-600 font-medium">1/6</span>
            <button className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesResourcesSection;
