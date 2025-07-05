using System.ComponentModel.DataAnnotations.Schema;

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

        [Column("userId")]
        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public User user { get; set; }
    }
}
