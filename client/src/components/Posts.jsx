import React from "react";
import Post from "./Post";


const Posts = ({posts}) => {
  return (
    <div className="flex-[9]">
      <h1 className="text-center py-2 mx-6 my-4 border-y border-gray-900 text-black text-xl dark:border-gray-300 dark:text-white">
          Blogs
      </h1>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 mb-12">
          {posts.map((post) => (
            <Post key={post._id} data={post} />
          ))}
        </div>
      ) : (
        <h1 className="h-[50vh] text-center flex items-center justify-center text-2xl dark:text-gray-300">Уншиж байна! эсвэл Пост олдсонгүй!</h1>
      )}
    </div>
  );
};

export default Posts;
