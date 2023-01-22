import "./homee.scss";
import { Link } from "react-router-dom";
import React from "react";

function Homee() {
  return (
    <>
      <div className="container-wrap-homee">
        <div className="help-container-homee">
          <p>Help is here!</p>
        </div>
        <div className="info-container-homee">
          <p>
            Learn from a qualified professional in your field to give you the
            confidence to land your next job.
          </p>
        </div>
        <Link to="/onboarding">
          <div className="button-container-homee">
            <button>Take Quiz</button>
          </div>
        </Link>
        <Link to="/mentorship">
          <div className="mentor-container-homee">
            <p>Become a mentor</p>
          </div>
        </Link>
        <input
          className="search-container-homee"
          placeholder="      Search for Jobs or Mentors"
        />
      </div>
    </>
  );
}

export default Homee;
