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
           Why Choose Us?
          </h2>
        </div>
        {/* Image and Testimonial Card */}
        <div className="relative w-full">
          <img
            src="/Home-Page/Why Choose Us.jpg"
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
              Kaveri Global Industries has consistently provided great quality service, delivering exactly what we needed on time. Our commitment to reliability and excellence truly sets us apart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
