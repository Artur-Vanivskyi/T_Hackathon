import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase.utils";

function NavBar() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <>
      <nav className="all">
        <div className="navtop">
          <Link to="/home" className="navBrand">
            NAME
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/home" className="navlink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/onboarding" className="navlink">
              Onboarding
            </Link>
          </li>
          <li>
            <Link to="/mentorship" className="navlink">
              Mentorship
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="navlink">
              Jobs
            </Link>
          </li>
          <li>
            {currentUser ? (
              <span className="navlink" onClick={signOutHandler}>
                Sign-out
              </span>
            ) : (
              <Link to="/auth" className="navlink">
                Sign-in
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
