import React from "react";
import { DeleteIcon, EditIcon } from "./Icons";
import { PostImageThree } from "./images/Images";

const SinglePost = () => {
  return (
    <div className="flex-[9] px-6 py-6 ">
      <div className="my-4">
        <PostImageThree />
        <h1 className="text-center my-3 text-2xl py-4 ">
          This is the Bloggery.
          <div className="float-right">
            <EditIcon />
            <DeleteIcon />
          </div>
        </h1>

        <p className="my-4 indent-4 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          delectus, voluptates error aliquam provident assumenda nostrum. Vel
          maiores officia iusto, ea minus architecto enim, illo, quam iste
          impedit cupiditate accusamus. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aliquid, cupiditate, vel laborum recusandae alias id
          dicta ea assumenda deserunt quia temporibus quibusdam accusantium
          aliquam aspernatur, maxime perspiciatis consequatur quod beatae!
        </p>

        <div className="my-2 flex justify-between items-center">
          <h1 className="">
            Author: <b className="">BatOrgil</b>
          </h1>

          <h1 className="">1 hour ago</h1>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
