import React, { useState, useEffect } from "react";
import ExerciseCard from "./ExerciseCard";
import "./ExerciseFilter.css";
import AddExercise from "./AddExercise";

function ExerciseFilter() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredExercises, setFilteredExercises] = useState(exercises);
  const [searchTerm, setSearchTerm] = useState("");
  const [equipmentFilter, setEquipmentFilter] = useState("");
  const [muscleFilter, setMuscleFilter] = useState("");

  const handleDeleteExercise = (id) => {
    setExercises((prev) => prev.filter((ex) => ex.id !== id));
  };

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch("http://localhost:5282/api/exercises");
        if (!response) throw new Error("Failed to fetch exercises");

        const data = await response.json();
        setExercises(data);
        setFilteredExercises(data);
      } catch (error) {
        console.error("Error fetching exercises", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  const allEquipment = [
    ...new Set(exercises.flatMap((ex) => ex.equipment)),
  ].sort();
  const allMuscles = [...new Set(exercises.flatMap((ex) => ex.muscle))].sort();

  const handleExerciseAdded = (newExercise) => {
    setExercises((prevExercises) => [...prevExercises, newExercise]);
  };

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

  if (loading) return <p>Loading Exercises...</p>;

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

      <AddExercise
        exercisesObject={exercises}
        onExerciseAdded={handleExerciseAdded}
      />

      <div className="Exercise-Grid">
        {filteredExercises.length > 0 ? (
          filteredExercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              onDelete={handleDeleteExercise}
            />
          ))
        ) : (
          <p className="No-Results">No exercises match your filters.</p>
        )}
      </div>
    </div>
  );
}

export default ExerciseFilter;
