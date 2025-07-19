import "./WorkoutCard.css";
import "./ExerciseBreak.css";
import MuscleWorked from "./MusclesWorked";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import ExerciseBreak from "./ExerciseBreak";
import {useCreatedWorkouts} from "../Context/CreatedWorkoutContext";
import DefaultWorkOutImg from "../../Assets/Images/Workout.jpg";
import PropTypes from "prop-types";


function WorkoutCard({workoutId}) {

    const [expanded, setExpanded] = useState(false);
    const {createdWorkouts} = useCreatedWorkouts();
    const workout = createdWorkouts.find(w => w.id === workoutId);
    const navigate = useNavigate();

    console.log(workout);
    const ExpandCollapse = () => {
        if (expanded) {
            setExpanded(false);
        } else {
            setExpanded(true);
        }
    };

    function handleStartWorkout(title) {
        navigate(`/workout`, {state: {title: title}});
    }

    return (
        <>
            <div className="WorkoutCard">
                <img
                    className="Workout-Card-Img"
                    src={workout.WorkoutImg ? workout.WorkoutImg : DefaultWorkOutImg}
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
                        <p className="Muscle-Worked-No-Wrap">Muscles:</p>
                        <div className="MuscleWorked-Cont">
                            {workout.musclesWorked.map((muscle) => (
                                <MuscleWorked key={muscle} Muscle={muscle}/>
                            ))}
                        </div>
                    </div>
                </div>

                {expanded && (
                    <ul className="ExerciseBreak-Parent-Cont">
                        {workout.exercises.map((exercise, index) => (
                            <ExerciseBreak
                                key={index}
                                index={index}
                                sets={workout.exercises[0].sets}
                                reps={workout.exercises[0].reps}
                                title={workout.exercises[index].exerciseName}
                            />
                        ))}
                    </ul>
                )}

                <p className="Workout-Description">{workout.description}</p>

                <div className="Workout-Button-Flex">
                    <button onClick={ExpandCollapse} className="Workout-Button">
                        {expanded ? "Hide Exercises" : "Show Exercises"}
                    </button>
                    <button className="Workout-Button" onClick={() => {
                        handleStartWorkout(workout.title)
                    }}>Start Workout
                    </button>
                </div>
            </div>
        </>
    );
}

export default WorkoutCard;

WorkoutCard.propTypes = {
    workoutId: PropTypes.string.isRequired,
}