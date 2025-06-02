namespace WorkoutTracker.Models
{

    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string PersonalQ { get; set; }
        public int Age { get; set; }
        public int Height { get; set; }
        public int Weight { get; set; }
        public float BodyfatPercentage { get; set; }
        public bool LoggedIn { get; set; }

        public List<CompletedWorkout> CompletedWorkouts { get; set; }
        public List<Workout> Workouts { get; set; }

        public List<Exercise> Exercises { get; set; }
    }
}