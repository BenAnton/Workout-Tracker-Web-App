using System.Text.Json.Serialization;

namespace WorkoutTracker.Models
{
    public class WorkoutExercise
    {
        public int Id { get; set; }
        public string ExerciseName { get; set; }
        public int Sets { get; set; }
        public int Reps { get; set; }
        public int Weight { get; set; }

        public int WorkoutId { get; set; }

        [JsonIgnore]
        public Workout Workout { get; set; }
    }
}
