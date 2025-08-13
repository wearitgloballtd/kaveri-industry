import React from "react";
import { Quote } from "lucide-react";

const TestimonialSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-red-500 font-semibold text-sm flex items-center justify-center mb-2">
            05{" "}
            <span className="ml-2 w-12 h-px bg-red-500 inline-block align-middle"></span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            What our clients say
            <br />
            about&nbsp; our work
          </h2>
        </div>
        {/* Image and Testimonial Card */}
        <div className="relative w-full">
          <img
            src="https://images.pexels.com/photos/6169662/pexels-photo-6169662.jpeg?auto=compress&w=1200&q=80"
            alt="Client testimonial background"
            className="w-full h-[340px] md:h-[400px] object-cover rounded"
          />
          {/* Testimonial Card */}
          <div className="absolute right-0 bottom-0 md:-bottom-20 md:right-8 w-full md:w-[420px] bg-gray-900 rounded shadow-lg p-8 z-10 text-left">
            <Quote className="w-6 h-6 text-red-500 mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">
              Great quality service delivered on time
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur tortor donec ut nulla
              mattis vitae purus a cursus mauris eu non dictum sit adipiscing
              nulla turpis integer libero ipsum rhoncus.
            </p>
            <div className="text-white font-bold text-sm mb-1">
              JOHN CARTER{" "}
              <span className="text-blue-300 font-normal">NEW YORK. NY</span>
            </div>
            {/* Dots */}
            <div className="flex space-x-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-gray-400 inline-block"></span>
              <span className="w-2 h-2 rounded-full bg-gray-600 inline-block"></span>
              <span className="w-2 h-2 rounded-full bg-gray-600 inline-block"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
