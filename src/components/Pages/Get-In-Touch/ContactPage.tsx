import React from "react";
import {
  MessageCircle,
  Paperclip,
  ShoppingBag,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import LocationsSection from "./LocationsSection";
import FaqSection from "./FaqSection";

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Contact Categories */}
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main heading section */}
          <div className="border-b border-gray-200 pb-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h1 className="text-4xl lg:text-7xl font-semibold text-black mb-6">
                  Get in touch
                </h1>
              </div>
              <div className="flex items-start">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Lacus purus tincidunt
                  mauris dolor molestie suscipit id. Egestas mauris justo.
                </p>
              </div>
            </div>
          </div>

          {/* Contact categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Help & Support */}
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12  rounded-lg flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-black">Help & support</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur a duis faucibus donec
                etiam pharetra sit volutpat cursus urna suspendisse.
              </p>
              <a
                href="mailto:support@industrial.com"
                className="text-black font-medium hover:text-red-500 transition-colors"
              >
                support@industrial.com
              </a>
            </div>

            {/* Press & Media */}
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12  rounded-lg flex items-center justify-center mr-4">
                  <Paperclip className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-black">Press & media</h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur a duis faucibus donec
                etiam pharetra sit volutpat cursus urna suspendisse.
              </p>
              <a
                href="mailto:press@industrial.com"
                className="text-black font-medium hover:text-red-500 transition-colors"
              >
                press@industrial.com
              </a>
            </div>

            {/* Sales & Enquires */}
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12  rounded-lg flex items-center justify-center mr-4">
                  <ShoppingBag className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-black">
                  Sales & enquires
                </h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur a duis faucibus donec
                etiam pharetra sit volutpat cursus urna suspendisse.
              </p>
              <a
                href="mailto:sales@industrial.com"
                className="text-black font-medium hover:text-red-500 transition-colors"
              >
                sales@industrial.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="min-h-screen bg-gray-200">
        <div className="w-[full]">
          {/* Blue border frame */}
          <div className="w-[full] h-full bg-white ">
            {/* Dark header section */}
            <div className="bg-slate-800 h-32"></div>

            {/* Main content area */}
            <div className="flex w-[full]">
              {/* Left side - Contact Form */}
              <div className="flex-1 bg-gray-100 p-12 min-h-screen">
                <form className="space-y-6">
                  {/* Full name and Email row */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full name
                      </label>
                      <input
                        type="text"
                        placeholder="John Carter"
                        className="w-full px-0 py-2 border-0 border-b border-gray-300 bg-transparent placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder="example@youremail.com"
                        className="w-full px-0 py-2 border-0 border-b border-gray-300 bg-transparent placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Phone number and Subject row */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        placeholder="(123) 456-7890"
                        className="w-full px-0 py-2 border-0 border-b border-gray-300 bg-transparent placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="ex. Metal testing"
                        className="w-full px-0 py-2 border-0 border-b border-gray-300 bg-transparent placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Write your message here..."
                      className="w-full px-0 py-2 border-0 border-b border-gray-300 bg-transparent placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-0 resize-none"
                    />
                  </div>

                  {/* Send button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-colors"
                    >
                      Send message
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>

              {/* Right side - Dark section */}
              <div className="flex-1 bg-slate-800 p-12 text-white flex flex-col justify-between h-[80vh]">
                <div>
                  <h2 className="text-6xl font-light mb-6 leading-tight">
                    Contact us to
                    <br />
                    request a quote
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Lacus purus
                    tincidunt
                    <br />
                    mauris dolor molestie suscipit id. Egestas mauris justo
                    laoreet
                    <br />
                    sed quis. Ornare neque sed in ultricies lacus.
                  </p>
                </div>

                <div>
                  <p className="text-white mb-4 font-medium">Follow us on</p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LocationsSection />

      <FaqSection />
    </>
  );
};

export default ContactPage;
