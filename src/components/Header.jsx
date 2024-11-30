import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="bg-light-primary text-light-secondary absolute h-12 w-full z-10"> {/* header main */}
            <Navbar />
            <span className="flex justify-center items-center font-bold text-center p-2 mx-auto w-4/5 lg:w-4/5 lg:text-xl md:text-base sm:text-xs">Nevada Veterans Foundation is a 501(c)(3) charitable non-profit supporting the quality of life for military members, retirees, veterans & their families in the State of Nevada.</span>
        </header>
    )
  }
  
  export default Header;
  