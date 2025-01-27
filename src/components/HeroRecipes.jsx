import React from "react";

const HeroRecipes = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden mt-2">
      {/* Image Background */}
      <div
        className="w-full h-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/public/hero-image.jpeg')",
          backgroundSize: "cover",
        }}
      >
        {/*Texte en overlays */}
        <div className="text-white text-center p-5 rounded-md">
          <h1 className="text-6xl font-bold mb-3">RECETTE</h1>
          <h2 className="text-2xl mb-6">
            On a trouvé la recette pour vous faire aimer la cuisine
          </h2>
          {/* Barre de recherche */}
          <div className="pt-2 text-black">
            <input
              type="search"
              className="  border-[#d1cfcf] p-2 w-3/4"
              placeholder="Rechercher une recette..."
            />
            {/* Bouton de recherche */}
            <button className="bg-[#E4B95F] text-white py-2 px-3 ml-3 rounded-md">
              Rechercher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRecipes;
