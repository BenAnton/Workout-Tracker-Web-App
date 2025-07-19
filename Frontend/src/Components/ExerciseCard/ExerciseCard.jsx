import "./ExerciseCard.css";
import EquipmentUsed from "./Equipment";
import MuscleWorked from "../WorkoutCard/MusclesWorked";
import defaultImg from "../../Assets/Images/defaultExImg.webp";
import React, {useState} from "react";
import EditExercise from "./EditExercise";
import PropTypes from "prop-types";

function ExerciseCard({exercise, onDelete}) {
    const [editing, setEditing] = useState(false);

    const handleDelete = async () => {
        const confirmDelete = window.confirm(
            "Are you sure that you wish to remove this exercise?"
        );
        if (!confirmDelete) return;

        try {
            const response = await fetch(
                `http://localhost:5282/api/exercises/${exercise.id}`,
                {
                    method: "DELETE",
                }
            );

            if (response.ok) {
                const deleted = await response.json();
                console.log("Deleted Exercise: ", deleted);
                if (onDelete) {
                    onDelete(exercise.id);
                }
            } else {
                console.error("Failed to remove exercise");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleEdit = async () => {
        setEditing(true);
    };

    return (
        <>
            <div className="ExerciseCard">
                <img
                    className="Exercise-Card-Img"
                    src={exercise.exerciseImg || defaultImg}
                    alt={exercise.title}
                ></img>
                <h3 className="Exercise-Card-Title">{exercise.title}</h3>
                <div className="Exercise-P-Cont">
                    <div className="Stack-Group">
                        <p>Equipment:</p>
                        <div className="Workout-Equipment-Cont">
                            {(exercise.equipment.length > 0
                                    ? [...new Set(exercise.equipment)]
                                    : ["None Listed"]
                            ).map((item) => (
                                <EquipmentUsed key={item} Equipment={item}/>
                            ))}
                        </div>
                    </div>

                    <div className="Stack-Group">
                        <p>Muscles:</p>
                        <div className="MuscleWorked-Cont">
                            {(exercise.muscle.length > 0
                                    ? [...new Set(exercise.muscle)]
                                    : ["None Listed"]
                            ).map((muscle) => (
                                <MuscleWorked key={muscle} Muscle={muscle}/>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="Exercise-Description">
                    {/<[a-z][\s\S]*>/i.test(exercise.description) ? (
                        <div dangerouslySetInnerHTML={{__html: exercise.description}}/>
                    ) : (
                        <p>
                            {exercise.description || "Exercise Description Not Available"}
                        </p>
                    )}
                </div>
                <div className="Stack-Group auto-top-margin">
                    <button className="Remove-Exercise-Btn" onClick={handleDelete}>
                        Remove Exercise
                    </button>
                    <button className="Remove-Exercise-Btn" onClick={handleEdit}>
                        Edit Exercise
                    </button>
                </div>

                {editing && (
                    <EditExercise
                        exercise={exercise}
                        onClose={() => setEditing(false)}
                        onUpdate={(updatedExercise) => {
                            console.log("Updated in parent:", updatedExercise);
                        }}
                    />
                )}
            </div>
        </>
    );
}

export default ExerciseCard;

ExerciseCard.propTypes = {
    exercise: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,

}