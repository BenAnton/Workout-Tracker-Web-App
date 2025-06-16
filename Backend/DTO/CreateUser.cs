namespace WorkoutTracker.DTO
{
    public class CreateUserDto
    {

        public string Email { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public string PersonalQ { get; set; }
        public int Age { get; set; }
        public int Height { get; set; }
        public int Weight { get; set; }
        public float BodyfatPercentage { get; set; }
    }
}