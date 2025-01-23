import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Cards from "./Cards";
import Section from "./Section";
import Footer from "./Footer";

import React from "react";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="bg-gradient-to-b from-white via-white/80 to-[#D1CFCF] min-h-screen">
        <Cards />
        <Section />
        <Footer />
      </div>
    </div>
  );
};

export default App;
