import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import Write from "./pages/Write";

function App() {
  return (
    <div>
      <NavBar />
      <Register />
    </div>
  );
}

export default App;
