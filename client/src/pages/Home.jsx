import React from "react";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Footer from "../components/Footer";
// import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="flex flex-row my-6">
        <Posts />
        {/* <SideBar /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
