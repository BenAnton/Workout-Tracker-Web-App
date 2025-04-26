import "./Profile.css";

var totalWorkouts = 2;
var totalWeight = 200;
var totalReps = 100;
var averageWeight = 20;

function ProfileStats() {
  return (
    <div className="Profile-Stats">
      <h2>USER STATS</h2>
      <div className="Profile-Horizontal-Flex">
        <h3>Total Workouts:</h3>
        <p>{totalWorkouts}</p>
      </div>

      <div className="Profile-Horizontal-Flex">
        <h3>Total Weight Lifted:</h3>
        <p>{totalWeight}</p>
      </div>

      <div className="Profile-Horizontal-Flex">
        <h3>Total Reps:</h3>
        <p>{totalReps}</p>
      </div>

      <div className="Profile-Horizontal-Flex">
        <h3>Average Weight Per Workout:</h3>
        <p>{averageWeight}</p>
      </div>
    </div>
  );
}

export default ProfileStats;
