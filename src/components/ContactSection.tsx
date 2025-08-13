import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Us */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 flex items-center space-x-2">
              <Mail className="w-5 h-5 text-red-500" />
              <span>Contact us</span>
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm">Email:</p>
                <a href="mailto:contact@industrial.com" className="text-white hover:text-red-400 transition-colors">
                  contact@industrial.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone:</p>
                <a href="tel:(123)456-789" className="text-white hover:text-red-400 transition-colors">
                  (123) 456 - 789
                </a>
              </div>
            </div>
          </div>

          {/* Our Location */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-red-500" />
              <span>Our location</span>
            </h3>
            <div className="text-gray-300">
              <p>16 Finland St·Pittsburgh,</p>
              <p>Pennsylvania, PA · 15219</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Stay tunned for more news
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white text-gray-900 px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-r-full transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;