import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Section from "../components/Section";
import Footer from "../components/Footer";

const Home = ({ rec }) => {
  console.log("rec:", rec);
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

export default Home;
