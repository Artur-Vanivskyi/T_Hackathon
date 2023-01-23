import "./homee.scss";
import { Link } from "react-router-dom";
import React from "react";

function Homee() {
  return (
    <>
      <div className="container-wrap-home">
        <div className="help-container-home">
          <p>Help is here!</p>
        </div>
        <div className="info-container-home">
          <p>
            Learn from a qualified professional in your field to give you the
            confidence to land your next job.
          </p>
        </div>
        {/* the below should be "/quizzes/1" but there wasn't time to style even
        half-way according to the mock-up */}
        <Link to="/onboarding">
          <div className="button-container-home">
            <button>Take Quiz</button>
          </div>
        </Link>
        <Link to="/mentorship">
          <div className="mentor-container-home">
            <p>Become a mentor</p>
          </div>
        </Link>
        <input
          className="search-container-home"
          placeholder="      Search for Jobs or Mentors"
        />
      </div>
    </>
  );
}

export default Homee;
