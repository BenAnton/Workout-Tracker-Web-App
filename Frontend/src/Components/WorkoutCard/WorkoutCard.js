import "./WorkoutCard.css";
import "./ExerciseBreak.css";
import MuscleWorked from "./MusclesWorked";
import React, { useState } from "react";
import WorkoutData from "../../Data/WorkoutData";
import ExerciseBreak from "./ExerciseBreak";

function WorkoutCard({ workout }) {
  const [expanded, setExpanded] = useState(false);

  const ExpandCollapse = () => {
    if (expanded) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  };

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

        {expanded && (
          <ul className="ExerciseBreak-Parent-Cont">
            {workout.exercises.map((exercise, index) => (
              <ExerciseBreak
                index={index}
                sets={workout.setsPerExercise}
                reps={workout.repsPerExercise}
                title={exercise}
              />
            ))}
          </ul>
        )}

        <p className="Workout-Description">{workout.description}</p>

        <div className="Workout-Button-Flex">
          <button onClick={ExpandCollapse} className="Workout-Button">
            {expanded ? "Hide Exercises" : "Show Exercises"}
          </button>
          <button className="Workout-Button">Start Workout</button>
        </div>
      </div>
    </>
  );
}
export default WorkoutCard;
