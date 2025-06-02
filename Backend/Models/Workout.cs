namespace WorkoutTracker.Models
{

    public class Workout
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string WorkoutImg { get; set; }
        public int Duration { get; set; }
        public List<string> MusclesWorked { get; set; }
        public string Description { get; set; }
        public int SetsPerExercise { get; set; }
        public int RepsPerExercise { get; set; }

        public List<WorkoutExercise> Exercises { get; set; } = new();

    }
}