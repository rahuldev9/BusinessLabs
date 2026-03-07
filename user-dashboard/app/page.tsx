import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-blue-600">UserPanel</h1>

          <nav className="flex items-center gap-6 text-gray-600 font-medium">
            <a href="#features" className="hover:text-blue-600 transition">
              Features
            </a>

            <Link
              href="/dashboard/profile"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Manage Your Account <br />
          <span className="text-blue-600">With a Modern Dashboard</span>
        </h2>

        <p className="text-gray-600 max-w-2xl mb-8 text-lg">
          Easily update your profile, manage security settings, and track
          account activity from a clean and responsive dashboard interface.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/dashboard/profile"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow"
          >
            Open Dashboard
          </Link>

          <a
            href="#features"
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Dashboard Features</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">👤</div>

              <h4 className="font-semibold text-lg mb-2">Profile Management</h4>

              <p className="text-gray-600">
                Update your name, email address, and profile photo easily.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">🔒</div>

              <h4 className="font-semibold text-lg mb-2">Secure Password</h4>

              <p className="text-gray-600">
                Change your password securely with validation checks.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-blue-600 text-4xl mb-4">📊</div>

              <h4 className="font-semibold text-lg mb-2">Activity Tracking</h4>

              <p className="text-gray-600">
                View login history and monitor recent account activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-6">
          Ready to Manage Your Account?
        </h3>

        <p className="text-gray-600 mb-8">
          Access your dashboard and start managing your account today.
        </p>

        <Link
          href="/dashboard/profile"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg"
        >
          Go to Dashboard
        </Link>
      </section>
    </main>
  );
}
