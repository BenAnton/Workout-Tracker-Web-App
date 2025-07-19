import React, {useState} from "react";
import {useCreatedWorkouts} from "../Context/CreatedWorkoutContext";
import "./SelectWorkout.css";


function SelectWorkout({setActiveComponent, setSelectedWorkoutId, createdWorkouts}) {
    const [localId, setLocalId] = useState("");

    const handleSelectChange = (e) => {
        setLocalId(e.target.value);
    };

    const handleSelectClick = () => {
        if (localId) {
            setSelectedWorkoutId(localId);
            setActiveComponent("complete");
        } else {
            alert("Please select a workout first");
        }


    };

    return (
        <>
            <div className="Select-Flex">
                <select className="Select-Select-Input" onChange={handleSelectChange} value={localId}>
                    <option value="" disabled>
                        Select a Workout
                    </option>
                    {createdWorkouts.map((workout) => (
                        <option
                            className="Select-Option"
                            value={workout.id.toString()}
                            key={workout.id}
                        >
                            {workout.title}
                        </option>
                    ))}
                </select>

                <button className="Select-Button" onClick={handleSelectClick}>
                    Select
                </button>
                <button
                    className="Select-Button"
                    onClick={() => setActiveComponent("start")}
                >
                    Cancel
                </button>
            </div>
        </>
    );
}

export default SelectWorkout;
