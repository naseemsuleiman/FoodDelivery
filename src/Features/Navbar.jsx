import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom'; 

const Navbar = ({ cartCount }) => {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-sm px-4 md:px-12 py-3 flex items-center justify-between">
      
      <div className="text-2xl font-bold text-green-600">
        FoodExpress
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-gray-700 font-medium hover:text-green-600">
          Sign In
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium">
          Sign Up
        </button>

      
        <Link
          to="/dashboard"
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
        >
          Dashboard
        </Link>

        <Link to="/cart" className="relative">
          <ShoppingCartIcon className="h-6 w-6 text-gray-700 hover:text-green-600" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

