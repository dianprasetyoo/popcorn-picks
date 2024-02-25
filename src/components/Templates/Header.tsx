import React from "react";
import starwarsLogo from "../../assets/images/Starwars-logo.png";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../utils";
import ModalAddToCart from "../ModalAddToCart";

function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = React.useState(false);
  const [openModalCart, setOpenModalCart] = React.useState(false)

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { state: globalContextData } = useGlobalContext();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const inputValue = (event.target as HTMLInputElement).value;
      alert(inputValue);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full bg-regular text-white py-4 z-50 transition-colors duration-300  ${
        location.pathname !== "/detail"
          ? "bg-opacity-1"
          : scrolled
          ? "bg-opacity-1"
          : "bg-opacity-20"
      } ${scrolled ? "bg-secondary" : "bg-regular"}`}
    >
      <div className="mx-auto lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to={`/`}>
          <div className="flex items-end mr-10">
            <img src={starwarsLogo} alt="Pockicks Logo" className="h-10" />
          </div>
        </Link>

        {/* search */}
        <div className="w-full lg:w-auto mt-4 lg:mt-0 lg:mx-4 flex-grow">
          <div className="relative">
            <input
              type="text"
              placeholder="Find Movie"
              className="py-2 px-4 pr-10 block w-full rounded-lg bg-grey border-transparent focus:border-gray-500 focus:outline-none bg-opacity-20"
              onKeyDown={handleKeyDown}
            />
            <div className="absolute inset-y-0 right-0 px-4 py-2 rounded-r-lg flex items-center">
              <FaSearch size={16} />
            </div>
          </div>
        </div>

        {/* cart */}
        <div
          className="flex items-center ml-10 cursor-pointer"
          onClick={() => setOpenModalCart(true)}
        >
          <div className="relative">
            <FaShoppingCart size={24} />
            {globalContextData.cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full text-xs">
                {globalContextData.cart.length}
              </span>
            )}
          </div>
        </div>
        <ModalAddToCart isOpen={openModalCart} onClose={() => {setOpenModalCart(false)}}/>
      </div>
    </header>
  );
}

export default Header;
