import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>

      <p className="text-gray-600 mb-8">
        Manage your account settings, security, and activity from here.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile */}
        <Link
          href="/dashboard/profile"
          className="group bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
        >
          <div className="text-3xl mb-3">👤</div>

          <h2 className="text-lg font-semibold mb-1 group-hover:text-blue-600">
            My Profile
          </h2>

          <p className="text-gray-500 text-sm">
            Update your name, email, and profile photo.
          </p>
        </Link>

        {/* Security */}
        <Link
          href="/dashboard/security"
          className="group bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
        >
          <div className="text-3xl mb-3">🔒</div>

          <h2 className="text-lg font-semibold mb-1 group-hover:text-blue-600">
            Security
          </h2>

          <p className="text-gray-500 text-sm">
            Change your password and manage security settings.
          </p>
        </Link>

        {/* Activity */}
        <Link
          href="/dashboard/activity"
          className="group bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
        >
          <div className="text-3xl mb-3">📊</div>

          <h2 className="text-lg font-semibold mb-1 group-hover:text-blue-600">
            Activity
          </h2>

          <p className="text-gray-500 text-sm">
            View login history and recent account activity.
          </p>
        </Link>
      </div>
    </div>
  );
}
