import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { AddIcon } from "../components/Icons";
// import {
//   PostImageFour,
//   // PostImageThree
// } from "../components/images/Images";
import axios from "axios";
import { Context } from "../context/Context";

const Write = () => {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get("/categories");
      setCategory(response.data);
    };
    getCategory();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.others.username,
      title,
      description,
      category
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      console.log(filename)
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/posts/" + res.data.savedPost._id);
      console.log(res)
    } catch (err) {}
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      <div className="min-h-screen flex flex-col items-center justify-center py-6">
        {file ? (
          <img
            className="w-[75%] h-[450px] object-cover bg-cover rounded-md"
            src={URL.createObjectURL(file)}
            alt="pp4"
          />
        ) : (
          <label
            htmlFor="fileInput"
            className="flex items-center justify-center w-[75%] h-[300px] border-2 border-dashed rounded-lg cursor-pointer border-gray-300 duration-300 hover:border-solid hover:border-gray-400"
          >
            <h1 className="text-gray-400 cursor-default dark:text-gray-300">
              Click to insert picture
            </h1>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
        )}

        <form
          className="my-4 w-[75%] p-4 bg-white rounded-lg dark:bg-gray-900"
          onSubmit={handleSubmit}
        >
          <div className="my-4 mx-4 flex justify-between">
            <div className="flex flex-row">
              <h1 className="flex items-center justify-center mx-2 text-gray-400 cursor-default dark:text-gray-300">
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
              required={true}
              className="border-b-4 p-2 border-gray-600 w-[50%] dark:text-gray-300 dark:border-gray-200 dark:bg-gray-900"
              onChange={(e) => setTitle(e.target.value)}
              // autoFocus={true}
            />
          </div>

          <div className="m-4 ">
            <label
              className="text-gray-400 dark:text-gray-300 mx-2"
              htmlFor="category"
            >
              Ангилалаа сонгоно уу:
            </label>
            <select
              className="text-gray-400 border m-1 px-2 py-1 dark:bg-gray-900 dark:border-gray-500"
              id="category"
              multiple={true}
            >
              {category.map((cat) => (
                <option
                  className="text-gray-400 mx-2 px-2 py-1 dark:bg-gray-900 dark:text-gray-300"
                  key={cat._id}
                  value={cat.name}
                >
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mx-4">
            <textarea
              placeholder="Write something here..."
              type="text"
              required={true}
              className="border-b-4 border-gray-600 p-2 h-[200px] w-full active:border-b-4 active:border-black dark:text-gray-300 dark:border-gray-200 dark:bg-gray-900"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button
            className="flex justify-center items-center my-4 bg-sky-300 text-white font-semibold mx-auto px-4 py-2 rounded-md duration-300 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-600"
            type="submit"
          >
            Publish
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Write;
