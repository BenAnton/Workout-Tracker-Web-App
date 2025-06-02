import React, { useState } from "react";
import ExerciseHistoryCard from "../Components/History/ExerciseHistoryCard";
import HistoryHeader from "../Components/History/HistoryHeader";
import WorkoutHistoryCard from "../Components/History/WorkoutHistoryCard";
import completedWorkouts from "../Data/CompletedWorkouts";

function HistoryPage() {
  const [activeTab, setActiveTab] = useState("Exercises");

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

  return (
    <>
      <HistoryHeader setActiveTab={setActiveTab} activeTab={activeTab} />

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
              <WorkoutHistoryCard key={workout.id} workout={workout} />
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default HistoryPage;
