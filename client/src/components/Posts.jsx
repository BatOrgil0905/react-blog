import React from "react";
import Post from "./Post";


const Posts = ({posts}) => {
  return (
    <div className="flex-[9] dark">
      <h1 className="text-center py-2 mx-6 my-4 border-y border-black text-xl dark:border-gray-300 dark:text-white">
          Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 mb-12">
        {posts.map((post) => (
          <Post key={post._id} data={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
