import WorkoutHistoryCard from "../History/WorkoutHistoryCard";
import Quotes from "../../Data/MotivationalQuotes";
import "./WorkoutSummary.css";

function WorkoutSummary({
  setActiveComponent,
  setCompletedWorkout,
  completedWorkout,
}) {
  let randomQuote = () => {
    let number = Math.floor(Math.random() * Quotes.length - 1);
    return Quotes[number].quote;
  };

  return (
    <>
      <div className="Summary-Title">WorkoutSummary</div>

      <p className="Summary-Quote">"{randomQuote()}"</p>
      <WorkoutHistoryCard workout={completedWorkout} />
      <div className="Summary-Spacer"></div>
    </>
  );
}
export default WorkoutSummary;
