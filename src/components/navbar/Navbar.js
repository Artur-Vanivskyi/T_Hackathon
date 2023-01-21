import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import {MdWorkOutline} from "react-icons/md";
import {GrHomeRounded} from "react-icons/gr";
import {BsPeople} from "react-icons/bs";
import {BsChatDots} from "react-icons/bs";
import {SlLogin} from "react-icons/sl"
import logo from "../../assests/logo.png";

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
            <img src={logo} />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/home" className="navlink">
              <GrHomeRounded />
            </Link>
          </li>
          <li>
            <Link to="/onboarding" className="navlink">
              <BsChatDots />
            </Link>
          </li>
          <li>
            <Link to="/mentorship" className="navlink">
              <BsPeople />
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="navlink">
              <MdWorkOutline />
            </Link>
          </li>
          <li>
            {currentUser ? (
              <span className="navlink" onClick={signOutHandler}>
                Sign-out
              </span>
            ) : (
              <Link to="/auth" className="navlink">
                <SlLogin />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
