import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import Write from "./pages/Write";

// --React-Router-Dom--
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom"
import { Context } from "./context/Context";

function App() {

  const {user} = useContext(Context);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home/> : <Register />} />
        <Route path="/login" element={user ? <Home/> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register/>} />
        <Route path="/account" element={user ? <Settings /> : <Register/>} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
