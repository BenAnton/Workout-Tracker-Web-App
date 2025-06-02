import "./StartWorkout.css";
import LegPress from "../../Assets/Images/LegPress.jpg";

function StartWorkout({ setActiveComponent }) {
  return (
    <>
      <div className="Start-Workout-Flex">
        <button
          onClick={() => setActiveComponent("select")}
          className="Start-Workout-Button"
        >
          Start Workout
        </button>

        <img className="Leg-Press-Img" src={LegPress} alt="leg press" />
      </div>
    </>
  );
}

export default StartWorkout;
