import React, { useState } from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
const TechStack = () => {
  const data = [
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Jon Doe",
      position: "Full stack software developer",
      img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 1,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Muller",
      position: "UI/UX Designer",
      img: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 2,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Alexander",
      position: "Javascript developer",
      img: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 3,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Charlotte",
      position: "Node js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 4,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Emily",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 5,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Jayden",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 6,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Elizabeth",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 7,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Jacob",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 8,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Michael",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 9,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Daniel",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 10,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Anthony",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 11,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Aiden",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 12,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Aiden",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 12,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Aiden",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 12,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Aiden",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 12,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Aiden",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 12,
    },
    {
      content:
        "It is not every day that you come across a passionate and trustworthy financial advisor",
      name: "Aiden",
      position: "Nuxt js developer",
      img: "https://images.pexels.com/photos/3608039/pexels-photo-3608039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      id: 12,
    },
  ];

  const [visible, setVisible] = useState(9);

  const loadMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <div className="container testimonial-section" id="techstack">
      <div className="testimonial">
        <Flip left>
          <h5>Programming Language and Framework</h5>
          <span className="line"></span>
        </Flip>
      </div>
      <div className="row">
        {data.slice(0, visible).map((item, index) => (
          <Fade right>
            <div className="col-lg-4 col-md-6 col-xl-4" key={item.id}>
              <div className={index === 0 ? "content-with-marked" : "content"}>
                <img src={item.img} alt="image" className="center-image" />

                <p>{item.position}</p>
              </div>
            </div>
          </Fade>
        ))}

        {visible >= data.length ? null : (
          <div className="load-more-button" onClick={loadMore}>
            Load More
          </div>
        )}
      </div>
    </div>
  );
};

export default TechStack;