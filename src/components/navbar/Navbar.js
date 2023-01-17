import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <>
      <nav className="all">
        <div className="navtop">
          <Link to="/home" className="navBrand">
            ROBOT
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/home" className="navlink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="navlink">
              About
            </Link>
          </li>
          <li>
            <Link to="/search" className="navlink">
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
