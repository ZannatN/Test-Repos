
import React from 'react'
import Logo from "../../assets/Logo.png";
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Navbar = () => {
  return (
   <div>
     <div></div>
     {/* Upper Navbar */}
    <div>
    <div className="flex items-center justify-between px-8 py-4">
  {/* Logo Section */}
  <div className="ml-[100px]">
    <a href="#">
      <img src={Logo} alt="Logo" />
    </a>
  </div>

  {/* Menu Items */}
  <div className="flex space-x-10 items-center">
    
      <div className="flex items-center text-gray-700 hover:text-primary cursor-pointer transition-colors duration-200">
        Home
        <ChevronDownIcon className="w-4 h-4 ml-2 text-gray-600" />
      </div>
      <div className="flex items-center text-gray-700 hover:text-primary cursor-pointer transition-colors duration-200">
        About
        <ChevronDownIcon className="w-4 h-4 ml-2 text-gray-600" />
      </div>
      <div className="flex items-center text-gray-700 hover:text-primary cursor-pointer transition-colors duration-200">
        Service
        <ChevronDownIcon className="w-4 h-4 ml-2 text-gray-600" />
      </div>
      <div className="flex items-center text-gray-700 hover:text-primary cursor-pointer transition-colors duration-200">
        Portfolio
        <ChevronDownIcon className="w-4 h-4 ml-2 text-gray-600" />
      </div>
      <div className="flex items-center text-gray-700 hover:text-primary cursor-pointer transition-colors duration-200">
        Price
        <ChevronDownIcon className="w-4 h-4 ml-2 text-gray-600" />
      </div>
      <div className="flex items-center text-gray-700 hover:text-primary cursor-pointer transition-colors duration-200">
        Blog
        <ChevronDownIcon className="w-4 h-4 ml-2 text-gray-600" />
      </div>
    </div>

  {/* Contact Button */}
  <div>
    <button
      onClick={() => alert("Contact is possible yet")}
      className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full mr-[100px]"
    >
      Contact Us
    </button>
  </div>
</div>
     </div>
      {/* Lower Navbar */}
    <div></div>
   </div>
  )
}

export default Navbar;
