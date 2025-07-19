import React, { useState } from "react";
import "./SignUp-Login.css";
import WorkoutImg from "../../Assets/Images/SignupImg1.jpg";
import SignupForm from "./SignUp-Form";
import CreateAccountForm from "./CreateAccount-Form";

function SignUpLogin() {
  const [activeComponent, setActiveComponent] = useState("signup");

  const showSignup = () => {
    setActiveComponent("signup");
  };

  const showCreate = () => {
    setActiveComponent("create");
  };

  return (
    <div className="Signup-Flex-Cont">
      <img
        className="Workout-Img"
        src={WorkoutImg}
        alt="Someone with battleropes"
      />
      <div className="Signup-Cont">
        <div className="Signup-Header">
          <h2 className="Signup-Title">Workout Tracker</h2>
          <div className="Stack-Side-By-Side">
            <button
              className={`Signup-Select ${
                activeComponent === "signup" ? "active" : ""
              }`}
              onClick={showSignup}
            >
              Sign In
            </button>
            <button
              className={`Signup-Select ${
                activeComponent === "create" ? "active" : ""
              }`}
              onClick={showCreate}
            >
              Create Account
            </button>
          </div>
        </div>
        {activeComponent === "signup" && <SignupForm />}
        {activeComponent === "create" && <CreateAccountForm />}
      </div>
    </div>
  );
}

export default SignUpLogin;
