import React from "react";
import { ProfilePic } from "./images/Images";
import { SearchIcon } from "./Icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = false;

  return (
    <div className="w-full h-[50px] bg-white sticky top-0 flex items-center z-20">
      <div className="flex-[3] flex items-center justify-center">
        <i className="fab fa-facebook-square text-xl mr-4 text-gray-600 cursor-pointer"></i>
        <i className="fab fa-twitter-square text-xl mr-4 text-gray-600 cursor-pointer"></i>
        <i className="fab fa-pinterest-square text-xl mr-4 text-gray-600 cursor-pointer"></i>
        <i className="fab fa-instagram-square text-xl mr-4 text-gray-600 cursor-pointer"></i>
      </div>
      <div className="flex-[6]">
        <ul className="flex justify-center m-0 p-0 ">
          <li className="mr-6 text-xl font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-6 text-xl font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-6 text-xl font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105">
            <Link to="/write">Write</Link>
          </li>
          <li className="mr-6 text-xl font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105">
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="flex-[3] flex items-center justify-center">
        {user ? (
          <ProfilePic />
        ) : (
          <ul className="flex justify-center m-0 p-0">
            <li className="mr-6 text-xl font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105">
              <Link to="/login">Login</Link>
            </li>
            <li className="mr-6 text-xl font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        )}

        <SearchIcon />
      </div>
    </div>
  );
};

export default NavBar;
