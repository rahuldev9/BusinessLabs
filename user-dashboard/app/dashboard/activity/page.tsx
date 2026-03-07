import ActivityTable from "@/app/components/ActivityTable";

export default function ActivityPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>

      <ActivityTable />
    </div>
  );
}
