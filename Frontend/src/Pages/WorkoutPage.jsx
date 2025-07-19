import StartWorkout from "../Components/StartWorkout/StartWorkout";
import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import SelectWorkout from "../Components/StartWorkout/SelectWorkout";
import CompleteWorkout from "../Components/StartWorkout/CompleteWorkout";
import WorkoutSummary from "../Components/StartWorkout/WorkoutSummary";
import {useCreatedWorkouts} from "../Components/Context/CreatedWorkoutContext";


function WorkoutPage() {
    const {createdWorkouts} = useCreatedWorkouts();
    const [activeComponent, setActiveComponent] = useState("start");
    const [selectedWorkoutId, setSelectedWorkoutId] = useState("");
    const [completedWorkout, setCompletedWorkout] = useState(null);

    const location = useLocation();
    const workoutTitleFromState = location.state?.title;

    const selectedWorkout = createdWorkouts.find((w) => w.id.toString() === selectedWorkoutId);


    useEffect(() => {
        if (workoutTitleFromState && createdWorkouts.length > 0) {
            const matchedWorkout = createdWorkouts.find(w => w.title === workoutTitleFromState);
            if (matchedWorkout) {
                setSelectedWorkoutId(matchedWorkout.id.toString());
                setActiveComponent("complete");
            }
        }
    }, [workoutTitleFromState, createdWorkouts]);

    let renderComp;

    switch (activeComponent) {
        case "start":
            renderComp = <StartWorkout setActiveComponent={setActiveComponent}/>;
            break;

        case "select":
            renderComp = (
                <SelectWorkout
                    setActiveComponent={setActiveComponent}
                    setSelectedWorkoutId={setSelectedWorkoutId}
                    createdWorkouts={createdWorkouts}
                />
            );
            break;

        case "complete":
            renderComp = (
                <CompleteWorkout
                    setActiveComponent={setActiveComponent}
                    selectedWorkout={selectedWorkout}
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
                />
            );
    }

    return <>{renderComp}</>;
}

export default WorkoutPage;
