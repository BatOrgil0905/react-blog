import React from "react";
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
import { useEffect } from "react";

const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const publicFolder = "http://localhost:5000/images/";

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    document.title = "Хэрэглэгчийн тохиргоо"
  })

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

  const deleteHandler = async () => {
    alert(`Are you sure delete ${user.others.username}'s account`);
    try {
      await axios.delete(`/users/${user.others._id}`, {
        username: user.others.username,
      });
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(user)
  return (
    <>
      <div className="flex bg-gray-50 dark:bg-gray-800">
        <div className="flex-[12] mx-4">
          <div className="flex flex-col lg:flex-row justify-between my-4">
            <span className="text-2xl my-4 dark:text-gray-300">
              Update Your Account
            </span>
            {/* <span
              className="text-red-400 cursor-pointer duration-300 hover:text-lg"
              onClick={deleteHandler}
            >
              Delete Your Account
            </span> */}
          </div>
          <div className="flex items-center justify-center">
            <form
              className="flex flex-col items-center justify-center my-8 p-4 shadow-2xl w-[90%] md:w-[75%] lg:w-[60%] bg-white dark:bg-gray-900 rounded-lg"
              onSubmit={handleSubmit}
            >
              <label className="text-lg font-semibold dark:text-gray-300">
                Profile Picture
              </label>
              <div className="flex justify-center items-center my-4">
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : publicFolder + user.others.profilePic
                  }
                  className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] bg-cover rounded-full dark:border-2 dark:border-gray-300"
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
                <label className="text-lg font-semibold dark:text-gray-300">
                  Username
                </label>
                <input
                  className="my-4 border-b-2 border-gray-600 px-2 dark:bg-gray-900 dark:border-gray-500 dark:text-gray-300"
                  type="text"
                  placeholder={user.others.username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label className="text-lg font-semibold dark:text-gray-300">
                  Email
                </label>
                <input
                  className="my-4 border-b-2 border-gray-600 px-2 dark:bg-gray-900 dark:border-gray-500 dark:text-gray-300"
                  type="email"
                  placeholder={user.others.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="text-lg font-semibold dark:text-gray-300">
                  Password
                </label>
                <input
                  className="my-4 border-b-2 border-gray-600 px-2 dark:bg-gray-900 dark:border-gray-500 dark:text-gray-300"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                {/* --Followers/Followings */}
                {/* <div className="flex my-4 gap-8">
                  <div className="flex flex-col items-center">
                    <h1 className="text-lg dark:text-gray-300">Followers</h1>
                    <span className="dark:text-gray-300">0</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-lg dark:text-gray-300">Followings</h1>
                    <span className="dark:text-gray-300">0</span>
                  </div>
                </div> */}

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
        </div>
        {/* <SideBar /> */}
      </div>
      <Footer />
    </>
  );
};

export default Settings;
