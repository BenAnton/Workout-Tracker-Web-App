import "../Login/CreateUser.css";
import React, {useState} from "react";
import PropTypes from "prop-types";

function CreateUser({setEdit}) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bodyfat, setBodyFat] = useState("");
    const [quote, setQuote] = useState("");
    const [passwordErrors, setPasswordErrors] = useState([]);

    const passwordMatch = (a, b) => a === b;

    const handleSubmit = async (e) => {
        e.preventDefault();

        setPasswordErrors([]);

        if (!passwordMatch(password, confirmPassword)) {
            alert("Passwords do not match.");
            return;
        }

        const newUser = {
            email,
            username,
            password,
            personalQ: quote,
            age: parseInt(age),
            height: parseInt(height),
            weight: parseInt(weight),
            bodyfatPercentage: parseFloat(bodyfat),
        };

        try {
            const response = await fetch("http://localhost:5282/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                const registeredUser = await response.json();
                console.log("User added", registeredUser);
                alert("Registration successful! you can now login!");
                setEdit(false);
            } else {
                try {
                    const errorData = await response.json();

                    if (Array.isArray(errorData)) {
                        setPasswordErrors(errorData.map((err) => err.description));
                    } else if (errorData && errorData.message) {
                        alert("Registration Failed: " + errorData.message);
                    } else {
                        alert("Registration Failed");
                    }
                } catch (err) {
                    console.error("No JSON error message in response");
                    alert("Registration failed due to unknown error");
                }
            }
        } catch (error) {
            console.error("Error Registering User", error);
            alert("Registration failed");
        }
    };

    const handleClose = async (e) => {
        e.preventDefault();
        setEdit(false);
    };

    return (
        <>
            <form className="Create-User-Form" onSubmit={handleSubmit}>
                <h4 className="Create-User-Heading">Create Account</h4>
                <input
                    className="Create-Inputs"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>

                <input
                    className="Create-Inputs"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                ></input>

                <input
                    className="Create-Inputs"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    className="Create-Inputs"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                {passwordErrors.length > 0 && (
                    <ul className="Pass-Errors">
                        {passwordErrors.map((err, idx) => (
                            <li key={idx} className="Pass-Errors-Li">
                                {err}
                            </li>
                        ))}
                    </ul>
                )}

                <input
                    className="Create-Inputs"
                    type="number"
                    placeholder="Age"
                    min="1"
                    max="110"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <input
                    className="Create-Inputs"
                    type="number"
                    placeholder="Height (cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
                <input
                    className="Create-Inputs"
                    type="number"
                    placeholder="Weight (kg)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                <input
                    className="Create-Inputs"
                    type="number"
                    placeholder="Body-Fat"
                    min="5"
                    max="50"
                    value={bodyfat}
                    onChange={(e) => setBodyFat(e.target.value)}
                />

                <textarea
                    className="Create-User-Textarea"
                    type="text"
                    placeholder="Motivational Quote"
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                ></textarea>
                <div className="Horizontal-Buttons">
                    <button className="Create-User-Button" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="Create-User-Button">Submit</button>
                </div>
            </form>
        </>
    );
}

export default CreateUser;

CreateUser.propTypes = {
    setEdit: PropTypes.func.isRequired,
}