import logo from "/src/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0E369E] rounded-lg shadow">
      <div className="container mx-auto p-4 md:py-6">
        <div className="flex flex-wrap items-center justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="FemFund Logo" />
            <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#a47f6e] to-[#5C4033]">
              FemFund
            </span>
          </a>

          <ul className="flex flex-wrap justify-center items-center gap-4 text-sm font-medium text-white">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                View
              </a>
            </li>
          </ul>

          <div className=" md:flex gap-6">
            <w3m-button />
          </div>
        </div>

      
        <hr className="my-6 border-gray-500 dark:border-gray-700" />

  
        <p className="text-center text-sm text-white dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            FemFund™
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
