import React from "react";

const IndustryFutureSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center mt-24">
        {/* Left Side: Text and Image */}
        <div className="flex flex-col justify-between h-full">
          <div className="mb-8">
            <p className="text-gray-500 mb-6">
              Kaveri Global Industries is dedicated to providing end-to-end
              solutions in fully automatic packaging systems. We design and
              manufacture advanced, intelligent, and highly automated machinery
              tailored to diverse industries, including tobacco, nicotine snus,
              FMCG, electronics, medical and healthcare, food, health products,
              daily chemicals, and plastic hardware. Our expertise covers the
              entire production cycle with specialized solutions for cartoning,
              boxing, labeling, and other integrated packaging processes,
              ensuring efficiency, reliability, and innovation for our clients
              worldwide.
            </p>
          </div>
          <div className="w-full rounded overflow-hidden shadow-lg">
            <img
              src="/Home-Page/A Legacy of Quality and Innovation.jpg"
              alt="Industry workers"
              className="object-cover w-full h-56 md:h-64 lg:h-72"
            />
          </div>
        </div>
        {/* Right Side: Heading and Buttons */}
        <div className="flex flex-col justify-center h-full">
          <div className="mb-4">
            <span className="text-red-500 font-semibold text-sm flex items-center mb-2">
              01{" "}
              <span className="ml-2 w-8 h-px bg-red-500 inline-block align-middle"></span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              A Legacy of
              <br />
              Quality and Innovation
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryFutureSection;
