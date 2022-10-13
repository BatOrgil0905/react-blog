import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { React } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

export const MenuDesktop = () => {
  // const [category, setCategory] = useState([]);
  // useEffect(() => {
  //   const getCategory = async () => {
  //     const response = await axios.get("/categories");
  //     setCategory(response.data);
  //   };
  //   getCategory();
  // }, []);
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    alert("Do you want to LOGOUT");
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="hidden lg:block">
      <ul className="flex justify-start m-0 p-0 ">
        <li className="py-2.5 mr-6 text-xl dark:text-gray-200 font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105 dark:hover:text-gray-300">
          <Link to="/">Home</Link>
        </li>
        {/* <li className="py-2.5 mr-6 text-xl font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105 ">
          <Link to="/about">About</Link>
        </li> */}
        <li className="py-2.5 mr-6 text-xl dark:text-gray-200 font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105 dark:hover:text-gray-300">
          <Link to="/write">Write</Link>
        </li>
        {/* <div className="dropdown relative">
          <li className="py-2.5 mr-6 text-xl dark:text-gray-200 font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105 dark:hover:text-gray-300">
            Category
          </li>
          <div className="dropdown-content hidden absolute min-w-min bg-white dark:bg-gray-900 shadow-lg leftt-[10%] py-4 z-20">
            {category.map((cat) => (
              <Link key={cat._id} to={`/?category=${cat.name}`}>
                <li key={cat._id} className="block text-xl font-light dark:text-gray-200 cursor-pointer px-6 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 ">
                  {cat.name}
                </li>
              </Link>
            ))}
          </div>
        </div> */}
        <li
          className="py-2.5 mr-6 text-xl dark:text-gray-200 font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105 dark:hover:text-gray-300"
          onClick={handleLogout}
        >
          {user && "Logout"}
        </li>
      </ul>
    </div>
  );
};

export const MenuToggle = () => {
  return (
    <div className="cursor-pointer block lg:hidden">
      <div className="w-[30px] my-1.5 h-0.5 bg-black dark:bg-gray-300"></div>
      <div className="w-[30px] my-1.5 h-0.5 bg-black dark:bg-gray-300"></div>
      <div className="w-[30px] my-1.5 h-0.5 bg-black dark:bg-gray-300"></div>
    </div>
  );
};

export const MenuMobile = () => {
  // const [category, setCategory] = useState([]);
  // useEffect(() => {
  //   const getCategory = async () => {
  //     const response = await axios.get("/categories");
  //     setCategory(response.data);
  //   };
  //   getCategory();
  // }, []);
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    alert("Do you want to LOGOUT");
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="flex flex-col mt-6 dark:bg-gray-900">
      <ul
        className="mt-8 mx-4 block flex flex-col items-start font-light"
        id="menu"
      >
        <li className="py-2.5 mr-6 text-xl  font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105 dark:text-gray-200 dark:hover:text-gray-300">
          <Link to="/">Home</Link>
        </li>
        <li className="py-2.5 mr-6 text-xl font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105 dark:text-gray-200 dark:hover:text-gray-300">
          <Link to="/write">Write</Link>
        </li>
        {/* <div className="dropdown relative">
          <li className="py-2.5 mr-6 text-xl font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105 dark:text-gray-200 dark:hover:text-gray-300">
            Category
          </li>
          <div className="dropdown-content hidden absolute w-full bg-gray-50 dark:bg-gray-900 right-[10%] py-4 z-20">
            {category.map((cat) => (
              <Link key={cat._id} to={`/?category=${cat.name}`}>
                <li
                  key={cat._id}
                  className="block w-full text-xl font-light dark:text-gray-200 cursor-pointer px-6 py-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {cat.name}
                </li>
              </Link>
            ))}
          </div>
        </div> */}
        <li
          className="py-2.5 mr-6 text-xl font-light cursor-pointer duration-300 hover:text-gray-600 hover:scale-105 dark:text-gray-200 dark:hover:text-gray-300"
          onClick={handleLogout}
        >
          {user && "Logout"}
        </li>
      </ul>
    </div>
  );
};
