import "./Profile.css";
import completedWorkouts from "../../Data/CompletedWorkouts";
import {useContext} from "react";
import {UserContext} from "../Context/UserContext";
import {useCompletedWorkouts} from "../Context/CompletedWorkoutContext";


function ProfileStats() {
    const {user} = useContext(UserContext);

    const {completedWorkouts} = useCompletedWorkouts();

    const totalWorkouts = completedWorkouts.length;

    const {totalWeight, totalReps} = completedWorkouts.reduce(
        (acc, workout) => {
            workout.exercises.forEach(exercise => {
                exercise.sets.forEach((set) => {
                    acc.totalWeight += set.weight * set.reps;
                    acc.totalReps += set.reps;
                });
            });
            return acc;
        },
        {totalWeight: 0, totalReps: 0},
    );

    const averageWeight = totalWeight > 0 ? Math.round(totalWeight / totalReps) : 0;

    return (
        <div className="Profile-Stats">
            <h2>USER STATS</h2>
            <div className="Profile-Horizontal-Flex">
                <h3>Total Workouts:</h3>
                <p>{totalWorkouts}</p>
            </div>

            <div className="Profile-Horizontal-Flex">
                <h3>Total Weight Lifted:</h3>
                <p>{totalWeight}kg</p>
            </div>

            <div className="Profile-Horizontal-Flex">
                <h3>Total Reps:</h3>
                <p>{totalReps}</p>
            </div>

            <div className="Profile-Horizontal-Flex">
                <h3>Average Weight Per Rep:</h3>
                <p>{averageWeight} kg</p>
            </div>
        </div>
    );
}

export default ProfileStats;
