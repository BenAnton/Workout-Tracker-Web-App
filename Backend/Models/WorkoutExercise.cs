namespace WorkoutTracker.Models
{
    public class WorkoutExercise
    {
        public int Id { get; set; }
        public int ExerciseName { get; set; }
        public int Sets { get; set; }
        public int Reps { get; set; }
        public int Weight { get; set; }

        public int WorkoutId { get; set; }
        public Workout Workout { get; set; }
    }
}
