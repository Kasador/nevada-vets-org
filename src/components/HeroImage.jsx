import React from "react";
import { HiChevronDown } from "react-icons/hi";

const HeroImage = () => {
    return (
      <div className="absolute h-full w-full object-cover bg-center bg-no-repeat z-0 bg-light-surface" style={{ backgroundImage: "url('./src/test/navadavetsorg-hero-bg.jpg')" }}> {/* the image + wrapper */}
        <div className="absolute inset-0 flex items-center justify-center"> {/* wrapper for hero content + flex items */}
          <div className="text-center text-white px-4"> {/* Wrapper + content */}
            <h1 className="text-4xl md:text-6xl font-bold">Nevada Veterans</h1>
            <p className="mt-4 text-lg md:text-xl">A non-profit that supports our own.</p>
            <button className="mt-6 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-opacity-80">
              How to Support 
                <center>
                  <HiChevronDown />
                </center>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroImage;