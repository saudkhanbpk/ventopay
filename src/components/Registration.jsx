import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { registerAdvertiser, registerBrand } from "../services/api";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "advertiser",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.type === "advertiser") {
      registerAdvertiser(formData)
        .then((response) => {
          alert("Advertiser registered successfully!");
          navigate("/dashboard"); // Redirect to Dashboard on success
        })
        .catch((error) => alert("Failed to register advertiser."));
    } else {
      registerBrand(formData)
        .then((response) => {
          alert("Brand registered successfully!");
          navigate("/dashboard"); // Redirect to Dashboard on success
        })
        .catch((error) => alert("Failed to register brand."));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Register as Advertiser or Brand
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="advertiser">Advertiser</option>
              <option value="brand">Brand</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
