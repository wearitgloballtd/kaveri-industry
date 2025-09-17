import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface NavigationProps {
  isScrolled: boolean;
  showNavbar: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isScrolled, showNavbar }) => {
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-white backdrop-blur-sm shadow-lg" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo (2).png"
              alt="Kaveri Logo"
              className="w-38 h-16 rounded"
            />
            {/* <span className="text-white text-xl font-bold">Industrial X</span> */}
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-black hover:text-red-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black hover:text-red-400 transition-colors"
            >
              About
            </Link>
            <div
              className="relative group"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <a
                href="#"
                className="text-black hover:text-red-400 transition-colors flex items-center space-x-1"
              >
                <span>Our Products</span>
                <ChevronDown className="w-4 h-4" />
              </a>

              {/* Products Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ease-in-out ${
                  isProductsDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-2">
                  <Link
                    to="/products/flowrap-machine"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition-colors"
                  >
                    Flowrap Machine (Horizontal Form-Fill-Seal)
                  </Link>
                  <Link
                    to="/products/snacks-processing-lines"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition-colors"
                  >
                    Snacks Processing Lines
                  </Link>
                  <Link
                    to="/products/screw-conveyor"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition-colors"
                  >
                    Screw Conveyor and System
                  </Link>
                  <Link
                    to="/products/band-sealer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition-colors"
                  >
                    Band Sealer
                  </Link>
                  <Link
                    to="/products/z-elevator"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition-colors"
                  >
                    Industrial Z Elevator
                  </Link>
                  <Link
                    to="/products/multi-head-weigh"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition-colors"
                  >
                    Multi-Head Weigh
                  </Link>
                  <Link
                    to="/products/vertical-mixer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition-colors"
                  >
                    Industrial Vertical Mixer
                  </Link>
                  <Link
                    to="/products/ribbon-blender"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition-colors"
                  >
                    Ribbon Blender
                  </Link>
                  <Link
                    to="/products/stick-pack-machine"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition-colors"
                  >
                    Single Lane Stick Pack Machine
                  </Link>
                  <Link
                    to="/products/rotary-pick-fill-seal"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition-colors"
                  >
                    Rotary Pick Fill Seal Machine
                  </Link>
                  <Link
                    to="/products/labelling-machine"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition-colors"
                  >
                    Labelling Machine
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="relative group"
              onMouseEnter={() => setIsPagesDropdownOpen(true)}
              onMouseLeave={() => setIsPagesDropdownOpen(false)}
            >
              <a
                href="#"
                className="text-black hover:text-red-400 transition-colors flex items-center space-x-1"
              >
                <span>Pages</span>
                <ChevronDown className="w-4 h-4" />
              </a>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 ease-in-out ${
                  isPagesDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-2">
                  <Link
                    to="/our-products"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition-colors"
                  >
                    Our Products
                  </Link>
                  <Link
                    to="/articles-resources"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition-colors"
                  >
                    Articles and Resources
                  </Link>
                  <Link
                    to="/blog"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition-colors"
                  >
                    Our Blogs
                  </Link>
                  <Link
                    to="/innovation"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition-colors"
                  >
                    Innovation
                  </Link>
                  <Link
                    to="/team"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-400 transition-colors"
                  >
                    Our Team
                  </Link>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="text-black hover:text-red-400 transition-colors"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-black hover:text-red-400 transition-colors flex items-center space-x-1"
            ></a>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <span className=" text-black text-sm">info@industrial.com</span>
            <Link
              to="/contact"
              className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors flex items-center space-x-2"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
