import React from "react";
import recettes from "../assets/recettes.json";
import { useLocation } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";

const RecipesContent = () => {
  // Récupération de la recette courante
  const location = useLocation();
  const recipe = location.state;

  if (!recipe) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Aucune recette selectionnée</p>
      </div>
    );
  }
  const etoile = (difficulty) => {
    const totalStars = 5; // Nombre d'étoiles total
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      if (i <= difficulty) {
        stars.push(<FaStar key={i} className="text-[#E4B95F] inline mb-1" />); // Étoile pleine
      } else {
        // stars.push(<FaRegStar key={i} className="text-gray-300 inline mb-1" />); // Étoile vide
      }
    }
    return stars;
  };
  return (
    <div className="container mx-auto my-12  px-4 md:px-8 lg:px-16">
      <h1 className="text-5xl font-bold mb-12 text-center text-gray-800 tracking-wide">
        {recipe.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12  bg-gray-50 p-8 rounded-lg shadow-lg">
        {/* Colonne gauche */}
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800 border-b-2 border-[#E4B95F] inline-block pb-2">
              Difficulté
            </h2>
            <div className="flex items-center space-x-2">
              {etoile(recipe.difficulty)}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800 border-b-2 border-[#E4B95F] inline-block pb-2">
              Ingrédients
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 bg-white p-6 rounded-lg shadow-md">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-lg">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800 border-b-2 border-[#E4B95F] inline-block pb-2">
              Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 bg-white p-6 rounded-lg shadow-md">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="text-lg flex items-start space-x-3">
                  <span className="font-bold text-[#E4B95F]">{index + 1}.</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Colonne droite */}
        <div className="flex justify-center items-start">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg border-4 border-[#E4B95F]"
          />
        </div>
      </div>
    </div>
  );
};

export default RecipesContent;
