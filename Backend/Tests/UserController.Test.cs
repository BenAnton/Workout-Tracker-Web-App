using System.Collections.Generic;
using System.Linq;
using System.Threading;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using WorkoutTracker.Controllers;
using WorkoutTracker.Data;
using WorkoutTracker.DTO;
using WorkoutTracker.Models;
using Xunit;

namespace Tests;

public class UserControllerTests
{
    [Fact]
    public async Task CreateUser_Returns201_WhenUserIsValid()
    {
        var mockUserManager = GetMockUserManager();

        mockUserManager
            .Setup(x => x.CreateAsync(It.IsAny<User>(), It.IsAny<string>()))
            .ReturnsAsync(IdentityResult.Success);

        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseInMemoryDatabase(databaseName: "TestDb")
            .Options;
        var context = new AppDbContext(options);

        context.Users.RemoveRange(context.Users);
        await context.SaveChangesAsync();

        var controller = new UserController(context, mockUserManager.Object);

        var dto = new CreateUserDto
        {
            UserName = "testUser",
            Email = "TestUser@UserTest.com",
            Password = "TestUserPassword",
            Age = 100,
            Height = 170,
            Weight = 75,
            BodyfatPercentage = 15,
            PersonalQ = "Test Motivational Quote",
        };

        var result = await controller.CreateUser(dto);

        var created = Assert.IsType<CreatedAtActionResult>(result.Result);
        Assert.Equal(201, created.StatusCode);

        var returnedDto = Assert.IsType<UserDto>(created.Value);
        Assert.Equal(dto.UserName, returnedDto.Username);
    }

    private static Mock<UserManager<User>> GetMockUserManager()
    {
        var store = new Mock<IUserStore<User>>();
        return new Mock<UserManager<User>>(
            store.Object,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        );
    }
}
