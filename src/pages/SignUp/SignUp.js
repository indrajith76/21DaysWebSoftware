import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const signUpHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          updateUser({ displayName: name })
            .then(() => {
              toast.success("Sign Up successfully!");
              form.reset()
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => {
        toast.error("Sign Up failed!");
      });
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 justify-center items-center">
      <div className="w-5/6 md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={(e) => signUpHandler(e)}>
          <div className="text-gray-900 text-3xl mb-8 font-bold text-center">
            Sign Up
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              style={{ fontSize: 10 }}
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              style={{ fontSize: 10 }}
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="email"
              id="email"
              name="email"
              required
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
              name="password"
              required
            />
          </div>
          <div className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/login" className="text-indigo-500 hover:text-indigo-600">
              Login
            </Link>
          </div>
          <button
            className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 w-full text-sm mt-5"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
