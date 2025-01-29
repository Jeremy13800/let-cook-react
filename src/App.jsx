import { useState } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import RecipesContent from "./components/RecipesContent";
import Recette from "./pages/Recette";
import Cards from "./components/Cards";
import Hero from "./components/Hero";

const App = () => {
  const [rec, setRec] = useState("AAA");
  return (
    <Routes>
      <Route path="/" element={<Home rec={rec} />} />
      <Route path="/dashboard" element={<Dashboard rec={rec} />} />
      <Route path="/recettes/:id" element={<Recette />} />
      <Route path="*" element={<p>404 - Page non trouvée</p>} />
      <Route path="/recette/:id" element={<Recette />} />
      <Route path="/" element={<Recette />} />
      <Route path="/recette" element={<Recette />} />
    </Routes>
  );
};

export default App;
