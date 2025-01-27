import React from "react";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import Dashboard from "../pages/Dashboard";
import { useState } from "react";

const Header = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Contact",
      url: "#",
    },
    {
      title: "Politique de confidentialité",
      url: "#",
    },
  ];
  return (
    <>
      <header className="container mx-auto flex justify-between ">
        <div className="flex">
          <Link to={"/"}>
            <img className="logo" src="../logo.svg" />
          </Link>
          {/* <p className="m-5 ml-10">Acceuil</p> */}
        </div>
        <div className="flex">
          <RxAvatar
            onClick={toggleOverlay}
            size={45}
            color="#E4B95F"
            className="mr-1  hover:text-yellow-600 transition-transform transform hover:scale-110 duration-300"
          />
          <Link to={"/dashboard"}>
            <button
              aria-label="acces a l'espace d'administration pour gerer l'ajout et la suppression de recette"
              className="bg-[#E4B95F] m-4 text-white py-2 px-4 rounded-lg
            font-medium shadow-lg hover:bg-yellow-600 hover:shadow-xl transition
            duration-300"
            >
              {" "}
              Dashboard{" "}
            </button>
          </Link>
        </div>
      </header>
      {/* Overlay */}
      {isOverlayOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
            <button
              onClick={toggleOverlay}
              className="text-gray-500 hover:text-gray-800 float-right"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Inscription</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Votre nom..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg "
                  placeholder="Votre email..."
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Votre mot de passe..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#E4B95F] text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
