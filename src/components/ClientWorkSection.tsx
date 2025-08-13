import React from "react";

const testimonials = [
  {
    quote: "Great quality service delivered on time",
    text: "Lorem ipsum dolor sit amet consectetur tortor donec ut nulla mattis vitae purus a cursus mauris eu non dictum sit adipiscing nulla turpis integer libero ipsum rhoncus.",
    author: "JOHN CARTER",
    location: "NEW YORK. NY",
    image: "/28820.jpg",
  },
  {
    quote: "Reliable, precise, and trusted by many",
    text: "Lorem ipsum dolor sit amet consectetur tortor donec ut nulla mattis vitae purus a cursus mauris eu non dictum sit adipiscing nulla turpis integer libero ipsum rhoncus.",
    author: "MATT CANNON",
    location: "MIAMI. FL",
    image: "/28820.jpg",
  },
  {
    quote: "Unbeatable metallurgical expertise",
    text: "Lorem ipsum dolor sit amet consectetur tortor donec ut nulla mattis vitae purus a cursus mauris eu non dictum sit adipiscing nulla turpis integer libero ipsum rhoncus.",
    author: "SOPHIE MOORE",
    location: "SAN FRANCISCO. CA",
    image: "/28820.jpg",
  },
];

const ClientWorkSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="flex items-center justify-center text-red-500 font-semibold text-sm mb-2">
            <span className="w-12 h-px bg-red-500 inline-block mr-2"></span>
            06
            <span className="w-12 h-px bg-red-500 inline-block ml-2"></span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            What our clients say
            <br />
            about&nbsp; our work
          </h2>
        </div>
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <div className="bg-white p-0">
              <span className="text-red-500 text-3xl mb-2 inline-block">“</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {testimonials[0].quote}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {testimonials[0].text}
              </p>
              <div className="text-gray-900 font-bold text-sm mb-1">
                {testimonials[0].author}{" "}
                <span className="text-blue-400 font-normal">
                  {testimonials[0].location}
                </span>
              </div>
            </div>
            <img
              src={testimonials[2].image}
              alt="Testimonial"
              className="w-full h-48 object-cover rounded"
            />
          </div>
          {/* Center Image */}
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://images.pexels.com/photos/6169662/pexels-photo-6169662.jpeg?auto=compress&w=1200&q=80"
              alt="Client work"
              className="w-full h-80 object-cover rounded mb-8"
            />
            <div className="bg-white p-0 hidden md:block">
              <span className="text-red-500 text-3xl mb-2 inline-block">“</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {testimonials[1].quote}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {testimonials[1].text}
              </p>
              <div className="text-gray-900 font-bold text-sm mb-1">
                {testimonials[1].author}{" "}
                <span className="text-blue-400 font-normal">
                  {testimonials[1].location}
                </span>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <div className="bg-white p-0">
              <span className="text-red-500 text-3xl mb-2 inline-block">“</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {testimonials[2].quote}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {testimonials[2].text}
              </p>
              <div className="text-gray-900 font-bold text-sm mb-1">
                {testimonials[2].author}{" "}
                <span className="text-blue-400 font-normal">
                  {testimonials[2].location}
                </span>
              </div>
            </div>
            <img
              src={testimonials[2].image}
              alt="Testimonial"
              className="w-full h-48 object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientWorkSection;
