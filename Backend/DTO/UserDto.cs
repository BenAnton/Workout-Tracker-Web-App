namespace WorkoutTracker.DTO
{
    public class UserDto
    {

        public string? Username { get; set; }
        public string? PersonalQ { get; set; }
        public int Age { get; set; }
        public int Height { get; set; }
        public int Weight { get; set; }
        public float BodyfatPercentage { get; set; }
        public bool LoggedIn { get; set; }

    }
}