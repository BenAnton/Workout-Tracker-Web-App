using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WorkoutTracker.Models
{
    public class CompletedExercise
    {
        public int Id { get; set; }
        public int CompletedWorkoutId { get; set; }
        public string? Title { get; set; }
        public string? HeaviestWeight { get; set; }
        public string? Notes { get; set; }

        [JsonIgnore]
        public CompletedWorkout? CompletedWorkout { get; set; }

        public List<ExerciseSet> Sets { get; set; } = new List<ExerciseSet>();
    }
}
