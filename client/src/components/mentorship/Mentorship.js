import React from "react";
import construction from "../../assets/5.png";

import "./mentorship.scss";

function Mentorship() {
  return (
    <>
      <div className="mentor-container">
        <img className="image" src={construction} />
        <div className="text-container">
          <p className="name-f">UNDER</p>
          <p className="name-s"> Construction</p>
        </div>
      </div>
    </>
  );
}

export default Mentorship;
