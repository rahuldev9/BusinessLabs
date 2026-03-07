"use client";

import { useState } from "react";
import WeatherCard from "./WeatherCard";
import WeatherSkeleton from "./WeatherSkeleton";
import { fetchWeather } from "@/utils/fetchWeather";
import { WeatherData } from "@/types/weather";

export default function WeatherDashboard() {
  const [city, setCity] = useState("London");
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  async function loadWeather() {
    setLoading(true);

    try {
      const weather = await fetchWeather(city);

      setData(weather);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Weather Dashboard</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border rounded-lg px-4 py-2 flex-1"
        />

        <button
          onClick={loadWeather}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </div>

      {loading && <WeatherSkeleton />}

      {!loading && data && <WeatherCard data={data} />}
    </div>
  );
}
