import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const signInHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("Login successfully.");
          form.reset();
        }
      })
      .catch((err) => {
        toast.error("Login failed!");
      });
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 justify-center items-center">
      <div className="w-5/6 md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={(e) => signInHandler(e)}>
          <div className="text-gray-900 text-3xl mb-8 font-bold text-center">
            Login
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-900 font-medium mb-2"
              style={{ fontSize: 10 }}
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="input w-full border border-gray-400 p-2 rounded-lg bg-white"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-900 font-medium mb-2"
              style={{ fontSize: 10 }}
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg bg-white"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <div className="text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/signUp"
              className="text-indigo-500 hover:text-indigo-600"
            >
              Sign Up
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
