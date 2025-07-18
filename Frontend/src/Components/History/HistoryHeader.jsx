import "./HistoryHeader.css";
import PropTypes from "prop-types";

function HistoryHeader({setActiveTab, activeTab}) {


    const showExercises = () => {
        setActiveTab("Exercises");
    };

    const showWorkouts = () => {
        setActiveTab("Workouts");
    };

    return (


        <div className="History-Header-Flex">
            <button
                className={`History-Header-Button ${
                    activeTab === "Exercises" ? "Active-History-Header-Button" : ""
                }`}
                onClick={showExercises}
            >
                Exercises
            </button>
            <button
                className={`History-Header-Button ${
                    activeTab === "Workouts" ? "Active-History-Header-Button" : ""
                }`}
                onClick={showWorkouts}
            >
                Workouts
            </button>
        </div>

    );
}

export default HistoryHeader;

HistoryHeader.propTypes = {
    activeTab: PropTypes.string,
    setActiveTab: PropTypes.func.isRequired,
}