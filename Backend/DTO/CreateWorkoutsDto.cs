namespace WorkoutTracker.Models
{
    public class CreateWorkoutsDto
    {
        public string? Title { get; set; }
        public string? Description { get; set; }
        public int Duration { get; set; }

        public List<string>? MusclesWorked { get; set; }
        public List<WorkoutExerciseDto>? Exercises { get; set; }
    }
}
