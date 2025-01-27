import React, { useState } from "react";
import recettesData from "../assets/recettes.json";
import { FaRegEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";

const DashboardContent = () => {
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    difficulty: "",
    category: "",
    description: "",
  });

  const [recettes, setRecettes] = useState(recettesData);
  const [viewingRecipe, setViewingRecipe] = useState(null); // Pour gérer l'overlay

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Validation pour s'assurer que la difficulté est un nombre entre 1 et 5
    if (name === "difficulty") {
      if (value === "" || (Number(value) >= 1 && Number(value) <= 5)) {
        setNewRecipe({ ...newRecipe, [name]: value });
      }
    } else {
      setNewRecipe({ ...newRecipe, [name]: value });
    }
  };

  //Annuler une recette
  const handleCancel = () => {
    setNewRecipe({ title: "", difficulty: "", category: "", description: "" });
  };

  //Ajouter une recette
  const handleAdd = () => {
    if (
      newRecipe.title &&
      newRecipe.difficulty &&
      newRecipe.category &&
      newRecipe.description
    ) {
      const newId = recettes.length + 1;
      const newRecette = {
        id: newId,
        title: newRecipe.title,
        difficulty: newRecipe.difficulty,
        category: newRecipe.category,
        description: newRecipe.description.trim(),
        imageUrl: "../public/menu.webp",
      };
      setRecettes((prev) => [newRecette, ...recettes]); // Ajoute la nouvelle recette à la liste des recettes
      handleCancel(); // Reset du formualaire
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  //supprimer une recette
  const handleDelete = (id) => {
    setRecettes((prev) => prev.filter((recipe) => recipe.id !== id));
  };

  // Editer une recette
  const handleEdit = (id) => {
    const recipeToEdit = recettes.find((recipe) => recipe.id === id);
    if (recipeToEdit) {
      setNewRecipe({
        title: recipeToEdit.title,
        difficulty: recipeToEdit.difficulty.toString(),
        category: recipeToEdit.category,
        description: recipeToEdit.description,
      });
      setEditingRecipe(recipeToEdit);
    }
  };

  //Visualiser la recette
  const handleView = (id) => {
    const recipeToView = recettes.find((recipe) => recipe.id === id);
    if (recipeToView) {
      setViewingRecipe(recipeToView); // Définit la recette à afficher
    }
  };

  const closeOverlay = () => {
    setViewingRecipe(null); // Ferme l'overlay
  };

  return (
    <div className="container mx-auto my-10 px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Colonne gauche : Formulaire */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Ajouter une recette
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Titre de la recette
            </label>
            <input
              type="text"
              name="title"
              value={newRecipe.title}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              placeholder="Entrez le titre..."
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Difficulté ( 1 à 5)
            </label>
            <input
              type="number"
              name="difficulty"
              value={newRecipe.difficulty}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              placeholder="Entrez un nombre entre 1 et 5..."
              min="1"
              max="5"
            ></input>
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Catégorie
            </label>
            <input
              name="category"
              value={newRecipe.category}
              onChange={handleChange}
              placeholder="Entrez un catégorie..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
            ></input>
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={newRecipe.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              rows="4"
              placeholder="Entrez une description"
            ></textarea>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300"
            >
              Annuler
            </button>
            <button
              type="button"
              onClick={handleAdd}
              className="px-4 py-2 bg-[#E4B95F] text-black font-semibold rounded-lg hover:bg-yellow-600"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>

      {/* Colonne droite : Slider des recettes */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Recettes disponibles
        </h2>
        <div className="space-y-6 overflow-y-auto max-h-[500px]">
          {recettes.map((recipe) => (
            <div
              key={recipe.id}
              className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-100 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {recipe.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-1">
                    {recipe.description}
                  </p>
                </div>
              </div>
              <div className="flex space-x-3 justify-center">
                <FaRegEye
                  onClick={() => handleView(recipe.id)}
                  className="w-4 h-4 text-[#E4B95F] hover:text-blue-600 cursor-pointer flex-shrink-0"
                />
                <FaPencilAlt
                  onClick={() => handleEdit(recipe.id)}
                  className="w-4 h-4 text-[#E4B95F] hover:text-green-600 cursor-pointer flex-shrink-0"
                />
                <IoTrashBin
                  onClick={() => handleDelete(recipe.id)}
                  className="w-4 h-4 text-[#E4B95F] hover:text-red-600 cursor-pointer flex-shrink-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Overlay */}
      {viewingRecipe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">{viewingRecipe.title}</h2>
            <img
              src={viewingRecipe.imageUrl}
              alt={viewingRecipe.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700">{viewingRecipe.description}</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeOverlay}
                className="mt-4 px-4 py-2 bg-[#E4B95F] text-black rounded-lg"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
