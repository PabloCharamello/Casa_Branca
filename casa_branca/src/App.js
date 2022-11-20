import "./index.css";
import React from "react";
import Navbar from "./components/Navbar";
import Nuevo from "./components/Nuevo";

const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col">
      <Navbar />
      <Nuevo />
    </div>
  );
};

export default App;
