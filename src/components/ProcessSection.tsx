import React from "react";

const steps = [
  {
    number: "01",
    title: "Decades of Experience",
    description: "Proven expertise in the packaging machinery industry.",
    bg: "bg-gray-900 text-white",
    numberClass: "text-white",
    titleClass: "text-white",
    descClass: "text-gray-200",
    image: "/Home-Page/Decades of Experience.jpg",
  },
  {
    number: "02",
    title: "Customer-Centric Approach",
    description: "We prioritise your needs and deliver tailored solutions.",
    bg: "bg-gray-50",
    numberClass: "text-white",
    titleClass: "text-white",
    descClass: "text-white",
    image: "/Home-Page/Customer-Centric Approach.jpg",
  },
  {
    number: "03",
    title: "ISO Certified",
    description: "Adherence to the highest standards of quality and safety.",
    bg: "bg-gray-100",
    numberClass: "text-white",
    titleClass: "text-white",
    descClass: "text-white",
    image: "/Home-Page/ISO Certified.jpg",
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
        <p className="text-gray-500 max-w-4xl mx-auto mb-12">
          At Kaveri Global Industries, our process is designed to ensure
          efficiency, precision, and reliability at every stage. We begin by
          understanding your specific requirements and then move into
          intelligent design and advanced engineering to create machinery
          tailored to your industry. Each system undergoes strict quality checks
          before installation, guaranteeing smooth integration into your
          production line. Backed by continuous support and innovation, our
          process delivers packaging solutions that enhance productivity, reduce
          downtime, and give your business a competitive edge.
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
                className={`relative overflow-hidden rounded-lg p-8 flex flex-col items-start md:items-start ${step.bg} h-full ${mt} bg-cover bg-center bg-no-repeat`}
                style={{
                  backgroundImage: step.image
                    ? `url("${step.image}")`
                    : undefined,
                }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 w-full">
                  <div
                    className={`text-3xl font-bold mb-6 ml-auto ${step.numberClass}`}
                  >
                    {step.number}
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-2 ${step.titleClass}`}
                  >
                    {step.title}
                  </h3>
                  <p className={`text-sm ${step.descClass}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
