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
      {/* Add more routes here */}
      <Route path="/Recette" element={<Recette />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/*" element={<p>404</p>} />
      <Route path="/" element={<Cards />} />
      <Route path="/recette/:id" element={<Recette />} />
      <Route path="/" element={<Hero />} />
      <Route path="/recettes/:id" element={<RecipesContent />} />
    </Routes>
  );
};

export default App;
