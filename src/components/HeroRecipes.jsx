import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import recetteData from "../assets/recettes.json";
import useRecipes from "./useRecipes";

const HeroRecipes = () => {
  const { searchTerm, setSearchTerm, filteredRecipes, handleMoreInfo, error } =
    useRecipes();

  if (error) {
    return (
      <div role="alert" className="text-red-500 text-lg text-center mt-4">
        Erreur : {error}
      </div>
    );
  }
  return (
    <div className="relative w-full h-[500px] overflow-hidden mt-2">
      {/* Image Background */}
      <div
        rel="preload"
        as="image"
        className="w-full h-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero-image.webp')",
          backgroundSize: "cover",
        }}
      >
        {/*Texte en overlays */}
        <div className="text-white text-center p-5 rounded-md">
          <h1 className="text-4xl md:text-5xl font-extrabold  dark:text-[#E4B95F] tracking-tight leading-tight md:leading-snug text-center mt-8 mb-6">
            RECETTE
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold  dark:text-gray-300 tracking-wide leading-snug text-center mt-4 mb-8">
            On a trouvé la recette pour vous faire aimer la cuisine
          </h2>
          {/* Barre de recherche */}
          <div className="relative mt-6 w-full max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              className="w-full py-3 px-5 text-lg bg-white dark:bg-gray-300 border dark:text-black border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 shadow-md"
              placeholder="Rechercher une recette..."
            />
            {/* Bouton de recherche */}
            <button className="bg-[#E4B95F] text-white py-2 px-3 ml-3 rounded-md hidden">
              Rechercher
            </button>
          </div>
          <ul
            role="list"
            style={{
              visibility: searchTerm.trim() ? "visible" : "hidden", // Rend visible/invisible
              opacity: searchTerm.trim() ? 1 : 0, // Transition d'opacité pour l'apparition
              transform: searchTerm.trim()
                ? "translateY(0)"
                : "translateY(-10px)", // Glissement subtil
              transition:
                "opacity 0.5s ease, transform 0.5s ease, visibility 0.5s", // Transition fluide
              position: "absolute", // Hors du flux
              top: "69%", // Placé juste en dessous
              left: "35%", // Centrage horizontal
              transformOrigin: "top", // Origine du glissement
              zIndex: 10, // Toujours visible au-dessus
              width: "30%", // Largeur de la div
              height: "30%", // Hauteur de la div
              backgroundColor: "white", // Fond blanc
              color: "black",
              padding: searchTerm.trim() ? "1rem" : "0", // Transition du padding
              borderRadius: "5px", // Coins arrondis
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)", // Légère ombre
              maxHeight: "200px", // Hauteur maximale
            }}
            className="rounded-lg shadow-lg"
          >
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <li
                  key={recipe.id}
                  className="p-2 border-b hover:text-[#d1cfcf]"
                >
                  <button
                    onClick={() => handleMoreInfo(recipe)}
                    className="font-bold"
                    aria-label="ce bouton permet d'obtenur plus d'informations sur la recette selectionnée"
                  >
                    {recipe.title}
                  </button>
                </li>
              ))
            ) : (
              <li className="text-gray-500">Aucune recette trouvée.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroRecipes;
