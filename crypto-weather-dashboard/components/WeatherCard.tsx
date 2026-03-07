import { WeatherData } from "@/types/weather";

interface Props {
  data: WeatherData;
}

export default function WeatherCard({ data }: Props) {
  const icon = `https://openweathermap.org/img/wn/${data.weather?.[0].icon}@2x.png`;

  return (
    <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition bg-white text-center">
      <h2 className="text-2xl font-bold mb-2">{data.name}</h2>

      <img src={icon} alt="weather icon" className="mx-auto" />

      <p className="text-xl font-semibold">{data?.main?.temp}°C</p>

      <p className="text-gray-600 capitalize">
        {data?.weather?.[0].description}
      </p>

      <div className="mt-4 text-sm text-gray-500">
        <p>Humidity: {data?.main?.humidity}%</p>

        <p>Wind Speed: {data?.wind?.speed} m/s</p>
      </div>
    </div>
  );
}
