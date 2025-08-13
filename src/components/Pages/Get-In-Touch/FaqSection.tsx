import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

// Interface defining the type for a single FAQ item
interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// Data for the FAQ items
const faqData: FaqItem[] = [
  {
    id: "01",
    question: "Do you offer international shipping for metallurgical products?",
    answer:
      "Mattis elit aliquet pellentesque aliquet et adipiscing semper ut pharetra pellentesque ut mauris massa erat eget nunc nibh nunc.",
  },
  {
    id: "02",
    question: "How can I learn more about Industrial X sustainability efforts?",
    answer:
      "A mauris mauris facilisi morbi dui lobortis sed malesuada quam ultrices vitae augue imperdiet pellentesque aliquam mi cursus sit.",
  },
  {
    id: "03",
    question:
      "Can I schedule a facility tour or arrange a meeting with your team?",
    answer:
      "Nunc adipiscing fames est ut et elementum ac sem donec enim lectus vitae sed aliquam in dolor cursus porta id elit lectus tincidunt.",
  },
  {
    id: "04",
    question: "Do you provide metallurgy consulting services?",
    answer:
      "Nunc adipiscing fames est ut et elementum ac sem donec enim lectus vitae sed aliquam in dolor cursus porta id elit lectus tincidunt.",
  },
];

const FaqSection: React.FC = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Left Column: Title and CTA Button */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-red-500 font-semibold tracking-wide text-sm ml-4">
                03
              </span>
              <div className="bg-red-500 h-0.5 w-8 ml-2"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-6 leading-tight ml-4">
              <div>Frequently</div>
              <div>Asked Questions</div>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed ml-4">
              Lorem ipsum dolor sit amet consectetur dictum vitae tincidunt
              ultricies neque eu penatibus ante aliquet.
            </p>
            <button className="bg-red-500 text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2 transition-transform duration-300 hover:scale-105  ml-4">
              Our values
              <HiArrowLongRight className="h-5 w-5" />
            </button>
          </div>

          {/* Right Column: FAQ List */}
          <div className="lg:col-span-2">
            <div className="space-y-0">
              {faqData.map((item: FaqItem, index: number) => (
                <div key={item.id}>
                  <div className="flex gap-6 py-12">
                    <div className="text-lg font-bold text-gray-400 flex-shrink-0 ml-10">
                      {item.id}/
                    </div>
                    <div className="flex-1 max-w-4xl ml-4">
                      <h3 className="text-4xl font-semibold text-gray-800 mb-4">
                        {item.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                  {/* Add horizontal line between items, but not after the last one */}
                  {index < faqData.length - 1 && (
                    <div className="border-t border-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
