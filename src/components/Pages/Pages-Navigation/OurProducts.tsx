import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

// 1. Interface for the product data structure
interface Product {
  id: number;
  imageUrl: string;
  price: string;
  name: string;
  description: string;
  link: string;
}

// 2. Data for the product cards - matching the image exactly
const productsData: Product[] = [
  {
    id: 1,
    imageUrl: "/Page-Navigation/OurProducts/Mainshaft Gears.jpg",
    price: "$18",
    name: "Mainshaft Gears",
    description:
      "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie.",
    link: "#",
  },
  {
    id: 2,
    imageUrl: "/Page-Navigation/OurProducts/Portable Saw.jpg",
    price: "$450",
    name: "Portable Saw",
    description:
      "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie.",
    link: "#",
  },
  {
    id: 3,
    imageUrl: "/Page-Navigation/OurProducts/Wheel Bearing Hub.jpg",
    price: "$60",
    name: "Wheel Bearing Hub",
    description:
      "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie.",
    link: "#",
  },
  {
    id: 4,
    imageUrl: "/Page-Navigation/OurProducts/Power Generator.jpg",
    price: "$500",
    name: "Power Generator",
    description:
      "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie.",
    link: "#",
  },
  {
    id: 5,
    imageUrl: "/Page-Navigation/OurProducts/Clutch Plate Kit.jpg",
    price: "$55",
    name: "Clutch Plate Kit",
    description:
      "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie.",
    link: "#",
  },
  {
    id: 6,
    imageUrl: "/Page-Navigation/OurProducts/Roller Drill Bit.jpg",
    price: "$40",
    name: "Roller Drill Bit",
    description:
      "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie.",
    link: "#",
  },
];

// 3. The main React component
const ProductsSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 mt-12">
          <h1 className="text-8xl  text-gray-900 mb-4">Our products</h1>
          <p className="text-lg text-gray-600 max-w-6xl mx-auto">
            At Kaveri Global Industries, our products are designed to bring
            innovation, efficiency, and reliability to packaging and production
            processes. We specialize in advanced machinery for tobacco, nicotine
            snus, and FMCG industries, along with versatile solutions for food,
            healthcare, electronics, daily chemicals, and plastic hardware
            sectors.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <div key={product.id} className="bg-white overflow-hidden">
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />
                {/* <div className="absolute top-4 right-4 bg-black text-white text-sm font-semibold py-2 px-4 rounded-lg">
                  {product.price} USD
                </div> */}
              </div>
              <div className="mt-6 px-6 pb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-700 mb-4 text-base leading-relaxed">
                  {product.description}
                </p>
                {/* <a
                  href={product.link}
                  className="text-gray-900 font-semibold inline-flex items-center gap-2 group hover:text-gray-700 transition-colors"
                >
                  Learn more
                  <HiArrowLongRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
