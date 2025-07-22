import "./EditExercise.css";
import React, {useState} from "react";
import PropTypes from "prop-types";
const API_URL = import.meta.env.VITE_API_URL;

function EditExercise({exercise, onClose, onUpdate}) {
    const [title, setTitle] = useState(exercise.title);
    const [description, setDescription] = useState(exercise.description);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Handle Submit");

        const updatedExercise = {
            ...exercise,
            title,
            description,
        };

        try {
            const response = await fetch(
                `${API_URL}/api/exercises/${exercise.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedExercise),
                }
            );

            if (response.ok) {
                const result = await response.json();
                console.log("Exercise Updated", result);
                onUpdate(result);
                onClose();
            } else {
                console.error("Error Updating Exercise");
            }
        } catch (error) {
            console.error("Error Updating Exercise:", error);
        }
    };

    return (
        <>
            <div className="EditExerciseForm">
                <h4>Edit: {exercise.title}</h4>
                <form id="Edit-Form" onSubmit={handleSubmit}>
                    <input
                        className="Edit-Title"
                        type="text"
                        placeholder="New Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                    <textarea
                        className="Edit-Desc"
                        placeholder="Description..."
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    ></textarea>

                    <div className="Stack-Group">
                        <button className="Edit-Form-Btn" type="submit">
                            Confirm
                        </button>
                        <button className="Edit-Form-Btn" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default EditExercise;

EditExercise.propTypes = {
    exercise: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
}