import axios from "axios";
import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { DeleteIcon, EditIcon } from "./Icons";
import { PostImageThree } from "./images/Images";

const SinglePost = () => {
  const location = useLocation()
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});

  useEffect(()=> {
    const getPost = async () => {
      const response = await axios.get('/posts/' + path);
      setPost(response.data);
    };
    getPost();
  }, [path])
  return (
    <div className="flex-[9] px-6 py-6 ">
      <div className="my-4">
        {post.photo && <PostImageThree data={post} />}
        <h1 className="text-center my-3 text-2xl py-4 ">
          {post.title}
          <div className="float-right">
            <EditIcon />
            <DeleteIcon />
          </div>
        </h1>

        <p className="my-4 indent-4 text-justify lg:text-start">
          {post.description}
        </p>

        <div className="my-2 flex justify-between items-center">
          <h1 className="">
            Author:
            <Link to={`/?username=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </h1>

          <h1>{new Date(post.createdAt).toDateString()}</h1>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
