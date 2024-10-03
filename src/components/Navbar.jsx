import { Link } from "react-router-dom";
import React, { useState } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { logout } from "../pages/userAdmission/authSlice";
import { useDispatch } from "react-redux";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    logout();
    await dispatch(logout()).unwrap();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 cursor-pointer"
        >
          VentoPay
        </Link>

        <button
          className="md:hidden text-gray-600 hover:text-blue-600"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt1 size={24} />}
        </button>

        <nav className="md:flex hidden">
          <ul className="flex space-x-4 items-center">
            <li>
              <Link
                to="/register"
                className="text-gray-600 hover:text-blue-600"
              >
                Register
              </Link>
            </li>
            <li>
              <a href="#features" className="text-gray-600 hover:text-blue-600">
                Features
              </a>
            </li>
            <li>
              <a
                href="#advertisers"
                className="text-gray-600 hover:text-blue-600"
              >
                Advertisers
              </a>
            </li>
            <li>
              <a href="#brands" className="text-gray-600 hover:text-blue-600">
                Brands
              </a>
            </li>
            <button className="bg-blue-600 items-center text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
              <a
                className=" text-white hover:text-blue-600"
                onClick={handleLogout}
              >
                Log Out
              </a>
            </button>
          </ul>
        </nav>

        <nav
          className={`md:hidden fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 cursor-pointer"
            >
              PIENA
            </Link>
            <button
              className="text-gray-600 hover:text-blue-600"
              onClick={toggleMenu}
            >
              <HiX size={24} />
            </button>
          </div>
          <ul className="space-y-4 p-4">
            <li>
              <Link
                to="/dashboard"
                className="text-gray-600 hover:text-blue-600"
                onClick={closeMenu}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600"
                onClick={closeMenu}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#advertisers"
                className="text-gray-600 hover:text-blue-600"
                onClick={closeMenu}
              >
                Advertisers
              </a>
            </li>
            <li>
              <a
                href="#brands"
                className="text-gray-600 hover:text-blue-600"
                onClick={closeMenu}
              >
                Brands
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
