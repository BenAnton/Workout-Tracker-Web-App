import "./ExerciseCard.css";
import EquipmentUsed from "./Equipment";
import MuscleWorked from "../WorkoutCard/MusclesWorked";
import defaultImg from "../../Assets/Images/defaultExImg.webp";

function ExerciseCard({ exercise }) {
  console.log(exercise);

  return (
    <>
      <div className="ExerciseCard">
        <img
          className="Exercise-Card-Img"
          src={exercise.exerciseImg || defaultImg}
          alt={exercise.title}
        ></img>
        <h3 className="Exercise-Card-Title">{exercise.title}</h3>
        <div className="Exercise-P-Cont">
          <div className="Stack-Group">
            <p>Equipment:</p>
            <div className="Workout-Equipment-Cont">
              {(exercise.equipment.length > 0
                ? exercise.equipment
                : ["None Listed"]
              ).map((item) => (
                <EquipmentUsed key={item} Equipment={item} />
              ))}
            </div>
          </div>

          <div className="Stack-Group">
            <p>Muscles:</p>
            <div className="MuscleWorked-Cont">
              {(exercise.muscle.length > 0
                ? exercise.muscle
                : ["None Listed"]
              ).map((muscle) => (
                <MuscleWorked key={muscle} Muscle={muscle} />
              ))}
            </div>
          </div>
        </div>

        <div className="Exercise-Description">
          {/<[a-z][\s\S]*>/i.test(exercise.description) ? (
            <div dangerouslySetInnerHTML={{ __html: exercise.description }} />
          ) : (
            <p>
              {exercise.description || "Exercise Description Not Available"}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ExerciseCard;
