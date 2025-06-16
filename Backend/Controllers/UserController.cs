using WorkoutTracker.DTO;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkoutTracker.Data;
using WorkoutTracker.Models;

[ApiController]
[Route("api/users")]

public class UserController : ControllerBase
{
    private readonly AppDbContext _context;

    public UserController(AppDbContext context)
    {
        _context = context;
    }



    [HttpGet]
    public async Task<ActionResult<IEnumerable<UserDto>>> GetUsers()
    {
        var users = await _context.Users.Select(u => new UserDto
        {
            Username = u.Username,
            PersonalQ = u.PersonalQ,
            Age = u.Age,
            Height = u.Height,
            Weight = u.Weight,
            BodyfatPercentage = u.BodyfatPercentage,
            LoggedIn = u.LoggedIn,

        }).ToListAsync();

        return Ok(users);
    }

    [HttpPost]
    public async Task<ActionResult<UserDto>> CreateUser([FromBody] CreateUserDto dto)
    {
        if (dto == null)
        {
            return BadRequest("User data is null.");
        }

        var user = new User
        {

            Username = dto.Username,
            PersonalQ = dto.PersonalQ,
            Email = dto.Email,
            Password = dto.Password,
            Age = dto.Age,
            Height = dto.Height,
            Weight = dto.Weight,
            BodyfatPercentage = dto.BodyfatPercentage,
            LoggedIn = false
        };

        _context.Users.Add(user);

        await _context.SaveChangesAsync();

        var resultDto = new UserDto
        {

            Username = user.Username,
            PersonalQ = user.PersonalQ,
            Age = user.Age,
            Height = user.Height,
            Weight = user.Weight,
            BodyfatPercentage = user.BodyfatPercentage,
            LoggedIn = user.LoggedIn
        };

        return CreatedAtAction(nameof(GetUsers), new { id = user.Id }, resultDto);
    }



}
