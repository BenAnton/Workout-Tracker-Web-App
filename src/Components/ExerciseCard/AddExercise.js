import "./AddExercise.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExerciseData from "../../Data/ExerciseData";
import MuscleWorked from "../WorkoutCard/MusclesWorked";

function AddExercise() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [exercises] = useState(ExerciseData);
  const [musclesAdded, setMusclesAdded] = useState([]);
  const [selectedMuscles, setSelectedMuscles] = useState("Abs");

  const handleClose = (e) => {
    e.preventDefault();
    setIsExpanded(false);
  };

  const musclesArray = [
    "Abs",
    "Chest",
    "Shoulders",
    "Biceps",
    "Triceps",
    "Lats",
    "Traps",
  ];

  const handleAddedMuscle = (e) => {
    e.preventDefault();
    if (!musclesAdded.includes(selectedMuscles)) {
      setMusclesAdded([...musclesAdded, selectedMuscles]);
    }
  };

  const handleRemoveMuscle = (muscleToRemove) => {
    setMusclesAdded(musclesAdded.filter((muscle) => muscle !== muscleToRemove));
  };

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

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            exitBeforeEnter={false}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ overflow: "hidden" }}
          >
            <div className="Add-Exercise-Form-Cont">
              <form className="Add-Exercise-Form">
                <h3 className="Add-Exercise-New-Heading">Add An Exercise</h3>
                <label htmlFor="title">Title:</label>
                <input id="title" className="Add-Exercise-Title" type="text" />

                <label htmlFor="type">Type:</label>
                <input id="type" type="text" />

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
                            <MuscleWorked Muscle={muscle} />
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

                <label htmlFor="textarea-description">Add a Description:</label>
                <textarea
                  id="textarea-description"
                  className="Add-Exercise-Textarea"
                  name="Description"
                ></textarea>
                <div className="Add-Exercise-Button-Cont">
                  <button type="reset" className="Add-Exercise-Button">
                    Reset
                  </button>
                  <button className="Add-Exercise-Button">Add Workout</button>
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
