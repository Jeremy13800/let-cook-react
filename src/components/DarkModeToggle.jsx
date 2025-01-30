import React, { useState, useEffect } from "react";
import { MdOutlineDarkMode } from "react-icons/md";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Charger l'état du mode sombre depuis le localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("dark-mode");
    if (savedTheme === "enabled") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Fonction de bascule entre mode sombre et mode clair
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;

      // Mise à jour de la classe sur l'élément HTML
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("dark-mode", "enabled");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("dark-mode", "disabled");
      }

      return newMode; // Mise à jour de l'état
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="mr-1  hover:text-yellow-600 transition-transform transform hover:scale-110 duration-300 dark:text-gray-200  transition-colors "
    >
      <MdOutlineDarkMode
        size={44}
        color="#E4B95F"
        className="mr-1  hover:text-yellow-600 transition-transform transform hover:scale-110 duration-300"
      />
    </button>
  );
}
