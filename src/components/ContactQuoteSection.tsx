import React from "react";

const ContactQuoteSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-900 py-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[480px] relative">
        {/* Left: Form Card */}
        <div className="w-full md:w-1/2 flex items-center justify-center z-10">
          <div
            className="bg-gray-50 w-full md:w-[480px] p-8 md:p-12 shadow-none md:shadow-none"
            style={{ minHeight: 440 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-1">Full name</label>
                  <input
                    type="text"
                    placeholder="John Carter"
                    className="w-full border-b border-gray-200 focus:border-gray-400 outline-none py-2 bg-transparent placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="example@youremail.com"
                    className="w-full border-b border-gray-200 focus:border-gray-400 outline-none py-2 bg-transparent placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">
                    Phone number
                  </label>
                  <input
                    type="text"
                    placeholder="(123) 456 -7890"
                    className="w-full border-b border-gray-200 focus:border-gray-400 outline-none py-2 bg-transparent placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="ex. Metal testing"
                    className="w-full border-b border-gray-200 focus:border-gray-400 outline-none py-2 bg-transparent placeholder-gray-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  placeholder="Write your message here..."
                  className="w-full border-b border-gray-200 focus:border-gray-400 outline-none py-2 bg-transparent placeholder-gray-400 resize-none min-h-[60px]"
                />
              </div>
              <div className="pt-8">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full px-6 py-2 flex items-center gap-2 transition"
                >
                  Send message <span className="ml-1">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Right: Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-0">
          <div className="max-w-xl mx-auto md:mx-0 md:ml-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Ready to Elevate Your
              <br />
              Packaging Process?
            </h2>
            <p className="text-gray-300 mb-8">
            Contact our experts today to discuss your requirements and get a customized quote for your FMCG packaging needs. Let Kaveri Industries be the catalyst for your growth.
            </p>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 flex items-start gap-3 mb-6 md:mb-0">
                <span className="text-red-500 mt-1">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M21 15.46V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.54a2 2 0 0 1 1.09-1.79l5.88-2.94a2 2 0 0 1 1.78 0l5.88 2.94A2 2 0 0 1 21 15.46Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold mb-1 text-white">
                    Contact us
                  </div>
                  <div className="text-gray-300 text-sm">
                    Email:{" "}
                    <span className="text-white font-medium">
                      contact@industrial.com
                    </span>
                    <br />
                    Phone:{" "}
                    <span className="text-white font-medium">
                      (123) 456 - 789
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-start gap-3">
                <span className="text-red-500 mt-1">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M21 10.5c0 7.5-9 12-9 12s-9-4.5-9-12A9 9 0 0 1 12 1.5a9 9 0 0 1 9 9Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="10.5"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold mb-1 text-white">
                    Our location
                  </div>
                  <div className="text-gray-300 text-sm">
                    16 Finland St
                    <br />
                    Pittsburgh, Pennsylvania, PA, 15219
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactQuoteSection;
