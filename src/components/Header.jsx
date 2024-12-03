import React, {useEffect, useState} from "react";
import Navbar from "./Navbar/Navbar";
import NavbarMobile from "./Navbar/NavbarMobile/NavbarMobile";

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 767);
      };
  
      // Add resize event listener
      window.addEventListener("resize", handleResize);
  
      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
        <header className="absolute h-12 w-full z-10"> {/* header main */}
             {isMobile ? <NavbarMobile /> : <Navbar />}
            <span className="flex justify-center items-center font-bold text-center p-2 mx-auto w-2/4 lg:w-4/5 lg:text-xl md:text-base sm:text-xs">Nevada Veterans Foundation is a 501(c)(3) charitable non-profit supporting the quality of life for military members, retirees, veterans & their families in Nevada.</span>
        </header>
    )
  }
  
  export default Header;
  