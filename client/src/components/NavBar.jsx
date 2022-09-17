import React, { useState } from "react";
import { ProfilePic } from "./images/Images";
import { SearchIcon, SunIcon } from "./Icons";
import { Link } from "react-router-dom";
import Switch from "../theme/Switch";
import { MenuDesktop, MenuMobile, MenuToggle } from "./Menu";
import { useContext } from "react";
import { Context } from "../context/Context";

const NavBar = () => {
  const {user} = useContext(Context);

  function openResMenu(){
    const myOpenMenu = document.querySelector(".myOpenMenu");
    myOpenMenu.style.width = "40%";
  }

  function closeMenu(){
    const myOpenMenu = document.querySelector(".myOpenMenu");
    myOpenMenu.style.width = "0%";
  }

  return (
    <div className="w-full h-[50px] bg-white sticky top-0 flex items-center shadow-lg z-20 dark:bg-gray-900">
      <div className="myOpenMenu dark:bg-gray-900">
        <div className="sticky top-0 z-20">
          <a
            href="javascript:void(0)"
            className="absolute right-1 pr-4 dark:text-gray-300 text-4xl"
            onClick={closeMenu}
          >
            x
          </a>
        </div>
        <MenuMobile />
      </div>

      <div className="block lg:hidden flex-[3] flex items-center justify-center">
        <label
          htmlFor="menu-toggle"
          onClick={openResMenu}
          className="block cursor-pointer lg:hidden"
        >
          <MenuToggle />
        </label>
        <input
          className="hidden duration-300"
          type="checkbox"
          id="menu-toggle"
        />
      </div>

      <div className="flex-[6] lg:flex-[3] flex items-center justify-center">
        <h1 className="font-semibold text-2xl dark:text-white">
          <Link to="/">BLOGGERY</Link>
        </h1>
      </div>

      <div className="flex-[0] lg:flex-[6] flex items-center justify-center px-8">
        <MenuDesktop />
      </div>

      <div className="flex-[3] flex items-center justify-center ">
        {user ? (
          <Link to="/account">
            <ProfilePic data={user} />
          </Link>
        ) : (
          <ul className="flex justify-center m-0 p-0">
            <li className="mr-6 text-xl font-light cursor-pointer duration-300 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 hover:scale-105">
              <Link to="/login">Login</Link>
            </li>
            <li className="mr-6 text-xl font-light cursor-pointer duration-300 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 hover:scale-105">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        )}
        <div className="dropdown relative">
          <SearchIcon />
          <div className="dropdown-content hidden absolute w-[250px] -right-3 border-t-2 border-gray-400 dark:border-slate-900 px-4 bg-white dark:bg-gray-900 py-4 z-20">
            <input type="text" placeholder="search here..." className="block w-full bg-gray-100 dark:bg-gray-800 dark:text-gray-300 p-2" />

          </div>
        </div>
        <Switch />
      </div>
    </div>
  );
};

export default NavBar;
