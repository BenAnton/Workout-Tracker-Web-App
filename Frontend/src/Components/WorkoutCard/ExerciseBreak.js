import "./ExerciseBreak.css";

function ExerciseBreak({ sets, reps, title, index }) {
  return (
    <div className="ExerciseBreak-Flex">
      <div className="ExerciseBreak-Content">Exercise: {index + 1}</div>
      <div className="ExerciseBreak-Content">{title}</div>
      <div className="ExerciseBreak-Content">
        {sets} sets x {reps} reps
      </div>
    </div>
  );
}

export default ExerciseBreak;
