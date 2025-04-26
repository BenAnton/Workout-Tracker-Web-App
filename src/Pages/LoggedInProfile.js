import Username from "../Components/Profile/ProfileUsername";
import "../Components/Profile/Profile.css";
import ProfileBio from "../Components/Profile/ProfileBio";
import ProfileStats from "../Components/Profile/ProfileStats";

function LoggedInProfile() {
  return (
    <>
      <div className="Profile-Grid">
        <Username />
        <ProfileBio />
        <ProfileStats />
      </div>
    </>
  );
}

export default LoggedInProfile;
