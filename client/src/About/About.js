import React from "react";
import "./about.css";
import Fade from "react-reveal/Fade";
import { FcSlrBackSide, FcWorkflow, FcShop } from "react-icons/fc";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img
                src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="about_image"
              />
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-details">
              <div className="about-title">
                <h5>About me</h5>
                <span className="line"></span>
              </div>

              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>

              {/* <div className="card-design">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcSlrBackSide size={50} />
                    </p>
                  </div>
                  <div>
                    <h6>Perfect day out</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-design">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcWorkflow size={50} />
                    </p>
                  </div>
                  <div>
                    <h6>Perfect day out</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-design">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcShop size={50} />
                    </p>
                  </div>
                  <div>
                    <h6>Perfect day out</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;