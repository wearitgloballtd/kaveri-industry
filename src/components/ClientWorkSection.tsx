import React from "react";

const testimonials = [
  {
    quote: "Great quality service delivered on time",
    text: "Kaveri provided us with a highly efficient and reliable packaging machine that has significantly improved our production line. Their team is professional and supportive.",
    location: "NEW YORK. NY",
    image: "/Home-Page/Great quality service delivered on time.jpg",
  },
  {
    quote: "Reliable, precise, and trusted by many",
    text: "The quality of their machines is top-notch, and their after-sales service is excellent. We highly recommend Kaveri.",
    location: "MIAMI. FL",
    image: "/Home-Page/Reliable, precise, and trusted by many.jpg",
  },
  {
    quote: "Unbeatable metallurgical expertise",
    text: "Working with Kaveri Industries has been a fantastic decision for our business. We purchased their Flowrap Machine, and the impact on our production line was immediate. The machine is robust, reliable, and has significantly increased our packaging speed.",
    location: "SAN FRANCISCO. CA",
    image: "/Home-Page/Unbeatable metallurgical expertise.jpg",
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
            </div>
            <img
              src="/Home-Page/Great quality service delivered on time.jpg"
              alt="Testimonial"
              className="w-full h-48 object-cover rounded"
            />
          </div>
          {/* Center Image */}
          <div className="flex flex-col items-center justify-center">
            <img
              src="/Home-Page/Reliable, precise, and trusted by many.jpg"
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
