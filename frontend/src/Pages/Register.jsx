import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const user = localStorage.getItem("token");

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/user/register",
        formData
      );
      localStorage.setItem("token", res.data.token);
      navigate("/");
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      alert(err.response?.data?.message || "something went wrong");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-sm rounded shadow p-6">
        <h1 className="text-center text-xl mb-5">
          Create Account
        </h1>

        <form onSubmit={handleRegister} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleInput}
            className="border rounded px-3 py-2 text-sm"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInput}
            className="border rounded px-3 py-2 text-"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInput}
            className="border rounded px-3 py-2 text-sm "
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2"
          >
            Sign Up
          </button>
        </form>

        <p className=" text-gray-600 text-center mt-4">
          Already have an account ?
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
