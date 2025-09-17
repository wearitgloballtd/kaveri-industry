import React from "react";

const mainPages = [
  "Home V1",
  "Home V2",
  "Home V3",
  "About",
  "Services",
  "Service single",
  "Packages",
  "Package single",
  "Contact V1",
  "Contact V2",
  "Contact V3",
  "Blog V1",
  "Blog V2",
  "Blog V3",
  "Blog post",
  "Coming soon",
  "More Webflow Templates",
];

const utilityPages = [
  "Style guide",
  "Start here",
  "404 not found",
  "Password protected",
  "Licenses",
  "Changelog",
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white pt-4 pb-4 px-4 md:px-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top: Logo and Heading */}
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-3">
            We're the future of
            <br className="hidden md:block" /> metallurgy industry
          </h2>
          <div className="flex gap-4 mb-3">
            {/* Logo SVG */}
            <span className="inline-block">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="12" fill="#F43F5E" />
                <rect
                  x="10"
                  y="10"
                  width="10"
                  height="10"
                  rx="2"
                  fill="white"
                />
                <rect
                  x="28"
                  y="10"
                  width="10"
                  height="10"
                  rx="2"
                  fill="white"
                />
                <rect
                  x="10"
                  y="28"
                  width="10"
                  height="10"
                  rx="2"
                  fill="white"
                />
                <rect
                  x="28"
                  y="28"
                  width="10"
                  height="10"
                  rx="2"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <div className="flex gap-3 mb-4">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full px-4 py-1.5 flex items-center gap-2 transition text-sm">
              Get a quote <span className="ml-1">→</span>
            </button>
            <button className="border border-white text-white font-semibold rounded-full px-4 py-1.5 flex items-center gap-2 transition hover:bg-white hover:text-gray-900 text-sm">
              Learn more
            </button>
          </div>
        </div>
        {/* Middle: Links and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Main pages */}
          <div>
            <div className="font-semibold mb-3">Main pages</div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-gray-300 text-sm">
              {mainPages.map((page, i) => (
                <a href="#" key={i} className="hover:text-white transition">
                  {page}
                </a>
              ))}
            </div>
          </div>
          {/* Utility pages */}
          <div>
            <div className="font-semibold mb-3">Utility pages</div>
            <div className="flex flex-col gap-1 text-gray-300 text-sm">
              {utilityPages.map((page, i) => (
                <a href="#" key={i} className="hover:text-white transition">
                  {page}
                </a>
              ))}
            </div>
          </div>
          {/* Newsletter */}
          <div className="md:col-span-2">
            <div className="font-semibold mb-3">Stay tuned for more news</div>
            <p className="text-gray-300 text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur lacus purus tincidunt
              mauris dolor molestie.
            </p>
            <form className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full px-4 py-2 outline-none text-gray-900 placeholder-gray-400 bg-white"
              />
              <button
                type="submit"
                className="ml-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full px-6 py-2 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Bottom: Copyright and Socials */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-gray-800 pt-4 text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">
            Copyright © Industrial X | Designed by{" "}
            <a href="#" className="underline hover:text-white">
              BRIX Templates
            </a>{" "}
            - Powered by{" "}
            <a href="#" className="underline hover:text-white">
              Webflow
            </a>
          </div>
          <div className="flex gap-4 text-white text-lg">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-red-500 transition"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path
                  d="M17 1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7H8v-3h2V7.5A3.5 3.5 0 0 1 13.5 4H16v3h-2.5A.5.5 0 0 0 13 7.5V9h3l-.5 3h-2.5v7h4a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="X"
              className="hover:text-red-500 transition"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path
                  d="M6.5 6.5l7 7m0-7l-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-red-500 transition"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <rect
                  x="2"
                  y="2"
                  width="16"
                  height="16"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="15" cy="5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-red-500 transition"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <rect
                  x="2"
                  y="2"
                  width="16"
                  height="16"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M6 8v6m0-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 0v6m0-6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 6v-3a2 2 0 0 0-2-2h-2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* Decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g opacity="0.08" stroke="white">
              <path d="M0 400L1440 0" />
              <path d="M0 320L1440 80" />
              <path d="M0 240L1440 160" />
              <path d="M0 160L1440 240" />
              <path d="M0 80L1440 320" />
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
