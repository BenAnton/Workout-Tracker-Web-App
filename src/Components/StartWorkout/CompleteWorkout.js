import WorkoutData from "../../Data/WorkoutData";
import "./CompleteWorkout.css";

function CompleteWorkout({
  setActiveComponent,
  workoutSelected,
  setCompletedWorkout,
}) {
  console.log(workoutSelected);
  const workout = WorkoutData.find((w) => w.id === parseInt(workoutSelected));

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    let totalReps = 0;
    let totalWeight = 0;
    const exerciseData = workout.exercises.map((exercise, exIdx) => {
      let heaviestWeight = 0;
      const sets = Array.from({ length: workout.setsPerExercise }).map(
        (_, setIdx) => {
          const weight = Number(form.get(`weight-${exIdx}-${setIdx}`)) || 0;
          const reps = workout.repsPerExercise;
          const weightForSet = weight * reps;

          if (weight > heaviestWeight) heaviestWeight = weight;
          totalReps += reps;
          totalWeight += weightForSet;

          return { reps, weight };
        }
      );

      const notes = form.get(`notes-${exIdx}`) || "";

      return {
        title: exercise,
        heaviestWeight,
        sets,
        notes,
      };
    });

    const completed = {
      id: workout.length + 1,
      workoutTitle: workout.title,
      dateCompleted: new Date().toISOString().split("T")[0],
      totalReps,
      totalWeight: parseFloat(totalWeight.toFixed(1)),
      averageWeight: parseFloat((totalWeight / totalReps).toFixed(1)),
      exercises: exerciseData,
    };

    setCompletedWorkout(completed);
    setActiveComponent("summary");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="Complete-Title">{workout.title}</h2>
        <button
          className="Complete-Button"
          onClick={() => setActiveComponent("start")}
        >
          Cancel Workout
        </button>
        <div className="Complete-Form-Flex">
          {workout.exercises.map((exercise, idx) => (
            <div key={idx}>
              <h3 className="Complete-Exercise-Title">{exercise}</h3>
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
                  {Array.from({ length: workout.setsPerExercise }).map(
                    (_, setIdx) => (
                      <tr key={setIdx}>
                        <td>{setIdx + 1}</td>
                        <td>{workout.repsPerExercise}</td>
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
              <textarea name={`notes-${idx}`} placeholder="Notes" />
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
