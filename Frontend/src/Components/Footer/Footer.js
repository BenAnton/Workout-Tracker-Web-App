import "./Footer.css";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {ThemeContext} from "../Context/ThemeContext";


function Footer() {

    const {toggleTheme, theme} = useContext(ThemeContext);

    return (
        <div className="Footer-Cont">
            <h2>Workout Tracker</h2>

            <ul className="Footer-List">
                <li>
                    <Link className="Footer-Link" to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="Footer-Link" to="/Exercises">
                        Exercises
                    </Link>
                </li>
                <li>
                    <Link className="Footer-Link" to="/Workouts">
                        Workouts
                    </Link>
                </li>
                <li>
                    <Link className="Footer-Link" to="/History">
                        History
                    </Link>
                </li>

            </ul>
            <div className="Footer-Theme-Cont">
                <button
                    className="Footer-Button"
                    onClick={toggleTheme}>{theme === "dark" ? " Change To Light Mode" : "Change To Dark mode"}</button>
            </div>


        </div>
    );
}

export default Footer;
