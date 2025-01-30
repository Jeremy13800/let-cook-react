import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import recetteData from "../assets/recettes.json";

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setRecipes(recetteData);
    setFilteredRecipes(recetteData);
  }, []);

  useEffect(() => {
    setFilteredRecipes(
      recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, recipes]);

  const handleMoreInfo = (recipe) => {
    navigate(`/recettes/${recipe.id}`);
  };

  return {
    recipes,
    searchTerm,
    setSearchTerm,
    filteredRecipes,
    error,
    handleMoreInfo,
  };
};

export default useRecipes;
