import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiPlus, FiMinus } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

// --- Type definition for a single location ---
interface Location {
  city: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  image: string;
}

// --- Type definition for AccordionItem props ---
interface AccordionItemProps {
  item: Location;
  isOpen: boolean;
  onClick: () => void;
}

// --- Data for each location (typed as Location[]) ---
const locationsData: Location[] = [
  {
    city: "Pittsburgh, PA",
    description:
      "Lorem ipsum dolor sit amet consectetur. Locus purus tincidunt mauris dolor molestie suscipit id. Egestas mauris justo laoreet.",
    email: "contact@industrial-pittsburgh.com",
    phone: "(123) 456-789",
    address: "16 Finland St, Pittsburgh, Pennsylvania, PA, 15219",
    image:
      "/317.jpg",
  },
  {
    city: "Cleveland, OH",
    description:
      "Discover our Cleveland hub, a cornerstone of innovation in modern manufacturing and heavy industry, pushing the boundaries of technology.",
    email: "contact@industrial-cleveland.com",
    phone: "(234) 567-890",
    address: "45 Industrial Ave, Cleveland, Ohio, OH, 44101",
    image:
      "/317.jpg",
  },
  {
    city: "Birmingham, AL",
    description:
      "Our Birmingham facility specializes in steel production and logistics, leveraging a rich history to build the future of industry.",
    email: "contact@industrial-birmingham.com",
    phone: "(345) 678-901",
    address: "88 Steelworks Rd, Birmingham, Alabama, AL, 35203",
    image:
      "/317.jpg",
  },
];

// --- Accordion Item Component ---
const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isOpen,
  onClick,
}) => {
  return (
    // The `text-left` class here is important to make sure the accordion content is readable
    <div className="border-b border-gray-200 py-6 text-left">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <h3 className="text-2xl text-gray-800 font-light">{item.city}</h3>
        <div className="text-2xl text-gray-500">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-5">
              <p className="text-gray-600 mb-6">{item.description}</p>
              <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0">
                <div className="flex items-start">
                  <FiMail className="text-red-500 text-xl mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Contact us</h4>
                    <p className="text-gray-600">{item.email}</p>
                    <p className="text-gray-600">{item.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiMapPin className="text-red-500 text-xl mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Our location
                    </h4>
                    <p className="text-gray-600">{item.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Locations Section Component ---
const LocationsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const currentImage =
    activeIndex !== null
      ? locationsData[activeIndex].image
      : locationsData[0].image;
  const currentAlt =
    activeIndex !== null
      ? locationsData[activeIndex].city
      : locationsData[0].city;

  return (
    <div className="bg-white min-h-screen p-10">
      <div className="container mx-auto">
        {/* -- HEADING SECTION -- */}
        <div className="text-center mb-12 pt-8">
          <div className="flex justify-center items-center mb-2">
            <div className="bg-red-500 h-0.5 w-8 mr-2"></div>
            <span className="text-red-500 text-sm font-semibold">02</span>
            <div className="bg-red-500 h-0.5 w-8 ml-2"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-SEMIbold text-gray-900 mb-4">
            Visit our locations
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris
            dolor molestie suscipit id egestas mauris justo laoreet sed quis.
          </p>
        </div>

        {/* -- CONTENT GRID -- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-start">
          {/* Left Side: Accordion */}
          <div className="p-4 md:p-8">
            {/* -- ACCORDION SECTION -- */}
            <div>
              {locationsData.map((item, index) => (
                <AccordionItem
                  key={index}
                  item={item}
                  isOpen={activeIndex === index}
                  onClick={() => handleItemClick(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative w-full h-80 lg:h-[500px] overflow-hidden rounded-lg">
            <AnimatePresence>
              <motion.img
                key={activeIndex}
                src={currentImage}
                alt={currentAlt}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsSection;
