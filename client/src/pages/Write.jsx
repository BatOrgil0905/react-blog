import React from "react";
import { AddIcon } from "../components/Icons";
import { PostImageFour, PostImageThree } from "../components/images/Images";

const Write = () => {
  return (
    <div className="flex flex-col items-center justify-center my-6">
      <PostImageFour />
      <form className="my-4 w-[75%]">
        <div className="my-4 mx-4 flex justify-between">
          <label htmlFor="fileInput" className="">
            <AddIcon />
          </label>
          <input type="file" id="fileInput" className="hidden" />
          <input
            type="text"
            placeholder="title"
            className="border border-gray-600 px-2 w-[50%]"
            autoFocus={true}
          />
        </div>

        <div className="mx-4">
          <textarea
            placeholder="Write something here..."
            type="text"
            className="border border-gray-600 p-2 w-full"
          ></textarea>
        </div>

        <button className="flex justify-center items-center my-4 bg-sky-300 text-white font-semibold mx-auto px-4 py-2 rounded-md">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
