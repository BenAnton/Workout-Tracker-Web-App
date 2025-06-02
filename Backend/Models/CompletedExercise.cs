using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WorkoutTracker.Models
{

    public class CompletedExercise
    {
        public int Id { get; set; }
        public int CompletedWorkoutId { get; set; }
        public string Title { get; set; }
        public string HeaviestWeight { get; set; }
        public string Notes { get; set; }

        public CompletedWorkout CompletedWorkout { get; set; }
        public List<ExerciseSet> Sets { get; set; }
    }
}