namespace WorkoutTracker.Models
{
    public class WorkoutExerciseDto
    {
        public string? ExerciseName { get; set; }
        public int Sets { get; set; }
        public int Reps { get; set; }
        public int Weight { get; set; }
    }
}
