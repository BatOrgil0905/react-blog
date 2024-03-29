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
  const [loading, setLoading] = useState(true)
  // console.log(search)

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get('/posts' + search);
      setPosts(res.data);
      setLoading(false);
    }
    fetchPost()
  }, [search])

  useEffect(()=>{
    document.title = "BLOGGERY - Блог бичдэг вебсайт"
  })

  return (
    <div className="bg-zinc-100 dark:bg-gray-800">
      <Header />
      <div className="flex flex-row my-6">
        <Posts posts={posts} loading={loading}/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;