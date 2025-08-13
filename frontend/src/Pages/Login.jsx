import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate()


    const user = localStorage.getItem("token");
  
    useEffect(() => {
      if (user) {
        navigate("/");
      }
    }, [user]);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/user", form);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/")
      }
      alert("Login successful");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-md  w-full max-w-xs"
      >
        <h2 className="text-lg font-semibold mb-4 text-center">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded text-sm"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded text-sm  "
          required
        />


        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Sign In
        </button>

        <p className="text-xs text-blue-600 text-center mt-4">
          New here?{" "}
          <Link to="/register" className="text-blue-500">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
