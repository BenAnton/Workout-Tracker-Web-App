import React, {createContext, useContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
const API_URL = import.meta.env.VITE_API_URL;

const CompletedWorkoutContext = createContext();

export const useCompletedWorkouts = () => useContext(CompletedWorkoutContext);

export const CompletedWorkoutProvider = ({children}) => {
    const [completedWorkouts, setCompletedWorkouts] = useState([]);

    const fetchCompletedWorkouts = async () => {
        try {
            const response = await fetch(`${API_URL}/api/CompleteWorkouts`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("Failed to add completed workouts");
            }
            const workouts = await response.json();
            setCompletedWorkouts(workouts);
        } catch (error) {
            console.error("Error fetching completed workouts", error);
        }
    };
    
    const addCompletedWorkout = async (workout) => {
        try {
            const response = await fetch(`${API_URL}/api/CompleteWorkouts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(workout),
            });
            if(!response.ok) {
                throw new Error("Failed to add completed workouts");
            }
            const newWorkout = await response.json();
            setCompletedWorkouts((prev) => [...prev, newWorkout]);
        } catch (error) {
            console.error("Error adding completed workouts", error);
        }
    };

    useEffect(() => {
        fetchCompletedWorkouts();
    }, []);

    return (
        <CompletedWorkoutContext.Provider value={{completedWorkouts, addCompletedWorkout, fetchCompletedWorkouts}}>
            {children}
        </CompletedWorkoutContext.Provider>
    );
};

CompletedWorkoutProvider.propTypes = {
    children: PropTypes.node.isRequired,
}