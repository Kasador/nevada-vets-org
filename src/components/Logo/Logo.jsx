import React from "react";
import NevadaVetsLogo from '/images/nevadavet-logo-main.png';

const Logo = () => {
    return (
        <>
            <img 
                src={NevadaVetsLogo} 
                alt="Nevada Veterans Foundation Main Logo"
                className="w-28 absolute top-8 left-64"
            />
        </>
    )
}
  
export default Logo;
  