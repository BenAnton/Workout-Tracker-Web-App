import WorkoutHistoryCard from "../History/WorkoutHistoryCard";
import Quotes from "../../Data/MotivationalQuotes";
import "./WorkoutSummary.css";
import PropTypes from "prop-types";

function WorkoutSummary({
                            completedWorkout,
                        }) {
    let randomQuote = () => {
        let number = Math.floor(Math.random() * Quotes.length - 1);
        return Quotes[number].quote;
    };

    return (
        <>
            <div className="Summary-Title">WorkoutSummary</div>

            <p className="Summary-Quote">{randomQuote()}</p>
            <WorkoutHistoryCard workout={completedWorkout}/>
            <div className="Summary-Spacer"></div>
        </>
    );
}

export default WorkoutSummary;

WorkoutSummary.propTypes = {
    completedWorkout: PropTypes.object.isRequired,
}