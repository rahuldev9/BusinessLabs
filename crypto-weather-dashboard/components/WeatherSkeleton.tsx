export default function WeatherSkeleton() {
  return (
    <div className="animate-pulse border rounded-xl p-6 bg-white shadow">
      <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>

      <div className="h-16 w-16 bg-gray-300 rounded-full mb-4"></div>

      <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 w-28 bg-gray-300 rounded"></div>
    </div>
  );
}
