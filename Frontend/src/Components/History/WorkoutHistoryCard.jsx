import CollapsingExerciseCard from "./CollapsingExerciseCard";
import React, {useState} from "react";
import WorkoutStats from "./WorkoutStats";
import PropTypes from "prop-types";

function WorkoutHistoryCard({workout}) {
    const [expanded, setExpanded] = useState(false);

    const ExpandCollapse = () => {
        if (expanded) {
            setExpanded(false);
        } else {
            setExpanded(true);
        }
    };
    const date = new Date(workout.dateCompleted);
    const displayDate = date.toLocaleDateString();

    return (
        <>
            <div className="Exercise-History-Card">
                <div className="Exercise-History-Flex">
                    <div className="Exercise-History-Horizontal-Flex">
                        <h3>{workout.workoutTitle}</h3>
                        <h3>{displayDate}</h3>
                        <button className="Collapse-Button" onClick={ExpandCollapse}>
                            {expanded ? "Collapse" : "Expand"}
                        </button>
                    </div>
                </div>
                {expanded && (
                    <div>
                        {workout.exercises.map((exercise, index) => (
                            <CollapsingExerciseCard
                                key={index}
                                workout={workout}
                                exercise={exercise}
                            />
                        ))}
                        <WorkoutStats workout={workout}/>
                    </div>
                )}
            </div>
        </>
    );
}

export default WorkoutHistoryCard;

WorkoutHistoryCard.propTypes = {
    workout: PropTypes.object.isRequired,
}