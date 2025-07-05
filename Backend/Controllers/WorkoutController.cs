using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
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
        await _context.SaveChangesAsync();

        return Ok(workout);
    }
}
