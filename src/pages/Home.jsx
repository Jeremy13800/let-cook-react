import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Section from "../components/Section";
import Footer from "../components/Footer";
import DashboardContent from "../components/DashboardContent";
import { useState } from "react";
const Home = ({ recettes, setRecettes }) => {
  return (
    <div>
      <Header />
      <Hero />

      <div className="bg-gradient-to-b from-white via-white/80 to-[#D1CFCF] min-h-screen">
        <Cards recettes={recettes} />
        <Section />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
