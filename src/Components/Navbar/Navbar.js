import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="w-full text-md relative bg-[#04236E] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-50">
        <div className="flex justify-between gap-[14px] items-center w-full px-2 md:px-0 md:w-[90%] mx-auto py-4">
  
          <a href="/">
            <img
              alt="IamScientist logo"
              loading="lazy"
              width="120"
              height="100"
              decoding="async"
              className="cursor-pointer w-20 h-10 md:w-24 md:h-12 lg:w-28 lg:h-12 2xl:w-44 2xl:h-16"
              src="/Scientist-Logo.png"
              srcSet="/Scientist-Logo.png 1x, /Scientist-Logo.png 2x"
            />
          </a>

     
          <div className="hidden lg:flex gap-4 z-20 items-center font-poppins">
            <a href="/" className="text-sm 2xl:text-lg text-white">Home</a>
            <a href="/about" className="text-sm 2xl:text-lg text-white">About Us</a>
            <a href="/contest" className="text-sm 2xl:text-lg text-white">Online Contests</a>
            <a href="/outline" className="text-sm 2xl:text-lg text-white">Online Outline</a>
            <a href="/courses" className="text-sm 2xl:text-lg text-white">Past Papers</a>
            <a href="/free-tools" className="text-sm 2xl:text-lg text-white">Forms</a>
            <a href="/contact" className="text-sm 2xl:text-lg text-white">Results</a>
            <a href="/auth/signup">
              <div className="border border-gray-200 text-sm 2xl:text-lg font-semibold px-6 py-[8px] transition-all duration-500 ease-in-out hover:opacity-90 text-white rounded-tr-lg rounded-bl-lg bg-[#c407b9] hover:shadow-lg font-poppins cursor-pointer">
                Enroll
              </div>
            </a>
          </div>

          <div className="lg:hidden">
            <div
              className="cursor-pointer text-white"
              onClick={toggleMenu}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-[#04236E] py-4`}>
          <div className="flex flex-col items-center gap-4">
            <a href="/" className="text-white text-lg font-poppins">Home</a>
            <a href="/about" className="text-white text-lg font-poppins">About Us</a>
            <a href="/contest" className="text-white text-lg font-poppins">Online Contests</a>
            <a href="/outline" className="text-white text-lg font-poppins">Online Outline</a>
            <a href="/courses" className="text-white text-lg font-poppins">Past Papers</a>
            <a href="/free-tools" className="text-white text-lg font-poppins">Forms</a>
            <a href="/contact" className="text-white text-lg font-poppins">Results</a>
            <a href="/auth/signup">
              <div className="border border-gray-200 text-lg font-semibold px-6 py-[8px] bg-[#c407b9] text-white rounded-tr-lg rounded-bl-lg font-poppins cursor-pointer">
                Enroll
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
