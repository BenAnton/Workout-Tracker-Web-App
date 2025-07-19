import PropTypes from "prop-types";

function ExerciseDataTable({exercise}) {
    const calculateVolume = (weight, reps) => {
        return Math.round(weight * reps);
    };

    function formatWeight(weight) {
        return Math.round(weight);
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Set</th>
                <th>Weight</th>
                <th>Reps</th>
                <th>Volume</th>
            </tr>
            </thead>
            <tbody>
            {exercise.sets.map((set, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{formatWeight(set.weight)}kg</td>
                    <td>{set.reps}</td>
                    <td>{calculateVolume(set.weight, set.reps)}kg</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default ExerciseDataTable;

ExerciseDataTable.propTypes = {
    exercise: PropTypes.object.isRequired,
}