import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <div className="flex items-center shadow-sm justify-between p-3 md:p-10 md:mx-16">
      
      <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-[36.5px] h-[32px]" />
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#a47f6e] to-[#5C4033] text-3xl font-bold">
          FemFund
        </h2>
      </Link>

    
      <div className="hidden md:flex justify-center items-center gap-10 ml-20">
        <Link
          to="/contribution"
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#a47f6e] to-[#5C4033] text-2xl hover:underline hover:text-gray-400"
        >
          Contribute
        </Link>
        <Link
          to="/status"
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#a47f6e] to-[#5C4033] text-2xl hover:underline hover:text-gray-400"
        >
         Status
        </Link>
        <Link
          to="/destribute"
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#a47f6e] to-[#5C4033] text-2xl hover:underline hover:text-gray-400"
        >
       Destribute
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <HiX className="text-black w-6 h-6" />
          ) : (
            <HiMenu className="text-black w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen
            ? "flex flex-col absolute top-16 right-4 w-2/3 py-3 z-10 bg-[#0E369E] rounded-lg shadow-lg"
            : "hidden"
        } md:hidden`}
      >
        <Link
          to="/contribution"
          className="text-black block px-4 py-2 bg-white border rounded-lg mb-2 text-center"
          onClick={handleLinkClick}
        >
         Contribute
        </Link>
        <Link
          to="/status"
          className="text-black block px-4 py-2 bg-white border rounded-lg mb-2 text-center"
          onClick={handleLinkClick}
        >
         Status
        </Link>
        <Link
          to="/goal"
          className="text-black block px-4 py-2 bg-white border rounded-lg mb-2 text-center"
          onClick={handleLinkClick}
        >
         Goal
        </Link>
        <div className="mx-auto">
        <w3m-button />
        </div>
      </div>
      <div className="hidden md:flex md:flex-row md:gap-10 items-center">
        <w3m-button />
      </div>
    </div>
  );
};

export default Navbar;
