import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEdit,
  faTrashAlt,
  faPlus,
  faUserCircle,
  faMoon,
  faSun
} from "@fortawesome/free-solid-svg-icons";

export const SearchIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faSearch}
      className="text-lg text-gray-600 cursor-pointer ml-2 lg:ml-4"
    />
  );
};

export const EditIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faEdit}
      className="text-xl text-green-500 cursor-pointer mx-2"
      title="Edit Post"
    />
  );
};

export const DeleteIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faTrashAlt}
      className="text-xl text-red-500 cursor-pointer mx-2"
      title="Delete Post"
    />
  );
};

export const AddIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faPlus}
      className="text-2xl text-orange-500 cursor-pointer border border-gray-400 rounded-full px-2 py-1.5 duration-300 hover:bg-gray-400 "
      title="Add Image"
    />
  );
};

export const UserIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faUserCircle}
      className="text-4xl mx-4 p-4 text-green-400 cursor-pointer duration-300 hover:scale-125"
      title="Add New Profile Picture"
    />
  );
};

export const MoonIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faMoon}
      className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
    />
  );
}

export const SunIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faSun}
      className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
    />
  );
}