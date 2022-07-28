import React from "react";
import { AddIcon } from "../components/Icons";
import { PostImageFour, PostImageThree } from "../components/images/Images";

const Write = () => {
  return (
    <div className="flex flex-col items-center justify-center my-6">
      <PostImageFour />
      <form className="my-4 w-[75%]">
        <div className="my-4 mx-4 flex justify-between">
          <div className="flex flex-row">
            <h1 className="flex items-center justify-center mx-2 text-gray-400 cursor-default">Click to insert picture</h1>
            <label htmlFor="fileInput" className="">
              <AddIcon />
            </label>
          </div>
          <input type="file" id="fileInput" className="hidden" />
          <input
            type="text"
            placeholder="title"
            className="border-b-4 border-gray-600 px-2 w-[50%]"
            autoFocus={true}
          />
        </div>

        <div className="mx-4">
          <textarea
            placeholder="Write something here..."
            type="text"
            className="border-b-4 border-gray-600 p-2 w-full active:border-b-4 active:border-black"
          ></textarea>
        </div>

        <button className="flex justify-center items-center my-4 bg-sky-300 text-white font-semibold mx-auto px-4 py-2 rounded-md duration-300 hover:bg-sky-500">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
