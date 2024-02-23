import React from "react";
import pockicksLogo from "../../assets/logo/pockicks.png";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const itemCount = 1;
  const location = useLocation();

  console.log("disini:", location.pathname);

  return (
    <header
      className={`bg-regular text-white py-4 ${
        location.pathname !== "/detail" ? "bg-opacity-1" : "bg-opacity-20 relative"
      }`}
    >
      <div className="mx-auto lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to={`/`}>
          <div className="flex items-end mr-10">
            <img src={pockicksLogo} alt="Pockicks Logo" className="h-10" />
            <span className="ml-2 text-xl font-bold">POPCORN PICKS</span>
          </div>
        </Link>

        {/* search */}
        <div className="w-full lg:w-auto mt-4 lg:mt-0 lg:mx-4 flex-grow">
          <div className="relative">
            <input
              type="text"
              placeholder="Find Movie"
              className="py-2 px-4 pr-10 block w-full rounded-lg bg-secondary border-transparent focus:border-gray-500 focus:outline-none bg-opacity-20"
            />
            <div className="absolute inset-y-0 right-0 px-4 py-2 rounded-r-lg flex items-center">
              <FaSearch size={16} />
            </div>
          </div>
        </div>

        {/* cart */}
        <div
          className="flex items-center ml-10 cursor-pointer"
          onClick={() => alert("open modal cart")}
        >
          <div className="relative">
            <FaShoppingCart size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full text-xs">
                {itemCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
