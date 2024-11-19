// import { useState } from 'react'
import Header from "./components/Header.jsx";
import HeroImage from "./components/HeroImage.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <>
    <Navbar />
    <HeroImage />
    <main className="bg-light-background">
      <h1>Test</h1>
    </main>
    </>
  )
}

export default App;
