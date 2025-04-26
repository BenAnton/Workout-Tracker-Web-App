import { Link } from "react-router-dom";
import "./NavBar.css";
import { ReactComponent as LoginImg } from "../../Assets/Images/SVG-Login.svg";
import React, { useState } from "react";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="NavBar-Cont">
      <h2 className="Nav-Bar-Title">Workout Tracker</h2>
      <ul className="NavBar-List">
        <div className="Nav-Group-Middle">
          <li>
            <Link className="NavBar-Link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="NavBar-Link" to="/Exercises">
              Exercises
            </Link>
          </li>
          <li>
            <Link className="NavBar-Link" to="/Workouts">
              Workouts
            </Link>
          </li>
          <li>
            <Link className="NavBar-Link" to="/History">
              History
            </Link>
          </li>
        </div>
      </ul>
      <div className="Nav-Group-Right">
        <ul>
          <li>
            <Link className="NavBar-Link" to="/Profile">
              <LoginImg
                className={`login-icon ${
                  isLoggedIn ? "logged-in" : "logged-out"
                }`}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
