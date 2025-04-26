import React, { useState, useEffect } from "react";
import ExerciseCard from "./ExerciseCard";
import "./ExerciseFilter.css";
import ExerciseData from "../../Data/ExerciseData";
import AddExercise from "./AddExercise";

function ExerciseFilter() {
  const [exercises] = useState(ExerciseData);
  const [filteredExercises, setFilteredExercises] = useState(exercises);
  const [searchTerm, setSearchTerm] = useState("");
  const [equipmentFilter, setEquipmentFilter] = useState("");
  const [muscleFilter, setMuscleFilter] = useState("");

  const allEquipment = [
    ...new Set(exercises.flatMap((ex) => ex.equipment)),
  ].sort();
  const allMuscles = [...new Set(exercises.flatMap((ex) => ex.muscle))].sort();

  useEffect(() => {
    let result = exercises;

    if (searchTerm) {
      result = result.filter((exercise) =>
        exercise.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (equipmentFilter) {
      result = result.filter((exercise) =>
        exercise.equipment.includes(equipmentFilter)
      );
    }

    if (muscleFilter) {
      result = result.filter((exercise) =>
        exercise.muscle.includes(muscleFilter)
      );
    }

    setFilteredExercises(result);
  }, [searchTerm, equipmentFilter, muscleFilter, exercises]);

  return (
    <div className="Exercise-Filter-Cont">
      <div className="Filter-Control">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="Search-Input"
        />

        <select
          value={equipmentFilter}
          onChange={(e) => setEquipmentFilter(e.target.value)}
          className="Filter-Drop"
        >
          <option value="">All Equipmemt</option>
          {allEquipment.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={muscleFilter}
          onChange={(e) => setMuscleFilter(e.target.value)}
          className="Filter-Drop"
        >
          <option value="">All Muscles</option>
          {allMuscles.map((muscle) => (
            <option key={muscle} value={muscle}>
              {muscle}
            </option>
          ))}
        </select>
      </div>

      <p className="Results-Count">
        Showing {filteredExercises.length} of {exercises.length} exercises
      </p>

      <AddExercise />

      <div className="Exercise-Grid">
        {filteredExercises.length > 0 ? (
          filteredExercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))
        ) : (
          <p className="No-Results">No exercises match your filters.</p>
        )}
      </div>
    </div>
  );
}

export default ExerciseFilter;
