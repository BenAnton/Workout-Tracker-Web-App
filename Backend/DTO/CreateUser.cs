using System.Text.Json.Serialization;

namespace WorkoutTracker.DTO
{
    public class CreateUserDto
    {

        [JsonPropertyName("email")]
        public string Email { get; set; }
        [JsonPropertyName("password")]
        public string Password { get; set; }
        [JsonPropertyName("username")]
        public string UserName { get; set; }
        [JsonPropertyName("personalQ")]
        public string PersonalQ { get; set; }
        [JsonPropertyName("age")]
        public int Age { get; set; }
        [JsonPropertyName("height")]
        public int Height { get; set; }
        [JsonPropertyName("weight")]
        public int Weight { get; set; }
        [JsonPropertyName("bodyfatPercentage")]
        public float BodyfatPercentage { get; set; }
    }
}