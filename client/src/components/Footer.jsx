import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-black w-full h-[150px] bg-white dark:bg-gray-900">
      <div className="flex flex-row items-center justify-between mt-10 mx-12 sm:mx-24">
        <h1 className="font-semibold text-2xl dark:text-white">BLOGERRY</h1>
        <div className="flex flex-col items-center">
          <h1 className="dark:text-gray-300">Follow Me</h1>
          <div>
            <i className="fab fa-facebook-square text-xl mr-4 text-gray-600 dark:text-gray-300 cursor-pointer"></i>
            <i className="fab fa-twitter-square text-xl mr-4 text-gray-600 dark:text-gray-300 cursor-pointer"></i>
            <i className="fab fa-pinterest-square text-xl mr-4 text-gray-600 dark:text-gray-300 cursor-pointer"></i>
            <i className="fab fa-instagram-square text-xl mr-4 text-gray-600 dark:text-gray-300 cursor-pointer"></i>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row justify-center">
        <div className="flex justify-between gap-4 items-center">
          <h1 className="font-semibold text-2xl my-auto ">
            <Link to="/">BLOGGERY</Link>
          </h1>
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
      </div> */}
      <div className="py-2">
        <p className="text-center dark:text-gray-300">2022 он</p>
      </div>
    </footer>
  );
};

export default Footer;
