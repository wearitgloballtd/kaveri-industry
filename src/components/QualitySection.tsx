import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

const QualitySection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
            Kaveri Global Industries delivers robust and versatile packaging
            solutions designed to meet the highest standards of performance and
            reliability. Serving a wide range of FMCG sectors, we understand the
            unique challenges of each industry and craft machinery that not only
            enhances productivity but also safeguards product quality and
            integrity. With a focus on durability, innovation, and precision,
            our solutions embody exceptional quality that truly can’t be beaten.
          </div>
        </div>
        {/* Right-aligned video with overlay and play button */}
        <div className="w-full">
          <div className="relative w-full md:w-[900px] md:ml-auto aspect-video rounded overflow-hidden shadow-lg">
            <video
              ref={videoRef}
              src="/IMG_3377.MP4"
              className="w-full h-full object-cover"
              preload="metadata"
              poster="/317.jpg"
              muted
              playsInline
            />
            <div
              className={`absolute inset-0 bg-black/60 flex items-center justify-center ${
                isPlaying
                  ? "opacity-0 hover:opacity-100 transition-opacity duration-300"
                  : "opacity-100"
              }`}
            >
              <button
                className="w-20 h-20 rounded-full bg-white/80 hover:bg-white/90 flex items-center justify-center shadow-lg transition"
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <Pause className="w-10 h-10 text-red-500" />
                ) : (
                  <Play className="w-10 h-10 text-red-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
