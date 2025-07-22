import React, {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import "./AddWorkout.css";
const API_URL = import.meta.env.VITE_API_URL;

function AddWorkout() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [sets, setSets] = useState(1);
    const [reps, setReps] = useState(1);
    const [weight, setWeight] = useState(0);
    const [exerciseName, setExerciseName] = useState("");
    const [exerciseOptions, setExerciseOptions] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState([]);
    const musclesWorked = [...new Set(selectedExercise.flatMap(e => e.muscle))];

    const calculateDuration = (workout) => {
        return Math.round((workout.sets * selectedExercise.length) * 90) / 60;
    }

    useEffect(() => {
        fetch(`${API_URL}/api/exercises`)
            .then(res => res.json())
            .then((data) => {
                setExerciseOptions(data);
            })
            .catch((error) => {
                console.error("Failed to fetch exercises", error);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        const workoutBase = {
            title,
            description,
            date: new Date().toISOString(),
            musclesWorked,
            sets: Number(sets),
            reps: Number(reps),
        };

        const duration = calculateDuration(workoutBase);

        const newWorkout = {
            ...workoutBase,
            duration,

            exercises: selectedExercise.map(e => ({
                exerciseName: e.title,
                sets: Number(sets),
                reps: Number(reps),
                weight: Number(weight)
            }))
        };

        try {
            const response = await fetch(`${API_URL}/api/workouts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(newWorkout),
            });
            if (!response.ok) {
                new Error("Failed to create workout");
            }

            const data = await response.json();
            console.log(selectedExercise);
            console.log("Workout Created:", data);

            setTitle("");
            setDescription("");
            setSets(1);
            setReps(1);
            setWeight(0);
            setExerciseName("");
            setSelectedExercise([]);
        } catch (error) {
            console.error(error);
        }
    };

    const handleClose = (e) => {
        e.preventDefault();
        setIsExpanded(false);
    };

    const handleAddExercise = (e) => {
        e.preventDefault();

        const selected = exerciseOptions.find((ex) => ex.title === exerciseName);
        if (selected && !selectedExercise.some(e => e.id === selected.id)) {
            setSelectedExercise([...selectedExercise, selected]);

            console.log(selected);
        }
    }

    const handleRemoveExercise = (ExerciseToRemove) => {
        setSelectedExercise(selectedExercise.filter((exercise) => exercise !== ExerciseToRemove));
    }

    return (
        <>
            {!isExpanded && (
                <button
                    className="Add-Workout-Button"
                    onClick={() => setIsExpanded(true)}
                >
                    Create Workout
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
                        <div className="Add-Workout-Form-Cont">
                            <form className="Add-Workout-Form">
                                <h3 className="Add-Workout-New-Heading">New Workout</h3>
                                <label htmlFor="title">Title:</label>
                                <input id="title" className="Add-Workout-Title" type="text" value={title}
                                       onChange={(e) => setTitle(e.target.value)}/>

                                <label htmlFor="sets">Sets:</label>
                                <input id="sets" value={sets} onChange={(e) => setSets(e.target.value)}
                                       type="number"/>
                                <label htmlFor="reps">Reps:</label>
                                <input id="reps" value={reps} type="number"
                                       onChange={(e) => setReps(e.target.value)}/>

                                <label htmlFor="select-exercise">Select Exercises:</label>
                                <select id="select-exercise" value={exerciseName}
                                        onChange={(e) => setExerciseName(e.target.value)}>
                                    <option value="">Select Exercise</option>
                                    {exerciseOptions.map((exercise) => (
                                        <option key={exercise.id} value={exercise.title}>{exercise.title}</option>
                                    ))}
                                </select>
                                <button className="Add-Workout-Button" onClick={handleAddExercise}>Add</button>
                                <div className="Add-Workout-Horizontal-Outer-Flex">
                                    {selectedExercise.map((exercise, index) =>
                                        <>
                                            <div key={index} className="Add-Workout-Map-Div">
                                                <div key={index} className="Add-Workout-Horizontal-Flex"
                                                >{exercise.title}</div>
                                                <button onClick={() => handleRemoveExercise(exercise)}
                                                        type="button"
                                                        className="remove-muscle">x
                                                </button>
                                            </div>
                                        </>
                                    )}

                                </div>

                                <label htmlFor="textarea-description">Add a Description:</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    id="textarea-description"
                                    className="Add-Workout-Textarea"
                                    name="Description"
                                ></textarea>
                                <div className="Add-Workout-Button-Cont">
                                    <button type="reset" className="Add-Workout-Button">
                                        Reset
                                    </button>
                                    <button className="Add-Workout-Button" onClick={handleSubmit}>Add Workout
                                    </button>
                                    <button className="Add-Workout-Button" onClick={handleClose}>
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

export default AddWorkout;
