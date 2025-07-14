using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkoutTracker.Controllers;
using WorkoutTracker.Data;
using WorkoutTracker.Models;
using Xunit;

namespace Tests;

public class CompleteWorkoutControllerTests
{
    private AppDbContext GetInMemoryDbContext()
    {
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase(Guid.NewGuid().ToString())
            .Options;

        return new AppDbContext(options);
    }

    [Fact]
    public async Task GetCompletedWorkouts_ReturnsListOfCompletedWorkouts()
    {
        using var context = GetInMemoryDbContext();
        var controller = new CompleteWorkoutsController(context);

        var completedWorkout = new CompletedWorkout
        {
            DateCompleted = DateTime.UtcNow,
            WorkoutTitle = "Test-Workout-Title",
            UserId = 100,
            Id = 1,
            TotalReps = 100,
            TotalWeight = 1000,
            AverageWeight = 50,
            Exercises = new List<CompletedExercise>
            {
                new CompletedExercise
                {
                    Title = "Bench Press",
                    HeaviestWeight = "100",
                    Notes = "Test Notes",
                    Sets = new List<ExerciseSet>
                    {
                        new ExerciseSet { Reps = 10, Weight = 100 },
                        new ExerciseSet { Reps = 15, Weight = 75 },
                    },
                },
            },
        };

        context.CompletedWorkouts.Add(completedWorkout);
        await context.SaveChangesAsync();

        var result = await controller.GetCompletedWorkouts();

        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        var workouts = Assert.IsAssignableFrom<IEnumerable<CompletedWorkout>>(okResult.Value);

        var workoutList = new List<CompletedWorkout>(workouts);
        Assert.Single(workoutList);
        Assert.Single(workoutList[0].Exercises);
        Assert.Equal(2, workoutList[0].Exercises[0].Sets.Count);
    }

    [Fact]
    public async Task PostCompletedWorkout_ReturnsCreatedResult()
    {
        using var context = GetInMemoryDbContext();
        var controller = new CompleteWorkoutsController(context);

        var newWorkout = new CompletedWorkout
        {
            DateCompleted = DateTime.UtcNow,
            WorkoutTitle = "Test-Workout-Title",
            UserId = 100,
            Id = 1,
            TotalReps = 100,
            TotalWeight = 1000,
            AverageWeight = 50,
            Exercises = new List<CompletedExercise>
            {
                new CompletedExercise
                {
                    Title = "Squat",
                    HeaviestWeight = "100",
                    Notes = "Test Notes",
                    Sets = new List<ExerciseSet>
                    {
                        new ExerciseSet { Reps = 5, Weight = 200 },
                    },
                },
            },
        };

        var result = await controller.PostCompletedWorkout(newWorkout);

        var created = Assert.IsType<CreatedAtActionResult>(result.Result);
        var returnedWorkout = Assert.IsType<CompletedWorkout>(created.Value);

        Assert.Equal("Squat", returnedWorkout.Exercises[0].Title);
        Assert.Single(returnedWorkout.Exercises[0].Sets);
        Assert.Equal(200, returnedWorkout.Exercises[0].Sets[0].Weight);
    }
}
