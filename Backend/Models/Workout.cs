namespace WorkoutTracker.Models
{
    public class Workout
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Duration { get; set; }
        public DateTime Date { get; set; }
        public List<string> MusclesWorked { get; set; }

        public ICollection<WorkoutExercise> Exercises { get; set; }

        public string UserId { get; set; }
        public User user { get; set; }
    }
}
