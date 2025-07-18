import ProfileImg from "../../Assets/Images/profile-default.svg";
import "./Profile.css";
import {useContext} from "react";
import {UserContext} from "../Context/UserContext";
import PropTypes from "prop-types";

function Username({logout}) {

    const {user} = useContext(UserContext);

    if (!user) {
        return <div>Loading User Data...</div>
    }

    const username = user.username;
    const MotivationalQuote = user.personalQ;

    return (
        <>
            <div className="Profile-User">
                <img
                    className="Profile-Image"
                    src={ProfileImg}
                    alt="default profile"
                ></img>
                <div className="Profile-Vertical-Flex">
                    <h3 className="Username-Heading">{username}</h3>
                    <p>{MotivationalQuote}</p>
                </div>
                <div className="Profile-Username-Buttons">
                    {/*<button className="Edit-Profile-Button">Edit Profile</button>*/}
                    <button className="Edit-Profile-Button" onClick={logout}>
                        Logout
                    </button>
                </div>


            </div>
        </>
    )
        ;
}

export default Username;

Username.propTypes = {
    logout: PropTypes.func.isRequired,
}