import React, {useState, useContext, useEffect, createContext} from "react";

const CreatedWorkoutContext = createContext();

export function CreatedWorkoutProvider({children}) {
    const [createdWorkouts, setCreatedWorkouts] = useState([]);

    useEffect(() => {
        async function fetchAllWorkouts() {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch("http://localhost:5282/api/workouts/", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    new Error("Failed to fetch all workouts");
                }
                const data = await response.json();
                setCreatedWorkouts(data);

                // console.log("Workouts with exercises: ", data)
                // data.forEach((workout, index) => {
                //     console.log(`Workout ${index}`, {
                //         id: workout.id,
                //         title: workout.title,
                //         exerciseCount: workout.exercises?.length || 0,
                //         exercises: workout.exercises || []
                //     });
                // });

            } catch (error) {
                console.error("Error fetching workouts", error);
            }
        }

        fetchAllWorkouts();
    }, [])
    const addWorkout = (workout) => {
        setCreatedWorkouts(prev => [...prev, workout]);
    };

    const getWorkoutById = (workoutId) => {
        return createdWorkouts.find((workout) => workout.id === workoutId);
    };

    const getExercisesForWorkout = (workoutId) => {
        const workout = getWorkoutById(workoutId);
        return workout.exercises || [];
    }

    return (
        <CreatedWorkoutContext.Provider value={{createdWorkouts, addWorkout, getExercisesForWorkout, getWorkoutById}}>
            {children}
        </CreatedWorkoutContext.Provider>
    );
}

export function useCreatedWorkouts() {
    return useContext(CreatedWorkoutContext);
}