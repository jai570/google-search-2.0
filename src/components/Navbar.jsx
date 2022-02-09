import React from "react";
import { Link } from "react-router-dom";

import { Search } from "./Search";

export const Navbar = ({ setDarkTheme, darkTheme }) => (
  <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
    <div className="flex justify-between items-center space-x-5 w-screen ">
      <Link to="/">
        <div className="flex">
          <p className="text-2xl text-blue-600 font-semibold ">G</p>
          <p className="text-2xl text-red-600 font-semibold ">O</p>
          <p className="text-2xl text-yellow-500 font-semibold ">O</p>
          <p className="text-2xl text-blue-600 font-semibold ">G</p>
          <p className="text-2xl text-green-500 font-semibold ">L</p>
          <p className="text-2xl text-red-600 font-semibold ">E2.0</p>
        </div>
      </Link>
      <button
        type="button"
        onClick={() => setDarkTheme(!darkTheme)}
        className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
      >
        {darkTheme ? "💡" : "🌙"}
      </button>
    </div>
    <Search />
  </div>
);
