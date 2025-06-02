import "./Profile.css";

var age = 23;
var height = 180;
var weight = 90;
var bodyfat = 20;

function ProfileBio() {
  return (
    <div className="Profile-Bio">
      <h2>USER BIO</h2>
      <div className="Profile-Horizontal-Flex">
        <h3>Age:</h3>
        <p>{age}</p>
      </div>

      <div className="Profile-Horizontal-Flex">
        <h3>Height:</h3>
        <p>{height} cm</p>
      </div>

      <div className="Profile-Horizontal-Flex">
        <h3>Weight:</h3>
        <p>{weight} kg</p>
      </div>

      <div className="Profile-Horizontal-Flex">
        <h3>Body Fat Percentage:</h3>
        <p>{bodyfat} %</p>
      </div>
    </div>
  );
}

export default ProfileBio;
