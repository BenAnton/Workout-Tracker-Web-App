import React from "react";
import "./ExerciseHistoryData.css";
import PropTypes from "prop-types";


function ExerciseHistoryData({instance}) {
    function formatWeight(weight) {
        return Math.round(weight);
    }

    function formatVolume(volume) {
        return Math.round(volume);
    }

    const date = new Date(instance.dateCompleted);
    const displayDate = date.toLocaleDateString();

    return (
        <>
            <h3 className="Exercise-HD-Date">Date: {displayDate}</h3>
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
                {instance.sets.map((set, id) => (
                    <tr key={id}>
                        <td>{id + 1}</td>
                        <td>{formatWeight(set.weight)}kg</td>
                        <td>{set.reps}</td>
                        <td>{formatVolume(set.weight * set.reps)}kg</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {instance.notes && (
                <p className="Exercise-HD-Notes">Notes: {instance.notes}</p>
            )}
        </>
    );
}

export default ExerciseHistoryData;

ExerciseHistoryData.propTypes = {
    instance: PropTypes.object.isRequired,
}