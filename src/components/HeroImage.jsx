import React from "react";

const HeroImage = () => {
    return (
      <div className="absolute h-screen w-full bg-cover bg-center z-0" style={{ backgroundImage: "url('./src/test/test.png')" }}> {/* the image + wrapper */}
        <div className="absolute inset-0 bg-black bg-opacity-65 flex items-center justify-center"> {/* wrapper for hero content + flex items */}
          <div className="text-center text-white px-4"> {/* Wrapper + content */}
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Site</h1>
            <p className="mt-4 text-lg md:text-xl">Your tagline or hero message goes here.</p>
            <button className="mt-6 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-opacity-80">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroImage;