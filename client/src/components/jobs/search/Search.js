import "./search.scss";
import pic from "../../../assets/2.png";
import apple from "../../../assets/3.png";
import React from "react";

const keyWords = [
  "Design",
  "CRM",
  "Remote",
  "UX",
  "JavaScript",
  "On-Site",
  "Developer",
];
const jobSample = [
  {
    title: "JS dev",
    logo: "LOGO",
    company: "Shell",
    description: "Hello",
  },
  {
    title: "JS dev",
    logo: "LOGO",
    company: "Shell",
    description: "Hello",
  },
  {
    title: "JS dev",
    logo: "LOGO",
    company: "Shell",
    description: "Hello",
  },
];
function Search() {
  return (
    <>
      <div className="page-container">
        <div className="profile-container">
          <div className="bio-container">
            <div className="left">
              <div className="image">
                <img src={pic} />
              </div>
              <p className="name">Jodi Simons</p>
              <p className="position">UI/IX Student</p>
            </div>
            <div className="right-bio">
              <div className="bio-text">BIO:</div>
            </div>
          </div>
          <div className="keywords-container">
            <div className="key-text">KEYWORDS</div>
            <div className="words">
              {keyWords.map((word) => (
                <div className="word">{word}</div>
              ))}
            </div>
          </div>
          <div className="apllied-container">
            <div className="key-text">RECENTLY APPLIED</div>
            <div className="apllied">
              <img src={apple} />
            </div>
            <p>UX Designer</p>
          </div>
        </div>
        <div className="map">
          {jobSample.map(({ title, logo, company, description }) => {
            return (
              <div className="job-list-container">
                <div className="job-item">
                  <div className="left">
                    <div className="title">{title}</div>
                    <div className="picture">{logo}</div>
                    <div className="company">{company}</div>
                  </div>
                  <div className="right">
                    <p>Description: {description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Search;
