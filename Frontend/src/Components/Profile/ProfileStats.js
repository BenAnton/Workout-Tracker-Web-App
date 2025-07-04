import "./Profile.css";
import completedWorkouts from "../../Data/CompletedWorkouts";
import {useContext} from "react";
import {UserContext} from "../Context/UserContext";

function getTotalWeight() {
  let totalWeight = completedWorkouts.reduce(
    (total, workout) => total + workout.totalWeight,
    0
  );
  return Math.round(totalWeight);
}

function getTotalReps() {
  return completedWorkouts.reduce(
    (total, workout) => total + workout.totalReps,
    0
  );
}

function getAverageWeight(totalWeight, totalReps) {
  return totalReps > 0 ? Math.round(totalWeight / totalReps) : 0;
}

function ProfileStats() {
    const {user} = useContext(UserContext);
    
  const totalWeight = getTotalWeight();
  const totalReps = getTotalReps();
  const averageWeight = getAverageWeight(totalWeight, totalReps);

  return (
    <div className="Profile-Stats">
      <h2>USER STATS</h2>
      <div className="Profile-Horizontal-Flex">
        <h3>Total Workouts:</h3>
        <p>{completedWorkouts.length}</p>
      </div>

      <div className="Profile-Horizontal-Flex">
        <h3>Total Weight Lifted:</h3>
        <p>{totalWeight.toLocaleString("en")}kg</p>
      </div>

      <div className="Profile-Horizontal-Flex">
        <h3>Total Reps:</h3>
        <p>{totalReps.toLocaleString("en")}</p>
      </div>

      <div className="Profile-Horizontal-Flex">
        <h3>Average Weight Per Rep:</h3>
        <p>{averageWeight} kg</p>
      </div>
    </div>
  );
}

export default ProfileStats;
