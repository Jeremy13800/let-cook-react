import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import recetteData from "../assets/recettes.json";

const HeroRecipes = () => {
  const [recipes, setRecipes] = useState([]); // État pour stocker les recettes
  const [searchTerm, setSearchTerm] = useState(""); // État pour le champ de recherche
  const [filteredRecipes, setFilteredRecipes] = useState([]); // État pour les recettes filtrées
  const [error, setError] = useState(null); // État pour gérer les erreurs
  const navigate = useNavigate();

  const handleMoreInfo = (recipe) => {
    navigate(`/recettes/${recipe.id}`);
  };

  // Charger dynamiquement les données JSON
  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //     try {
  //       const response = await fetch("/src/assets/recettes.json");
  //       if (!response.ok) {
  //         throw new Error("Erreur lors du chargement des données.");
  //       }
  //       const data = await response.json();
  //       setRecipes(data); // Mettre à jour les recettes
  //       setFilteredRecipes(data); // Initialiser les recettes filtrées
  //     } catch (err) {
  //       setError(err.message); // Gérer les erreurs
  //     }
  //   };

  //   fetchRecipes();
  // }, []);
  useEffect(() => {
    setRecipes(recetteData);
    setFilteredRecipes(recetteData);
  }, []);

  // Mettre à jour les recettes filtrées à chaque modification du champ de recherche
  useEffect(() => {
    setFilteredRecipes(
      recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, recipes]);

  const handleSearch = () => {
    const results = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(results);
  };

  if (error) {
    return <p>Erreur : {error}</p>;
  }
  return (
    <div className="relative w-full h-[500px] overflow-hidden mt-2">
      {/* Image Background */}
      <div
        className="w-full h-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero-image.jpeg')",
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="search"
              className="  border-[#d1cfcf] p-2 w-3/4"
              placeholder="Rechercher une recette..."
            />
            {/* Bouton de recherche */}
            <button
              onClick={handleSearch}
              className="bg-[#E4B95F] text-white py-2 px-3 ml-3 rounded-md hidden"
            >
              Rechercher
            </button>
          </div>
          <div
            style={{
              visibility: searchTerm.trim() ? "visible" : "hidden", // Rend visible/invisible
              opacity: searchTerm.trim() ? 0.8 : 0, // Transition d'opacité pour l'apparition
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
          >
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="p-2 border-b hover:text-[#d1cfcf]"
                >
                  <button
                    onClick={() => handleMoreInfo(recipe)}
                    className="font-bold"
                  >
                    {recipe.title}
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Aucune recette trouvée.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRecipes;
