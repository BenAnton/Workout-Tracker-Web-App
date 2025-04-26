import "./ExerciseHistoryCard.css";

function ExerciseHistoryCard() {
  return (
    <>
      <div className="Exercise-History-Card">
        <div className="Exercise-History-Flex">
          <div className="Exercise-History-Horizontal-Flex">
            <h3>(Bench Press)</h3>
            <h3>(04/05/1987)</h3>
          </div>
        </div>

        <table>
          <tr>
            <th>Set</th>
            <th>Weight</th>
            <th>Reps</th>
            <th>Volume</th>
          </tr>

          <tr>
            <td>1</td>
            <td>100kg</td>
            <td>10</td>
            <td>10</td>
          </tr>
          <tr>
            <td>1</td>
            <td>100kg</td>
            <td>10</td>
            <td>10</td>
          </tr>
          <tr>
            <td>1</td>
            <td>100kg</td>
            <td>10</td>
            <td>10</td>
          </tr>
          <tr>
            <td>1</td>
            <td>100kg</td>
            <td>10</td>
            <td>10</td>
          </tr>
          <tr>
            <td>1</td>
            <td>100kg</td>
            <td>10</td>
            <td>10</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default ExerciseHistoryCard;
