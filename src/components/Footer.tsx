import React from "react";

// Product categories
const products = [
  "Steel Products",
  "Aluminum Alloys",
  "Copper Materials",
  "Metal Fabrication",
  "Industrial Machinery",
  "Raw Materials",
  "Specialty Metals",
  "Custom Solutions",
];

// Company links
const companyLinks = [
  "About us",
  "Prices",
  "Contact",
];

// Resources links
const resourceLinks = [
  "Blog",
  "Success Stories",
  "Product Comparison",
  "Free Tools",
  "Technical Resources",
  "Industry Reports",
  "Certifications",
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-gray-800 py-12 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top section with logo and company name */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10">
          {/* Logo and company name */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-3 mb-4">
              {/* Replace SVG with image */}
              <img
                src="/logo (2).png"
                alt="Kaveri Global Industries Logo"
                width={290}
                height={185}
                className="rounded-lg"
              />
            </div>

            {/* Social media icons */}
            <div className="flex gap-6 mb-6">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-red-500"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-600 hover:text-red-500"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z"></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-600 hover:text-red-500"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z"></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="X"
                className="text-gray-600 hover:text-red-500"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                </svg>
              </a>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-2 text-gray-600">
              <a
                href="mailto:info@kaveriglobal.com"
                className="flex items-center gap-2 hover:text-gray-900"
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
                info@kaveriglobal.com
              </a>
            </div>
          </div>

          {/* Three columns for links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16">
            {/* Product column */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-900">
                Product
              </h3>
              <ul className="space-y-3">
                {products.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-900">
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                </li>
              </ul>
            </div>

            {/* Resources column */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-900">
                Resources
              </h3>
              <ul className="space-y-3">
                {resourceLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
