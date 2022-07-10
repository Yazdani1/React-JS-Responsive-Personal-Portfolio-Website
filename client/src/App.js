import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import About from "./About/About";
import TechStack from "./TechStack/TechStack";
import Tools from "./Tools/Tools";
import Contact from "./Contact/Contact";
import Feedback from "./Feedback/Feedback";
import Projects from "./Projects/Projects";
import NavbarMobile from "./Sidebar/NavbarMobile";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavbarMobile />
      <Sidebar />
      <About />
      <TechStack />
      <Projects />
      <Feedback />

      <Contact />
    </div>
  );
};

export default App;
