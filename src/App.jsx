// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import UserDetailsForm from "./components/UserDetailsForm";
import { useAuth } from './AuthContext';
import MainPage from "./components/MainPage";


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated } = useAuth();


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* <Route path="/dashboard" element={isAuthenticated ? <DashboardPage onProfileClick={openModal} /> : <Navigate to="/login" />} /> */}
          <Route path="/MainPage" element={isAuthenticated ? <MainPage onProfileClick={openModal} /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        <UserDetailsForm isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </Router>
  );
};


export default App;



