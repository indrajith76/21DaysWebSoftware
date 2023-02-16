import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex h-screen bg-black justify-center items-center">
      <div className="w-5/6 md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="text-gray-900 text-3xl mb-8 font-bold">Login</div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              style={{ fontSize: 10 }}
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              style={{ fontSize: 10 }}
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-indigo-500 hover:text-indigo-600"
            >
              Sign up
            </Link>
          </div>
          <button
            className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 w-full text-sm mt-5"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
