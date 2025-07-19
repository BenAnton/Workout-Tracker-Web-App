import "./StartWorkout.css";
import LegPress from "../../Assets/Images/LegPress.jpg";
import PropTypes from "prop-types";

function StartWorkout({setActiveComponent}) {
    return (
        <>
            <div className="Start-Workout-Flex">
                <button
                    onClick={() => setActiveComponent("select")}
                    className="Start-Workout-Button"
                >
                    Start Workout
                </button>

                <img className="Leg-Press-Img" src={LegPress} alt="leg press"/>
            </div>
        </>
    );
}

export default StartWorkout;

StartWorkout.propTypes = {
    setActiveComponent: PropTypes.func.isRequired,
}