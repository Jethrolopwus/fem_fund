// import { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi"; 
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png"


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () =>{
//     setIsOpen(!isOpen);
//   }

//   const handleLinkClick = () =>{
//     setIsOpen(true);
//   }


//   return (
//     <div className="flex items-center justify-between p-3 md:p-10  md:mx-16 ">
//       <Link to="/" onClick={handleLinkClick} className="">
//         <span className="flex items-center gap-2 text-3xl font-bold text-white w-40w">
//           <img src={logo} alt="logo" className="w-[36.5px] h-[32px] " />
//           <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#a47f6e] to-[#5C4033]">
//           FemFund
//           </h2>
//         </span>
//       </Link>
//       <div className="flex justify-center items-center gap-10 ml-20">
//       <Link
//           to="/"
//          className="text-transparent bg-clip-text bg-gradient-to-r from-[#a47f6e] to-[#5C4033] text-2xl hover:underline hover:text-gray-400"
//           onClick={handleLinkClick}
//         >
//         About
//         </Link>
//         <Link
//           to="/"
//          className="text-transparent bg-clip-text bg-gradient-to-r from-[#a47f6e] to-[#5C4033] text-2xl hover:underline hover:text-gray-400"
//           onClick={handleLinkClick}
//         >
//         Products 
//         </Link>
//       </div>

//       <div className="md:hidden flex items-center">
//         <button onClick={toggleMenu} aria-label="Toggle menu">
//           {isOpen ? (
//             <HiX className="text-black w-6 h-6" />
//           ) : (
//             <HiMenu className="text-black w-6 h-6" />
//           )}
//         </button>
//       </div>


//       <div
//         className={`${
//           isOpen
//             ? "flex  flex-col absolute top-11 right-7 justify-center items-center w-[50%] py-3 z-10 bg-gradient-to-r from-[#a47f6e] to-[#b0968a] rounded-tl-lg rounded-bl-lg rounded-br-lg"
//             : "hidden"
//         } md:hidden`}
//       >
//         <Link
//           to="/"
//           className="text-black block px-4 py-1 bg-white border-2 rounded-2xl mb-2"
//           onClick={handleLinkClick}
//         >
//           About
//         </Link>
//         <Link
//           to="/"
//          className="text-black block px-4 py-1 bg-white border-2 rounded-2xl mb-2"
//           onClick={handleLinkClick}
//         >
//         Add Fund
//         </Link>
//         <Link
//           to="/"
//           className="text-black block px-4 py-1 bg-white border-2 rounded-2xl mb-2 hover:bg-green-500"
//           onClick={handleLinkClick}
//         >
//         View 
//         </Link>
//         <w3m-button />
//       </div>

//       <div className="hidden md:flex md:flex-row md:gap-10 items-center">
//         <w3m-button />
//       </div>
//       <div className="absolute">
//       </div>
// </div>
//   )
// }

// export default Navbar



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
    setIsOpen(false); // Close menu after clicking a link
  };

  return (
    <div className="flex items-center justify-between p-3 md:p-10 md:mx-16">
      {/* Logo */}
      <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-[36.5px] h-[32px]" />
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#a47f6e] to-[#5C4033] text-3xl font-bold">
          FemFund
        </h2>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex justify-center items-center gap-10 ml-20">
        <Link
          to="/"
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#a47f6e] to-[#5C4033] text-2xl hover:underline hover:text-gray-400"
        >
          About
        </Link>
        <Link
          to="/"
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#a47f6e] to-[#5C4033] text-2xl hover:underline hover:text-gray-400"
        >
          Products
        </Link>
        <Link
          to="/"
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#a47f6e] to-[#5C4033] text-2xl hover:underline hover:text-gray-400"
        >
          View
        </Link>
      </div>

      {/* Mobile Menu Button */}
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
          to="/"
          className="text-black block px-4 py-2 bg-white border rounded-lg mb-2 text-center"
          onClick={handleLinkClick}
        >
          About
        </Link>
        <Link
          to="/"
          className="text-black block px-4 py-2 bg-white border rounded-lg mb-2 text-center"
          onClick={handleLinkClick}
        >
          Products
        </Link>
        <Link
          to="/"
          className="text-black block px-4 py-2 bg-white border rounded-lg mb-2 text-center"
          onClick={handleLinkClick}
        >
          View
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
