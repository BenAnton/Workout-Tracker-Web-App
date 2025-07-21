import {useState, useContext} from "react";
import {UserContext} from "../Context/UserContext";
import "./SingUp-Form.css";


function SignupForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext);
    const [showLoginError, setShowLoginError] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5282/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username, password}),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error("Login Failed:", errorText);
                setShowLoginError(true);
                return;
            }

            const data = await response.json();

            localStorage.setItem("token", data.token);
            setUser({username});
            window.location.href = "/dashboard";
        } catch (error) {
            console.error("An unexpected error occured:", error);
        }
    };

    return (
        <>
            <form className="Signup-Form-Cont">
                <input
                    className="Signup-Inputs"
                    type="text"
                    placeholder="Username/Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                ></input>
                <input
                    className="Signup-Inputs"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {showLoginError && (<p className="SignIn-Error">Username or Password Incorrect</p>)}
                <button className="Signup-Button" onClick={handleLogin}>
                    SIGN IN
                </button>


            </form>
        </>
    );
}

export default SignupForm;
