using System.Text.Json.Serialization;
using System.Text.Json;
using WorkoutTracker.Data;
using WorkoutTracker.Models;


namespace WorkoutTracker.Services
{

    public class WgerAPI
    {
        private readonly AppDbContext _context;
        private readonly HttpClient _httpClient;
        private readonly JsonSerializerOptions _jsonOptions;


        public WgerAPI(AppDbContext context, HttpClient httpClient)
        {
            _context = context;
            _httpClient = httpClient;

            _httpClient.DefaultRequestHeaders.Authorization =
            new System.Net.Http.Headers.AuthenticationHeaderValue("Token", "c50d8750670dbc33100a35e64c7e17d138e7b0db");

            _jsonOptions = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true,
                DefaultIgnoreCondition = System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingNull
            };
        }


        public async Task GetWgerAPI()
        {

            var exerciseAPIUrl = "https://wger.de/api/v2/exerciseinfo/?language=2&status=2";
            var allWgerExercises = new List<WgerExercise>();
            string nextPageUrl = exerciseAPIUrl;

            try
            {
                while (!string.IsNullOrEmpty(nextPageUrl))
                {
                    var response = await _httpClient.GetStringAsync(nextPageUrl);
                    var exerciseWrapper = JsonSerializer.Deserialize<ApiResponse<WgerExercise>>(response, _jsonOptions);

                    if (exerciseWrapper?.Results != null)
                    {
                        allWgerExercises.AddRange(exerciseWrapper.Results);
                        nextPageUrl = exerciseWrapper.Next;
                    }
                    else
                    {
                        break;
                    }

                }

                var exercises = ConvertToExercises(allWgerExercises);

                foreach (var exercise in exercises)
                {
                    var existingExercise = _context.Exercises.FirstOrDefault(e => e.Id == exercise.Id);
                    if (existingExercise == null)
                    {
                        _context.Exercises.Add(exercise);
                    }

                    else
                    {
                        _context.Entry(existingExercise).CurrentValues.SetValues(exercise);
                    }
                }

                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching exercises: {ex.Message}");
                if (ex.InnerException != null)
                {
                    System.Console.WriteLine($"Inner Exception: {ex.InnerException.Message}");
                }
                throw;
            }
        }
        private List<Exercise> ConvertToExercises(List<WgerExercise> wgerExercises)
        {
            var exercises = new List<Exercise>();

            foreach (var wgerExercise in wgerExercises)
            {
                var englishTranslation = wgerExercise.Translations?.FirstOrDefault(t => t.Language == 2);
                if (englishTranslation == null)
                {
                    continue;
                }

                var exercise = new Exercise
                {
                    Id = wgerExercise.Id,
                    Title = englishTranslation.Name,
                    Description = englishTranslation.Description,
                    Type = wgerExercise.Category?.Name ?? "Uncategorized",
                    ExerciseImg = wgerExercise.Images?.FirstOrDefault(i => i.IsMain)?.ImageUrl ?? "",
                    Equipment = wgerExercise.Equipment?.Select(e => e.Name).ToList() ?? new List<string>(),
                    Muscle = wgerExercise.Muscles?.Select(m => !string.IsNullOrEmpty(m.NameEn) ? m.NameEn : m.Name).ToList() ?? new List<string>()
                };

                if (wgerExercise.MusclesSecondary?.Any() == true)
                {
                    exercise.Muscle.AddRange(
                        wgerExercise.MusclesSecondary.Select(m => !string.IsNullOrEmpty(m.NameEn) ? m.NameEn : m.Name)
                    );
                }
                exercises.Add(exercise);
            }
            return exercises;

        }
    }
}

