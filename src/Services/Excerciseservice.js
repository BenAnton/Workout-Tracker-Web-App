export async function fetchExercises() {
  const response = await fetch("http://localhost:5282/api/exercises");
  if (!response.ok) throw new Error("Failed to fetch exercises");
  return await response.json();
}

export default fetchExercises;
