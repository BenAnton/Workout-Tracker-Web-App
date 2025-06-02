namespace WorkoutTracker.Models
{

    public class ExerciseSet
    {
        public int Id { get; set; }
        public int Reps { get; set; }
        public float Weight { get; set; }
        public int CompeletedExerciseId { get; set; }
        public CompletedExercise CompletedExercise { get; set; }
    }
}