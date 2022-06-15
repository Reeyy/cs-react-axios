import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-gradient-to-r from-orange-400 to-pink-600 flex items-center px-10 justify-between">
      <h1 className="text-3xl font-semibold font-Firacode text-white">Crud</h1>
      <Link
        to="/add-user"
        className="relative inline-block group focus:outline-none focus:ring "
      >
        <span className="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-orange-400 group-hover:translate-y-1.5  rounded-full group-hover:translate-x-1.5"></span>

        <span className="text-white relative inline-block px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-none rounded-lg">
          Add user
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
