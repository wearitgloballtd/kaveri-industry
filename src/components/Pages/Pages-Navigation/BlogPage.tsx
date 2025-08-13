import React from "react";

// The main component for the blog page with the corrected layout
const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/317.jpg",
      title: "Unlocking metallurgic marvels: A comprehensive guide",
      description:
        "Lorem ipsum dolor sit amet consectetur nullam cras vitae tortor at facilisis lacus.",
      category: "NEWS",
      date: "JAN 30, 2025",
    },
    {
      id: 2,
      image: "/160.jpg",
      title: "Advanced welding techniques in modern industry",
      description:
        "Exploring innovative approaches to metal joining and structural integrity.",
      category: "GUIDES",
      date: "JAN 27, 2025",
    },
    {
      id: 3,
      image: "/28820.jpg",
      title: "Metallurgic innovations: Forging the future of industry",
      description:
        "Revolutionary breakthroughs in material science and manufacturing processes.",
      category: "NEWS",
      date: "JAN 24, 2025",
    },
    {
      id: 4,
      image: "/317.jpg",
      title: "The art and science of metallurgic welding techniques",
      description:
        "Mastering precision welding methods for complex industrial applications.",
      category: "RESOURCES",
      date: "JAN 21, 2025",
    },
    {
      id: 5,
      image: "/160.jpg",
      title: "Metallurgy's role in aerospace advancements",
      description:
        "How advanced materials are shaping the future of aviation technology.",
      category: "NEWS",
      date: "JAN 18, 2025",
    },
    {
      id: 6,
      image: "/28820.jpg",
      title: "Metallurgy in motion: Powering modern transportation",
      description:
        "The critical impact of metallurgical innovations on vehicle manufacturing.",
      category: "GUIDES",
      date: "JAN 15, 2025",
    },
  ];

  return (
    <>
      {/* Original Blog Layout */}
      <div className="bg-gray-100 min-h-screen font-sans mt-20">
        <div className="w-full bg-white shadow-sm p-8 lg:p-12">
          {/* Header Section: Title and Search Bar */}
          <header className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <h1 className="text-8xl text-gray-900 mb-6 sm:mb-0">Our blog</h1>
            <div className="flex items-center w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search for articles"
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-400 w-full sm:w-auto transition-shadow duration-300 focus:shadow-lg"
              />
              <button className="bg-[#f44336] text-white px-6 py-2 rounded-r-md font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105">
                Search
              </button>
            </div>
          </header>

          {/* Featured Post Card */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col md:flex-row group transition-shadow duration-300 hover:shadow-lg mb-12">
            {/* Featured Post Image */}
            <div className="md:w-1/2 overflow-hidden">
              <img
                src="/317.jpg"
                alt="A large metal component in a factory setting"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Featured Post Content */}
            <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-sm font-bold">
                <span className="text-red-500 uppercase">News</span>
                <span className="text-gray-500 ml-4">JAN 30, 2025</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mt-3">
                Metallurgy unveiled: Science behind stronger materials
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Cursus vitae condimentum
                facilisi aenean dictum ac congue ipsum.
              </p>
              <a
                href="#"
                className="flex items-center text-black font-semibold mt-6 group/link"
              >
                Read article
                <span className="ml-2 text-xl transition-transform duration-300 group-hover/link:translate-x-1.5">
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          {/* Horizontal Layout for Smaller Post Cards with Vertical Separator */}
          <div className="flex flex-col md:flex-row gap-0">
            {/* Small Post Card 1 */}
            <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="text-sm font-bold">
                <span className="text-red-500 uppercase">News</span>
                <span className="text-gray-500 ml-4">JAN 30, 2025</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <h3 className="text-lg font-bold text-gray-900 flex-1">
                  Metallurgy unveiled: Science behind stronger materials
                </h3>
                <a href="#" className="text-black text-xl ml-4 group/link">
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1.5 block">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>

            {/* Small Post Card 2 */}
            <div className="flex-1 p-6">
              <div className="text-sm font-bold">
                <span className="text-red-500 uppercase">News</span>
                <span className="text-gray-500 ml-4">JAN 30, 2025</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <h3 className="text-lg font-bold text-gray-900 flex-1">
                  Metallurgy unveiled: Science behind stronger materials
                </h3>
                <a href="#" className="text-black text-xl ml-4 group/link">
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1.5 block">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Blog Layout - Latest Posts Section */}
      <div className="min-h-screen bg-white font-sans mt-20">
        <div className="w-full px-0 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar */}
            <div className="lg:w-1/3">
              {/* Navigation Section */}
              <div className="bg-white rounded-lg p-6 mb-6">
                <h1 className="text-7xl font-sans mb-10">
                  Latest posts
                </h1>

                {/* Navigation Menu */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <button className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm font-medium">
                    ALL
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors">
                    NEWS
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors">
                    GUIDES
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors">
                    RESOURCES
                  </button>
                </div>
              </div>

              {/* Newsletter Subscription Section */}
              <div className="bg-gray-900 rounded-lg p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
                {/* Background Pattern - Geometric lines in lower half */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-20">
                  <div className="absolute bottom-4 left-4 w-16 h-px bg-gray-400"></div>
                  <div className="absolute bottom-8 left-8 w-12 h-px bg-gray-400"></div>
                  <div className="absolute bottom-12 left-12 w-8 h-px bg-gray-400"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-px bg-gray-400"></div>
                  <div className="absolute bottom-8 right-8 w-8 h-px bg-gray-400"></div>
                  <div className="absolute bottom-12 right-12 w-6 h-px bg-gray-400"></div>
                  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gray-400"></div>
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gray-400"></div>
                  <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gray-400"></div>
                </div>

                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Subscribe to our weekly newsletter
                  </h3>
                  <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                    Venenatis habitasse purus interdum dolor non sapien purus
                    sagittis.
                  </p>

                  <div className="space-y-4 max-w-sm mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    />
                    <button className="w-full bg-red-500 text-white px-6 py-3 rounded-md font-bold hover:bg-red-600 transition-colors flex items-center justify-center">
                      Subscribe →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="lg:w-2/3 mt-10">
              <div className="space-y-6">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row h-full">
                      {/* Post Image */}
                      <div className="sm:w-1/3 h-48 sm:h-auto">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Post Content */}
                      <div className="sm:w-2/3 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {post.description}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-red-500 text-sm font-bold uppercase">
                            {post.category}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {post.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center mt-8 space-x-4">
                <button className="w-10 h-10 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors">
                  ←
                </button>
                <span className="text-gray-700 font-medium">1/6</span>
                <button className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
