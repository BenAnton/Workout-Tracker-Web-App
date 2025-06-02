using Microsoft.AspNetCore.Mvc;
using WorkoutTracker.Models;
using WorkoutTracker.Data;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

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


        // GET : CompletedWorkout
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CompletedWorkout>>> GetCompletedWorkouts()
        {
            var workouts = await _context.CompletedWorkouts
            .Include(workouts => workouts.Exercises).ThenInclude(e => e.Sets).ToListAsync();

            return Ok(workouts);
        }

        // POST : CompletedWorkouts
        [HttpPost]
        public async Task<ActionResult<CompletedWorkout>> PostCompletedWorkout(CompletedWorkout workout)
        {
            _context.CompletedWorkouts.Add(workout);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCompletedWorkouts), new { id = workout.Id }, workout);
        }
    }
}