import ExerciseHistoryCard from "../Components/History/ExerciseHistoryCard";
import HistoryHeader from "../Components/History/HistoryHeader";

function HistoryPage() {
  return (
    <>
      <HistoryHeader />
      <div className="Exercise-Card-Flex">
        <ExerciseHistoryCard />
        <ExerciseHistoryCard />
        <ExerciseHistoryCard />
      </div>
    </>
  );
}

export default HistoryPage;
