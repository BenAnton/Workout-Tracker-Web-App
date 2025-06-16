using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkoutTracker.Data;
using WorkoutTracker.Models;

[ApiController]
[Route("api/exercises")]

public class ExerciseController : ControllerBase
{
    private readonly AppDbContext _context;

    public ExerciseController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Exercise>>> GetExercises()
    {
        var exercises = await _context.Exercises.ToListAsync();
        return Ok(exercises);
    }

    [HttpPost]
    public async Task<ActionResult<Exercise>> CreateExercise([FromBody] Exercise exercise)
    {
        if (exercise == null)
        {
            return BadRequest("exercise data is null");
        }

        _context.Exercises.Add(exercise);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetExercises), new { id = exercise.Id }, exercise);
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult<Exercise>> DeleteExercise(int id)
    {
        try
        {
            var exerciseToDelete = await _context.Exercises.FindAsync(id);
            if (exerciseToDelete == null)
            {
                return NotFound();
            }

            _context.Exercises.Remove(exerciseToDelete);
            await _context.SaveChangesAsync();

            return Ok(exerciseToDelete);
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, "Error Deleting Data");
        }
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult<Exercise>> UpdateExercise(int id, [FromBody] Exercise updatedExercise)
    {
        if (updatedExercise == null || id != updatedExercise.Id)
        {
            return BadRequest("Exercise data invalid");
        }

        var existingExercise = await _context.Exercises.FindAsync(id);
        if (existingExercise == null)
        {
            return NotFound($"Exercise with ID {id} not found.");
        }

        existingExercise.Title = updatedExercise.Title;
        existingExercise.Description = updatedExercise.Description;


        try
        {
            await _context.SaveChangesAsync();
            return Ok(existingExercise);
        }
        catch (DbUpdateException)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, "Error updating data");
        }
    }

}