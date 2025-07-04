using WorkoutTracker.DTO;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkoutTracker.Data;
using WorkoutTracker.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;

[ApiController]
[Route("api/users")]

public class UserController : ControllerBase
{

    private readonly UserManager<User> _userManager;
    private readonly AppDbContext _context;

    public UserController(AppDbContext context, UserManager<User> userManager)
    {
        _context = context;
        _userManager = userManager;
    }



    [HttpGet]
    public async Task<ActionResult<IEnumerable<UserDto>>> GetUsers()
    {
        var users = await _context.Users.Select(u => new UserDto
        {
            Username = u.UserName,
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

            UserName = dto.UserName,
            Email = dto.Email,
            PersonalQ = dto.PersonalQ,
            Age = dto.Age,
            Height = dto.Height,
            Weight = dto.Weight,
            BodyfatPercentage = dto.BodyfatPercentage,
            LoggedIn = false
        };

        var result = await _userManager.CreateAsync(user, dto.Password);

        if (!result.Succeeded)
        {
            return BadRequest(result.Errors);
        }

        var resultDto = new UserDto
        {

            Username = user.UserName,
            PersonalQ = user.PersonalQ,
            Age = user.Age,
            Height = user.Height,
            Weight = user.Weight,
            BodyfatPercentage = user.BodyfatPercentage,
            LoggedIn = user.LoggedIn
        };

        return CreatedAtAction(nameof(GetUsers), new { id = user.Id }, resultDto);
    }


    [HttpGet("me")]
    [Authorize]
    public async Task<ActionResult<UserDto>> GetCurrentUser()
    {
        var username = User.Identity.Name;

        if (string.IsNullOrEmpty(username))
        {
            return Unauthorized("User Identity not found");
        }

        var user = await _context.Users
            .Where(u => u.UserName == username)
            .Select(u => new UserDto
            {
                Username = u.UserName,
                PersonalQ = u.PersonalQ,
                Age = u.Age,
                Height = u.Height,
                Weight = u.Weight,
                BodyfatPercentage = u.BodyfatPercentage,
                LoggedIn = u.LoggedIn
            })
            .FirstOrDefaultAsync();

        if (user == null)
        {
            return NotFound("User not found");
        }
        
        return Ok(user);
    }

}
