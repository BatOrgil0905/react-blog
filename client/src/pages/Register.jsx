import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login")
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <>
      <div className="w-full h-screen bg-green-50 flex flex-col justify-center items-center dark:bg-gray-800">
        <h1 className="text-2xl mb-4 cursor-default dark:text-gray-300">Register</h1>
        <form
          className="w-[370px] flex flex-col p-4 rounded-lg bg-white dark:bg-gray-900"
          onSubmit={handleSubmit}
        >
          <label className="mb-2 text-xl dark:text-gray-300">Username</label>
          <input
            className="py-2 px-4 w-full border-b border-black mb-4 dark:bg-gray-900 dark:border-gray-300 dark:text-gray-300"
            type="text"
            placeholder="Enter your username."
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="mb-2 text-xl dark:text-gray-300">Email</label>
          <input
            className="py-2 px-4 w-full border-b border-black mb-4 dark:bg-gray-900 dark:border-gray-300 dark:text-gray-300"
            type="text"
            placeholder="Enter your email."
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="mb-2 text-xl dark:text-gray-300">Password</label>
          <input
            className="py-2 px-4 w-full border-b border-black mb-4 dark:bg-gray-900 dark:border-gray-300 dark:text-gray-300"
            type="password"
            placeholder="Enter your password."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="py-2 px-4 bg-green-300 text-black w-full border mb-4 cursor-pointer duration-300 hover:bg-green-600 hover:text-white"
            type="submit"
          >
            Register
          </button>
        </form>
        <button className="my-4 py-2 px-4 bg-blue-300 w-[345px] cursor-pointer duration-300 hover:text-white hover:bg-blue-600">
          <Link to="/login">Login</Link>
        </button>
        {error && <span className="my-4 text-red-400">Something went wrong!</span>}
      </div>
      <Footer />
    </>
  );
};

export default Register;
