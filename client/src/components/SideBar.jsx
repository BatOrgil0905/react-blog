import React from "react";
import { AboutMePic } from "./images/Images";

const SideBar = () => {
  return (
    <div className="flex-[3] mx-4">
      <div>
        <h1 className="text-center py-2 my-4 border-y-2 border-black text-xl">
          About Me
        </h1>
        <AboutMePic />
        <p className="my-4 text-gray-700 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          eveniet aliquid. Quibusdam id recusandae saepe dolorem excepturi
          exercitationem necessitatibus tempore, nulla magni maxime? Incidunt,
          temporibus quasi architecto quo reprehenderit placeat!
        </p>
      </div>

      <div className="">
        <h1 className="text-center py-2 my-4 border-y-2 border-black text-xl">
          Categories
        </h1>
        <ul className="grid grid-cols-2 justify-items-center cursor-pointer">
          <li>Life</li>
          <li>Travel</li>
          <li>Music</li>
          <li>Movie</li>
          <li>Sport</li>
          <li>Tech</li>
          <li>Fashion</li>
        </ul>
      </div>

      <div className="my-4">
        <h1 className="text-center py-2 my-4 border-y-2 border-black text-xl">
          Follow Me
        </h1>
        <div className="flex items-center justify-center">
          <i className="fab fa-facebook-square text-xl mr-4 text-gray-600 cursor-pointer"></i>
          <i className="fab fa-twitter-square text-xl mr-4 text-gray-600 cursor-pointer"></i>
          <i className="fab fa-pinterest-square text-xl mr-4 text-gray-600 cursor-pointer"></i>
          <i className="fab fa-instagram-square text-xl mr-4 text-gray-600 cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
