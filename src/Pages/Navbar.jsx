import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-blue-600 flex items-center px-10 justify-between">
      <h1 className="text-3xl font-semibold font-Firacode text-white">Crud</h1>
      <button className="w-48 bg-white text-blue-900 font-semibold text-xl h-12 rounded-lg">
        {" "}
        Add user
      </button>
    </div>
  );
};

export default Navbar;
