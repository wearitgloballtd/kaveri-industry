import React, { useState } from "react";
import { ChevronDown, ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface NavigationProps {
  isScrolled: boolean;
  showNavbar: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isScrolled, showNavbar }) => {
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

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
              className="w-38 h-12 rounded"
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
