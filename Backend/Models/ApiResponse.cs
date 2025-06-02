using System.Text.Json.Serialization;

namespace WorkoutTracker.Models
{
    public class ApiResponse<T>
    {

        [JsonPropertyName("results")]
        public List<T> Results { get; set; }

        [JsonPropertyName("count")]
        public int Count { get; set; }

        [JsonPropertyName("next")]
        public string Next { get; set; }

        [JsonPropertyName("previous")]
        public string Previous { get; set; }

    }

    public class WgerExercise
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("uuid")]
        public string Uid { get; set; }

        [JsonPropertyName("category")]
        public Category Category { get; set; }

        [JsonPropertyName("muscles")]
        public List<Muscle> Muscles { get; set; }

        [JsonPropertyName("muscles_secondary")]
        public List<Muscle> MusclesSecondary { get; set; }

        [JsonPropertyName("equipment")]
        public List<Equipment> Equipment { get; set; }

        [JsonPropertyName("translations")]
        public List<Translation> Translations { get; set; }

        [JsonPropertyName("images")]
        public List<Image> Images { get; set; }
    }

    public class Category
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }
    }

    public class Muscle
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("name_en")]
        public string NameEn { get; set; }

        [JsonPropertyName("is_front")]
        public bool IsFront { get; set; }

        [JsonPropertyName("image_url_main")]
        public string ImageUrlMain { get; set; }

        [JsonPropertyName("image_url_secondary")]
        public string ImageUrlSecondary { get; set; }
    }

    public class Equipment
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }
    }

    public class Translation
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("description")]
        public string Description { get; set; }

        [JsonPropertyName("language")]
        public int Language { get; set; }
    }

    public class Image
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("uuid")]
        public string Uuid { get; set; }

        [JsonPropertyName("exercise_base")]
        public int ExerciseBase { get; set; }

        [JsonPropertyName("image")]
        public string ImageUrl { get; set; }

        [JsonPropertyName("is_main")]
        public bool IsMain { get; set; }
    }
}