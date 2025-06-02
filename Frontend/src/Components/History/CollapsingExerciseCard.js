import "./CollapsingExerciseCard.css";
import React, { useState } from "react";
import ExerciseDataTable from "./ExerciseDataTable";

function CollapsingExerciseCard({ exercise, workout }) {
  const [expanded, setExpanded] = useState(false);

  const ExpandCollapse = () => {
    if (expanded) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  };

  const calculateTotalReps = (sets) => {
    let total = 0;

    sets.forEach((set) => {
      total += set.reps;
    });
    return total;
  };

  return (
    <>
      <div className="Exercise-History-Card">
        <div className="Exercise-History-Flex">
          <div className="Exercise-History-Horizontal-Flex">
            <h3 className="Exercise-Heading-Collapse">{exercise.title}</h3>
            <button className="Collapse-Button" onClick={ExpandCollapse}>
              {expanded ? "Collapse" : "Expand"}
            </button>
          </div>
        </div>

        {expanded && (
          <div className="Collapsing-Component">
            <ExerciseDataTable exercise={exercise} />
            <div className="CEC-Notes">Notes: {exercise.notes}</div>
            <div className="CEC-Total-Reps">
              Exercise Total Reps: {calculateTotalReps(exercise.sets)}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CollapsingExerciseCard;
