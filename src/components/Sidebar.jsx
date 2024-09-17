import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiOutlineAppstore, AiOutlineBank, AiOutlineBarChart, AiOutlineUserAdd } from 'react-icons/ai';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <div>
      {/* Button to toggle the sidebar on mobile */}
      <button
        className="fixed top-20 left-4 text-white md:hidden z-50"
        onClick={toggleSidebar}
      >
        {isOpen ? '': <FaArrowRight className='text-black  z-10' size={18} />}
      </button>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 z-40`}
      >
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          {/* <li><Link to="/dashboard/overview" className="text-blue-300 hover:text-white">Overview</Link></li> */}
          <li ><Link to="/dashboard/ads-performance" className="flex items-center text-blue-300 hover:text-white" onClick={handleClose}><AiOutlineBarChart className="mr-3" size={20} /> Ads Performance</Link></li>
          <li ><Link to="/dashboard/registrations" className="flex items-center text-blue-300 hover:text-white" onClick={handleClose}><AiOutlineUserAdd className="mr-3" size={20} /> New Registrations</Link></li>
          <li ><Link to="/dashboard/advertisers" className="flex items-center text-blue-300 hover:text-white" onClick={handleClose}><AiOutlineAppstore className="mr-3" size={20} /> Advertisers Management</Link></li>
          <li ><Link to="/dashboard/brands" className="flex items-center text-blue-300 hover:text-white" onClick={handleClose}><AiOutlineBank className="mr-3" size={20} /> Brands Management</Link></li>
        </ul>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Sidebar;
