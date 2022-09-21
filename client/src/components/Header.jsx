import React from "react";
import { HomeImage } from "./images/Images";
import { Link } from "react-router-dom";


const Header = () => {
  const writeLink = () => {
    window.location.replace("/write")
  }
  return (
    <div className="">
      <div className="flex flex-col items-center text-gray-700">
        <span className="absolute top-[40%] text-6xl">Bloggery</span>
        <p className="text-center text-xl absolute top-[50%]">
          Блог бичээд хүмүүст хуваалцацгаая.
        </p>
      <button onClick={writeLink} className="absolute top-[60%] border border-gray-600 bg-white py-2 px-4 duration-300 hover:shadow-lg hover:shadow-black hover:border-0 dark:bg-gray-900 dark:text-gray-300">Блог Бичих</button>
      </div>
      <HomeImage />
    </div>
  );
};

export default Header;
