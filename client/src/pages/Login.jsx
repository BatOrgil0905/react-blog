import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen bg-sky-50 flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-4 cursor-default">Login</h1>
      <form className="w-[370px] flex flex-col p-4 rounded-lg bg-white">
        <label className="mb-2 text-xl">Email</label>
        <input
          className="py-2 px-4 w-full border-b border-black mb-4"
          type="text"
          placeholder="Enter your email."
        />
        <label className="mb-2 text-xl">Password</label>
        <input
          className="py-2 px-4 w-full border-b border-black mb-4"
          type="password"
          placeholder="Enter your password."
        />
        <button className="py-2 px-4 bg-blue-300 text-black w-full border mb-4 cursor-pointer duration-300 hover:bg-blue-500 hover:text-white">
          Login
        </button>
      </form>
      <button className="my-4 py-2 px-4 bg-green-300 w-[345px] cursor-pointer duration-300 hover:text-white hover:bg-green-600">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
};

export default Login;
