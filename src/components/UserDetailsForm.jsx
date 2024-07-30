import React, { useState, useEffect, useRef } from "react";
import { createUserDetails } from "../api";

const UserDetailsForm = ({ isOpen, onClose }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    jobTitle: "",
    companyName: "",
    bio: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createUserDetails(formData);
      console.log("User details created successfully:", response);
      onClose();
    } catch (error) {
      console.error("Error during creating user details:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div ref={formRef} className="bg-white rounded-lg w-full md:w-3/4 lg:w-1/2 p-6">
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
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="border rounded p-2"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="border rounded p-2"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border rounded p-2"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
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
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Job Title"
                className="border rounded p-2"
                required
              />
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="border rounded p-2"
                required
              />
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
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


