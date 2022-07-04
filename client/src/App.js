import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import About from "./About/About";
import TechStack from "./TechStack/TechStack";
import "./App.css";

const App = () => {
  return (
    <div>
      <Sidebar />
      <About/>
      <TechStack/>
    </div>
  );
};

export default App;
