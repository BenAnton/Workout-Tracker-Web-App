using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using WorkoutTracker.Models;

namespace WorkoutTracker.Data
{
    public class AppDbContext : IdentityDbContext<User, IdentityRole<int>, int>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }


        public DbSet<Workout> Workouts { get; set; }
        public DbSet<CompletedWorkout> CompletedWorkouts { get; set; }
        public DbSet<CompletedExercise> CompletedExercises { get; set; }
        public DbSet<CompletedSet> CompletedSets { get; set; }
        public DbSet<Exercise> Exercises { get; set; }
    }
}