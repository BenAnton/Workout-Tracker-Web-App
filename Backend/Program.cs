using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using WorkoutTracker.Controllers;
using WorkoutTracker.Data;
using WorkoutTracker.Models;
using WorkoutTracker.Services;

var builder = WebApplication.CreateBuilder(args);

// Load JWT key from .env file
// DotEnv.Load();

builder.Configuration.AddEnvironmentVariables();

string? jwtKey = builder.Configuration["JWT__KEY"];

// Add PostgresSql context
builder.Services.AddDbContext<AppDbContext>(options =>
    options
        .UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
        .EnableSensitiveDataLogging()
        .LogTo(Console.WriteLine, LogLevel.Information)
);

// Use custom user model for identity management + store user info in PostgresSQL
builder
    .Services.AddIdentity<User, IdentityRole<int>>()
    .AddEntityFrameworkStores<AppDbContext>()
    .AddDefaultTokenProviders();

// Add authentication configs
builder
    .Services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddJwtBearer(options =>
    {
        options.RequireHttpsMetadata = false;
        options.SaveToken = true;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = "WorkoutTracker",
            ValidateAudience = true,
            ValidAudience = "WorkoutTrackerUser",
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(
                    "34234234234252534563647568679789675746364565654645645645646354"
                )
            ),
        };
    });



// // Configuration of cookies
// builder.Services.ConfigureApplicationCookie(options =>
// {
//     options.LoginPath = "/api/account/login";
//     options.LogoutPath = "/api/account/logout";
//     options.ExpireTimeSpan = TimeSpan.FromDays(7);
//     options.SlidingExpiration = true;

//     options.Events.OnRedirectToLogin = context =>
//     {
//         context.Response.StatusCode = StatusCodes.Status401Unauthorized;
//         return Task.CompletedTask;
//     };

//     options.Events.OnRedirectToAccessDenied = context =>
//     {
//         context.Response.StatusCode = StatusCodes.Status403Forbidden;
//         return Task.CompletedTask;
//     };
// });

// Add controllers and JSON options
builder
    .Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
        options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    });

// Add WGER api
builder.Services.AddScoped<WgerAPI>();
builder.Services.AddHttpClient();

// Enable CORS
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: MyAllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod();
        }
    );
});

// Swagger/OpenAPI
builder.Services.AddOpenApi();

var app = builder.Build();


// Adding the WGER api data
using (var scope = app.Services.CreateScope())
{
    var wgerapi = scope.ServiceProvider.GetRequiredService<WgerAPI>();
    await wgerapi.GetWgerAPI();
}

// Use swagger if in development
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// Apply migrations automatically on startup
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

    var retries = 5;
    var delay = TimeSpan.FromSeconds(5);

    for (int i = 0; i < retries; i++)
    {
        try
        {
            Console.WriteLine("Attempting DB Migration...");
            context.Database.Migrate();
            Console.WriteLine("Database migrations applied successfully.");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Attempt {i + 1} failed to apply migrations: {ex.Message}");
            if (i == retries - 1) throw;
            Thread.Sleep(delay);
        }
    }
}

Console.WriteLine("=== CONNECTION STRING DEBUG ===");
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
Console.WriteLine($"Connection String: {connectionString}");
Console.WriteLine("=== END DEBUG ===");

// Middleware
app.UseCors(MyAllowSpecificOrigins);
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();
