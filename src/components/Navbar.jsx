import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt1, HiX } from 'react-icons/hi'; // Import menu and close icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 cursor-pointer">PIENA</Link>

        {/* Menu Icon for Mobile */}
        <button
          className="md:hidden text-gray-600 hover:text-blue-600"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt1 size={24} />}
        </button>

        {/* Navigation for Desktop */}
        <nav className="md:flex hidden">
          <ul className="flex space-x-4">
            <li><Link to="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link></li>
            <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
            <li><a href="#advertisers" className="text-gray-600 hover:text-blue-600">Advertisers</a></li>
            <li><a href="#brands" className="text-gray-600 hover:text-blue-600">Brands</a></li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        <nav
          className={`md:hidden fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex justify-between items-center p-4">
            <Link to="/" className="text-2xl font-bold text-blue-600 cursor-pointer">PIENA</Link>
            <button
              className="text-gray-600 hover:text-blue-600"
              onClick={toggleMenu}
            >
              <HiX size={24} />
            </button>
          </div>
          <ul className="space-y-4 p-4">
            <li><Link to="/dashboard" className="text-gray-600 hover:text-blue-600" onClick={closeMenu}>Dashboard</Link></li>
            <li><a href="#features" className="text-gray-600 hover:text-blue-600" onClick={closeMenu}>Features</a></li>
            <li><a href="#advertisers" className="text-gray-600 hover:text-blue-600" onClick={closeMenu}>Advertisers</a></li>
            <li><a href="#brands" className="text-gray-600 hover:text-blue-600" onClick={closeMenu}>Brands</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
