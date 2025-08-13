import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("token");


  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6">This is Home Page</h1>

      <div className="flex gap-4">
        {user ? (
          <button
            onClick={handleLogOut}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 text-white px-4 py-2 rounded "
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="bg-green-500 text-white px-4 py-2 rounded "
            >
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
