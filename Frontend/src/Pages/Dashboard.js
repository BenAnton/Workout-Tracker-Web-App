import Username from "../Components/Profile/ProfileUsername";
import "../Components/Profile/Profile.css";
import ProfileBio from "../Components/Profile/ProfileBio";
import ProfileStats from "../Components/Profile/ProfileStats";
import { useContext } from "react";
import { UserContext } from "../Components/Context/UserContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = window.confirm(
      "Are you sure that you would like to logout?"
    );
    if (!confirmLogout) {
      return;
    }

    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <div className="Profile-Grid">
        <Username logout={handleLogout} />
        <ProfileBio />
        <ProfileStats />
      </div>
    </>
  );
}

export default Dashboard;
