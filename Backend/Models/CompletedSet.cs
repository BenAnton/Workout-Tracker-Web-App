using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WorkoutTracker.Models
{
    public class CompletedSet
    {
        public int Id { get; set; }
        public int CompletedExerciseId { get; set; }
        public int Reps { get; set; }
        public int Weight { get; set; }
        public CompletedExercise CompletedExercise { get; set; }
    }
}