import "./ExerciseCard.css";
import EquipmentUsed from "./Equipment";
import MuscleWorked from "../WorkoutCard/MusclesWorked";

function ExerciseCard({ exercise }) {
  return (
    <>
      <div className="ExerciseCard">
        <img
          className="Exercise-Card-Img"
          src={exercise.exerciseimage}
          alt={exercise.title}
        ></img>
        <h3 className="Exercise-Card-Title">{exercise.title}</h3>
        <div className="Exercise-P-Cont">
          <div className="Stack-Group">
            <p>Type:</p>
            <p className="Exercise-Log-Type ExerciseP">{exercise.type}</p>
          </div>

          <div className="Stack-Group">
            <p>Equipment:</p>
            <div className="Workout-Equipment-Cont">
              {exercise.equipment.map((item) => (
                <EquipmentUsed key={item} Equipment={item} />
              ))}
            </div>
          </div>

          <div className="Stack-Group">
            <p>Muscles:</p>
            <div className="MuscleWorked-Cont">
              {exercise.muscle.map((muscle) => (
                <MuscleWorked key={muscle} Muscle={muscle} />
              ))}
            </div>
          </div>
        </div>

        <p className="Exercise-Description">{exercise.description}</p>
      </div>
    </>
  );
}

export default ExerciseCard;
