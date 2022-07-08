import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import About from "./About/About";
import TechStack from "./TechStack/TechStack";
import Tools from "./Tools/Tools";
import Contact from "./Contact/Contact";
import Feedback from "./Feedback/Feedback";
import Projects from "./Projects/Projects";
import "./App.css";

const App = () => {
  return (
    <div>
      <Sidebar />
      <About/>
      <TechStack/>
      <Projects/>
      <Contact/>
      <Feedback/>
    </div>
  );
};

export default App;
