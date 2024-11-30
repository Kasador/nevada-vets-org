import React from "react";
import { HiChevronDown } from "react-icons/hi";
// import Logo from "./src/test/nevadavet-logo-main.png";

const HeroImage = () => {
    return (
      <div className="absolute h-full w-5/6 object-cover bg-top bg-no-repeat z-0 bg-light-surface top-32" style={{ backgroundImage: "url('./src/test/navadavetsorg-hero-bg.jpg')" }}> {/* the image + wrapper */}
        <div className="relative top-20 flex items-center justify-center"> {/* wrapper for hero content + flex items */}
          <div className="text-center text-white px-4"> {/* Wrapper + content */}
            <div style={{ backgroundImage: "url('./src/test/nevadavet-logo-main.png')"}} className="h-32 w-32 bg-contain bg-center bg-no-repeat mx-auto relative right-2"></div>
            <h1 className="text-4xl md:text-6xl font-bold">Nevada Veterans Foundations</h1>
            <p className="mt-4 text-lg md:text-xl">A non-profit that supports our own.</p>
            <button className="mt-6 px-6 py-3 bg-light-accent text-white font-medium rounded-lg hover:bg-opacity-80">
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