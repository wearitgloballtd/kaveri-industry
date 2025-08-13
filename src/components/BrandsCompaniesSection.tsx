import React from "react";

const brands = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="8" fill="#E5E7EB" />
        <rect x="6" y="6" width="8" height="8" fill="#94A3B8" />
        <rect x="18" y="6" width="8" height="8" fill="#94A3B8" />
        <rect x="6" y="18" width="8" height="8" fill="#94A3B8" />
        <rect x="18" y="18" width="8" height="8" fill="#94A3B8" />
      </svg>
    ),
    name: "Construcfy X",
    description:
      "Sed ultricies adipiscing pretium viverra tortor consequat nisl quam. Nec nunc est elementum id sit quis sit. Placerat tellus ut malesuada quis eget duis netus.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="8" fill="#E5E7EB" />
        <path d="M8 24l8-16 8 16H8z" fill="#94A3B8" />
      </svg>
    ),
    name: "Cargo X",
    description:
      "Sed ultricies adipiscing pretium viverra tortor consequat nisl quam. Nec nunc est elementum id sit quis sit. Placerat tellus ut malesuada quis eget duis netus.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="8" fill="#E5E7EB" />
        <path
          d="M8 24h16M8 20h16M8 16h16M8 12h16"
          stroke="#94A3B8"
          strokeWidth="2"
        />
      </svg>
    ),
    name: "Carpenters X",
    description:
      "Sed ultricies adipiscing pretium viverra tortor consequat nisl quam. Nec nunc est elementum id sit quis sit. Placerat tellus ut malesuada quis eget duis netus.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="8" fill="#E5E7EB" />
        <rect x="8" y="8" width="16" height="16" rx="2" fill="#94A3B8" />
        <rect x="12" y="12" width="8" height="8" rx="1" fill="#E5E7EB" />
      </svg>
    ),
    name: "Construktion X",
    description:
      "Sed ultricies adipiscing pretium viverra tortor consequat nisl quam. Nec nunc est elementum id sit quis sit. Placerat tellus ut malesuada quis eget duis netus.",
  },
];

const BrandsCompaniesSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <span className="flex items-center text-red-500 font-semibold text-sm mb-2">
              <span className="w-12 h-px bg-red-500 inline-block mr-2"></span>
              07
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Brands & companies
              <br />
              we worked with
            </h2>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 transition">
              <span className="sr-only">Previous</span>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  d="M15 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition">
              <span className="sr-only">Next</span>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-200 pt-8">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start border-l border-gray-200 pl-6 first:border-l-0 first:pl-0"
            >
              <div className="mb-2">{brand.icon}</div>
              <div className="text-lg font-semibold text-gray-400 mb-2">
                {brand.name}
              </div>
              <p className="text-gray-500 text-sm">{brand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsCompaniesSection;
