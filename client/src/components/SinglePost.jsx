import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faThumbsUp,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { EditIcon } from "./Icons";
import { PostImageThree } from "./images/Images";
import { Context } from "../context/Context";
import { ProfilePic } from "./images/Images";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { user } = useContext(Context);
  const [post, setPost] = useState({});
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
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
    alert(`Are you sure delete "${post.title}"`);
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

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  // console.log(user.others.username)
  return (
    <div className="flex-[9] min-h-screen px-[7%] py-6 bg-gray-50 dark:bg-gray-800">
      <div className="my-4 flex flex-col bg-white p-3 rounded-lg dark:bg-gray-900">
        {post.photo && <PostImageThree data={post} />}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="text-center indent-4 my-3 text-2xl py-4 border-b-2 border-gray-400 text-gray-500 focus:outline-0 dark:bg-gray-900 dark:text-gray-400"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="text-center indent-4 my-3 text-2xl py-4 dark:text-gray-200">
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
            className="my-4 indent-4 h-full text-justify lg:text-start border-b-2 border-gray-400 text-gray-500 focus:outline-0 dark:bg-gray-900 dark:text-gray-400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p className="my-4 indent-4 text-justify lg:text-start dark:text-gray-300">
            {description}
          </p>
        )}

        <div className="my-2 flex justify-between items-center">
          <Link to={`/?username=${post.username}`}>
            <div className="flex !flex-row items-center gap-2">
              <ProfilePic data={user} />
              <b className="dark:text-gray-300">{post.username}</b>
            </div>
          </Link>
          <h1 className="dark:text-gray-300">
            {new Date(post.createdAt).toDateString()}
          </h1>
        </div>

        <div className="flex flex-row gap-8">
          <div className="flex flex-row gap-2 items-center">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="my-4 text-lg border border-blue-500 rounded-full p-2.5 text-white bg-blue-500 cursor-pointer focus:text-blue-500 focus:bg-gray-200 focus:border-gray-200"
              onClick={likeHandler}
            />
            <span className="dark:text-gray-300">{like}</span>
            <span className="dark:text-gray-300">liked this post</span>
          </div>
          <div className="flex flex-row gap-2 item-center">
            <FontAwesomeIcon
              icon={faUserPlus}
              className="my-4 text-lg border border-green-500 rounded-full p-2.5 py-3 text-white bg-green-500 cursor-pointer focus:text-green-500 focus:bg-gray-200 focus:border-gray-200"
              title={`Follow ${post.username}`}
            />
          </div>
        </div>
        {updateMode && (
          <button
            className="bg-green-400 w-[100px] text-white p-2 cursor-pointer self-center mt-8 duration-300 hover:bg-green-500 dark:bg-green-500 dark:hover:bg-green-600"
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
