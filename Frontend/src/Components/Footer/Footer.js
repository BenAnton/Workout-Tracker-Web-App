import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
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
    </div>
  );
}

export default Footer;
