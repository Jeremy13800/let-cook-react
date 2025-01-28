import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import RecipesContent from "./components/RecipesContent";
import Recette from "./pages/Recette";
import Cards from "./components/Cards";
import Hero from "./components/Hero";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/recettes/:id" element={<RecipesContent />} />
      <Route path="*" element={<p>404 - Page non trouvée</p>} />
    </Routes>
  );
};

export default App;
