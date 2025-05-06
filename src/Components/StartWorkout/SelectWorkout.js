import WorkoutData from "../../Data/WorkoutData";
import React, { useState } from "react";
import "./SelectWorkout.css";

function SelectWorkout({
  setWorkoutSelected,
  setActiveComponent,
  setWorkoutId,
}) {
  const [selectedId, setSelectedId] = useState(WorkoutData[0].id.toString());

  const handleSelectChange = (e) => {
    setSelectedId(e.target.value);
  };

  const handleSelectClick = () => {
    setWorkoutSelected(true);
    setWorkoutId(selectedId);
    setActiveComponent("complete");
  };

  return (
    <>
      <div className="Select-Flex">
        <select className="Select-Select-Input" onChange={handleSelectChange}>
          <option value="" disabled>
            Select a Workout
          </option>
          {WorkoutData.map((workout) => (
            <option
              className="Select-Option"
              value={workout.id}
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
