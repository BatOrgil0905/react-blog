import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-white ">
      <div className="flex flex-row items-center justify-center shadow-inner">
        <div className="flex justify-around items-center">
          <h1 className="font-semibold text-2xl my-3 ">
            <Link to="/">BLOGGERY</Link>
          </h1>

          <div className="px-[25%] md:px-[50%] lg:px-[100%] xl:px-[170%]"></div>

          {/* <div className="flex flex-col px-[20%]">
            <h1 className="text-center py-2 text-xl">
              Categories
            </h1>
            <ul className="flex flex-row gap-4 justify-center cursor-pointer">
              <li>Life</li>
              <li>Travel</li>
              <li>Music</li>
              <li>Movie</li>
              <li>Sport</li>
              <li>Tech</li>
              <li>Fashion</li>
            </ul>
          </div> */}

          <div className="flex flex-col my-3">
            <h1 className="text-center py-2 text-xl">
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
      </div>
      <div className="py-2">
        <p className="text-center">2022 он</p>
      </div>
    </footer>
  );
};

export default Footer;
