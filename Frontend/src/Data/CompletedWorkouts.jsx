const completedWorkouts = [
  {
    id: 1,
    workoutTitle: "Push Day",
    dateCompleted: "2025-01-03",
    totalReps: 61,
    totalWeight: 1330.1,
    averageWeight: 21.8,
    exercises: [
      {
        title: "Incline Dumbbell Press",
        heaviestWeight: 28.6,
        sets: [
          {
            reps: 9,
            weight: 23.3,
          },
          {
            reps: 8,
            weight: 28.6,
          },
          {
            reps: 12,
            weight: 22.7,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
      {
        title: "Dumbbell Bench Press",
        heaviestWeight: 21.8,
        sets: [
          {
            reps: 8,
            weight: 18.0,
          },
          {
            reps: 12,
            weight: 21.8,
          },
          {
            reps: 12,
            weight: 17.8,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
    ],
  },
  {
    id: 2,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-01-05",
    totalReps: 58,
    totalWeight: 2032.0,
    averageWeight: 35.03,
    exercises: [
      {
        title: "Face Pull",
        heaviestWeight: 29.5,
        sets: [
          {
            reps: 8,
            weight: 29.5,
          },
          {
            reps: 9,
            weight: 28.9,
          },
          {
            reps: 10,
            weight: 24.7,
          },
        ],
        notes: "Solid tempo, good control.",
      },
      {
        title: "Dumbbell Curl",
        heaviestWeight: 45.0,
        sets: [
          {
            reps: 10,
            weight: 40.0,
          },
          {
            reps: 11,
            weight: 39.9,
          },
          {
            reps: 10,
            weight: 45.0,
          },
        ],
        notes: "Felt strong today.",
      },
    ],
  },
  {
    id: 3,
    workoutTitle: "Full Body",
    dateCompleted: "2025-01-07",
    totalReps: 57,
    totalWeight: 1361.5,
    averageWeight: 23.89,
    exercises: [
      {
        title: "Deadlift",
        heaviestWeight: 25.8,
        sets: [
          {
            reps: 10,
            weight: 25.3,
          },
          {
            reps: 12,
            weight: 25.8,
          },
          {
            reps: 10,
            weight: 22.7,
          },
        ],
        notes: "Struggled on last set.",
      },
      {
        title: "Push Press",
        heaviestWeight: 24.7,
        sets: [
          {
            reps: 9,
            weight: 23.9,
          },
          {
            reps: 8,
            weight: 24.7,
          },
          {
            reps: 8,
            weight: 19.9,
          },
        ],
        notes: "Core was really engaged today.",
      },
    ],
  },
  {
    id: 4,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-01-09",
    totalReps: 60,
    totalWeight: 1582.2,
    averageWeight: 26.37,
    exercises: [
      {
        title: "Walking Lunges",
        heaviestWeight: 30.9,
        sets: [
          {
            reps: 10,
            weight: 30.9,
          },
          {
            reps: 8,
            weight: 30.0,
          },
          {
            reps: 9,
            weight: 29.2,
          },
        ],
        notes: "Solid tempo, good control.",
      },
      {
        title: "Calf Raise",
        heaviestWeight: 27.5,
        sets: [
          {
            reps: 11,
            weight: 21.8,
          },
          {
            reps: 12,
            weight: 21.3,
          },
          {
            reps: 10,
            weight: 27.5,
          },
        ],
        notes: "Felt strong today.",
      },
    ],
  },
  {
    id: 5,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-01-11",
    totalReps: 62,
    totalWeight: 1793.9,
    averageWeight: 28.93,
    exercises: [
      {
        title: "Barbell Row",
        heaviestWeight: 33.8,
        sets: [
          {
            reps: 8,
            weight: 27.1,
          },
          {
            reps: 12,
            weight: 33.8,
          },
          {
            reps: 10,
            weight: 27.2,
          },
        ],
        notes: "Core was really engaged today.",
      },
      {
        title: "Lat Pulldown",
        heaviestWeight: 30.3,
        sets: [
          {
            reps: 11,
            weight: 26.3,
          },
          {
            reps: 9,
            weight: 27.4,
          },
          {
            reps: 12,
            weight: 30.3,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
    ],
  },
  {
    id: 6,
    workoutTitle: "Full Body",
    dateCompleted: "2025-01-13",
    totalReps: 58,
    totalWeight: 2431.5,
    averageWeight: 41.92,
    exercises: [
      {
        title: "Chin-Up",
        heaviestWeight: 47.5,
        sets: [
          {
            reps: 9,
            weight: 45.0,
          },
          {
            reps: 8,
            weight: 47.5,
          },
          {
            reps: 8,
            weight: 41.5,
          },
        ],
        notes: "Form improving.",
      },
      {
        title: "Deadlift",
        heaviestWeight: 40.8,
        sets: [
          {
            reps: 11,
            weight: 40.8,
          },
          {
            reps: 11,
            weight: 38.6,
          },
          {
            reps: 11,
            weight: 40.1,
          },
        ],
        notes: "Felt strong today.",
      },
    ],
  },
  {
    id: 7,
    workoutTitle: "Push Day",
    dateCompleted: "2025-01-15",
    totalReps: 61,
    totalWeight: 1927.3,
    averageWeight: 31.6,
    exercises: [
      {
        title: "Dumbbell Bench Press",
        heaviestWeight: 33.2,
        sets: [
          {
            reps: 10,
            weight: 27.9,
          },
          {
            reps: 11,
            weight: 23.5,
          },
          {
            reps: 10,
            weight: 33.2,
          },
        ],
        notes: "Form improving.",
      },
      {
        title: "Dips",
        heaviestWeight: 36.4,
        sets: [
          {
            reps: 8,
            weight: 36.4,
          },
          {
            reps: 10,
            weight: 36.1,
          },
          {
            reps: 12,
            weight: 33.8,
          },
        ],
        notes: "Form improving.",
      },
    ],
  },
  {
    id: 8,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-01-17",
    totalReps: 59,
    totalWeight: 2508.9,
    averageWeight: 42.52,
    exercises: [
      {
        title: "Walking Lunges",
        heaviestWeight: 48.0,
        sets: [
          {
            reps: 12,
            weight: 48.0,
          },
          {
            reps: 12,
            weight: 42.1,
          },
          {
            reps: 8,
            weight: 40.0,
          },
        ],
        notes: "Great pump!",
      },
      {
        title: "Leg Curl",
        heaviestWeight: 45.7,
        sets: [
          {
            reps: 10,
            weight: 39.4,
          },
          {
            reps: 9,
            weight: 45.7,
          },
          {
            reps: 8,
            weight: 37.8,
          },
        ],
        notes: "Core was really engaged today.",
      },
    ],
  },
  {
    id: 9,
    workoutTitle: "Push Day",
    dateCompleted: "2025-01-19",
    totalReps: 68,
    totalWeight: 2622.1,
    averageWeight: 38.56,
    exercises: [
      {
        title: "Overhead Press",
        heaviestWeight: 41.1,
        sets: [
          {
            reps: 12,
            weight: 33.1,
          },
          {
            reps: 12,
            weight: 40.2,
          },
          {
            reps: 11,
            weight: 41.1,
          },
        ],
        notes: "Solid tempo, good control.",
      },
      {
        title: "Incline Dumbbell Press",
        heaviestWeight: 42.8,
        sets: [
          {
            reps: 11,
            weight: 42.8,
          },
          {
            reps: 10,
            weight: 37.2,
          },
          {
            reps: 12,
            weight: 37.3,
          },
        ],
        notes: "Solid tempo, good control.",
      },
    ],
  },
  {
    id: 10,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-01-21",
    totalReps: 56,
    totalWeight: 1638.3,
    averageWeight: 29.26,
    exercises: [
      {
        title: "Barbell Row",
        heaviestWeight: 17.8,
        sets: [
          {
            reps: 12,
            weight: 17.8,
          },
          {
            reps: 9,
            weight: 15.6,
          },
          {
            reps: 8,
            weight: 17.8,
          },
        ],
        notes: "Felt strong today.",
      },
      {
        title: "Lat Pulldown",
        heaviestWeight: 43.2,
        sets: [
          {
            reps: 8,
            weight: 41.6,
          },
          {
            reps: 10,
            weight: 43.2,
          },
          {
            reps: 9,
            weight: 41.9,
          },
        ],
        notes: "Core was really engaged today.",
      },
    ],
  },
  {
    id: 11,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-01-23",
    totalReps: 55,
    totalWeight: 1695.2,
    averageWeight: 30.82,
    exercises: [
      {
        title: "Face Pull",
        heaviestWeight: 28.4,
        sets: [
          {
            reps: 8,
            weight: 26.4,
          },
          {
            reps: 10,
            weight: 24.0,
          },
          {
            reps: 11,
            weight: 28.4,
          },
        ],
        notes: "Felt strong today.",
      },
      {
        title: "Lat Pulldown",
        heaviestWeight: 39.8,
        sets: [
          {
            reps: 8,
            weight: 32.4,
          },
          {
            reps: 10,
            weight: 39.8,
          },
          {
            reps: 8,
            weight: 34.3,
          },
        ],
        notes: "Solid tempo, good control.",
      },
    ],
  },
  {
    id: 12,
    workoutTitle: "Full Body",
    dateCompleted: "2025-01-25",
    totalReps: 62,
    totalWeight: 2064.6,
    averageWeight: 33.3,
    exercises: [
      {
        title: "Push Press",
        heaviestWeight: 24.0,
        sets: [
          {
            reps: 11,
            weight: 22.1,
          },
          {
            reps: 8,
            weight: 24.0,
          },
          {
            reps: 12,
            weight: 20.6,
          },
        ],
        notes: "Felt strong today.",
      },
      {
        title: "Goblet Squat",
        heaviestWeight: 48.2,
        sets: [
          {
            reps: 9,
            weight: 40.9,
          },
          {
            reps: 11,
            weight: 44.0,
          },
          {
            reps: 11,
            weight: 48.2,
          },
        ],
        notes: "Form improving.",
      },
    ],
  },
  {
    id: 13,
    workoutTitle: "Full Body",
    dateCompleted: "2025-01-27",
    totalReps: 64,
    totalWeight: 1535.9,
    averageWeight: 24.0,
    exercises: [
      {
        title: "Deadlift",
        heaviestWeight: 28.2,
        sets: [
          {
            reps: 11,
            weight: 24.5,
          },
          {
            reps: 12,
            weight: 28.2,
          },
          {
            reps: 11,
            weight: 23.2,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
      {
        title: "Push Press",
        heaviestWeight: 26.2,
        sets: [
          {
            reps: 8,
            weight: 26.2,
          },
          {
            reps: 12,
            weight: 21.1,
          },
          {
            reps: 10,
            weight: 21.0,
          },
        ],
        notes: "Core was really engaged today.",
      },
    ],
  },
  {
    id: 14,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-01-29",
    totalReps: 57,
    totalWeight: 1636.7,
    averageWeight: 28.71,
    exercises: [
      {
        title: "Barbell Row",
        heaviestWeight: 23.8,
        sets: [
          {
            reps: 9,
            weight: 17.7,
          },
          {
            reps: 8,
            weight: 23.8,
          },
          {
            reps: 9,
            weight: 21.0,
          },
        ],
        notes: "Solid tempo, good control.",
      },
      {
        title: "Dumbbell Curl",
        heaviestWeight: 36.0,
        sets: [
          {
            reps: 8,
            weight: 35.7,
          },
          {
            reps: 11,
            weight: 36.0,
          },
          {
            reps: 12,
            weight: 34.7,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
    ],
  },
  {
    id: 15,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-01-31",
    totalReps: 53,
    totalWeight: 1328.9,
    averageWeight: 25.07,
    exercises: [
      {
        title: "Dumbbell Curl",
        heaviestWeight: 28.4,
        sets: [
          {
            reps: 9,
            weight: 28.4,
          },
          {
            reps: 10,
            weight: 26.2,
          },
          {
            reps: 8,
            weight: 21.7,
          },
        ],
        notes: "Struggled on last set.",
      },
      {
        title: "Barbell Row",
        heaviestWeight: 26.2,
        sets: [
          {
            reps: 9,
            weight: 21.9,
          },
          {
            reps: 9,
            weight: 26.2,
          },
          {
            reps: 8,
            weight: 25.6,
          },
        ],
        notes: "Great pump!",
      },
    ],
  },
  {
    id: 16,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-02-02",
    totalReps: 60,
    totalWeight: 2424.3,
    averageWeight: 40.41,
    exercises: [
      {
        title: "Walking Lunges",
        heaviestWeight: 42.0,
        sets: [
          {
            reps: 10,
            weight: 42.0,
          },
          {
            reps: 12,
            weight: 35.9,
          },
          {
            reps: 12,
            weight: 38.8,
          },
        ],
        notes: "Struggled on last set.",
      },
      {
        title: "Calf Raise",
        heaviestWeight: 45.9,
        sets: [
          {
            reps: 9,
            weight: 41.1,
          },
          {
            reps: 8,
            weight: 45.9,
          },
          {
            reps: 9,
            weight: 41.2,
          },
        ],
        notes: "Solid tempo, good control.",
      },
    ],
  },
  {
    id: 17,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-02-04",
    totalReps: 55,
    totalWeight: 2050.7,
    averageWeight: 37.29,
    exercises: [
      {
        title: "Walking Lunges",
        heaviestWeight: 39.9,
        sets: [
          {
            reps: 10,
            weight: 35.9,
          },
          {
            reps: 10,
            weight: 39.9,
          },
          {
            reps: 8,
            weight: 31.8,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
      {
        title: "Leg Curl",
        heaviestWeight: 42.1,
        sets: [
          {
            reps: 8,
            weight: 35.8,
          },
          {
            reps: 9,
            weight: 42.1,
          },
          {
            reps: 10,
            weight: 37.3,
          },
        ],
        notes: "Core was really engaged today.",
      },
    ],
  },
  {
    id: 18,
    workoutTitle: "Full Body",
    dateCompleted: "2025-02-06",
    totalReps: 53,
    totalWeight: 1347.2,
    averageWeight: 25.42,
    exercises: [
      {
        title: "Deadlift",
        heaviestWeight: 22.7,
        sets: [
          {
            reps: 9,
            weight: 22.3,
          },
          {
            reps: 10,
            weight: 22.7,
          },
          {
            reps: 9,
            weight: 21.2,
          },
        ],
        notes: "Felt strong today.",
      },
      {
        title: "Goblet Squat",
        heaviestWeight: 31.7,
        sets: [
          {
            reps: 8,
            weight: 31.7,
          },
          {
            reps: 9,
            weight: 29.5,
          },
          {
            reps: 8,
            weight: 26.2,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
    ],
  },
  {
    id: 19,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-02-08",
    totalReps: 52,
    totalWeight: 2234.7,
    averageWeight: 42.98,
    exercises: [
      {
        title: "Lat Pulldown",
        heaviestWeight: 48.2,
        sets: [
          {
            reps: 9,
            weight: 48.2,
          },
          {
            reps: 8,
            weight: 41.2,
          },
          {
            reps: 10,
            weight: 47.2,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
      {
        title: "Barbell Row",
        heaviestWeight: 43.6,
        sets: [
          {
            reps: 9,
            weight: 37.7,
          },
          {
            reps: 8,
            weight: 38.9,
          },
          {
            reps: 8,
            weight: 43.6,
          },
        ],
        notes: "Solid tempo, good control.",
      },
    ],
  },
  {
    id: 20,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-02-10",
    totalReps: 60,
    totalWeight: 1634.5,
    averageWeight: 27.24,
    exercises: [
      {
        title: "Face Pull",
        heaviestWeight: 31.3,
        sets: [
          {
            reps: 9,
            weight: 24.9,
          },
          {
            reps: 9,
            weight: 26.6,
          },
          {
            reps: 10,
            weight: 31.3,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
      {
        title: "Lat Pulldown",
        heaviestWeight: 27.8,
        sets: [
          {
            reps: 12,
            weight: 27.8,
          },
          {
            reps: 12,
            weight: 27.1,
          },
          {
            reps: 8,
            weight: 24.9,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
    ],
  },
  {
    id: 21,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-02-12",
    totalReps: 65,
    totalWeight: 1479.8,
    averageWeight: 22.77,
    exercises: [
      {
        title: "Dumbbell Curl",
        heaviestWeight: 22.1,
        sets: [
          {
            reps: 11,
            weight: 21.2,
          },
          {
            reps: 10,
            weight: 22.1,
          },
          {
            reps: 12,
            weight: 18.9,
          },
        ],
        notes: "Solid tempo, good control.",
      },
      {
        title: "Barbell Row",
        heaviestWeight: 28.2,
        sets: [
          {
            reps: 11,
            weight: 21.4,
          },
          {
            reps: 12,
            weight: 28.2,
          },
          {
            reps: 9,
            weight: 25.0,
          },
        ],
        notes: "Struggled on last set.",
      },
    ],
  },
  {
    id: 22,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-02-14",
    totalReps: 61,
    totalWeight: 2201.1,
    averageWeight: 36.08,
    exercises: [
      {
        title: "Leg Curl",
        heaviestWeight: 41.7,
        sets: [
          {
            reps: 10,
            weight: 41.3,
          },
          {
            reps: 11,
            weight: 39.5,
          },
          {
            reps: 10,
            weight: 41.7,
          },
        ],
        notes: "Solid tempo, good control.",
      },
      {
        title: "Calf Raise",
        heaviestWeight: 32.3,
        sets: [
          {
            reps: 11,
            weight: 32.3,
          },
          {
            reps: 9,
            weight: 31.7,
          },
          {
            reps: 10,
            weight: 29.6,
          },
        ],
        notes: "Felt strong today.",
      },
    ],
  },
  {
    id: 23,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-02-16",
    totalReps: 64,
    totalWeight: 2274.1,
    averageWeight: 35.53,
    exercises: [
      {
        title: "Leg Curl",
        heaviestWeight: 32.5,
        sets: [
          {
            reps: 12,
            weight: 31.8,
          },
          {
            reps: 10,
            weight: 30.4,
          },
          {
            reps: 11,
            weight: 32.5,
          },
        ],
        notes: "Core was really engaged today.",
      },
      {
        title: "Back Squat",
        heaviestWeight: 41.4,
        sets: [
          {
            reps: 9,
            weight: 41.4,
          },
          {
            reps: 10,
            weight: 40.0,
          },
          {
            reps: 12,
            weight: 38.2,
          },
        ],
        notes: "Solid tempo, good control.",
      },
    ],
  },
  {
    id: 24,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-02-18",
    totalReps: 55,
    totalWeight: 1688.9,
    averageWeight: 30.71,
    exercises: [
      {
        title: "Walking Lunges",
        heaviestWeight: 24.8,
        sets: [
          {
            reps: 8,
            weight: 21.1,
          },
          {
            reps: 11,
            weight: 24.8,
          },
          {
            reps: 8,
            weight: 23.2,
          },
        ],
        notes: "Solid tempo, good control.",
      },
      {
        title: "Back Squat",
        heaviestWeight: 41.9,
        sets: [
          {
            reps: 11,
            weight: 37.9,
          },
          {
            reps: 9,
            weight: 34.4,
          },
          {
            reps: 8,
            weight: 41.9,
          },
        ],
        notes: "Struggled on last set.",
      },
    ],
  },
  {
    id: 25,
    workoutTitle: "Full Body",
    dateCompleted: "2025-02-20",
    totalReps: 67,
    totalWeight: 2544.2,
    averageWeight: 37.97,
    exercises: [
      {
        title: "Push Press",
        heaviestWeight: 39.7,
        sets: [
          {
            reps: 12,
            weight: 39.7,
          },
          {
            reps: 12,
            weight: 37.6,
          },
          {
            reps: 8,
            weight: 39.7,
          },
        ],
        notes: "Core was really engaged today.",
      },
      {
        title: "Deadlift",
        heaviestWeight: 37.8,
        sets: [
          {
            reps: 12,
            weight: 37.6,
          },
          {
            reps: 11,
            weight: 37.8,
          },
          {
            reps: 12,
            weight: 36.0,
          },
        ],
        notes: "Core was really engaged today.",
      },
    ],
  },
  {
    id: 26,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-02-22",
    totalReps: 58,
    totalWeight: 1637.1,
    averageWeight: 28.23,
    exercises: [
      {
        title: "Face Pull",
        heaviestWeight: 29.9,
        sets: [
          {
            reps: 9,
            weight: 29.9,
          },
          {
            reps: 10,
            weight: 29.1,
          },
          {
            reps: 12,
            weight: 26.3,
          },
        ],
        notes: "Solid tempo, good control.",
      },
      {
        title: "Lat Pulldown",
        heaviestWeight: 30.8,
        sets: [
          {
            reps: 8,
            weight: 29.0,
          },
          {
            reps: 9,
            weight: 24.6,
          },
          {
            reps: 10,
            weight: 30.8,
          },
        ],
        notes: "Struggled on last set.",
      },
    ],
  },
  {
    id: 27,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-02-24",
    totalReps: 58,
    totalWeight: 1552.3,
    averageWeight: 26.76,
    exercises: [
      {
        title: "Lat Pulldown",
        heaviestWeight: 31.6,
        sets: [
          {
            reps: 9,
            weight: 31.6,
          },
          {
            reps: 8,
            weight: 28.7,
          },
          {
            reps: 10,
            weight: 30.0,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
      {
        title: "Barbell Row",
        heaviestWeight: 26.0,
        sets: [
          {
            reps: 11,
            weight: 20.5,
          },
          {
            reps: 12,
            weight: 26.0,
          },
          {
            reps: 8,
            weight: 25.1,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
    ],
  },
  {
    id: 28,
    workoutTitle: "Full Body",
    dateCompleted: "2025-02-26",
    totalReps: 63,
    totalWeight: 1956.0,
    averageWeight: 31.05,
    exercises: [
      {
        title: "Deadlift",
        heaviestWeight: 31.0,
        sets: [
          {
            reps: 11,
            weight: 31.0,
          },
          {
            reps: 11,
            weight: 27.8,
          },
          {
            reps: 12,
            weight: 30.5,
          },
        ],
        notes: "Solid tempo, good control.",
      },
      {
        title: "Push Press",
        heaviestWeight: 34.4,
        sets: [
          {
            reps: 10,
            weight: 31.6,
          },
          {
            reps: 8,
            weight: 31.1,
          },
          {
            reps: 11,
            weight: 34.4,
          },
        ],
        notes: "Core was really engaged today.",
      },
    ],
  },
  {
    id: 29,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-02-28",
    totalReps: 60,
    totalWeight: 1817.9,
    averageWeight: 30.3,
    exercises: [
      {
        title: "Barbell Row",
        heaviestWeight: 31.6,
        sets: [
          {
            reps: 8,
            weight: 30.6,
          },
          {
            reps: 11,
            weight: 31.2,
          },
          {
            reps: 11,
            weight: 31.6,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
      {
        title: "Lat Pulldown",
        heaviestWeight: 32.1,
        sets: [
          {
            reps: 9,
            weight: 29.0,
          },
          {
            reps: 10,
            weight: 32.1,
          },
          {
            reps: 11,
            weight: 27.3,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
    ],
  },
  {
    id: 30,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-03-02",
    totalReps: 56,
    totalWeight: 1514.3,
    averageWeight: 27.04,
    exercises: [
      {
        title: "Back Squat",
        heaviestWeight: 23.3,
        sets: [
          {
            reps: 12,
            weight: 16.0,
          },
          {
            reps: 10,
            weight: 17.7,
          },
          {
            reps: 8,
            weight: 23.3,
          },
        ],
        notes: "Felt strong today.",
      },
      {
        title: "Walking Lunges",
        heaviestWeight: 40.1,
        sets: [
          {
            reps: 9,
            weight: 35.8,
          },
          {
            reps: 8,
            weight: 40.1,
          },
          {
            reps: 9,
            weight: 35.1,
          },
        ],
        notes: "Struggled on last set.",
      },
    ],
  },
  {
    id: 31,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-03-04",
    totalReps: 59,
    totalWeight: 2118.9,
    averageWeight: 35.91,
    exercises: [
      {
        title: "Face Pull",
        heaviestWeight: 31.0,
        sets: [
          {
            reps: 10,
            weight: 23.1,
          },
          {
            reps: 12,
            weight: 31.0,
          },
          {
            reps: 8,
            weight: 29.2,
          },
        ],
        notes: "Form improving.",
      },
      {
        title: "Dumbbell Curl",
        heaviestWeight: 44.9,
        sets: [
          {
            reps: 8,
            weight: 44.9,
          },
          {
            reps: 10,
            weight: 44.9,
          },
          {
            reps: 11,
            weight: 43.1,
          },
        ],
        notes: "Solid tempo, good control.",
      },
    ],
  },
  {
    id: 32,
    workoutTitle: "Push Day",
    dateCompleted: "2025-03-06",
    totalReps: 65,
    totalWeight: 2354.1,
    averageWeight: 36.22,
    exercises: [
      {
        title: "Overhead Press",
        heaviestWeight: 40.9,
        sets: [
          {
            reps: 10,
            weight: 40.9,
          },
          {
            reps: 12,
            weight: 40.5,
          },
          {
            reps: 12,
            weight: 40.3,
          },
        ],
        notes: "Great pump!",
      },
      {
        title: "Incline Dumbbell Press",
        heaviestWeight: 36.5,
        sets: [
          {
            reps: 10,
            weight: 29.0,
          },
          {
            reps: 10,
            weight: 28.4,
          },
          {
            reps: 11,
            weight: 36.5,
          },
        ],
        notes: "Struggled on last set.",
      },
    ],
  },
  {
    id: 33,
    workoutTitle: "Full Body",
    dateCompleted: "2025-03-08",
    totalReps: 69,
    totalWeight: 2718.5,
    averageWeight: 39.4,
    exercises: [
      {
        title: "Chin-Up",
        heaviestWeight: 46.9,
        sets: [
          {
            reps: 11,
            weight: 44.4,
          },
          {
            reps: 11,
            weight: 39.1,
          },
          {
            reps: 12,
            weight: 46.9,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
      {
        title: "Goblet Squat",
        heaviestWeight: 38.1,
        sets: [
          {
            reps: 12,
            weight: 38.1,
          },
          {
            reps: 11,
            weight: 34.8,
          },
          {
            reps: 12,
            weight: 33.1,
          },
        ],
        notes: "Solid tempo, good control.",
      },
    ],
  },
  {
    id: 34,
    workoutTitle: "Push Day",
    dateCompleted: "2025-03-10",
    totalReps: 65,
    totalWeight: 1952.3,
    averageWeight: 30.04,
    exercises: [
      {
        title: "Dumbbell Bench Press",
        heaviestWeight: 29.6,
        sets: [
          {
            reps: 11,
            weight: 26.8,
          },
          {
            reps: 11,
            weight: 24.5,
          },
          {
            reps: 11,
            weight: 29.6,
          },
        ],
        notes: "Form improving.",
      },
      {
        title: "Overhead Press",
        heaviestWeight: 35.2,
        sets: [
          {
            reps: 10,
            weight: 35.2,
          },
          {
            reps: 10,
            weight: 30.0,
          },
          {
            reps: 12,
            weight: 34.2,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
    ],
  },
  {
    id: 35,
    workoutTitle: "Push Day",
    dateCompleted: "2025-03-12",
    totalReps: 61,
    totalWeight: 1444.7,
    averageWeight: 23.68,
    exercises: [
      {
        title: "Overhead Press",
        heaviestWeight: 27.9,
        sets: [
          {
            reps: 11,
            weight: 25.9,
          },
          {
            reps: 9,
            weight: 27.9,
          },
          {
            reps: 11,
            weight: 25.5,
          },
        ],
        notes: "Felt strong today.",
      },
      {
        title: "Incline Dumbbell Press",
        heaviestWeight: 21.4,
        sets: [
          {
            reps: 9,
            weight: 21.4,
          },
          {
            reps: 9,
            weight: 20.4,
          },
          {
            reps: 12,
            weight: 21.0,
          },
        ],
        notes: "Great pump!",
      },
    ],
  },
  {
    id: 36,
    workoutTitle: "Full Body",
    dateCompleted: "2025-03-14",
    totalReps: 63,
    totalWeight: 1894.9,
    averageWeight: 30.08,
    exercises: [
      {
        title: "Chin-Up",
        heaviestWeight: 35.7,
        sets: [
          {
            reps: 10,
            weight: 35.6,
          },
          {
            reps: 9,
            weight: 33.8,
          },
          {
            reps: 9,
            weight: 35.7,
          },
        ],
        notes: "Form improving.",
      },
      {
        title: "Push Press",
        heaviestWeight: 29.6,
        sets: [
          {
            reps: 11,
            weight: 22.6,
          },
          {
            reps: 12,
            weight: 29.6,
          },
          {
            reps: 12,
            weight: 25.8,
          },
        ],
        notes: "Struggled on last set.",
      },
    ],
  },
  {
    id: 37,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-03-16",
    totalReps: 58,
    totalWeight: 1839.3,
    averageWeight: 31.71,
    exercises: [
      {
        title: "Dumbbell Curl",
        heaviestWeight: 33.8,
        sets: [
          {
            reps: 10,
            weight: 24.2,
          },
          {
            reps: 12,
            weight: 25.3,
          },
          {
            reps: 8,
            weight: 33.8,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
      {
        title: "Barbell Row",
        heaviestWeight: 38.8,
        sets: [
          {
            reps: 9,
            weight: 38.8,
          },
          {
            reps: 11,
            weight: 33.5,
          },
          {
            reps: 8,
            weight: 38.2,
          },
        ],
        notes: "Core was really engaged today.",
      },
    ],
  },
  {
    id: 38,
    workoutTitle: "Full Body",
    dateCompleted: "2025-03-18",
    totalReps: 55,
    totalWeight: 1622.5,
    averageWeight: 29.5,
    exercises: [
      {
        title: "Goblet Squat",
        heaviestWeight: 23.6,
        sets: [
          {
            reps: 8,
            weight: 22.1,
          },
          {
            reps: 11,
            weight: 20.7,
          },
          {
            reps: 8,
            weight: 23.6,
          },
        ],
        notes: "Struggled on last set.",
      },
      {
        title: "Push Press",
        heaviestWeight: 39.4,
        sets: [
          {
            reps: 8,
            weight: 30.9,
          },
          {
            reps: 12,
            weight: 38.9,
          },
          {
            reps: 8,
            weight: 39.4,
          },
        ],
        notes: "Struggled on last set.",
      },
    ],
  },
  {
    id: 39,
    workoutTitle: "Full Body",
    dateCompleted: "2025-03-20",
    totalReps: 60,
    totalWeight: 2031.4,
    averageWeight: 33.86,
    exercises: [
      {
        title: "Push Press",
        heaviestWeight: 34.4,
        sets: [
          {
            reps: 11,
            weight: 27.5,
          },
          {
            reps: 12,
            weight: 34.4,
          },
          {
            reps: 10,
            weight: 30.2,
          },
        ],
        notes: "Felt strong today.",
      },
      {
        title: "Chin-Up",
        heaviestWeight: 39.7,
        sets: [
          {
            reps: 8,
            weight: 39.7,
          },
          {
            reps: 9,
            weight: 36.5,
          },
          {
            reps: 10,
            weight: 36.8,
          },
        ],
        notes: "Form improving.",
      },
    ],
  },
  {
    id: 40,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-03-22",
    totalReps: 60,
    totalWeight: 1793.7,
    averageWeight: 29.89,
    exercises: [
      {
        title: "Lat Pulldown",
        heaviestWeight: 21.6,
        sets: [
          {
            reps: 8,
            weight: 21.0,
          },
          {
            reps: 12,
            weight: 21.6,
          },
          {
            reps: 8,
            weight: 19.2,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
      {
        title: "Dumbbell Curl",
        heaviestWeight: 41.8,
        sets: [
          {
            reps: 11,
            weight: 33.3,
          },
          {
            reps: 9,
            weight: 41.8,
          },
          {
            reps: 12,
            weight: 39.2,
          },
        ],
        notes: "Solid tempo, good control.",
      },
    ],
  },
  {
    id: 41,
    workoutTitle: "Full Body",
    dateCompleted: "2025-03-24",
    totalReps: 61,
    totalWeight: 1843.6,
    averageWeight: 30.22,
    exercises: [
      {
        title: "Deadlift",
        heaviestWeight: 29.7,
        sets: [
          {
            reps: 9,
            weight: 29.7,
          },
          {
            reps: 9,
            weight: 21.3,
          },
          {
            reps: 9,
            weight: 28.5,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
      {
        title: "Chin-Up",
        heaviestWeight: 35.4,
        sets: [
          {
            reps: 11,
            weight: 32.9,
          },
          {
            reps: 11,
            weight: 35.4,
          },
          {
            reps: 12,
            weight: 31.4,
          },
        ],
        notes: "Core was really engaged today.",
      },
    ],
  },
  {
    id: 42,
    workoutTitle: "Push Day",
    dateCompleted: "2025-03-26",
    totalReps: 62,
    totalWeight: 2588.3,
    averageWeight: 41.75,
    exercises: [
      {
        title: "Incline Dumbbell Press",
        heaviestWeight: 39.2,
        sets: [
          {
            reps: 12,
            weight: 35.9,
          },
          {
            reps: 8,
            weight: 35.7,
          },
          {
            reps: 12,
            weight: 39.2,
          },
        ],
        notes: "Felt strong today.",
      },
      {
        title: "Overhead Press",
        heaviestWeight: 49.2,
        sets: [
          {
            reps: 10,
            weight: 45.8,
          },
          {
            reps: 9,
            weight: 44.7,
          },
          {
            reps: 11,
            weight: 49.2,
          },
        ],
        notes: "Form improving.",
      },
    ],
  },
  {
    id: 43,
    workoutTitle: "Full Body",
    dateCompleted: "2025-03-28",
    totalReps: 60,
    totalWeight: 1730.2,
    averageWeight: 28.84,
    exercises: [
      {
        title: "Goblet Squat",
        heaviestWeight: 35.3,
        sets: [
          {
            reps: 11,
            weight: 30.1,
          },
          {
            reps: 8,
            weight: 35.3,
          },
          {
            reps: 10,
            weight: 30.9,
          },
        ],
        notes: "Core was really engaged today.",
      },
      {
        title: "Deadlift",
        heaviestWeight: 30.3,
        sets: [
          {
            reps: 11,
            weight: 30.3,
          },
          {
            reps: 12,
            weight: 22.6,
          },
          {
            reps: 8,
            weight: 25.4,
          },
        ],
        notes: "Great pump!",
      },
    ],
  },
  {
    id: 44,
    workoutTitle: "Push Day",
    dateCompleted: "2025-03-30",
    totalReps: 59,
    totalWeight: 2168.4,
    averageWeight: 36.75,
    exercises: [
      {
        title: "Dips",
        heaviestWeight: 42.2,
        sets: [
          {
            reps: 8,
            weight: 42.2,
          },
          {
            reps: 12,
            weight: 40.2,
          },
          {
            reps: 8,
            weight: 37.5,
          },
        ],
        notes: "Great pump!",
      },
      {
        title: "Dumbbell Bench Press",
        heaviestWeight: 36.8,
        sets: [
          {
            reps: 11,
            weight: 36.8,
          },
          {
            reps: 8,
            weight: 32.6,
          },
          {
            reps: 12,
            weight: 31.9,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
    ],
  },
  {
    id: 45,
    workoutTitle: "Full Body",
    dateCompleted: "2025-04-01",
    totalReps: 54,
    totalWeight: 1272.0,
    averageWeight: 23.56,
    exercises: [
      {
        title: "Goblet Squat",
        heaviestWeight: 23.7,
        sets: [
          {
            reps: 12,
            weight: 23.7,
          },
          {
            reps: 9,
            weight: 18.8,
          },
          {
            reps: 8,
            weight: 21.2,
          },
        ],
        notes: "Struggled on last set.",
      },
      {
        title: "Deadlift",
        heaviestWeight: 27.1,
        sets: [
          {
            reps: 8,
            weight: 25.2,
          },
          {
            reps: 8,
            weight: 27.1,
          },
          {
            reps: 9,
            weight: 25.6,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
    ],
  },
  {
    id: 46,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-04-03",
    totalReps: 63,
    totalWeight: 2676.4,
    averageWeight: 42.48,
    exercises: [
      {
        title: "Calf Raise",
        heaviestWeight: 44.6,
        sets: [
          {
            reps: 9,
            weight: 44.1,
          },
          {
            reps: 9,
            weight: 43.3,
          },
          {
            reps: 12,
            weight: 44.6,
          },
        ],
        notes: "Form improving.",
      },
      {
        title: "Walking Lunges",
        heaviestWeight: 44.3,
        sets: [
          {
            reps: 10,
            weight: 44.3,
          },
          {
            reps: 11,
            weight: 40.0,
          },
          {
            reps: 12,
            weight: 39.3,
          },
        ],
        notes: "Felt strong today.",
      },
    ],
  },
  {
    id: 47,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-04-05",
    totalReps: 60,
    totalWeight: 2086.1,
    averageWeight: 34.77,
    exercises: [
      {
        title: "Leg Curl",
        heaviestWeight: 38.2,
        sets: [
          {
            reps: 11,
            weight: 38.2,
          },
          {
            reps: 11,
            weight: 34.9,
          },
          {
            reps: 10,
            weight: 32.8,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
      {
        title: "Calf Raise",
        heaviestWeight: 35.1,
        sets: [
          {
            reps: 10,
            weight: 35.1,
          },
          {
            reps: 9,
            weight: 32.1,
          },
          {
            reps: 9,
            weight: 34.9,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
    ],
  },
  {
    id: 48,
    workoutTitle: "Push Day",
    dateCompleted: "2025-04-07",
    totalReps: 59,
    totalWeight: 2036.5,
    averageWeight: 34.52,
    exercises: [
      {
        title: "Dumbbell Bench Press",
        heaviestWeight: 31.8,
        sets: [
          {
            reps: 11,
            weight: 30.7,
          },
          {
            reps: 9,
            weight: 31.8,
          },
          {
            reps: 8,
            weight: 28.1,
          },
        ],
        notes: "Great pump!",
      },
      {
        title: "Dips",
        heaviestWeight: 40.8,
        sets: [
          {
            reps: 11,
            weight: 37.7,
          },
          {
            reps: 11,
            weight: 36.9,
          },
          {
            reps: 9,
            weight: 40.8,
          },
        ],
        notes: "Form improving.",
      },
    ],
  },
  {
    id: 49,
    workoutTitle: "Push Day",
    dateCompleted: "2025-04-09",
    totalReps: 61,
    totalWeight: 2038.4,
    averageWeight: 33.42,
    exercises: [
      {
        title: "Dips",
        heaviestWeight: 32.0,
        sets: [
          {
            reps: 11,
            weight: 30.0,
          },
          {
            reps: 10,
            weight: 32.0,
          },
          {
            reps: 12,
            weight: 27.3,
          },
        ],
        notes: "Great pump!",
      },
      {
        title: "Overhead Press",
        heaviestWeight: 39.4,
        sets: [
          {
            reps: 11,
            weight: 39.4,
          },
          {
            reps: 8,
            weight: 36.8,
          },
          {
            reps: 9,
            weight: 37.0,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
    ],
  },
  {
    id: 50,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-04-11",
    totalReps: 57,
    totalWeight: 2042.6,
    averageWeight: 35.84,
    exercises: [
      {
        title: "Barbell Row",
        heaviestWeight: 48.5,
        sets: [
          {
            reps: 8,
            weight: 43.9,
          },
          {
            reps: 10,
            weight: 48.5,
          },
          {
            reps: 8,
            weight: 42.7,
          },
        ],
        notes: "Felt strong today.",
      },
      {
        title: "Lat Pulldown",
        heaviestWeight: 29.2,
        sets: [
          {
            reps: 10,
            weight: 26.6,
          },
          {
            reps: 9,
            weight: 27.6,
          },
          {
            reps: 12,
            weight: 29.2,
          },
        ],
        notes: "Form improving.",
      },
    ],
  },
  {
    id: 51,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-04-13",
    totalReps: 62,
    totalWeight: 2225.3,
    averageWeight: 35.89,
    exercises: [
      {
        title: "Lat Pulldown",
        heaviestWeight: 36.4,
        sets: [
          {
            reps: 11,
            weight: 36.4,
          },
          {
            reps: 9,
            weight: 35.2,
          },
          {
            reps: 12,
            weight: 31.7,
          },
        ],
        notes: "Core was really engaged today.",
      },
      {
        title: "Barbell Row",
        heaviestWeight: 40.0,
        sets: [
          {
            reps: 11,
            weight: 33.5,
          },
          {
            reps: 8,
            weight: 39.9,
          },
          {
            reps: 11,
            weight: 40.0,
          },
        ],
        notes: "Form improving.",
      },
    ],
  },
  {
    id: 52,
    workoutTitle: "Push Day",
    dateCompleted: "2025-04-15",
    totalReps: 66,
    totalWeight: 2972.3,
    averageWeight: 45.03,
    exercises: [
      {
        title: "Dips",
        heaviestWeight: 48.1,
        sets: [
          {
            reps: 10,
            weight: 46.1,
          },
          {
            reps: 11,
            weight: 46.6,
          },
          {
            reps: 11,
            weight: 48.1,
          },
        ],
        notes: "Solid tempo, good control.",
      },
      {
        title: "Overhead Press",
        heaviestWeight: 45.7,
        sets: [
          {
            reps: 11,
            weight: 41.1,
          },
          {
            reps: 11,
            weight: 45.7,
          },
          {
            reps: 12,
            weight: 42.9,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
    ],
  },
  {
    id: 53,
    workoutTitle: "Push Day",
    dateCompleted: "2025-04-17",
    totalReps: 57,
    totalWeight: 1663.0,
    averageWeight: 29.18,
    exercises: [
      {
        title: "Dips",
        heaviestWeight: 24.3,
        sets: [
          {
            reps: 8,
            weight: 24.3,
          },
          {
            reps: 11,
            weight: 23.5,
          },
          {
            reps: 10,
            weight: 23.0,
          },
        ],
        notes: "Solid tempo, good control.",
      },
      {
        title: "Overhead Press",
        heaviestWeight: 36.5,
        sets: [
          {
            reps: 10,
            weight: 32.4,
          },
          {
            reps: 9,
            weight: 36.4,
          },
          {
            reps: 9,
            weight: 36.5,
          },
        ],
        notes: "Felt strong today.",
      },
    ],
  },
  {
    id: 54,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-04-19",
    totalReps: 60,
    totalWeight: 2212.8,
    averageWeight: 36.88,
    exercises: [
      {
        title: "Calf Raise",
        heaviestWeight: 32.8,
        sets: [
          {
            reps: 9,
            weight: 30.4,
          },
          {
            reps: 10,
            weight: 32.8,
          },
          {
            reps: 11,
            weight: 31.2,
          },
        ],
        notes: "Form improving.",
      },
      {
        title: "Back Squat",
        heaviestWeight: 43.8,
        sets: [
          {
            reps: 10,
            weight: 40.0,
          },
          {
            reps: 10,
            weight: 43.0,
          },
          {
            reps: 10,
            weight: 43.8,
          },
        ],
        notes: "Core was really engaged today.",
      },
    ],
  },
  {
    id: 55,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-04-21",
    totalReps: 61,
    totalWeight: 1596.3,
    averageWeight: 26.17,
    exercises: [
      {
        title: "Leg Curl",
        heaviestWeight: 36.4,
        sets: [
          {
            reps: 8,
            weight: 28.1,
          },
          {
            reps: 9,
            weight: 35.3,
          },
          {
            reps: 11,
            weight: 36.4,
          },
        ],
        notes: "Great pump!",
      },
      {
        title: "Back Squat",
        heaviestWeight: 24.0,
        sets: [
          {
            reps: 11,
            weight: 17.4,
          },
          {
            reps: 12,
            weight: 18.5,
          },
          {
            reps: 10,
            weight: 24.0,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
    ],
  },
  {
    id: 56,
    workoutTitle: "Full Body",
    dateCompleted: "2025-04-23",
    totalReps: 64,
    totalWeight: 2257.1,
    averageWeight: 35.27,
    exercises: [
      {
        title: "Chin-Up",
        heaviestWeight: 35.2,
        sets: [
          {
            reps: 11,
            weight: 32.1,
          },
          {
            reps: 12,
            weight: 35.2,
          },
          {
            reps: 12,
            weight: 34.1,
          },
        ],
        notes: "Struggled on last set.",
      },
      {
        title: "Deadlift",
        heaviestWeight: 40.0,
        sets: [
          {
            reps: 11,
            weight: 40.0,
          },
          {
            reps: 10,
            weight: 37.4,
          },
          {
            reps: 8,
            weight: 32.3,
          },
        ],
        notes: "Felt strong today.",
      },
    ],
  },
  {
    id: 57,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-04-25",
    totalReps: 65,
    totalWeight: 1950.3,
    averageWeight: 30.0,
    exercises: [
      {
        title: "Calf Raise",
        heaviestWeight: 21.6,
        sets: [
          {
            reps: 12,
            weight: 18.8,
          },
          {
            reps: 11,
            weight: 21.1,
          },
          {
            reps: 12,
            weight: 21.6,
          },
        ],
        notes: "Form improving.",
      },
      {
        title: "Back Squat",
        heaviestWeight: 45.5,
        sets: [
          {
            reps: 8,
            weight: 45.5,
          },
          {
            reps: 12,
            weight: 41.2,
          },
          {
            reps: 10,
            weight: 37.5,
          },
        ],
        notes: "Great pump!",
      },
    ],
  },
  {
    id: 58,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-04-27",
    totalReps: 58,
    totalWeight: 1931.1,
    averageWeight: 33.29,
    exercises: [
      {
        title: "Face Pull",
        heaviestWeight: 44.2,
        sets: [
          {
            reps: 10,
            weight: 39.8,
          },
          {
            reps: 10,
            weight: 44.2,
          },
          {
            reps: 10,
            weight: 39.4,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
      {
        title: "Lat Pulldown",
        heaviestWeight: 29.2,
        sets: [
          {
            reps: 8,
            weight: 29.2,
          },
          {
            reps: 11,
            weight: 20.7,
          },
          {
            reps: 9,
            weight: 26.2,
          },
        ],
        notes: "Felt strong today.",
      },
    ],
  },
  {
    id: 59,
    workoutTitle: "Push Day",
    dateCompleted: "2025-04-29",
    totalReps: 63,
    totalWeight: 2290.5,
    averageWeight: 36.36,
    exercises: [
      {
        title: "Dumbbell Bench Press",
        heaviestWeight: 47.9,
        sets: [
          {
            reps: 12,
            weight: 41.8,
          },
          {
            reps: 12,
            weight: 41.8,
          },
          {
            reps: 9,
            weight: 47.9,
          },
        ],
        notes: "Solid tempo, good control.",
      },
      {
        title: "Incline Dumbbell Press",
        heaviestWeight: 33.1,
        sets: [
          {
            reps: 9,
            weight: 31.1,
          },
          {
            reps: 12,
            weight: 23.2,
          },
          {
            reps: 9,
            weight: 33.1,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
    ],
  },
  {
    id: 60,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-05-01",
    totalReps: 55,
    totalWeight: 1694.5,
    averageWeight: 30.81,
    exercises: [
      {
        title: "Barbell Row",
        heaviestWeight: 42.5,
        sets: [
          {
            reps: 9,
            weight: 36.8,
          },
          {
            reps: 9,
            weight: 42.5,
          },
          {
            reps: 8,
            weight: 38.4,
          },
        ],
        notes: "Felt strong today.",
      },
      {
        title: "Dumbbell Curl",
        heaviestWeight: 23.4,
        sets: [
          {
            reps: 11,
            weight: 23.4,
          },
          {
            reps: 8,
            weight: 22.9,
          },
          {
            reps: 10,
            weight: 23.3,
          },
        ],
        notes: "Struggled on last set.",
      },
    ],
  },
  {
    id: 61,
    workoutTitle: "Full Body",
    dateCompleted: "2025-05-03",
    totalReps: 61,
    totalWeight: 1710.8,
    averageWeight: 28.05,
    exercises: [
      {
        title: "Push Press",
        heaviestWeight: 24.6,
        sets: [
          {
            reps: 12,
            weight: 19.1,
          },
          {
            reps: 8,
            weight: 16.7,
          },
          {
            reps: 11,
            weight: 24.6,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
      {
        title: "Chin-Up",
        heaviestWeight: 39.3,
        sets: [
          {
            reps: 11,
            weight: 39.3,
          },
          {
            reps: 11,
            weight: 32.9,
          },
          {
            reps: 8,
            weight: 35.4,
          },
        ],
        notes: "Form improving.",
      },
    ],
  },
  {
    id: 62,
    workoutTitle: "Push Day",
    dateCompleted: "2025-05-05",
    totalReps: 65,
    totalWeight: 2229.8,
    averageWeight: 34.3,
    exercises: [
      {
        title: "Overhead Press",
        heaviestWeight: 36.1,
        sets: [
          {
            reps: 12,
            weight: 36.1,
          },
          {
            reps: 10,
            weight: 34.4,
          },
          {
            reps: 12,
            weight: 35.9,
          },
        ],
        notes: "Core was really engaged today.",
      },
      {
        title: "Dips",
        heaviestWeight: 36.2,
        sets: [
          {
            reps: 11,
            weight: 28.6,
          },
          {
            reps: 8,
            weight: 36.2,
          },
          {
            reps: 12,
            weight: 34.8,
          },
        ],
        notes: "Solid tempo, good control.",
      },
    ],
  },
  {
    id: 63,
    workoutTitle: "Full Body",
    dateCompleted: "2025-05-07",
    totalReps: 56,
    totalWeight: 1993.6,
    averageWeight: 35.6,
    exercises: [
      {
        title: "Goblet Squat",
        heaviestWeight: 32.0,
        sets: [
          {
            reps: 11,
            weight: 29.3,
          },
          {
            reps: 8,
            weight: 28.5,
          },
          {
            reps: 10,
            weight: 32.0,
          },
        ],
        notes: "Great pump!",
      },
      {
        title: "Deadlift",
        heaviestWeight: 46.3,
        sets: [
          {
            reps: 11,
            weight: 39.5,
          },
          {
            reps: 8,
            weight: 39.8,
          },
          {
            reps: 8,
            weight: 46.3,
          },
        ],
        notes: "Great pump!",
      },
    ],
  },
  {
    id: 64,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-05-09",
    totalReps: 60,
    totalWeight: 2608.8,
    averageWeight: 43.48,
    exercises: [
      {
        title: "Barbell Row",
        heaviestWeight: 47.6,
        sets: [
          {
            reps: 12,
            weight: 42.2,
          },
          {
            reps: 8,
            weight: 43.0,
          },
          {
            reps: 11,
            weight: 47.6,
          },
        ],
        notes: "Felt strong today.",
      },
      {
        title: "Dumbbell Curl",
        heaviestWeight: 45.0,
        sets: [
          {
            reps: 12,
            weight: 42.3,
          },
          {
            reps: 8,
            weight: 45.0,
          },
          {
            reps: 9,
            weight: 40.8,
          },
        ],
        notes: "Core was really engaged today.",
      },
    ],
  },
  {
    id: 65,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-05-11",
    totalReps: 61,
    totalWeight: 2354.6,
    averageWeight: 38.6,
    exercises: [
      {
        title: "Barbell Row",
        heaviestWeight: 44.6,
        sets: [
          {
            reps: 10,
            weight: 37.3,
          },
          {
            reps: 10,
            weight: 41.9,
          },
          {
            reps: 11,
            weight: 44.6,
          },
        ],
        notes: "Felt strong today.",
      },
      {
        title: "Lat Pulldown",
        heaviestWeight: 39.4,
        sets: [
          {
            reps: 10,
            weight: 30.5,
          },
          {
            reps: 10,
            weight: 37.3,
          },
          {
            reps: 10,
            weight: 39.4,
          },
        ],
        notes: "Great pump!",
      },
    ],
  },
  {
    id: 66,
    workoutTitle: "Push Day",
    dateCompleted: "2025-05-13",
    totalReps: 62,
    totalWeight: 1943.9,
    averageWeight: 31.35,
    exercises: [
      {
        title: "Overhead Press",
        heaviestWeight: 31.3,
        sets: [
          {
            reps: 11,
            weight: 29.9,
          },
          {
            reps: 8,
            weight: 30.1,
          },
          {
            reps: 12,
            weight: 31.3,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
      {
        title: "Incline Dumbbell Press",
        heaviestWeight: 34.1,
        sets: [
          {
            reps: 9,
            weight: 30.0,
          },
          {
            reps: 10,
            weight: 34.1,
          },
          {
            reps: 12,
            weight: 32.3,
          },
        ],
        notes: "Felt strong today.",
      },
    ],
  },
  {
    id: 67,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-05-15",
    totalReps: 58,
    totalWeight: 1664.9,
    averageWeight: 28.71,
    exercises: [
      {
        title: "Lat Pulldown",
        heaviestWeight: 21.1,
        sets: [
          {
            reps: 8,
            weight: 19.0,
          },
          {
            reps: 11,
            weight: 21.1,
          },
          {
            reps: 11,
            weight: 20.4,
          },
        ],
        notes: "Solid tempo, good control.",
      },
      {
        title: "Dumbbell Curl",
        heaviestWeight: 38.7,
        sets: [
          {
            reps: 8,
            weight: 37.3,
          },
          {
            reps: 8,
            weight: 36.7,
          },
          {
            reps: 12,
            weight: 38.7,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
    ],
  },
  {
    id: 68,
    workoutTitle: "Push Day",
    dateCompleted: "2025-05-17",
    totalReps: 57,
    totalWeight: 2048.4,
    averageWeight: 35.94,
    exercises: [
      {
        title: "Overhead Press",
        heaviestWeight: 49.1,
        sets: [
          {
            reps: 8,
            weight: 39.7,
          },
          {
            reps: 10,
            weight: 49.1,
          },
          {
            reps: 9,
            weight: 47.3,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
      {
        title: "Dips",
        heaviestWeight: 28.5,
        sets: [
          {
            reps: 8,
            weight: 28.2,
          },
          {
            reps: 11,
            weight: 25.0,
          },
          {
            reps: 11,
            weight: 28.5,
          },
        ],
        notes: "Solid tempo, good control.",
      },
    ],
  },
  {
    id: 69,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-05-19",
    totalReps: 61,
    totalWeight: 2352.5,
    averageWeight: 38.57,
    exercises: [
      {
        title: "Back Squat",
        heaviestWeight: 45.8,
        sets: [
          {
            reps: 8,
            weight: 40.9,
          },
          {
            reps: 11,
            weight: 45.8,
          },
          {
            reps: 10,
            weight: 42.3,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
      {
        title: "Walking Lunges",
        heaviestWeight: 35.6,
        sets: [
          {
            reps: 11,
            weight: 35.6,
          },
          {
            reps: 11,
            weight: 32.9,
          },
          {
            reps: 10,
            weight: 34.5,
          },
        ],
        notes: "Core was really engaged today.",
      },
    ],
  },
  {
    id: 70,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-05-21",
    totalReps: 57,
    totalWeight: 1977.2,
    averageWeight: 34.69,
    exercises: [
      {
        title: "Back Squat",
        heaviestWeight: 44.8,
        sets: [
          {
            reps: 9,
            weight: 40.5,
          },
          {
            reps: 11,
            weight: 41.4,
          },
          {
            reps: 11,
            weight: 44.8,
          },
        ],
        notes: "Great pump!",
      },
      {
        title: "Walking Lunges",
        heaviestWeight: 29.6,
        sets: [
          {
            reps: 9,
            weight: 21.3,
          },
          {
            reps: 8,
            weight: 25.8,
          },
          {
            reps: 9,
            weight: 29.6,
          },
        ],
        notes: "Great pump!",
      },
    ],
  },
  {
    id: 71,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-05-23",
    totalReps: 65,
    totalWeight: 1752.4,
    averageWeight: 26.96,
    exercises: [
      {
        title: "Walking Lunges",
        heaviestWeight: 19.5,
        sets: [
          {
            reps: 10,
            weight: 19.5,
          },
          {
            reps: 12,
            weight: 19.1,
          },
          {
            reps: 8,
            weight: 19.3,
          },
        ],
        notes: "Core was really engaged today.",
      },
      {
        title: "Back Squat",
        heaviestWeight: 34.2,
        sets: [
          {
            reps: 12,
            weight: 34.2,
          },
          {
            reps: 11,
            weight: 33.4,
          },
          {
            reps: 12,
            weight: 33.0,
          },
        ],
        notes: "Great pump!",
      },
    ],
  },
  {
    id: 72,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-05-25",
    totalReps: 57,
    totalWeight: 1448.4,
    averageWeight: 25.41,
    exercises: [
      {
        title: "Walking Lunges",
        heaviestWeight: 23.0,
        sets: [
          {
            reps: 11,
            weight: 23.0,
          },
          {
            reps: 10,
            weight: 22.6,
          },
          {
            reps: 10,
            weight: 21.8,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
      {
        title: "Calf Raise",
        heaviestWeight: 32.7,
        sets: [
          {
            reps: 8,
            weight: 27.1,
          },
          {
            reps: 10,
            weight: 27.3,
          },
          {
            reps: 8,
            weight: 32.7,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
    ],
  },
  {
    id: 73,
    workoutTitle: "Full Body",
    dateCompleted: "2025-05-27",
    totalReps: 61,
    totalWeight: 2290.5,
    averageWeight: 37.55,
    exercises: [
      {
        title: "Deadlift",
        heaviestWeight: 44.2,
        sets: [
          {
            reps: 12,
            weight: 44.2,
          },
          {
            reps: 10,
            weight: 43.8,
          },
          {
            reps: 12,
            weight: 39.2,
          },
        ],
        notes: "Felt strong today.",
      },
      {
        title: "Push Press",
        heaviestWeight: 36.1,
        sets: [
          {
            reps: 10,
            weight: 36.1,
          },
          {
            reps: 8,
            weight: 31.3,
          },
          {
            reps: 9,
            weight: 26.7,
          },
        ],
        notes: "Core was really engaged today.",
      },
    ],
  },
  {
    id: 74,
    workoutTitle: "Full Body",
    dateCompleted: "2025-05-29",
    totalReps: 59,
    totalWeight: 1547.5,
    averageWeight: 26.23,
    exercises: [
      {
        title: "Push Press",
        heaviestWeight: 32.2,
        sets: [
          {
            reps: 10,
            weight: 28.2,
          },
          {
            reps: 10,
            weight: 31.1,
          },
          {
            reps: 8,
            weight: 32.2,
          },
        ],
        notes: "Great pump!",
      },
      {
        title: "Goblet Squat",
        heaviestWeight: 25.4,
        sets: [
          {
            reps: 8,
            weight: 22.2,
          },
          {
            reps: 11,
            weight: 19.5,
          },
          {
            reps: 12,
            weight: 25.4,
          },
        ],
        notes: "Great pump!",
      },
    ],
  },
  {
    id: 75,
    workoutTitle: "Push Day",
    dateCompleted: "2025-05-31",
    totalReps: 61,
    totalWeight: 1984.4,
    averageWeight: 32.53,
    exercises: [
      {
        title: "Overhead Press",
        heaviestWeight: 29.2,
        sets: [
          {
            reps: 11,
            weight: 24.0,
          },
          {
            reps: 8,
            weight: 25.9,
          },
          {
            reps: 11,
            weight: 29.2,
          },
        ],
        notes: "Great pump!",
      },
      {
        title: "Dips",
        heaviestWeight: 40.4,
        sets: [
          {
            reps: 12,
            weight: 36.3,
          },
          {
            reps: 11,
            weight: 40.4,
          },
          {
            reps: 8,
            weight: 39.0,
          },
        ],
        notes: "Form improving.",
      },
    ],
  },
  {
    id: 76,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-06-02",
    totalReps: 59,
    totalWeight: 1790.9,
    averageWeight: 30.35,
    exercises: [
      {
        title: "Dumbbell Curl",
        heaviestWeight: 28.2,
        sets: [
          {
            reps: 9,
            weight: 21.3,
          },
          {
            reps: 10,
            weight: 28.2,
          },
          {
            reps: 8,
            weight: 24.9,
          },
        ],
        notes: "Felt strong today.",
      },
      {
        title: "Lat Pulldown",
        heaviestWeight: 39.9,
        sets: [
          {
            reps: 12,
            weight: 32.9,
          },
          {
            reps: 11,
            weight: 33.1,
          },
          {
            reps: 9,
            weight: 39.9,
          },
        ],
        notes: "Form improving.",
      },
    ],
  },
  {
    id: 77,
    workoutTitle: "Full Body",
    dateCompleted: "2025-06-04",
    totalReps: 64,
    totalWeight: 1897.2,
    averageWeight: 29.64,
    exercises: [
      {
        title: "Deadlift",
        heaviestWeight: 33.8,
        sets: [
          {
            reps: 9,
            weight: 33.8,
          },
          {
            reps: 12,
            weight: 27.0,
          },
          {
            reps: 11,
            weight: 26.4,
          },
        ],
        notes: "Solid tempo, good control.",
      },
      {
        title: "Push Press",
        heaviestWeight: 32.6,
        sets: [
          {
            reps: 11,
            weight: 31.8,
          },
          {
            reps: 9,
            weight: 26.4,
          },
          {
            reps: 12,
            weight: 32.6,
          },
        ],
        notes: "Core was really engaged today.",
      },
    ],
  },
  {
    id: 78,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-06-06",
    totalReps: 65,
    totalWeight: 2446.0,
    averageWeight: 37.63,
    exercises: [
      {
        title: "Calf Raise",
        heaviestWeight: 36.4,
        sets: [
          {
            reps: 9,
            weight: 36.4,
          },
          {
            reps: 12,
            weight: 29.6,
          },
          {
            reps: 10,
            weight: 28.7,
          },
        ],
        notes: "Core was really engaged today.",
      },
      {
        title: "Leg Curl",
        heaviestWeight: 46.2,
        sets: [
          {
            reps: 12,
            weight: 46.2,
          },
          {
            reps: 12,
            weight: 45.4,
          },
          {
            reps: 10,
            weight: 37.7,
          },
        ],
        notes: "Form improving.",
      },
    ],
  },
  {
    id: 79,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-06-08",
    totalReps: 63,
    totalWeight: 1454.2,
    averageWeight: 23.08,
    exercises: [
      {
        title: "Calf Raise",
        heaviestWeight: 28.0,
        sets: [
          {
            reps: 11,
            weight: 19.6,
          },
          {
            reps: 9,
            weight: 26.9,
          },
          {
            reps: 10,
            weight: 28.0,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
      {
        title: "Leg Curl",
        heaviestWeight: 26.3,
        sets: [
          {
            reps: 12,
            weight: 20.1,
          },
          {
            reps: 11,
            weight: 26.3,
          },
          {
            reps: 10,
            weight: 18.6,
          },
        ],
        notes: "Great pump!",
      },
    ],
  },
  {
    id: 80,
    workoutTitle: "Push Day",
    dateCompleted: "2025-06-10",
    totalReps: 55,
    totalWeight: 1587.5,
    averageWeight: 28.86,
    exercises: [
      {
        title: "Dumbbell Bench Press",
        heaviestWeight: 27.6,
        sets: [
          {
            reps: 10,
            weight: 27.6,
          },
          {
            reps: 11,
            weight: 25.4,
          },
          {
            reps: 9,
            weight: 26.0,
          },
        ],
        notes: "Core was really engaged today.",
      },
      {
        title: "Incline Dumbbell Press",
        heaviestWeight: 35.3,
        sets: [
          {
            reps: 8,
            weight: 35.3,
          },
          {
            reps: 8,
            weight: 28.8,
          },
          {
            reps: 9,
            weight: 31.7,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
    ],
  },
  {
    id: 81,
    workoutTitle: "Push Day",
    dateCompleted: "2025-06-12",
    totalReps: 57,
    totalWeight: 1744.0,
    averageWeight: 30.6,
    exercises: [
      {
        title: "Dumbbell Bench Press",
        heaviestWeight: 30.9,
        sets: [
          {
            reps: 8,
            weight: 24.9,
          },
          {
            reps: 12,
            weight: 27.1,
          },
          {
            reps: 8,
            weight: 30.9,
          },
        ],
        notes: "Core was really engaged today.",
      },
      {
        title: "Incline Dumbbell Press",
        heaviestWeight: 36.2,
        sets: [
          {
            reps: 8,
            weight: 36.2,
          },
          {
            reps: 12,
            weight: 32.3,
          },
          {
            reps: 9,
            weight: 32.8,
          },
        ],
        notes: "Felt strong today.",
      },
    ],
  },
  {
    id: 82,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-06-14",
    totalReps: 62,
    totalWeight: 1856.4,
    averageWeight: 29.94,
    exercises: [
      {
        title: "Walking Lunges",
        heaviestWeight: 30.9,
        sets: [
          {
            reps: 8,
            weight: 30.6,
          },
          {
            reps: 10,
            weight: 26.1,
          },
          {
            reps: 12,
            weight: 30.9,
          },
        ],
        notes: "Felt strong today.",
      },
      {
        title: "Leg Curl",
        heaviestWeight: 34.6,
        sets: [
          {
            reps: 11,
            weight: 25.2,
          },
          {
            reps: 11,
            weight: 34.6,
          },
          {
            reps: 10,
            weight: 32.2,
          },
        ],
        notes: "Great pump!",
      },
    ],
  },
  {
    id: 83,
    workoutTitle: "Push Day",
    dateCompleted: "2025-06-16",
    totalReps: 59,
    totalWeight: 2355.3,
    averageWeight: 39.92,
    exercises: [
      {
        title: "Dumbbell Bench Press",
        heaviestWeight: 41.0,
        sets: [
          {
            reps: 8,
            weight: 41.0,
          },
          {
            reps: 10,
            weight: 34.7,
          },
          {
            reps: 10,
            weight: 38.8,
          },
        ],
        notes: "Form improving.",
      },
      {
        title: "Incline Dumbbell Press",
        heaviestWeight: 45.6,
        sets: [
          {
            reps: 11,
            weight: 45.6,
          },
          {
            reps: 11,
            weight: 42.1,
          },
          {
            reps: 9,
            weight: 36.4,
          },
        ],
        notes: "Core was really engaged today.",
      },
    ],
  },
  {
    id: 84,
    workoutTitle: "Push Day",
    dateCompleted: "2025-06-18",
    totalReps: 58,
    totalWeight: 1419.0,
    averageWeight: 24.47,
    exercises: [
      {
        title: "Dumbbell Bench Press",
        heaviestWeight: 25.4,
        sets: [
          {
            reps: 9,
            weight: 25.0,
          },
          {
            reps: 10,
            weight: 25.4,
          },
          {
            reps: 12,
            weight: 20.1,
          },
        ],
        notes: "Core was really engaged today.",
      },
      {
        title: "Incline Dumbbell Press",
        heaviestWeight: 30.0,
        sets: [
          {
            reps: 9,
            weight: 24.2,
          },
          {
            reps: 8,
            weight: 30.0,
          },
          {
            reps: 10,
            weight: 24.1,
          },
        ],
        notes: "Great pump!",
      },
    ],
  },
  {
    id: 85,
    workoutTitle: "Full Body",
    dateCompleted: "2025-06-20",
    totalReps: 63,
    totalWeight: 2227.4,
    averageWeight: 35.36,
    exercises: [
      {
        title: "Goblet Squat",
        heaviestWeight: 31.0,
        sets: [
          {
            reps: 11,
            weight: 29.4,
          },
          {
            reps: 9,
            weight: 31.0,
          },
          {
            reps: 11,
            weight: 29.7,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
      {
        title: "Chin-Up",
        heaviestWeight: 45.0,
        sets: [
          {
            reps: 11,
            weight: 35.8,
          },
          {
            reps: 12,
            weight: 45.0,
          },
          {
            reps: 9,
            weight: 40.5,
          },
        ],
        notes: "Great pump!",
      },
    ],
  },
  {
    id: 86,
    workoutTitle: "Push Day",
    dateCompleted: "2025-06-22",
    totalReps: 61,
    totalWeight: 2169.3,
    averageWeight: 35.56,
    exercises: [
      {
        title: "Incline Dumbbell Press",
        heaviestWeight: 36.0,
        sets: [
          {
            reps: 10,
            weight: 36.0,
          },
          {
            reps: 11,
            weight: 33.2,
          },
          {
            reps: 11,
            weight: 35.0,
          },
        ],
        notes: "Felt strong today.",
      },
      {
        title: "Overhead Press",
        heaviestWeight: 39.3,
        sets: [
          {
            reps: 10,
            weight: 39.3,
          },
          {
            reps: 11,
            weight: 35.9,
          },
          {
            reps: 8,
            weight: 33.9,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
    ],
  },
  {
    id: 87,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-06-24",
    totalReps: 62,
    totalWeight: 1527.9,
    averageWeight: 24.64,
    exercises: [
      {
        title: "Walking Lunges",
        heaviestWeight: 25.4,
        sets: [
          {
            reps: 12,
            weight: 25.4,
          },
          {
            reps: 11,
            weight: 18.9,
          },
          {
            reps: 8,
            weight: 20.9,
          },
        ],
        notes: "Great pump!",
      },
      {
        title: "Back Squat",
        heaviestWeight: 30.8,
        sets: [
          {
            reps: 12,
            weight: 24.4,
          },
          {
            reps: 9,
            weight: 30.8,
          },
          {
            reps: 10,
            weight: 27.8,
          },
        ],
        notes: "Struggled on last set.",
      },
    ],
  },
  {
    id: 88,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-06-26",
    totalReps: 54,
    totalWeight: 1893.1,
    averageWeight: 35.06,
    exercises: [
      {
        title: "Dumbbell Curl",
        heaviestWeight: 27.9,
        sets: [
          {
            reps: 10,
            weight: 25.4,
          },
          {
            reps: 8,
            weight: 23.1,
          },
          {
            reps: 9,
            weight: 27.9,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
      {
        title: "Lat Pulldown",
        heaviestWeight: 47.8,
        sets: [
          {
            reps: 8,
            weight: 40.5,
          },
          {
            reps: 10,
            weight: 44.9,
          },
          {
            reps: 9,
            weight: 47.8,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
    ],
  },
  {
    id: 89,
    workoutTitle: "Full Body",
    dateCompleted: "2025-06-28",
    totalReps: 57,
    totalWeight: 1777.0,
    averageWeight: 31.18,
    exercises: [
      {
        title: "Push Press",
        heaviestWeight: 28.4,
        sets: [
          {
            reps: 8,
            weight: 22.9,
          },
          {
            reps: 11,
            weight: 28.4,
          },
          {
            reps: 10,
            weight: 25.1,
          },
        ],
        notes: "Struggled on last set.",
      },
      {
        title: "Deadlift",
        heaviestWeight: 37.7,
        sets: [
          {
            reps: 10,
            weight: 37.7,
          },
          {
            reps: 9,
            weight: 35.9,
          },
          {
            reps: 9,
            weight: 36.7,
          },
        ],
        notes: "Solid tempo, good control.",
      },
    ],
  },
  {
    id: 90,
    workoutTitle: "Push Day",
    dateCompleted: "2025-06-30",
    totalReps: 64,
    totalWeight: 1954.3,
    averageWeight: 30.54,
    exercises: [
      {
        title: "Overhead Press",
        heaviestWeight: 29.0,
        sets: [
          {
            reps: 11,
            weight: 21.2,
          },
          {
            reps: 12,
            weight: 26.6,
          },
          {
            reps: 11,
            weight: 29.0,
          },
        ],
        notes: "Form improving.",
      },
      {
        title: "Incline Dumbbell Press",
        heaviestWeight: 40.3,
        sets: [
          {
            reps: 8,
            weight: 31.0,
          },
          {
            reps: 11,
            weight: 40.3,
          },
          {
            reps: 11,
            weight: 35.6,
          },
        ],
        notes: "Had to lower weight mid-way.",
      },
    ],
  },
  {
    id: 91,
    workoutTitle: "Push Day",
    dateCompleted: "2025-07-02",
    totalReps: 64,
    totalWeight: 2371.6,
    averageWeight: 37.06,
    exercises: [
      {
        title: "Overhead Press",
        heaviestWeight: 37.5,
        sets: [
          {
            reps: 11,
            weight: 35.7,
          },
          {
            reps: 12,
            weight: 34.5,
          },
          {
            reps: 12,
            weight: 37.5,
          },
        ],
        notes: "Form improving.",
      },
      {
        title: "Dips",
        heaviestWeight: 42.5,
        sets: [
          {
            reps: 9,
            weight: 38.5,
          },
          {
            reps: 8,
            weight: 42.5,
          },
          {
            reps: 12,
            weight: 35.7,
          },
        ],
        notes: "Form improving.",
      },
    ],
  },
  {
    id: 92,
    workoutTitle: "Pull Day",
    dateCompleted: "2025-07-04",
    totalReps: 61,
    totalWeight: 1813.5,
    averageWeight: 29.73,
    exercises: [
      {
        title: "Dumbbell Curl",
        heaviestWeight: 29.6,
        sets: [
          {
            reps: 12,
            weight: 29.6,
          },
          {
            reps: 8,
            weight: 23.1,
          },
          {
            reps: 12,
            weight: 23.4,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
      {
        title: "Face Pull",
        heaviestWeight: 36.3,
        sets: [
          {
            reps: 8,
            weight: 35.4,
          },
          {
            reps: 9,
            weight: 36.3,
          },
          {
            reps: 12,
            weight: 31.9,
          },
        ],
        notes: "Great pump!",
      },
    ],
  },
  {
    id: 93,
    workoutTitle: "Push Day",
    dateCompleted: "2025-07-06",
    totalReps: 65,
    totalWeight: 1706.1,
    averageWeight: 26.25,
    exercises: [
      {
        title: "Incline Dumbbell Press",
        heaviestWeight: 23.8,
        sets: [
          {
            reps: 12,
            weight: 18.8,
          },
          {
            reps: 9,
            weight: 23.8,
          },
          {
            reps: 11,
            weight: 22.3,
          },
        ],
        notes: "Felt strong today.",
      },
      {
        title: "Dips",
        heaviestWeight: 32.3,
        sets: [
          {
            reps: 12,
            weight: 30.3,
          },
          {
            reps: 10,
            weight: 32.3,
          },
          {
            reps: 11,
            weight: 30.4,
          },
        ],
        notes: "Struggled on last set.",
      },
    ],
  },
  {
    id: 94,
    workoutTitle: "Push Day",
    dateCompleted: "2025-07-08",
    totalReps: 64,
    totalWeight: 2331.0,
    averageWeight: 36.42,
    exercises: [
      {
        title: "Overhead Press",
        heaviestWeight: 32.7,
        sets: [
          {
            reps: 11,
            weight: 27.4,
          },
          {
            reps: 12,
            weight: 26.8,
          },
          {
            reps: 10,
            weight: 32.7,
          },
        ],
        notes: "Great pump!",
      },
      {
        title: "Dips",
        heaviestWeight: 47.0,
        sets: [
          {
            reps: 9,
            weight: 47.0,
          },
          {
            reps: 12,
            weight: 45.0,
          },
          {
            reps: 10,
            weight: 41.8,
          },
        ],
        notes: "Struggled on last set.",
      },
    ],
  },
  {
    id: 95,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-07-10",
    totalReps: 62,
    totalWeight: 2096.7,
    averageWeight: 33.82,
    exercises: [
      {
        title: "Calf Raise",
        heaviestWeight: 27.2,
        sets: [
          {
            reps: 8,
            weight: 21.4,
          },
          {
            reps: 11,
            weight: 27.2,
          },
          {
            reps: 11,
            weight: 21.0,
          },
        ],
        notes: "Form improving.",
      },
      {
        title: "Back Squat",
        heaviestWeight: 45.3,
        sets: [
          {
            reps: 12,
            weight: 42.5,
          },
          {
            reps: 9,
            weight: 43.0,
          },
          {
            reps: 11,
            weight: 45.3,
          },
        ],
        notes: "Core was really engaged today.",
      },
    ],
  },
  {
    id: 96,
    workoutTitle: "Full Body",
    dateCompleted: "2025-07-12",
    totalReps: 60,
    totalWeight: 1481.2,
    averageWeight: 24.69,
    exercises: [
      {
        title: "Chin-Up",
        heaviestWeight: 20.6,
        sets: [
          {
            reps: 11,
            weight: 20.6,
          },
          {
            reps: 9,
            weight: 17.7,
          },
          {
            reps: 10,
            weight: 16.1,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
      {
        title: "Push Press",
        heaviestWeight: 35.8,
        sets: [
          {
            reps: 11,
            weight: 30.2,
          },
          {
            reps: 8,
            weight: 35.8,
          },
          {
            reps: 11,
            weight: 28.7,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
    ],
  },
  {
    id: 97,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-07-14",
    totalReps: 57,
    totalWeight: 1719.6,
    averageWeight: 30.17,
    exercises: [
      {
        title: "Calf Raise",
        heaviestWeight: 21.8,
        sets: [
          {
            reps: 8,
            weight: 21.8,
          },
          {
            reps: 9,
            weight: 19.8,
          },
          {
            reps: 10,
            weight: 16.9,
          },
        ],
        notes: "Core was really engaged today.",
      },
      {
        title: "Walking Lunges",
        heaviestWeight: 42.4,
        sets: [
          {
            reps: 10,
            weight: 42.4,
          },
          {
            reps: 12,
            weight: 40.9,
          },
          {
            reps: 8,
            weight: 35.4,
          },
        ],
        notes: "Struggled on last set.",
      },
    ],
  },
  {
    id: 98,
    workoutTitle: "Full Body",
    dateCompleted: "2025-07-16",
    totalReps: 64,
    totalWeight: 1837.7,
    averageWeight: 28.71,
    exercises: [
      {
        title: "Chin-Up",
        heaviestWeight: 36.5,
        sets: [
          {
            reps: 10,
            weight: 36.5,
          },
          {
            reps: 9,
            weight: 35.0,
          },
          {
            reps: 11,
            weight: 33.9,
          },
        ],
        notes: "Felt strong today.",
      },
      {
        title: "Push Press",
        heaviestWeight: 24.9,
        sets: [
          {
            reps: 10,
            weight: 24.0,
          },
          {
            reps: 12,
            weight: 20.5,
          },
          {
            reps: 12,
            weight: 24.9,
          },
        ],
        notes: "Form improving.",
      },
    ],
  },
  {
    id: 99,
    workoutTitle: "Leg Day",
    dateCompleted: "2025-07-18",
    totalReps: 60,
    totalWeight: 2097.8,
    averageWeight: 34.96,
    exercises: [
      {
        title: "Leg Curl",
        heaviestWeight: 33.1,
        sets: [
          {
            reps: 12,
            weight: 32.2,
          },
          {
            reps: 10,
            weight: 30.8,
          },
          {
            reps: 12,
            weight: 33.1,
          },
        ],
        notes: "Core was really engaged today.",
      },
      {
        title: "Back Squat",
        heaviestWeight: 42.5,
        sets: [
          {
            reps: 10,
            weight: 37.5,
          },
          {
            reps: 8,
            weight: 36.4,
          },
          {
            reps: 8,
            weight: 42.5,
          },
        ],
        notes: "Fatigued but finished all reps.",
      },
    ],
  },
];

export default completedWorkouts;
