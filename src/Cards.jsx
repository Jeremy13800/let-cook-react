import React from "react";
import recettes from "./assets/recettes.json";

const cards = () => {
  const recipesCards = () => {
    return recettes.map((recipe) => (
      <div
        key={recipe.id}
        className="card flex flex-col border-2 rounded-md mt-4 shadow-md gap-2 pb-2"
      >
        <img
          className="object-cover w-full h-[350px] mb-3  rounded"
          src={recipe.imageUrl}
          alt={recipe.image}
        />
        <h2 className="m-2">{recipe.title}</h2>
        <p className="m-2">Difficulté : {recipe.difficulty}</p>
        <p className="m-2 mt-2">{recipe.description}</p>
        <button className="bg-[#D1CFCF] text-[#E4B95F] ml-auto mt-auto justify-end font-bold w-1/2  opacity-90 py-2 px-4 rounded-md">
          En savoir plus
        </button>
      </div>
    ));
  };
  return (
    <main>
      <section className="my-6">
        <div className="container mx-auto recipes grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 ">
          {recipesCards()}
          {/* Affiche une carte pour chaque recette */}
        </div>
      </section>
    </main>
  );
};

export default cards;
