import "./SingUp-Form.css";
import { Link } from "react-router-dom";

function SignupForm() {
  return (
    <>
      <form className="Signup-Form-Cont">
        <input
          className="Signup-Inputs"
          type="text"
          placeholder="Username/Email"
        ></input>
        <input
          className="Signup-Inputs"
          type="password"
          placeholder="Password"
        />
        <button className="Signup-Button">SIGN IN</button>

        <Link to="/LoggedIn">
          <p className="Forgot-Text">Forgot your password?</p>
        </Link>
      </form>
    </>
  );
}

export default SignupForm;
