import "./WorkoutStats.css";

function WorkoutStats({ workout }) {
  function formatTotal(totalWeight) {
    totalWeight = Math.round(totalWeight).toLocaleString("en");
    return totalWeight;
  }

  function formatAverageWeight(averageWeight) {
    averageWeight = Math.round(averageWeight);
    return averageWeight;
  }

  return (
    <div className="Workout-Stats-Cont">
      <div>
        <h4 className="WorkoutStats-H4">Total Reps:</h4>
        <p>{workout.totalReps}</p>
      </div>
      <div>
        <h4 className="WorkoutStats-H4">Total Weight:</h4>
        <p>{formatTotal(workout.totalWeight)} kg</p>
      </div>
      <div>
        <h4 className="WorkoutStats-H4">Average Weight:</h4>
        <p>{formatAverageWeight(workout.averageWeight)} kg</p>
      </div>
    </div>
  );
}

export default WorkoutStats;
