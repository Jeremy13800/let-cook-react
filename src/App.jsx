import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Cards from "./cards";
import Section from "./Section";

import React from "react";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <Section />
    </div>
  );
};

export default App;
