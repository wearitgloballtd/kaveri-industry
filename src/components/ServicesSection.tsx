import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Hammer,
  Recycle,
  Flame,
  BadgeCheck,
  X,
} from "lucide-react";

const services = [
  {
    icon: <Hammer className="w-7 h-7 text-red-500" />,
    title: "Filling Machines",
    description:
      "High-precision auger, liquid, and powder filling machines for accurate and consistent filling.",
    detailedDescription:
      "Our filling machines are engineered for precision and reliability. We offer auger fillers for powders and granules, liquid fillers for beverages and oils, and powder fillers for spices and supplements. Each machine is designed with advanced technology to ensure consistent fill weights and high production speeds.",
    image: "/Home-Page/Filling Machines.jpg",
    features: [
      "High precision filling",
      "Easy to clean",
      "Quick changeover",
      "CE certified",
    ],
  },
  {
    icon: <Recycle className="w-7 h-7 text-gray-400" />,
    title: "Sealing Machines",
    description:
      "Reliable pouch, band, and induction sealing machines for secure and professional packaging.",
    detailedDescription:
      "Professional sealing solutions for various packaging needs. Our range includes pouch sealers for flexible packaging, band sealers for continuous sealing, and induction sealers for tamper-evident closures. Built with industrial-grade components for long-term reliability.",
    image: "/Home-Page/Sealing Machines.jpg",
    features: [
      "Multiple sealing options",
      "Temperature control",
      "Safety features",
      "Low maintenance",
    ],
  },
  {
    icon: <Flame className="w-7 h-7 text-gray-400" />,
    title: "Form, Fill, and Seal (FFS) Machines",
    description:
      "Automated VFFS and HFFS machines for efficient packaging of snacks, powders, and granules.",
    detailedDescription:
      "Complete packaging automation with our FFS machines. Vertical Form Fill Seal (VFFS) for snacks and powders, Horizontal Form Fill Seal (HFFS) for larger products. These machines form the package, fill it with product, and seal it in one continuous operation.",
    image: "/Home-Page/Form, Fill, and Seal (FFS) Machines.jpg",
    features: [
      "Fully automated",
      "High speed production",
      "Versatile packaging",
      "Energy efficient",
    ],
  },
  {
    icon: <BadgeCheck className="w-7 h-7 text-gray-400" />,
    title: "Labeling Machines",
    description:
      "High-speed sticker, bottle, and wrap-around labeling machines for perfect product presentation.",
    detailedDescription:
      "Professional labeling solutions for all your product presentation needs. From high-speed sticker applicators to sophisticated bottle labelers and wrap-around systems. Our machines ensure perfect label placement and adhesion for a professional finish.",
    image: "/Home-Page/Labeling Machines.jpg",
    features: [
      "High speed operation",
      "Precise positioning",
      "Multiple label types",
      "Easy setup",
    ],
  },
];

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);

  const openModal = (service: (typeof services)[0]) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

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
              Our Broad Range of
              <br />
              FMCG Packaging Machines
            </h2>
          </div>
          {/* <button className="mt-6 md:mt-0 border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-2 rounded-full transition-colors">
            Browse all services
          </button> */}
        </div>
        {/* Services List */}
        <div className="divide-y divide-gray-200 bg-white rounded-xl shadow overflow-hidden">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="flex items-center px-8 py-8 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => openModal(service)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="mr-6 flex-shrink-0">{service.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-1 flex items-center">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 ml-6" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Blurred Background */}
            <motion.div
              className="absolute inset-0 bg-black/30 backdrop-blur-md"
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
            />

            {/* Modal Container */}
            <motion.div
              className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl"
              initial={{
                scale: 0.3,
                opacity: 0,
                y: 100,
                rotateX: -15,
                transformOrigin: "center bottom",
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              exit={{
                scale: 0.3,
                opacity: 0,
                y: 100,
                rotateX: -15,
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 200,
                duration: 0.6,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="mr-4">{selectedService.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedService.title}
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Modal Content */}
              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image Section */}
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -50, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      damping: 15,
                      stiffness: 100,
                    }}
                  >
                    <motion.div
                      className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", damping: 15 }}
                    >
                      <img
                        src={selectedService.image}
                        alt={selectedService.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          target.parentElement!.innerHTML = `
                             <div class="flex items-center justify-center h-full">
                               <div class="text-center">
                                 <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                   ${
                                     selectedService.icon.props.children
                                       .type === "svg"
                                       ? selectedService.icon.props.children
                                       : ""
                                   }
                                 </div>
                                 <p class="text-gray-500 text-sm">Machine Image</p>
                                 <p class="text-xs text-gray-400 mt-1">Image not available</p>
                               </div>
                             </div>
                           `;
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 50, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                      delay: 0.6,
                      type: "spring",
                      damping: 15,
                      stiffness: 100,
                    }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Overview
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {selectedService.detailedDescription}
                    </p>

                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center text-gray-600"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    <motion.button
                      className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Quote
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
