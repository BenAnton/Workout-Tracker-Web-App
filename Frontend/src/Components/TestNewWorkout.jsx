import {useCompletedWorkouts} from "./Context/CompletedWorkoutContext";
import React, {useState} from "react";

const TestLogWorkout = () => {
    const {addCompletedWorkout} = useCompletedWorkouts();
    const [submitted, setSubmitted] = useState(false);

    const handleLog = async () => {
        const workoutPayload = {
            userId: 1, // Replace with actual logged-in user's ID if available
            workoutTitle: "Test Workout",
            dateCompleted: new Date().toISOString(),
            totalReps: 5,
            totalWeight: 500, // 5 reps * 100 weight
            averageWeight: 100, // totalWeight / totalReps
            exercises: [
                {
                    title: "Squat",
                    heaviestWeight: "100",
                    notes: "",
                    sets: [
                        {
                            reps: 5,
                            weight: 100,
                        },
                    ],
                },
            ],
        };

        await addCompletedWorkout(workoutPayload);
        setSubmitted(true);
    };

    return (
        <div>
            <button onClick={handleLog}>Log Test Workout</button>
            {submitted && <p>✅ Test workout submitted!</p>}
        </div>
    );
};

export default TestLogWorkout;