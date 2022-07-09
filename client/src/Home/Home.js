import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div className="container-fluid home" id="home">
        {/* <div className="theme-change" onClick={() => handleChangeTheme()}>
        {theme === "light" ? (
          <p>
            <BsMoonStarsFill size={40} />
          </p>
        ) : (
          <p className="theme-icon">
            <BsFillSunFill size={40} />
          </p>
        )}
      </div> */}

        <Fade left>
          <div className="container home-content">
            <h1>Hi I'm</h1>
            <h2>
              <Typewriter
                options={{
                  strings: [
                    "Web Development",
                    "Mobile App Development",
                    "UI/UX Design",
                    "Product Marketing",
                    "Digital Marketing",
                    "Customer Service",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 5,
                }}
              />
            </h2>

            <span className="view-details-home-button">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                Hire me
              </Link>
            </span>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Home;
