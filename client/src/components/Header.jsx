import React from "react";
import { HomeImage } from "./images/Images";

const Header = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center text-gray-700">
        <span className="absolute top-[40%] text-6xl">Bloggery</span>
        <p className="text-center text-xl absolute top-[50%]">
          Блог бичээд хүмүүст хуваалцацгаая.
        </p>
      </div>
      <HomeImage />
    </div>
  );
};

export default Header;
