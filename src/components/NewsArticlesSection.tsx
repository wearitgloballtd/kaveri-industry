import React from "react";

const featuredArticle = {
  image:
    "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&w=1200&q=80",
  tag: "NEWS",
  date: "JAN 30, 2025",
  title: "Metallurgy unveiled: Science behind stronger materials",
  description:
    "Lorem ipsum dolor sit amet consectetur nullam cras vitae tortor at facilisis lacus.",
  link: "#",
};

const articles = [
  {
    image:
      "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&w=1200&q=80",
    tag: "GUIDES",
    date: "JAN 27, 2025",
    title: "Unlocking metallurgic marvels: A comprehensive guide",
  },
  {
    image:
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&w=1200&q=80",
    tag: "RESOURCES",
    date: "JAN 24, 2025",
    title: "Metallurgic innovations: Forging the future of industry",
  },
  {
    image:
      "https://images.pexels.com/photos/327810/pexels-photo-327810.jpeg?auto=compress&w=1200&q=80",
    tag: "GUIDES",
    date: "JAN 21, 2025",
    title: "The art and science of metallurgic welding techniques",
  },
];

const NewsArticlesSection: React.FC = () => {
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
              News & articles
            </h2>
          </div>
          <button className="mt-4 md:mt-0 border border-gray-300 rounded-full px-6 py-2 text-gray-700 text-sm font-medium hover:bg-gray-100 transition">
            Browse all articles
          </button>
        </div>
        {/* Featured Article */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <img
            src={featuredArticle.image}
            alt="Featured Article"
            className="w-full h-72 object-cover rounded"
          />
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-500 font-semibold text-sm uppercase">
                {featuredArticle.tag}
              </span>
              <span className="text-gray-400 text-xs">
                {featuredArticle.date}
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {featuredArticle.title}
            </h3>
            <p className="text-gray-600 mb-4">{featuredArticle.description}</p>
            <a
              href={featuredArticle.link}
              className="text-gray-900 font-semibold text-sm flex items-center hover:underline"
            >
              Read article
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
        <hr className="my-8 border-gray-200" />
        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx}>
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover rounded mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {article.title}
              </h4>
              <div className="flex items-center gap-2 text-xs">
                <span
                  className={
                    article.tag === "RESOURCES"
                      ? "text-orange-500 font-semibold uppercase"
                      : "text-red-500 font-semibold uppercase"
                  }
                >
                  {article.tag}
                </span>
                <span className="text-gray-400">{article.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsArticlesSection;
