import React from "react";
import recettes from "../assets/recettes.json";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const cards = ({ recettes }) => {
  // Gérer la navigation
  const navigate = useNavigate();

  const handleMoreInfo = (recipe) => {
    navigate(`/recette/${recipe.id}`, { state: recipe });
  };
  // Fonction pour générer les étoiles
  const etoile = (difficulty) => {
    const totalStars = 5; // Nombre d'étoiles total
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      if (i <= difficulty) {
        stars.push(<FaStar key={i} className="text-yellow-500 inline mb-1" />); // Étoile pleine
      } else {
        // stars.push(<FaRegStar key={i} className="text-gray-300 inline mb-1" />); // Étoile vide
      }
    }
    return stars;
  };
  const recipesCards = () => {
    return recettes.map((recipe) => (
      <div
        key={recipe.id}
        className="card  flex flex-col bg-white border border-gray-200 dark:bg-gray-700 dark:shadow-lg dark:shadow-gray-900/50  transition-all  dark:border-gray-600 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out transition-shadow  duration-300 ease-in-out"
      >
        <img
          className="object-cover w-full h-[350px] mb-3  rounded-t-lg"
          src={recipe.imageUrl}
          alt={recipe.image}
        />
        <h2 className="m-2 text-xl font-bold text-gray-800 dark:text-yellow-400">
          {recipe.title}
        </h2>
        <div className="flex flex-row items-center">
          <p className=" m-2 text-base text-gray-500 dark:text-white">
            Difficulté : {etoile(recipe.difficulty)}
          </p>
        </div>
        <p className="text-base text-gray-700 flex-grow m-2 mt-2 mb-7 line-clamp-2 dark:text-white">
          {recipe.description}
        </p>
        <button
          onClick={() => handleMoreInfo(recipe)}
          className="bg-[#E4B95F] hover:bg-yellow-600 mr-2 transition duration-300 self-start mb-6 ml-auto mt-auto justify-end font-bold w-1/2  opacity-90 py-2 px-4 rounded-lg shadow-lg "
        >
          En savoir plus
        </button>
      </div>
    ));
  };
  return (
    <main className="py-10">
      <section className="my-[100px]">
        <div className="container mx-auto recipes grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 ">
          {recipesCards()}
          {/* Affiche une carte pour chaque recette */}
        </div>
      </section>
    </main>
  );
};

export default cards;
