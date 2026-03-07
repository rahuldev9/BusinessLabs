import { WeatherData } from "@/types/weather";

export async function fetchWeather(city: string): Promise<WeatherData> {
  const res = await fetch(`/api/weather?city=${city}`);

  if (!res.ok) {
    throw new Error("Failed to fetch weather");
  }

  return res.json();
}
