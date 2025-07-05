import "./WorkoutFilter.css";
import React, {useState, useEffect} from "react";
import WorkoutCard from "./WorkoutCard";
import WorkoutData from "../../Data/WorkoutData";
import AddWorkout from "./AddWorkout";

function WorkoutFilter() {
    const [workouts] = useState(WorkoutData);
    const [filteredWorkouts, setFilteredWorkouts] = useState(workouts);
    const [searchTerm, setSearchTerm] = useState("");
    const [durationFilter, setDurationFilter] = useState("");
    const [muscleFilter, setMuscleFilter] = useState("");

    const durationRanges = [
        {label: "0-15 minutes", min: 0, max: 15},
        {label: "15-30 minutes", min: 15, max: 30},
        {label: "30-45 minutes", min: 30, max: 45},
        {label: "45-60 minutes", min: 45, max: 60},
        {label: "Over 60 minutes", min: 60, max: Infinity},
    ];

    const allMuscles = [
        ...new Set(workouts.flatMap((workout) => workout.musclesWorked)),
    ].sort();

    useEffect(() => {
        let result = workouts;

        if (searchTerm) {
            result = result.filter((workout) =>
                workout.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (muscleFilter) {
            result = result.filter((workout) =>
                workout.musclesWorked.includes(muscleFilter)
            );
        }

        if (durationFilter) {
            const selectedRange = durationRanges.find(
                (range) => range.label === durationFilter
            );

            if (selectedRange.max === Infinity) {
                result = result.filter(
                    (workout) => workout.duration >= selectedRange.min
                );
            } else {
                result = result.filter(
                    (workout) =>
                        workout.duration >= selectedRange.min &&
                        workout.duration < selectedRange.max
                );
            }
        }

        setFilteredWorkouts(result);
    }, [searchTerm, muscleFilter, durationRanges, durationFilter, workouts]);

    return (
        <div className="Workout-Filter-Cont">
            <div className="Filter-Control">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="Search-Input"
                />

                <select
                    value={muscleFilter}
                    onChange={(e) => setMuscleFilter(e.target.value)}
                    className="Filter-Drop"
                >
                    <option value="">All Muscles</option>
                    {allMuscles.map((muscle, idx) => (
                        <option key={idx}>{muscle}</option>
                    ))}
                </select>

                <select
                    value={durationFilter}
                    onChange={(e) => setDurationFilter(e.target.value)}
                    className="Filter-Drop"
                >
                    <option value="">All Durations</option>
                    {durationRanges.map((range) => (
                        <option key={range.label} value={range.label}>
                            {range.label}
                        </option>
                    ))}
                </select>
            </div>

            <p className="Results-Count">
                Showing {filteredWorkouts.length} of {workouts.length} workouts
            </p>

            <AddWorkout/>

            <div className="Workout-Grid">
                {filteredWorkouts.length > 0 ? (
                    filteredWorkouts.map((workout) => (
                        <WorkoutCard key={workout.id} workout={workout}/>
                    ))
                ) : (
                    <p className="No-Results">No workouts match your filters</p>
                )}
            </div>
        </div>
    );
}

export default WorkoutFilter;
