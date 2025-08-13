import React from "react";
import { Play } from "lucide-react";

const QualitySection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and description row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
          <div>
            <span className="text-red-500 font-semibold text-sm flex items-center mb-2">
              04{" "}
              <span className="ml-2 w-8 h-px bg-red-500 inline-block align-middle"></span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Exceptional quality
              <br />
              that can’t be beaten
            </h2>
          </div>
          <div className="mt-4 md:mt-8 md:ml-8 md:w-1/2 text-gray-600 text-base md:text-right max-w-xl">
            Lorem ipsum dolor sit amet consectetur. Diam fringilla elit sit
            mauris pellentesque est ut lobortis. Risus adipiscing pharetra nisi
            ac urna. Proin enim viverra ullamcorper pulvinar nulla. Risus.
          </div>
        </div>
        {/* Right-aligned image with overlay and play button */}
        <div className="w-full">
          <div className="relative w-full md:w-[900px] md:ml-auto aspect-video rounded overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&w=1200&q=80"
              alt="Quality warehouse"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-white/80 hover:bg-white/90 flex items-center justify-center shadow-lg transition">
                <Play className="w-10 h-10 text-red-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
