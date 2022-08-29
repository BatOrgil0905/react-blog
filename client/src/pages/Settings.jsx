import React, { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import Footer from "../components/Footer";
import { UserIcon } from "../components/Icons";
// import {
// ProfilePic,
// SettingsProfilePic
//  } from "../components/images/Images";
import { Context } from "../context/Context";
// import SideBar from "../components/SideBar";
import axios from "axios";

const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const publicFolder = "http://localhost:5000/images/";

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user.others._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user.others._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAIL" });
    }
  };
  // console.log(user)
  return (
    <>
      <div className="flex">
        <div className="flex-[9] mx-4">
          <div className="flex flex-col lg:flex-row justify-between my-4">
            <span className="text-2xl my-4 ">Update Your Account</span>
            <span className="text-red-400 cursor-pointer duration-300 hover:text-lg">
              Delete Your Account
            </span>
          </div>
          <form className="my-8" onSubmit={handleSubmit}>
            <label className="">Profile Picture</label>
            <div className="flex justify-center items-center my-4">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : publicFolder + user.others.profilePic
                }
                alt="userPic"
              />
              <label htmlFor="fileInput">
                <UserIcon />
              </label>

              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="my-4 flex flex-col">
              <label className="">Username</label>
              <input
                className="my-4 border-b-2 border-gray-600 px-2"
                type="text"
                placeholder={user.others.username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="">Email</label>
              <input
                className="my-4 border-b-2 border-gray-600 px-2"
                type="email"
                placeholder={user.others.email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="">Password</label>
              <input
                className="my-4 border-b-2 border-gray-600 px-2"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="my-4 mx-auto bg-green-400 w-[150px] text-white py-2 duration-300 hover:bg-green-500"
                type="submit"
              >
                Update
              </button>
              {success && (
                <span className="my-4 text-green-400">
                  Profile has updated!
                </span>
              )}
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
