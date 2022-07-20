import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="flex-[9]">
      <div className="grid grid-cols-3 gap-4 mx-4">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Posts;
