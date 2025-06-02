using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WorkoutTracker.Models
{
    public class CompletedWorkout
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string WorkoutTitle { get; set; }
        public DateTime DateCompleted { get; set; }
        public int TotalReps { get; set; }
        public float TotalWeight { get; set; }
        public float AverageWeight { get; set; }
        public List<CompletedExercise> Exercises { get; set; }
    }
}