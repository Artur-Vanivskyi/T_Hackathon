import React from "react";
import "./home.scss";
import { data } from "./data.js";

function Home() {
  return (
    <>
      <div className="container-wrap">
        <div className="container">
          <div className="top-line">
            <p>Featured Mentors</p>
          </div>
          <div className="image-holder">
            {data.map(({ image, title, name }) => {
              return (
                <>
                  <div className="image">
                    <img src={image} alt={title} />

                    <div className="name-title">
                      <div className="name">{name}</div>
                      <div classNAme="title">{title}</div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="container">
          <div className="top-line">
            <p>What Mentees are Saying</p>
          </div>
          <div className="image-holder-second">
            {data.map(({ id, image, title, name }) => {
              return (
                <>
                  {id === 1 || id === 2 ? (
                    <div className="image">
                      <img src={image} alt={title} />
                      <div className="center-comment">
                        <div className="name-title"></div>
                        <div className="name-title"></div>
                        <div className="name-title"></div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </div>
        </div>

        <div className="container">
          <div className="top-line">
            <p>Featured Jobs</p>
          </div>
          <div className="image-holder-third">
            {data.map(({ image, title, city, company }) => {
              return (
                <>
                  <div className="set-container">
                    <div className="image">
                      <img src={image} alt={title} />
                    </div>
                    <div className="name-title-third">
                      <div className="name">{city}</div>
                      <div className="name">{title}</div>
                      <div className="name">{company}</div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
