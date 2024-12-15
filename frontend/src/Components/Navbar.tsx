import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {useTheme} from '../context/theme.tsx';
import { Sun, Moon, } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className=" fixed top-0 left-0 right-0 bg-white z-50 flex dark:bg-slate-100  items-center shadow-sm justify-between p-3 md:p-10">
      
      <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-[36.5px] h-[32px]" />
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#a47f6e] to-[#5C4033] text-2xl font-bold">
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
          to="/event"
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#a47f6e] to-[#5C4033] text-2xl hover:underline hover:text-gray-400"
        >
         Status
        </Link>
        <Link
          to="/getdistribute"
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#a47f6e] to-[#5C4033] text-2xl hover:underline hover:text-gray-400"
        >
       Total Contribution
        </Link>
        <button
          onClick={toggleTheme}
          className="w-9 h-9 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <HiX className="text-black w-6 h-6" />
          ) : (
            <HiMenu className="text-black w-6 h-6" />
          )}
        </button>
        <button
          onClick={toggleTheme}
          className="w-9 h-9 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
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
          to="/event"
          className="text-black block px-4 py-2 bg-white border rounded-lg mb-2 text-center"
          onClick={handleLinkClick}
        >
         Status
        </Link>
        <Link
          to="/getdistribute"
          className="text-black block px-4 py-2 bg-white border rounded-lg mb-2 text-center"
          onClick={handleLinkClick}
        >
         Total Contribution
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
