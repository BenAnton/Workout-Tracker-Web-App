import StartWorkout from "../Components/StartWorkout/StartWorkout";
import React, { useState } from "react";
import SelectWorkout from "../Components/StartWorkout/SelectWorkout";
import CompleteWorkout from "../Components/StartWorkout/CompleteWorkout";
import WorkoutSummary from "../Components/StartWorkout/WorkoutSummary";
import WorkoutData from "../Data/WorkoutData";

function WorkoutPage() {
  const [activeComponent, setActiveComponent] = useState("start");
  const [workoutSelected, setWorkoutSelected] = useState(
    WorkoutData[0].id.toString()
  );
  const [workoutId, setWorkoutId] = useState("");
  const [completedWorkout, setCompletedWorkout] = useState(null);

  let renderComp;

  switch (activeComponent) {
    case "start":
      renderComp = <StartWorkout setActiveComponent={setActiveComponent} />;
      break;

    case "select":
      renderComp = (
        <SelectWorkout
          setActiveComponent={setActiveComponent}
          setWorkoutSelected={setWorkoutSelected}
          setWorkoutId={setWorkoutId}
        />
      );
      break;

    case "complete":
      renderComp = (
        <CompleteWorkout
          setActiveComponent={setActiveComponent}
          workoutSelected={workoutId}
          setCompletedWorkout={setCompletedWorkout}
        />
      );
      break;
    case "summary":
      renderComp = (
        <WorkoutSummary
          setActiveComponent={setActiveComponent}
          completedWorkout={completedWorkout}
        />
      );
      break;

    default:
      renderComp = (
        <StartWorkout
          setActiveComponent={setActiveComponent}
          setCompletedWorkout={setCompletedWorkout}
        />
      );
  }

  return <>{renderComp}</>;
}

export default WorkoutPage;
