import "./AddWorkout.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkoutData from "../../Data/WorkoutData";

function AddWorkout() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [exercises] = useState(WorkoutData);

  const handleClose = (e) => {
    e.preventDefault();
    setIsExpanded(false);
  };

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
            <div className="Add-Workout-Form-Cont">
              <form className="Add-Workout-Form">
                <h3 className="Add-Workout-New-Heading">New Workout</h3>
                <label htmlFor="title">Title:</label>
                <input id="title" className="Add-Workout-Title" type="text" />

                <label htmlFor="sets">Sets:</label>
                <input id="sets" value="1" type="number" />
                <label htmlFor="reps">Reps:</label>
                <input id="reps" value="1" type="number" />

                <label htmlFor="select-exercise">Select Exercises:</label>
                <select id="select-exercise">
                  <option>Hello</option>
                </select>
                <button className="Add-Workout-Button">Add</button>

                <ul></ul>
                <label htmlFor="textarea-description">Add a Description:</label>
                <textarea
                  id="textarea-description"
                  className="Add-Workout-Textarea"
                  name="Description"
                ></textarea>
                <div className="Add-Workout-Button-Cont">
                  <button type="reset" className="Add-Workout-Button">
                    Reset
                  </button>
                  <button className="Add-Workout-Button">Add Workout</button>
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
