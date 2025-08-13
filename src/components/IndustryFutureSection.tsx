import React from "react";
import { ArrowRight } from "lucide-react";

const IndustryFutureSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center mt-24">
        {/* Left Side: Text and Image */}
        <div className="flex flex-col justify-between h-full">
          <div className="mb-8">
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet consectetur. Lacus purus tincidunt
              mauris dolor molestie suscipit id. Egestas mauris justo laoreet
              sed quis. Ornare neque sed in ultricies lacus neque arcu elit
              netus. At donec duis vitae in.
            </p>
            <p className="text-gray-500">
              In odio phasellus netus ut praesent nibh gravida facilisis magnis.
              Tincidunt et facilisis odio metus proin. Scelerisque sed dolor
              facilisis odio ut diam. Enim ut egestas proin lacus. Et tellus
              risus tincidunt sit cras.
            </p>
          </div>
          <div className="w-full rounded overflow-hidden shadow-lg">
            <img
              src="/28820.jpg"
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
              We’re the future
              <br />
              of metallurgy
              <br />
              industry
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition-colors flex items-center space-x-2">
              <span>Get a quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-gray-400 hover:border-gray-600 text-gray-900 px-6 py-3 rounded-full transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryFutureSection;
