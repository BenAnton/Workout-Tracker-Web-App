import "./AddExercise.css";
import React, {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import fetchExercises from "../../Services/Excerciseservice";
import MuscleWorked from "../WorkoutCard/MusclesWorked";
import PropTypes from "prop-types";
const API_URL = import.meta.env.VITE_API_URL;

function AddExercise({onExerciseAdded}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [musclesAdded, setMusclesAdded] = useState([]);
    const [selectedMuscles, setSelectedMuscles] = useState("Abs");
    const [selectedEquipment, setSelectedEquipment] = useState("None");
    const [musclesArray, setMusclesArray] = useState([]);
    const [equipmentArray, setEquipmentArray] = useState([]);
    const [equipmentAdded, setEquipmentAdded] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const handleClose = (e) => {
        e.preventDefault();
        setIsExpanded(false);
    };

    const handleAddedMuscle = (e) => {
        e.preventDefault();
        if (!musclesAdded.includes(selectedMuscles)) {
            setMusclesAdded([...musclesAdded, selectedMuscles]);
        }
    };

    const handleRemoveMuscle = (muscleToRemove) => {
        setMusclesAdded(musclesAdded.filter((muscle) => muscle !== muscleToRemove));
    };

    const handleAddedEquipment = (e) => {
        e.preventDefault();
        if (!equipmentAdded.includes(selectedEquipment)) {
            setEquipmentAdded([...equipmentAdded, selectedEquipment]);
        }
    };

    const handleRemoveEquipment = (equipmentToRemove) => {
        setEquipmentAdded(
            equipmentAdded.filter((equipment) => equipment !== equipmentToRemove)
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newExercise = {
            title,
            description,
            muscle: musclesAdded,
            equipment: equipmentAdded,
            exerciseImg: "",
        };

        try {
            const response = await fetch(`${API_URL}/api/exercises`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newExercise),
            });
            if (response.ok) {
                const addedExercise = await response.json();
                console.log("Exercise added", addedExercise);

                onExerciseAdded(addedExercise);

                setTitle("");
                setDescription("");
                setMusclesAdded([]);
                setEquipmentAdded([]);
            } else {
                console.error("Exercise Failed");
            }
        } catch (error) {
            console.error("Error adding exercise", error);
        }
    };

    useEffect(() => {
        const loadExercises = async () => {
            try {
                const data = await fetchExercises();

                const allMuscles = data
                    .flatMap((exercises) => exercises.muscle)
                    .filter((m) => m);
                const uniqueMuscles = [...new Set(allMuscles)];
                setMusclesArray(uniqueMuscles);

                const allEquipment = data
                    .flatMap((exercises) => exercises.equipment)
                    .filter((e) => e);
                const uniqueEquipment = [...new Set(allEquipment)];
                setEquipmentArray(uniqueEquipment);

            } catch (error) {
                console.error("Error fetching exercises", error);
            }
        };
        loadExercises();
    }, []);

    return (
        <>
            {!isExpanded && (
                <button
                    className="Add-Exercise-Button"
                    onClick={() => setIsExpanded(true)}
                >
                    Add Exercise
                </button>
            )}

            <AnimatePresence exitBeforeEnter={false}>
                {isExpanded && (
                    <motion.div

                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.5}}
                        style={{overflow: "hidden"}}
                    >
                        <div className="Add-Exercise-Form-Cont">
                            <form className="Add-Exercise-Form">
                                <h3 className="Add-Exercise-New-Heading">Add An Exercise</h3>
                                <label htmlFor="title">Title:</label>
                                <input
                                    id="title"
                                    className="Add-Exercise-Title"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />

                                <label htmlFor="select-muscles">Select Muscles:</label>

                                <div className="Add-Exercise-Horizontal">
                                    <select
                                        id="select-muscles"
                                        value={selectedMuscles}
                                        onChange={(e) => setSelectedMuscles(e.target.value)}
                                    >
                                        {musclesArray.map((muscle) => (
                                            <option key={muscle} value={muscle}>
                                                {muscle}
                                            </option>
                                        ))}
                                    </select>
                                    <button
                                        onClick={handleAddedMuscle}
                                        className="Add-Exercise-Muscle-Button"
                                    >
                                        Add
                                    </button>
                                </div>

                                <div className="Muscle-Added-List-Flex">
                                    {musclesAdded.length > 0 ? (
                                        <div className="muscles-list">
                                            <div className="muscle-tags">
                                                {musclesAdded.map((muscle) => (
                                                    <div key={muscle} className="muscle-tag">
                                                        <MuscleWorked Muscle={muscle}/>
                                                        <button
                                                            type="button"
                                                            className="remove-muscle"
                                                            onClick={() => handleRemoveMuscle(muscle)}
                                                        >
                                                            ×
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="no-muscles">No muscles selected yet</p>
                                    )}
                                </div>

                                <label htmlFor="select-muscles">Select Equipment:</label>

                                <div className="Add-Exercise-Horizontal">
                                    <select
                                        id="select-muscles"
                                        value={selectedEquipment}
                                        onChange={(e) => setSelectedEquipment(e.target.value)}
                                    >
                                        {equipmentArray.map((equipment) => (
                                            <option key={equipment} value={equipment}>
                                                {equipment}
                                            </option>
                                        ))}
                                    </select>
                                    <button
                                        onClick={handleAddedEquipment}
                                        className="Add-Exercise-Muscle-Button"
                                    >
                                        Add
                                    </button>
                                </div>

                                <div className="Muscle-Added-List-Flex">
                                    {musclesAdded.length > 0 ? (
                                        <div className="muscles-list">
                                            <div className="muscle-tags">
                                                {equipmentAdded.map((equipment) => (
                                                    <div key={equipment} className="muscle-tag">
                                                        <MuscleWorked Muscle={equipment}/>
                                                        <button
                                                            type="button"
                                                            className="remove-muscle"
                                                            onClick={() => handleRemoveEquipment(equipment)}
                                                        >
                                                            ×
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="no-muscles">No muscles selected yet</p>
                                    )}
                                </div>

                                <label htmlFor="textarea-description">Add a Description:</label>
                                <textarea
                                    id="textarea-description"
                                    className="Add-Exercise-Textarea"
                                    name="Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                                <div className="Add-Exercise-Button-Cont">
                                    <button type="reset" className="Add-Exercise-Button">
                                        Reset
                                    </button>
                                    <button
                                        className="Add-Exercise-Button"
                                        onClick={handleSubmit}
                                    >
                                        Add Exercise
                                    </button>
                                    <button className="Add-Exercise-Button" onClick={handleClose}>
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default AddExercise;


AddExercise.propTypes = {
    onExerciseAdded: PropTypes.func.isRequired,
}