import "./Profile.css";
import {useContext} from "react";
import {UserContext} from "../Context/UserContext";


function ProfileBio() {




    const {user} = useContext(UserContext);
    console.log(user);

    if(!user) {
        return <div>Loading User Data...</div>;
    }
    
    const age = user.age ?? "N/A";
    const height = user.height ?? "N/A";
    const weight = user.weight ?? "N/A";
    const bodyfat = user.bodyfatPercentage ?? "N/A";


    
    
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
