import React from "react";

const Header = () => {
  const links = [
    {
      title: "Home",
      url: "#",
    },
    {
      title: "Recettes",
      url: "#",
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
      <header class="container mx-auto flex justify-between ">
        <div className="flex">
          <img className="logo" src="./public/logo.svg" />
          {/* <p className="m-5 ml-10">Acceuil</p> */}
          <nav className="">
            <ul className="flex m-6 ml-10">
              {links.map((link, i) => {
                return (
                  <li>
                    <a className="hover:text-[#d1cfcf] px-2" href={link.url}>
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div>
          <button className="bg-[#E4B95F] m-4 text-white py-2 px-4 rounded-lg font-medium shadow-lg hover:bg-yellow-600 hover:shadow-xl transition duration-300">
            Dashboard
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
