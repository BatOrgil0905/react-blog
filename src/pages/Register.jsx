import React from "react";

const Register = () => {
  return (
    <div className="w-full h-screen bg-lime-50 flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-4 cursor-default">Register</h1>
      <form className="w-[370px] flex flex-col p-4 rounded-lg bg-white">
        <label className="mb-2 text-xl">Username</label>
        <input
          className="py-2 px-4 w-full border-b border-black mb-4"
          type="text"
          placeholder="Enter your username."
        />
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
        <button className="py-2 px-4 bg-green-300 text-black w-full border mb-4 cursor-pointer duration-300 hover:bg-green-600 hover:text-white">
          Register
        </button>
      </form>
      <button className="my-4 py-2 px-4 bg-blue-300 w-[345px] cursor-pointer duration-300 hover:text-white hover:bg-blue-600">
        Login
      </button>
    </div>
  );
};

export default Register;
