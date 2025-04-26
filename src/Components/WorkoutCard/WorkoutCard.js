import "./WorkoutCard.css";
import MuscleWorked from "./MusclesWorked";

function WorkoutCard({ workout }) {
  return (
    <>
      <div className="WorkoutCard">
        <img
          className="Workout-Card-Img"
          src={workout.WorkoutImg}
          alt={workout.title}
        ></img>
        <h3 className="WorkoutCard-Title">{workout.title}</h3>
        <div>
          <div className="Stack-Group">
            <p>Duration:</p>
            <p className="Workout-Duration WorkoutP">
              {workout.duration} minutes
            </p>
          </div>
          <div className="Stack-Group">
            <p>Total Exercises:</p>
            <p className="Workout-Total-Exercises WorkoutP">
              {workout.totalExercises}
            </p>
          </div>

          <div className="Stack-Group">
            <p className="Muscle-Worked-No-Wrap">Muscles:</p>
            <div className="MuscleWorked-Cont">
              {workout.musclesWorked.map((muscle) => (
                <MuscleWorked key={muscle} Muscle={muscle} />
              ))}
            </div>
          </div>
        </div>

        <p className="Workout-Description">{workout.description}</p>

        <div className="Workout-Button-Flex">
          <button className="Workout-Button">View Workout</button>
          <button className="Workout-Button">Start Workout</button>
        </div>
      </div>
    </>
  );
}
export default WorkoutCard;
