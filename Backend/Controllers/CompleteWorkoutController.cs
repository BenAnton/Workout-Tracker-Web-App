using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkoutTracker.Data;
using WorkoutTracker.Models;

namespace WorkoutTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompleteWorkoutsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CompleteWorkoutsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CompletedWorkout>>> GetCompletedWorkouts()
        {
            var workouts = await _context
                .CompletedWorkouts.Include(workouts => workouts.Exercises)
                .ThenInclude(e => e.Sets)
                .ToListAsync();

            return Ok(workouts);
        }

        [HttpPost]
        public async Task<ActionResult<CompletedWorkout>> PostCompletedWorkout(
            CompletedWorkout workout
        )
        {
            workout.DateCompleted = DateTime.SpecifyKind(workout.DateCompleted, DateTimeKind.Utc);

            _context.CompletedWorkouts.Add(workout);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCompletedWorkouts), new { id = workout.Id }, workout);
        }
    }
}
