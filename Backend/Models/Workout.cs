using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WorkoutTracker.Models
{
    public class Workout
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public int Duration { get; set; }
        public DateTime Date { get; set; }
        public List<string>? MusclesWorked { get; set; }

        // [JsonIgnore]
        public ICollection<WorkoutExercise>? Exercises { get; set; } =  new List<WorkoutExercise>();

        [Column("UserId")]
        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public User? User { get; set; }
    }
}
