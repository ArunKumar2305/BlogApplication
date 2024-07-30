// src/pages/DashboardPage.jsx
import React from "react";
import { FaUser } from "react-icons/fa";

const DashboardPage = ({ onProfileClick }) => {
  return (
    <div className="dashboard-page w-[5%] h-screen flex flex-col items-center py-4">
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-xl"></h1>
        <FaUser
          className="text-2xl cursor-pointer"
          onClick={onProfileClick}
        />
      </header>
      <main className="p-4">
        {/* Content for dashboard */}
      </main>
    </div>
  );
};

export default DashboardPage;
