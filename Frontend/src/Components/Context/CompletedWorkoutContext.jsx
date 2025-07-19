import React, {createContext, useContext, useEffect, useState} from "react";

const CompletedWorkoutContext = createContext();

export const useCompletedWorkouts = () => useContext(CompletedWorkoutContext);

export const CompletedWorkoutProvider = ({children}) => {
    const [completedWorkouts, setCompletedWorkouts] = useState([]);

    const fetchCompletedWorkouts = async () => {
        try {
            const response = await fetch(`http://localhost:5282/api/CompleteWorkouts`);
            if (!response.ok) {
                throw new Error("Failed to fetch completed workouts");
            }
            const data = await response.json();
            setCompletedWorkouts(data);
        } catch (error) {
            console.error("Error fetching completed workouts", error);
        }
    };

    const addCompletedWorkout = async (workout) => {
        try {
            const response = await fetch(`http://localhost:5282/api/CompleteWorkouts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(workout),
            });
            if (!response.ok) {
                throw new Error("Failed to add completed workouts");
            }
            const newWorkout = await response.json();
            setCompletedWorkouts((prev) => [...prev, newWorkout]);
        } catch (error) {
            console.error("Error adding new workout", error);
        }
    };

    useEffect(() => {
        fetchCompletedWorkouts();
    }, []);

    return (
        <CompletedWorkoutContext.Provider value={{completedWorkouts, addCompletedWorkout}}>
            {children}
        </CompletedWorkoutContext.Provider>
    );
};