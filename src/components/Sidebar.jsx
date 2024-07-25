import React from 'react';
import { FaUser, FaCog, FaHome } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-2xl font-bold">CA_App</h1>
      </div>
      <div className="flex flex-col mt-10">
        <SidebarItem icon={<FaUser />} text="Profile" />
        <SidebarItem icon={<FaCog />} text="Settings" />
        <SidebarItem icon={<FaHome />} text="Home" />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => (
  <div className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
    <div className="text-xl">{icon}</div>
    <span className="ml-4">{text}</span>
  </div>
);

export default Sidebar;
