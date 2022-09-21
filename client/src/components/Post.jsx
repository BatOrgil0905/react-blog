import React from "react";
// import Footer from "./Footer";
import { Link } from "react-router-dom";


const Post = ({ data }) => {
  const publicFolder = "http://localhost:5000/images/";

  return (
    <div className="h-auto p-.5 bg-white rounded-lg cursor-pointer duration-300 hover:scale-105 hover:shadow-md dark:bg-gray-900">
      <Link to={`/posts/${data._id}`}>
        <div className="my-3 mx-2 ">
          {data.photo ? (
            <img
              className="w-full h-[250px] sm:h-[225px] md:h-[200px] lg:h-[175px] dark:bg-black object-cover bg-cover rounded-md hidden"
              src={publicFolder + data.photo}
              alt={data.title}
            />
          ) : (
            <img
              className="w-full h-auto dark:bg-black object-cover bg-cover rounded-md hidden"
              alt={data.title}
            />
          )}

          <div>
            <p className="text-lg font-semibold my-1 p-1 px-2 dark:text-white">
              {data.title}
            </p>

            <h2 className="text-sm text-gray-700 border-y border-gray-600 p-1 px-2 dark:text-gray-300">
              {new Date(data.createdAt).toDateString()}
            </h2>
            <p className="text-[14px] p-1 px-2 dark:text-gray-200 h-[80px]">
              {data.description.substring(0, 80)}...
            </p>
            <h1 className="my-2 p-1 mx-1 px-2 dark:text-gray-200">
              Autor:
              <Link to={`/?username=${data.username}`}>
                <b className="dark:text-white px-1">{data.username}</b>
              </Link>
            </h1>
            <div className="flex flex-row border-t border-gray-600">
              <Link to={`/?category=${data.categories}`}>
                {data.categories.map((category) => (
                  <h1
                    className="text-sm text-gray-700 flex flex-row gap-2 pt-2 -pb-2 px-2 dark:text-gray-300"
                    key={category._id}
                  >
                    {category}
                  </h1>
                ))}
              </Link>
            </div>
          </div>
        </div>
        {/* <Footer/> */}
      </Link>
    </div>
  );
};

export default Post;
