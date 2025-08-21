import React from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Decades of Experience",
    description:
      "Proven expertise in the packaging machinery industry.",
    bg: "bg-gray-900 text-white",
    numberClass: "text-white",
    titleClass: "text-white",
    descClass: "text-gray-200",
  },
  {
    number: "02",
    title: "Customer-Centric Approach",
    description:
      "We prioritise your needs and deliver tailored solutions.",
    bg: "bg-gray-50",
    numberClass: "text-gray-700",
    titleClass: "text-gray-900",
    descClass: "text-gray-500",
  },
  {
    number: "03",
    title: "ISO Certified",
    description:
      "Adherence to the highest standards of quality and safety.",
    bg: "bg-gray-100",
    numberClass: "text-gray-700",
    titleClass: "text-gray-900",
    descClass: "text-gray-500",
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <span className="text-red-500 font-semibold text-sm flex items-center justify-center mb-2">
          03{" "}
          <span className="ml-2 w-12 h-px bg-red-500 inline-block align-middle"></span>
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Check how our
          <br />
          process is done
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris
          dolor molestie suscipit id egestas mauris justo laoreet sed quis.
        </p>
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {steps.map((step, idx) => {
            // Stairs effect: Card 1: mt-12, Card 2: mt-6, Card 3: mt-0 (on md+)
            const mt =
              idx === 0 ? "md:mt-12" : idx === 1 ? "md:mt-6" : "md:mt-0";
            return (
              <div
                key={step.number}
                className={`rounded-lg p-8 flex flex-col items-start md:items-start ${step.bg} h-full ${mt}`}
              >
                <div
                  className={`text-3xl font-bold mb-6 ml-auto ${step.numberClass}`}
                >
                  {step.number}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${step.titleClass}`}>
                  {step.title}
                </h3>
                <p className={`text-sm ${step.descClass}`}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition-colors flex items-center justify-center space-x-2">
            <span>Get a quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="border border-gray-400 hover:border-gray-600 text-gray-900 px-6 py-3 rounded-full transition-colors">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
