import React, { useContext, useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import axios from "axios";

const Login = () => { 
  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching} = useContext(Context);
  const [error, setError] = useState(false);

  useEffect(()=>{
    document.title = "Нэвтрэх хуудас"
  })

  const handleSubmit = async (e) => {
    setError(false)
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try{
      const res = await axios.post("/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    } catch(err){
      setError(true)
      dispatch({type: "LOGIN_FAIL"})
    }
  };
  return (
    <>
      <div className="w-full h-screen bg-sky-50 flex flex-col justify-center items-center dark:bg-gray-800">
        <h1 className="text-2xl mb-4 cursor-default dark:text-gray-300">
          Login
        </h1>
        <form
          className="w-[370px] flex flex-col p-4 rounded-lg bg-white dark:bg-gray-900"
          onSubmit={handleSubmit}
        >
          <label className="mb-2 text-xl dark:text-gray-300">Username</label>
          <input
            className="py-2 px-4 w-full border-b border-black mb-4 dark:bg-gray-900 dark:border-gray-300 dark:text-gray-300"
            type="text"
            placeholder="Enter your username."
            ref={userRef}
          />
          <label className="mb-2 text-xl dark:text-gray-300">Password</label>
          <input
            className="py-2 px-4 w-full border-b border-black mb-4 dark:bg-gray-900 dark:border-gray-300 dark:text-gray-300"
            type="password"
            placeholder="Enter your password."
            ref={passwordRef}
          />
          <button
            className="py-2 px-4 bg-blue-300 text-black w-full border mb-4 cursor-pointer duration-300 hover:bg-blue-500 hover:text-white dark:bg-blue-500 dark:hover:bg-blue-600"
            type="submit"
            disabled={isFetching}
          >
            Login
          </button>
        </form>
        <button className="my-4 mt-12 py-2 px-4 bg-green-300 w-[345px] cursor-pointer duration-300 hover:text-white hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600">
          <Link to="/register">Register</Link>
        </button>
        {error && (
          <span className="my-4 text-red-400">Something went wrong!</span>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Login;
