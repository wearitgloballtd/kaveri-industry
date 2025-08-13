import React from "react";

// Define the types for the component props
interface GuideCardProps {
  category: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

// Card component to display the guide information
const GuideCard: React.FC<GuideCardProps> = ({
  category,
  date,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-[#111827] font-sans mt-10">
      {/* Header Section with centered text */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="text-center">
          {/* Category and Date */}
          <p className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-4">
            {category} <span className="text-gray-400 ml-2">{date}</span>
          </p>
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Split Layout Container */}
      <div className="flex h-screen">
        {/* Left side - Image (approximately 42% width) */}
        <div className="w-[95%]">
          <img
            src={imageUrl}
            alt="A worker in orange overalls and protective gloves operating heavy machinery on a steel beam."
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null; // prevent infinite loop
              target.src =
                "https://placehold.co/1024x576/111827/ffffff?text=Image+Not+Found";
            }}
          />
        </div>

        {/* Right side - Dark content area (approximately 58% width) */}
        <div className="w-[30%] bg-[#111827] relative">
          {/* Light gray section at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

// Main App component
const Innovation: React.FC = () => {
  // Data for the guide card
  const guideData = {
    category: "GUIDES",
    date: "JAN 27, 2025",
    title: "The story of how our company was founded",
    description:
      "Lorem ipsum dolor sit amet consectetur. Diam fringilla elit sit mauris pellentesque est ut lobortis. Risus adipiscing pharetra nisl ac urna. Proin enim viverra ullamcorper pulvinar nulla. Risus.",
    imageUrl:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  };

  return (
    <div className="min-h-screen bg-[#111827]">
      <GuideCard {...guideData} />

      {/* Blog Post Section */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-12">
            {/* Left Column - Author Sidebar */}
            <div className="w-1/4">
              <div className="sticky top-20 ">
                {/* Profile Picture */}
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6">
                  <img
                    src="/160.jpg"
                    alt="Kathie Corl"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Author Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Kathie Corl
                </h3>

                {/* Author Bio */}
                <p className="text-gray-600 text-sm mb-6">
                  Lorem ipsum dolor sit amet consectetur aenean sit uma.
                </p>

                {/* Social Media Icons */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-700 text-sm font-bold">f</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-700 text-sm font-bold">X</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-700 text-sm">📷</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Main Article Content */}
            <div className="w-3/4">
              {/* Main Title */}
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Metallurgical marvels: Innovative applications
              </h1>

              {/* Introduction Paragraph */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              {/* Section Heading 1 */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Types of metals: From ores to alloys
              </h2>

              {/* Body Paragraph */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              {/* Bulleted List */}
              <ul className="text-gray-700 text-lg leading-relaxed mb-8 space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-900 mr-3">•</span>
                  <span>Ferrous metals including iron and steel alloys</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-3">•</span>
                  <span>Non-ferrous metals like aluminum and copper</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-3">•</span>
                  <span>Precious metals including gold and silver</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-3">•</span>
                  <span>Rare earth metals for advanced applications</span>
                </li>
              </ul>

              {/* Body Paragraph */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              {/* Main Image */}
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Worker operating metal grinder with sparks"
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Body Paragraph */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              {/* Section Heading 2 */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Metallurgy in ancient civilizations: Surprising discoveries
              </h2>

              {/* Body Paragraph */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              {/* Quote/Callout Box */}
              <div className="bg-gray-900 text-white p-8 mb-8 text-center">
                <p className="text-xl italic">
                  "Sed id mi eget urna facilisis pharetra nunc viverra est at
                  magna maximus consectetur sed nec maximus augue aliquam
                  commodo sem eu."
                </p>
              </div>

              {/* Final Body Paragraph */}
              <p className="text-gray-700 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              {/* Additional Content Sections */}

              {/* Section Heading 3 */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Metallurgy and sustainable practices: Eco-friendly Innovations
              </h2>

              {/* Body Paragraph */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>

              {/* Bulleted List */}
              <ul className="text-gray-700 text-lg leading-relaxed mb-8 space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-900 mr-3">•</span>
                  <span>
                    Morbi fringilla molestie magna sed dictum praesent pharetra
                    turpis augue.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-3">•</span>
                  <span>
                    Cras mi purus, viverra vitae felis sit amet, tincidunt
                    fringilla lorem.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-3">•</span>
                  <span>
                    Non mattis urna ex nec sem. Donec varius diam et suscipit
                    venenati.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-3">•</span>
                  <span>
                    Quisque euismod posuere lacus sit amet volutpat. Praesent
                    vel imperdiet
                  </span>
                </li>
              </ul>

              {/* Section Heading 4 */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Challenges in metallurgy: From raw materials to manufacturing
              </h2>

              {/* Body Paragraph */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
                cupidatat non proident sunt in culpa qui officia deserunt mollit
                anim id est laborum.
              </p>

              {/* Section Heading 5 */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                The future of metallurgy: Emerging trends and technologies
              </h2>

              {/* Body Paragraph */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
                inventore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="bg-[#1a1a1a] py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-12 items-center">
            {/* Left Section - Subscription Form */}
            <div className="w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Subscribe to our
                <br />
                weekly newsletter
              </h2>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Right Section - Laptop Display */}
            <div className="w-1/2 flex justify-center">
              <div className="relative">
                {/* Laptop Frame */}
                <div className="relative w-96 h-64 bg-gray-800 rounded-lg shadow-2xl">
                  {/* Laptop Screen */}
                  <div className="absolute inset-2 bg-[#111827] rounded overflow-hidden">
                    {/* Navigation Bar */}
                    <div className="bg-[#1a1a1a] px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-red-500 font-bold text-lg">
                          #
                        </span>
                        <span className="text-white font-semibold">
                          Industrial X
                        </span>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-gray-300">
                        <span>Home</span>
                        <span>About</span>
                        <span>Pages</span>
                        <span>Shop</span>
                        <span>Contact</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400 text-sm">
                          contact@industrial.com
                        </span>
                        <button className="bg-white text-gray-900 px-3 py-1 rounded text-sm font-medium">
                          Get in touch
                        </button>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <span className="text-red-500 text-xs font-semibold uppercase tracking-wider">
                          GUIDES
                        </span>
                        <span className="text-gray-400 text-xs ml-2">
                          JAN 27, 2325
                        </span>
                      </div>

                      <h3 className="text-white text-xl font-bold mb-3 leading-tight">
                        Unlocking metallurgic marvels: A comprehensive guide
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur sit sit orci
                        aliquet sed nulla porttitor amet auctor auctor vitae ut
                        magna in sit dui erat urna erat amet arcu.
                      </p>

                      {/* Article Image */}
                      <div className="w-full h-48 bg-gray-700 rounded overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                          alt="Worker in orange overalls"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Laptop Base */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-80 h-2 bg-gray-600 rounded-b-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Related articles
            </h2>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Browse all articles
            </button>
          </div>

          {/* Article Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - GUIDES */}
            <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-red-500 text-sm font-semibold uppercase tracking-wider block p-6 pb-0">
                GUIDES
              </span>
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Welding torch operation with sparks"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  The art and science of metallurgic welding techniques
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet consectetur nullam cras vitae
                  tortor at facilisis lacus.
                </p>
                <span className="text-gray-500 text-sm">JAN 21, 2025</span>
              </div>
            </article>

            {/* Card 2 - RESOURCES */}
            <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-red-500 text-sm font-semibold uppercase tracking-wider block p-6 pb-0">
                RESOURCES
              </span>
              <img
                src="https://images.unsplash.com/photo-1541185933-ef5d8cb6e496?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Space shuttle launch with exhaust plume"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  Metallurgy's role in aerospace advancements
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet consectetur nullam cras vitae
                  tortor at facilisis lacus.
                </p>
                <span className="text-gray-500 text-sm">JAN 18, 2025</span>
              </div>
            </article>

            {/* Card 3 - NEWS */}
            <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-red-500 text-sm font-semibold uppercase tracking-wider block p-6 pb-0">
                NEWS
              </span>
              <img
                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Aerial view of parking lot with new cars"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  Metallurgy in motion: Powering modern transportation
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet consectetur nullam cras vitae
                  tortor at facilisis lacus.
                </p>
                <span className="text-gray-500 text-sm">JAN 15, 2025</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovation;
