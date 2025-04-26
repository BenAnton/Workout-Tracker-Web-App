import BenchPressImg from "../Assets/Images/BenchPress.jpg";

const ExerciseData = [
  {
    id: 1,
    title: "Incline Dumbbell Press",
    exerciseimage: BenchPressImg,
    equipment: ["Incline Bench", "Dumbbell"],
    muscle: ["Chest", "Shoulders"],
    description:
      "Press the dumbbells upward while lying on an incline bench to target the upper chest and shoulders.",
    type: "Compound",
  },
  {
    id: 2,
    title: "Goblet Squat",
    exerciseimage: BenchPressImg,
    equipment: ["Kettlebell"],
    muscle: ["Quads", "Glutes"],
    description:
      "Hold a kettlebell close to your chest and squat deeply to engage your lower body muscles.",
    type: "Compound",
  },
  {
    id: 3,
    title: "Barbell Deadlift",
    exerciseimage: BenchPressImg,
    equipment: ["Barbell"],
    muscle: ["Hamstrings", "Glutes", "Lats"],
    description:
      "Lift the barbell from the ground to a standing position using your legs, hips, and back.",
    type: "Compound",
  },
  {
    id: 4,
    title: "Russian Twists",
    exerciseimage: BenchPressImg,
    equipment: ["Gym mat"],
    muscle: ["Abs", "Obliques"],
    description:
      "Sit on the floor, lean back slightly, and twist your torso from side to side to target your abs.",
    type: "AMRAP",
  },
  {
    id: 5,
    title: "Pull-Up",
    exerciseimage: BenchPressImg,
    equipment: ["Pull-up bar"],
    muscle: ["Lats", "Biceps"],
    description:
      "Hang from the bar and pull your chin above it using your back and arm strength.",
    type: "Compound",
  },
  {
    id: 6,
    title: "Plank Hold",
    exerciseimage: BenchPressImg,
    equipment: ["Bodyweight", "Gym mat"],
    muscle: ["Abs", "Shoulders"],
    description:
      "Hold your body in a straight line with your forearms and toes touching the ground.",
    type: "Cardio",
  },
  {
    id: 7,
    title: "Swiss Ball Crunch",
    exerciseimage: BenchPressImg,
    equipment: ["Swiss Ball"],
    muscle: ["Abs"],
    description:
      "Perform crunches while lying on a Swiss ball for increased core engagement.",
    type: "Isolation",
  },
  {
    id: 8,
    title: "Seated SZ-Bar Curl",
    exerciseimage: BenchPressImg,
    equipment: ["SZ-Bar", "Bench"],
    muscle: ["Biceps"],
    description:
      "Sit on a bench and curl the SZ-bar upward to isolate the biceps.",
    type: "Isolation",
  },
  {
    id: 9,
    title: "Kettlebell Swing",
    exerciseimage: BenchPressImg,
    equipment: ["Kettlebell"],
    muscle: ["Glutes", "Hamstrings"],
    description:
      "Swing the kettlebell between your legs and up to chest height with explosive hip drive.",
    type: "Cardio",
  },
  {
    id: 10,
    title: "Flat Bench Press",
    exerciseimage: BenchPressImg,
    equipment: ["Barbell", "Bench"],
    muscle: ["Chest", "Triceps"],
    description:
      "Lower the barbell to your chest and press it back up while lying flat on a bench.",
    type: "Compound",
  },
  {
    id: 11,
    title: "Bodyweight Lunges",
    exerciseimage: BenchPressImg,
    equipment: ["Bodyweight"],
    muscle: ["Quads", "Glutes", "Calves"],
    description:
      "Step forward into a lunge and push back to the starting position without any weights.",
    type: "Cardio",
  },
  {
    id: 12,
    title: "Overhead Shoulder Press",
    exerciseimage: BenchPressImg,
    equipment: ["Dumbbell"],
    muscle: ["Shoulders", "Triceps"],
    description:
      "Lift the dumbbells from shoulder level to overhead while standing or seated.",
    type: "Compound",
  },
  {
    id: 13,
    title: "Calf Raises",
    exerciseimage: BenchPressImg,
    equipment: ["Dumbbell"],
    muscle: ["Calves"],
    description:
      "Stand tall and lift your heels off the ground to engage your calf muscles.",
    type: "Isolation",
  },
  {
    id: 14,
    title: "Bent-Over Row",
    exerciseimage: BenchPressImg,
    equipment: ["Barbell"],
    muscle: ["Lats", "Biceps"],
    description:
      "Bend at the waist and row the barbell toward your torso to strengthen your back.",
    type: "Compound",
  },
  {
    id: 15,
    title: "Mountain Climbers",
    exerciseimage: BenchPressImg,
    equipment: ["Gym mat"],
    muscle: ["Abs", "Shoulders"],
    description:
      "In a plank position, rapidly alternate pulling knees toward your chest.",
    type: "AMRAP",
  },
  {
    id: 16,
    title: "SZ-Bar Skullcrushers",
    exerciseimage: BenchPressImg,
    equipment: ["SZ-Bar", "Bench"],
    muscle: ["Triceps"],
    description:
      "Lie on the bench and lower the SZ-bar to your forehead, then extend arms to lockout.",
    type: "Isolation",
  },
  {
    id: 17,
    title: "Jump Squats",
    exerciseimage: BenchPressImg,
    equipment: ["Bodyweight"],
    muscle: ["Quads", "Glutes", "Calves"],
    description:
      "Squat and jump explosively, landing softly and repeating quickly.",
    type: "Cardio",
  },
  {
    id: 18,
    title: "Dumbbell Chest Fly",
    exerciseimage: BenchPressImg,
    equipment: ["Dumbbell", "Bench"],
    muscle: ["Chest"],
    description:
      "Open your arms wide with dumbbells in hand, then bring them together over your chest.",
    type: "Isolation",
  },
  {
    id: 19,
    title: "Romanian Deadlift",
    exerciseimage: BenchPressImg,
    equipment: ["Barbell"],
    muscle: ["Hamstrings", "Glutes"],
    description:
      "With slight knee bend, lower the barbell while keeping your back flat, then return up.",
    type: "Compound",
  },
  {
    id: 20,
    title: "Push-Ups",
    exerciseimage: BenchPressImg,
    equipment: ["Bodyweight"],
    muscle: ["Chest", "Triceps", "Abs"],
    description:
      "Lower and raise your body using arm and chest strength while maintaining a plank.",
    type: "AMRAP",
  },
];

export default ExerciseData;
