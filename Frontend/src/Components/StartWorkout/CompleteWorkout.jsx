import WorkoutData from "../../Data/WorkoutData";
import "./CompleteWorkout.css";
import {useCreatedWorkouts} from "../Context/CreatedWorkoutContext";

function CompleteWorkout({
                             setActiveComponent,
                             selectedWorkout,
                             setCompletedWorkout,
                         }) {
    console.log(selectedWorkout);
    const {createdWorkouts} = useCreatedWorkouts();
    const workout = selectedWorkout;

    if (!workout) {
        return <p>Workout not found!</p>;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        let totalReps = 0;
        let totalWeight = 0;
        let atLeastOneSetCompleted = false;

        const exerciseData = workout.exercises.map((exercise, exIdx) => {
            let heaviestWeight = 0;
            const sets = [];

            for (let setIdx = 0; setIdx < setsPerExercise; setIdx++) {
                const isChecked = form.get(`complete-${exIdx}-${setIdx}`);
                if (!isChecked) continue;

                atLeastOneSetCompleted = true;

                const weight = Number(form.get(`weight-${exIdx}-${setIdx}`)) || 0;
                const reps = Number(form.get(`reps-${exIdx}-${setIdx}`)) || 0;
                const volume = weight * reps;

                totalReps += reps;
                totalWeight += volume;
                if (weight > heaviestWeight) {
                    heaviestWeight = weight;
                }
                sets.push({reps, weight});
            }

            const notes = form.get(`notes-${exIdx}`) || "";

            return sets.length > 0
                ? {
                    title: exercise.exerciseName,
                    heaviestWeight: heaviestWeight.toString(),
                    sets,
                    notes,
                } : null;
        }).filter((ex) => ex !== null);

        if (!atLeastOneSetCompleted) {
            alert("Please complete at least one set to log workout!");
            return;
        }

        const completed = {
            userId: 1,
            workoutTitle: workout.title,
            dateCompleted: new Date().toISOString(),
            totalReps,
            totalWeight: parseFloat(totalWeight.toFixed(1)),
            averageWeight: parseFloat((totalWeight / totalReps).toFixed(1)),
            exercises: exerciseData,
        };

        console.log("Submitting completed workout", completed);

        await fetch("http://localhost:5282/api/CompleteWorkouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(completed),
        });

        setCompletedWorkout(completed);
        setActiveComponent("summary");
    };

    let setsPerExercise = selectedWorkout.exercises[0].sets;

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2 className="Complete-Title">{createdWorkouts.title}</h2>
                <button
                    type="button"
                    className="Complete-Button"
                    onClick={() => setActiveComponent("start")}
                >
                    Cancel Workout
                </button>
                <div className="Complete-Form-Flex">
                    {selectedWorkout.exercises.map((exercise, idx) => (
                        <div key={idx}>
                            <h3 className="Complete-Exercise-Title">{exercise.exerciseName}</h3>
                            <table className="Complete-Table-Cont">
                                <thead>
                                <tr>
                                    <th>Set</th>
                                    <th>Reps</th>
                                    <th>Weight (Kg)</th>
                                    <th>Complete</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Array.from({length: setsPerExercise},
                                    (_, setIdx) => (
                                        <tr key={setIdx}>
                                            <td>{setIdx + 1}</td>
                                            <td>
                                                <input
                                                    className="Complete-Weight-Input"
                                                    type="number"
                                                    name={`reps-${idx}-${setIdx}`}
                                                /></td>
                                            <td>
                                                <input
                                                    className="Complete-Weight-Input"
                                                    type="number"
                                                    name={`weight-${idx}-${setIdx}`}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    name={`complete-${idx}-${setIdx}`}
                                                />
                                            </td>
                                        </tr>
                                    )
                                )}
                                </tbody>
                            </table>
                            <textarea name={`notes-${idx}`} placeholder="Notes"/>
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="Complete-Button Complete-Submit-Button"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}

export default CompleteWorkout;
