const API_URL = import.meta.env.VITE_API_URL;

export async function fetchExercises() {
  const response = await fetch(`${API_URL}/api/exercises`);
  if (!response.ok) throw new Error("Failed to fetch exercises");
  return await response.json();
}

export default fetchExercises;
