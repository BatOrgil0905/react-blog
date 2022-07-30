import React from "react";
import Footer from "../components/Footer";
import { UserIcon } from "../components/Icons";
import { 
  // ProfilePic,
  SettingsProfilePic
   } from "../components/images/Images";
// import SideBar from "../components/SideBar";

const Settings = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-[9] mx-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl my-4 ">
              Update Your Account
            </span>
            <span className="text-red-400 cursor-pointer duration-300 hover:text-lg">
              Delete Your Account
            </span>
          </div>
          <form className="my-4">
            <label className="">Profile Picture</label>
            <div className="flex justify-center items-center my-4">
              <SettingsProfilePic />
              <label htmlFor="fileInput">
                <UserIcon />
              </label>

              <input type="file" id="fileInput" className="hidden" />
            </div>
            <div className="my-4 flex flex-col">
              <label className="">Username</label>
              <input
                className="my-4 border-b-2 border-gray-600 px-2"
                type="text"
                placeholder="BatOrgil"
              />
              <label className="">Email</label>
              <input
                className="my-4 border-b-2 border-gray-600 px-2"
                type="email"
                placeholder="btrgl.btr@gmail.com"
              />
              <label className="">Password</label>
              <input
                className="my-4 border-b-2 border-gray-600 px-2"
                type="password"
              />
              <button className="my-4 mx-auto bg-green-400 w-[150px] text-white py-2 duration-300 hover:bg-green-500">
                Update
              </button>
            </div>
          </form>
        </div>
        {/* <SideBar /> */}
      </div>
      <Footer />
    </>
  );
};

export default Settings;
