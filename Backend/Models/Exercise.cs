using System.Reflection.Metadata.Ecma335;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;

namespace WorkoutTracker.Models
{

    public class Exercise
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }
        public string Title { get; set; }
        public string ExerciseImg { get; set; }
        public List<string> Equipment { get; set; } = new List<string>();
        public List<string> Muscle { get; set; } = new List<string>();
        public string Description { get; set; }
        public string? Type { get; set; }


        [JsonIgnore][ValidateNever] public List<WorkoutExercise> WorkoutExercises { get; set; }
    }
}