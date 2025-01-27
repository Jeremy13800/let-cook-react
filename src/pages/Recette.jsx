import React from "react";
import Header from "../components/Header";
import HeroRecipes from "../components/HeroRecipes";
import RecipesContent from "../components/RecipesContent";
import Section from "../components/Section";
import Footer from "../components/Footer";
import recettes from "../assets/recettes.json";

const Recette = () => {
  return (
    <div>
      <Header />
      <HeroRecipes />
      <div className="bg-gradient-to-b from-white via-white/80 to-[#D1CFCF] min-h-screen">
        <RecipesContent />
        <Section />
        <Footer />
      </div>
    </div>
  );
};

export default Recette;
