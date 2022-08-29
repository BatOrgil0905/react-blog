import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { EditIcon } from "./Icons";
import { PostImageThree } from "./images/Images";
import { Context } from "../context/Context";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  // --Update Post--
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get("/posts/" + path);
      setPost(response.data);
      // --Update Post--
      setTitle(response.data.title);
      setDescription(response.data.description);
    };
    getPost();
  }, [path]);

  const deleteHandler = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.others.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const updateHandler = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.others.username,
        title: title,
        description: description,
      });
      setUpdateMode(false);
    } catch (err) {}
  };
  // console.log(user.others.username)
  return (
    <div className="flex-[9] px-6 py-6 ">
      <div className="my-4 flex flex-col">
        {post.photo && <PostImageThree data={post} />}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="text-center indent-4 my-3 text-2xl py-4 border-b-2 border-gray-400 text-gray-500 focus:outline-0"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="text-center indent-4 my-3 text-2xl py-4 ">
            {title}
            {post.username === user.others.username && (
              <div className="float-right">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="text-xl text-green-500 cursor-pointer mx-2 duration-300 hover:scale-110"
                  title="Update Post"
                  onClick={() => setUpdateMode(true)}
                />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="text-xl text-red-500 cursor-pointer mx-2 duration-300 hover:scale-110"
                  title="Delete Post"
                  onClick={deleteHandler}
                />
              </div>
            )}
          </h1>
        )}
        {updateMode ? (
          <textarea
            className="my-4 indent-4 text-justify lg:text-start border-b-2 border-gray-400 text-gray-500 focus:outline-0"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p className="my-4 indent-4 text-justify lg:text-start">
            {description}
          </p>
        )}

        <div className="my-2 flex justify-between items-center">
          <h1 className="">
            Author:
            <Link to={`/?username=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </h1>

          <h1>{new Date(post.createdAt).toDateString()}</h1>
        </div>
        {updateMode && (
          <button
            className="bg-green-400 w-[100px] text-white p-2 cursor-pointer self-center mt-8 duration-300 hover:bg-green-500"
            onClick={updateHandler}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
