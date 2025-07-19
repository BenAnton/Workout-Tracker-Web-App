import "./ExerciseHistoryCard.css";
import React, {useState} from "react";
import ExerciseHistoryData from "./ExerciseHistoryData";

function ExerciseHistoryCard({exerciseTitle, exerciseInstances}) {
    const [expanded, setExpanded] = useState(false);

    const ExpandCollapse = () => {
        if (expanded) {
            setExpanded(false);
        } else {
            setExpanded(true);
        }
    };


    return (
        <div className="Exercise-History-Card">
            <div className="Exercise-History-Flex">
                <div className="Exercise-History-Horizontal-Flex">
                    <h3>{exerciseTitle}</h3>
                    <button className="Collapse-Button" onClick={ExpandCollapse}>
                        {expanded ? "Collapse" : "Expand"}
                    </button>
                </div>
            </div>
            {expanded && (
                <div>
                    {exerciseInstances.map((instance, index) => (
                        <ExerciseHistoryData key={index} instance={instance}/>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ExerciseHistoryCard;
