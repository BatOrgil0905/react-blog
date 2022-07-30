import React from "react";
// import Footer from "./Footer";

// --PostPics--
import {
  PostImageOne,
  // PostImageTwo,
  // PostImageThree,
  // PostImageFour,
  // PostImageFive,
} from "./images/Images";

const Post = () => {
  return (
    <>
      <div className="my-3 mx-2 cursor-pointer bg-gray-50 duration-300 hover:scale-105 hover:shadow-md">
        <PostImageOne />
        <div>
          <div className="text-sm text-gray-600 flex flex-row gap-2 my-1 p-1">
            <h1>Music</h1>
            <h1>Life</h1>
          </div>
          <p className="text-lg font-semibold my-1 p-1">
            This is the Bloggery.
          </p>
          <h2 className="text-sm text-gray-700 border-y border-gray-600 p-1">
            1 hour ago
          </h2>
          <p className="text-[14px] p-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            velit tenetur doloremque mollitia pariatur molestiae excepturi
            aperiam suscipit non ab perspiciatis magnam a recusandae sequi, eius
            ipsa! Laborum, officiis nisi.
          </p>
          <h1 className="my-2 p-1 mx-1">
            Autor: <b>Bat-Orgil.B</b>
          </h1>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Post;
