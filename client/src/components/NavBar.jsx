import React, { useState } from "react";
import { ProfilePic } from "./images/Images";
import { SearchIcon, SunIcon } from "./Icons";
import { Link } from "react-router-dom";
import Switch from "../theme/Switch";
import { MenuDesktop, MenuMobile, MenuToggle } from "./Menu";

const NavBar = () => {
  const user = true;

  function openResMenu(){
    const myOpenMenu = document.querySelector(".myOpenMenu");
    myOpenMenu.style.width = "40%";
  }

  function closeMenu(){
    const myOpenMenu = document.querySelector(".myOpenMenu");
    myOpenMenu.style.width = "0%";
  }

  return (
    <div className="w-full h-[50px] bg-white sticky top-0 flex items-center shadow-lg z-20">

      <div className="myOpenMenu">
        <div className="sticky top-0 z-20">
          <a
            href="javascript:void(0)"
            className="absolute right-1 pr-4 pt-2 text-4xl"
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
        <h1 className="font-semibold text-2xl">
          <Link to="/">BLOGGERY</Link>
        </h1>
      </div>

      <div className="flex-[0] lg:flex-[6] flex items-center justify-center px-8">
        <MenuDesktop />
      </div>

      <div className="flex-[3] flex items-center justify-center">
        {user ? (
          <Link to="/account">
            <ProfilePic />
          </Link>
        ) : (
          <ul className="flex justify-center m-0 p-0">
            <li className="mr-6 text-xl font-light cursor-pointer duration-300 hover:text-gray-600  hover:scale-105">
              <Link to="/login">Login</Link>
            </li>
            <li className="mr-6 text-xl font-light cursor-pointer duration-300 hover:text-gray-600  hover:scale-105">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        )}

        <SearchIcon />
        <Switch />
      </div>
    </div>
  );
};

export default NavBar;
