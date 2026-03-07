export default function SkeletonCard() {
  return (
    <div className="animate-pulse border rounded-xl p-4 bg-white shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="h-4 w-24 bg-gray-300 rounded"></div>
      </div>

      <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 w-16 bg-gray-300 rounded"></div>
    </div>
  );
}
