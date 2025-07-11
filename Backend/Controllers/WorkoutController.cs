using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkoutTracker.Data;
using WorkoutTracker.DTO;
using WorkoutTracker.Models;

namespace WorkoutTracker.Models;

[ApiController]
[Route("api/workouts")]
[Authorize]
public class WorkoutController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly UserManager<User> _userManager;

    public WorkoutController(AppDbContext context, UserManager<User> userManager)
    {
        _context = context;
        _userManager = userManager;
    }

    [HttpPost]
    public async Task<IActionResult> CreateWorkout([FromBody] CreateWorkoutsDto dto)
    {
        var username = User.Identity.Name;
        if (string.IsNullOrEmpty(username))
            return Unauthorized("Username is empty");

        var user = await _userManager.FindByNameAsync(username);
        if (user == null)
            return Unauthorized("User not found");

        Console.WriteLine($"Found User: {user.Id}, username: {user.UserName}");

        var workout = new Workout
        {
            Title = dto.Title,
            Description = dto.Description,
            Duration = dto.Duration,
            MusclesWorked = dto.MusclesWorked,
            Date = DateTime.UtcNow,
            UserId = user.Id,
            Exercises = dto
                .Exercises.Select(e => new WorkoutExercise
                {
                    Sets = e.Sets,
                    Reps = e.Reps,
                    Weight = e.Weight,
                    ExerciseName = e.ExerciseName,
                })
                .ToList(),
        };

        Console.WriteLine($"Workout UserId before save: {workout.UserId}");

        _context.Workouts.Add(workout);

        Console.WriteLine($"DEBUG: Workout.UserId = {workout.UserId}");
        Console.WriteLine(
            $"DEBUG: Workout.User = {(workout.User == null ? "null" : workout.User.Id.ToString())}"
        );

        await _context.SaveChangesAsync();

        return Ok(workout);
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Workout>>> GetAllWorkouts()
    {
        var username = User.Identity.Name;

        if (string.IsNullOrEmpty(username))
        {
            return Unauthorized("User not found");
        }

        var user = await _userManager.FindByNameAsync(username);

        if (user == null)
        {
            return Unauthorized("User not found");
        }

        var workouts = await _context
            .Workouts.Include(w => w.Exercises)
            .Where(w => w.UserId == user.Id)
            .Select(w => new Workout
            {
                Id = w.Id,
                Title = w.Title,
                Description = w.Description,
                Duration = w.Duration,
                Date = w.Date,
                MusclesWorked = w.MusclesWorked,
                Exercises = w
                    .Exercises.Select(e => new WorkoutExercise
                    {
                        Id = e.Id,
                        ExerciseName = e.ExerciseName,
                        Sets = e.Sets,
                        Reps = e.Reps,
                        Weight = e.Weight,
                    })
                    .ToList(),
            })
            .ToListAsync();

        Console.WriteLine($"Found {workouts.Count} workouts for user {user.Id}");
        foreach (var workout in workouts)
        {
            Console.WriteLine(
                $"Workout {workout.Id}: {workout.Title} has {workout.Exercises.Count} exercises"
            );
        }
        return Ok(workouts);
    }
}
