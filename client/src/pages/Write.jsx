import React, { useContext } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import { AddIcon } from "../components/Icons";
// import {
//   PostImageFour,
//   // PostImageThree
// } from "../components/images/Images";
import axios from "axios";
import { Context } from "../context/Context";

const Write = () => {
  const { user} = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.others.username,
      title,
      description
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data.savedPost._id);
      // console.log(res)
    } catch (err) {}
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center py-6 ">
        {file && (
          <img
            className="w-[75%] h-[415px] object-cover bg-cover rounded-md"
            src={URL.createObjectURL(file)}
            alt="pp4"
          />
        )}

        <form className="my-4 w-[75%]" onSubmit={handleSubmit}>
          <div className="my-4 mx-4 flex justify-between">
            <div className="flex flex-row">
              <h1 className="flex items-center justify-center mx-2 text-gray-400 cursor-default">
                Click to insert picture
              </h1>
              <label htmlFor="fileInput" className="">
                <AddIcon />
              </label>
            </div>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="title"
              className="border-b-4 border-gray-600 w-[50%]"
              onChange={(e) => setTitle(e.target.value)}
              // autoFocus={true}
            />
          </div>

          <div className="mx-4">
            <textarea
              placeholder="Write something here..."
              type="text"
              className="border-b-4 border-gray-600 p-2 w-full active:border-b-4 active:border-black"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button
            className="flex justify-center items-center my-4 bg-sky-300 text-white font-semibold mx-auto px-4 py-2 rounded-md duration-300 hover:bg-sky-500"
            type="submit"
          >
            Publish
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Write;
