import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Section = () => {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      title: "Recettes",
      url: "/recette",
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
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-9 py-12   rounded-lg">
      {/* Site Map */}
      <div className="flex flex-col border p-7 rounded-lg bg-white shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Site Map</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {/* <li className="hover:text-[#d1cfcf] px-2 cursor-pointer">Accueil</li>
          <li className="hover:text-[#d1cfcf] px-2 cursor-pointer">Recettes</li>
          <li className="hover:text-[#d1cfcf] px-2 cursor-pointer">
            Dashboard
          </li>
          <li className="hover:text-[#d1cfcf] px-2 cursor-pointer">Contact</li>
          <li className="hover:text-[#d1cfcf] px-2 cursor-pointer">
            Politique de confidentialité
          </li> */}
          {links.map((link, i) => {
            return (
              <li key={i}>
                <Link className="hover:text-[#d1cfcf] px-2" to={link.url}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Réseaux Sociaux */}
      <div className="flex flex-col border p-6 rounded-lg bg-white shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Suivez Nous</h3>
        <div className="flex items-center space-x-4 mb-6">
          <FaFacebook className="text-blue-600 text-3xl" />
          <p className="text-gray-700">Facebook</p>
        </div>
        <div className="flex items-center space-x-4 mb-6">
          <FaTwitter className="text-blue-400 text-3xl" />
          <p className="text-gray-700 ">Twitter</p>
        </div>
        <div className="flex items-center space-x-4">
          <FaInstagramSquare className="text-pink-600 text-3xl" />
          <p className="text-gray-700">Instagram</p>
        </div>
      </div>

      {/* Newsletter */}
      <div className="flex flex-col border p-6 rounded-lg bg-white shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Abonnez-vous à notre NewsLetter
        </h3>
        <form className="flex flex-col space-y-4">
          <label htmlFor="email" className="text-gray-700 font-medium">
            Email :
          </label>
          <input
            type="email"
            id="email"
            placeholder="Votre adresse email ici... "
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-1"
          />
          <button
            aria-label="bouton qui permet de souscrire le formulaire d'adhesion a la newsletter"
            type="submit"
            className="bg-[#E4B95F] w-1/2 ml-auto  text-black text-medium font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </section>
  );
};

export default Section;
