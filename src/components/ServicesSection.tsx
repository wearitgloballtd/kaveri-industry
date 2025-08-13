import React from "react";
import { ArrowRight, Hammer, Recycle, Flame, BadgeCheck } from "lucide-react";

const services = [
  {
    icon: <Hammer className="w-7 h-7 text-red-500" />,
    title: "Metal crafting",
    description:
      "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie suscipit id egestas mauris justo laoreet sed quis.",
  },
  {
    icon: <Recycle className="w-7 h-7 text-gray-400" />,
    title: "Metal recycling",
    description:
      "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie suscipit id egestas mauris justo laoreet sed quis.",
  },
  {
    icon: <Flame className="w-7 h-7 text-gray-400" />,
    title: "Heat treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie suscipit id egestas mauris justo laoreet sed quis.",
  },
  {
    icon: <BadgeCheck className="w-7 h-7 text-gray-400" />,
    title: "Quality testing",
    description:
      "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie suscipit id egestas mauris justo laoreet sed quis.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <span className="text-red-500 font-semibold text-sm flex items-center mb-2">
              02{" "}
              <span className="ml-2 w-8 h-px bg-red-500 inline-block align-middle"></span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              A comprehensive
              <br />
              set of services
            </h2>
          </div>
          <button className="mt-6 md:mt-0 border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-2 rounded-full transition-colors">
            Browse all services
          </button>
        </div>
        {/* Services List */}
        <div className="divide-y divide-gray-200 bg-white rounded-xl shadow overflow-hidden">
          {services.map((service, idx) => (
            <div key={service.title} className="flex items-center px-8 py-8">
              <div className="mr-6 flex-shrink-0">{service.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-1 flex items-center">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 ml-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
