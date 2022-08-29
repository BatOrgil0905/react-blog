import React from "react";
import Post from "./Post";


const Posts = ({posts}) => {
  return (
    <div className="flex-[9]">
      <h1 className="text-center py-2 mx-6 my-4 border-y-2 border-black text-xl">
        Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 mb-12">
        {posts.map((post) => (
          <Post key={post._id} data={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
