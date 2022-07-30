import React from "react";
import Post from "./Post";
import { Link } from "react-router-dom";


const Posts = () => {
  return (
    <div className="flex-[9]">
      <h1 className="text-center py-2 mx-6 my-4 border-y-2 border-black text-xl">
        Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 mb-12">
        <Link to="/post/postId">
          <Post />
        </Link>
        <Link to="/post/postId">
          <Post />
        </Link>
        <Link to="/post/postId">
          <Post />
        </Link>
        <Link to="/post/postId">
          <Post />
        </Link>
        <Link to="/post/postId">
          <Post />
        </Link>
        <Link to="/post/postId">
          <Post />
        </Link>
        <Link to="/post/postId">
          <Post />
        </Link>
        <Link to="/post/postId">
          <Post />
        </Link>
        <Link to="/post/postId">
          <Post />
        </Link>
        <Link to="/post/postId">
          <Post />
        </Link>
        <Link to="/post/postId">
          <Post />
        </Link>
        <Link to="/post/postId">
          <Post />
        </Link>
      </div>
    </div>
  );
};

export default Posts;
