import React from "react";
import { ProfilePic } from "./images/Images";
import { SearchIcon } from "./Icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = true;

  return (
    <div className="w-full h-[50px] bg-white sticky top-0 flex items-center z-20">
      <div className="flex-[3] flex items-center justify-center">
        {/* <i className="fab fa-facebook-square text-xl mr-4 text-gray-600 cursor-pointer"></i>
        <i className="fab fa-twitter-square text-xl mr-4 text-gray-600 cursor-pointer"></i>
        <i className="fab fa-pinterest-square text-xl mr-4 text-gray-600 cursor-pointer"></i>
        <i className="fab fa-instagram-square text-xl mr-4 text-gray-600 cursor-pointer"></i> */}
        <h1 className="font-semibold text-2xl">
          <Link to="/">BLOGGERY</Link>
        </h1>
      </div>
      <div className="flex-[6] flex items-center justify-center px-8">
        <ul className="flex justify-start m-0 p-0 ">
          <li className="py-2.5 mr-6 text-xl font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105">
            <Link to="/">Home</Link>
          </li>
          <li className="py-2.5 mr-6 text-xl font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105">
            <Link to="/about">About</Link>
          </li>
          <li className="py-2.5 mr-6 text-xl font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105">
            <Link to="/write">Write</Link>
          </li>
          <div className="dropdown relative">
            <li className="py-2.5 mr-6 text-xl font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105">
              Category
            </li>
            <div className="dropdown-content hidden absolute min-w-min bg-white shadow-lg right-[10%] py-4 z-20">
              <li className="block text-xl font-light cursor-pointer px-6 py-1 hover:bg-gray-100">
                Life
              </li>
              <li className="block text-xl font-light cursor-pointer px-6 py-1 hover:bg-gray-100">
                Music
              </li>
              <li className="block text-xl font-light cursor-pointer px-6 py-1 hover:bg-gray-100">
                Travel
              </li>
              <li className="block text-xl font-light cursor-pointer px-6 py-1 hover:bg-gray-100">
                Movie
              </li>
              <li className="block text-xl font-light cursor-pointer px-6 py-1 hover:bg-gray-100">
                Sport
              </li>
              <li className="block text-xl font-light cursor-pointer px-6 py-1 hover:bg-gray-100">
                Tech
              </li>
              <li className="block text-xl font-light cursor-pointer px-6 py-1 hover:bg-gray-100">
                Fashion
              </li>
            </div>
          </div>
          <li className="py-2.5 mr-6 text-xl font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105">
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
