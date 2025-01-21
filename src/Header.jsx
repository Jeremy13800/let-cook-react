import React from "react";

const Header = () => {
  return (
    <>
      <header class="container mx-auto flex justify-between ">
        <div className="flex">
          <img className="logo" src="./public/logo.png" />
          <p className="m-5 ml-10">Acceuil</p>
        </div>
        <div>
          <button className="mt-4">Dashboard</button>
        </div>
      </header>
    </>
  );
};

export default Header;
