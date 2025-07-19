import React, {useContext, useState} from "react";
import ExerciseHistoryCard from "../Components/History/ExerciseHistoryCard";
import HistoryHeader from "../Components/History/HistoryHeader";
import WorkoutHistoryCard from "../Components/History/WorkoutHistoryCard";
import {UserContext} from "../Components/Context/UserContext";

import {useCompletedWorkouts} from "../Components/Context/CompletedWorkoutContext";

function HistoryPage() {
    const {user} = useContext(UserContext);
    const [activeTab, setActiveTab] = useState("Exercises");

    const {completedWorkouts} = useCompletedWorkouts();

    const getExerciseHistory = () => {
        const history = {};

        completedWorkouts.forEach((workout) => {
            workout.exercises.forEach((exercise) => {
                if (!history[exercise.title]) {
                    history[exercise.title] = [];
                }

                history[exercise.title].push({
                    workoutTitle: workout.workouttTitle,
                    dateCompleted: workout.dateCompleted,
                    sets: exercise.sets,
                    notes: exercise.notes,
                });
            });
        });

        return history;
    };

    const exerciseHistory = getExerciseHistory();

    if (!user) {
        return <h2>Please log in to view history...</h2>
    }

    return (
        <>
            <HistoryHeader setActiveTab={setActiveTab} activeTab={activeTab}/>

            <div className="Exercise-Card-Flex">
                {activeTab === "Exercises" && (
                    <>
                        {Object.keys(exerciseHistory).map((exerciseTitle) => (
                            <ExerciseHistoryCard
                                key={exerciseTitle}
                                exerciseTitle={exerciseTitle}
                                exerciseInstances={exerciseHistory[exerciseTitle]}
                            />
                        ))}
                    </>
                )}
                {activeTab === "Workouts" && (
                    <>
                        {completedWorkouts.map((workout) => (
                            <WorkoutHistoryCard key={workout.id} workout={workout}/>
                        ))}
                    </>
                )}
            </div>
        </>
    );
}

export default HistoryPage;
