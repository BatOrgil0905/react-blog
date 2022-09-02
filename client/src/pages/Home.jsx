import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Footer from "../components/Footer";
import axios from 'axios';
import { useLocation } from "react-router-dom";
// import SideBar from "../components/SideBar";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get('/posts' + search);
      setPosts(res.data);
    }
    fetchPost()
  }, [search])

  return (
    <div className="bg-white">
      <Header />
      <div className="flex flex-row my-6">
        <Posts posts={posts} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;