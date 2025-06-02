import ProfileImg from "../../Assets/Images/profile-default.svg";
import "./Profile.css";

var userName = "FakeUser2000";
var MotivationalQuote =
  "Lift today in case you can't tomorrow, train everyday and never look back";

function Username() {
  return (
    <div className="Profile-User">
      <img
        className="Profile-Image"
        src={ProfileImg}
        alt="default profile"
      ></img>
      <div className="Profile-Vertical-Flex">
        <h3 className="Username-Heading">{userName}</h3>
        <p>{MotivationalQuote}</p>
      </div>
      <button className="Edit-Profile-Button">Edit Profile</button>
    </div>
  );
}

export default Username;
