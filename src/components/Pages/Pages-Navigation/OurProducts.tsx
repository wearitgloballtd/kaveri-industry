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
    imageUrl:
      "https://images.unsplash.com/photo-1564082269925-ab3d38734259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$18",
    name: "Mainshaft Gears",
    description:
      "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie.",
    link: "#",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1505798577734-e21354b08704?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$450",
    name: "Portable Saw",
    description:
      "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie.",
    link: "#",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1617886322207-6f504e7472c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$60",
    name: "Wheel Bearing Hub",
    description:
      "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie.",
    link: "#",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1564082269925-ab3d38734259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$500",
    name: "Power Generator",
    description:
      "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie.",
    link: "#",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1505798577734-e21354b08704?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$55",
    name: "Clutch Plate Kit",
    description:
      "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie.",
    link: "#",
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1617886322207-6f504e7472c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                <div className="absolute top-4 right-4 bg-black text-white text-sm font-semibold py-2 px-4 rounded-lg">
                  {product.price} USD
                </div>
              </div>
              <div className="mt-6 px-6 pb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-700 mb-4 text-base leading-relaxed">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  className="text-gray-900 font-semibold inline-flex items-center gap-2 group hover:text-gray-700 transition-colors"
                >
                  Learn more
                  <HiArrowLongRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
