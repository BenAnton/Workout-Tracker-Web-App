import {Link} from "react-router-dom";
import "./NavBar.css";
import LoginImg from "../../Assets/Images/SVG-Login.svg?react";
import React, {useContext} from "react";
import {UserContext} from "../Context/UserContext";

function NavBar() {
    const {user} = useContext(UserContext);

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
                    <li>
                        <Link className="NavBar-Link" to="/Workout">
                            Workout
                        </Link>
                    </li>
                    <li>
                        <Link className="NavBar-Link" to="/Tools">
                            Tools
                        </Link>
                    </li>
                </div>
            </ul>

            <div className="Nav-Group-Right">
                <ul>
                    <li>
                        {!user ? (
                            <Link className="NavBar-Link" to="/Profile">
                                <LoginImg className="login-icon" alt="Login Account"/>
                            </Link>
                        ) : (
                            <Link to="/dashboard" className="Username-P">
                                <p>{user.username}</p>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
