// src/components/UserDetailsForm.jsx
import React, { useState } from "react";

const UserDetailsForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full md:w-3/4 lg:w-1/2 p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">User Details</h2>
        <form onSubmit={handleSubmit}>
          {/* Personal Details Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded p-2"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded p-2"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border rounded p-2"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border rounded p-2"
                required
              />
            </div>
          </div>

          {/* Professional Details Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Professional Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Job Title"
                className="border rounded p-2"
                required
              />
              <input
                type="text"
                placeholder="Company Name"
                className="border rounded p-2"
                required
              />
              <textarea
                placeholder="Brief Bio"
                className="border rounded p-2 h-24"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsForm;
