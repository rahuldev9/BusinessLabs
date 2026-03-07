import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Real-Time API Dashboards
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Visualize live cryptocurrency prices and weather data using powerful
            APIs. Built with Next.js, TypeScript and modern UI.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/crypto"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              View Crypto Dashboard
            </Link>

            <Link
              href="/weather"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Check Weather
            </Link>
          </div>
        </div>

        <div className="bg-white p-10 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Live API Integration</h3>

          <p className="text-gray-600">
            Fetch real-time data using public APIs like CoinGecko and
            OpenWeatherMap. Display results using responsive UI cards and
            dynamic components.
          </p>
        </div>
      </section>

      {/* FEATURES */}

      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">Features</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Real-Time Data</h3>

              <p className="text-gray-600">
                Fetch and visualize real-time data from external APIs using
                async/await.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Responsive Layout</h3>

              <p className="text-gray-600">
                Built with TailwindCSS to ensure a perfect experience on mobile,
                tablet, and desktop.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Interactive UI</h3>

              <p className="text-gray-600">
                Refresh data, search weather, and interact with modern dashboard
                components.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API SECTION */}

      <section id="apis" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Explore Dashboards
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* CRYPTO CARD */}

            <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">Crypto Dashboard</h3>

              <p className="text-gray-600 mb-6">
                View live cryptocurrency prices using the CoinGecko API. Data
                updates dynamically with refresh functionality.
              </p>

              <Link
                href="/crypto"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Open Crypto Dashboard
              </Link>
            </div>

            {/* WEATHER CARD */}

            <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">Weather Dashboard</h3>

              <p className="text-gray-600 mb-6">
                Search any city and view real-time weather information using the
                OpenWeatherMap API.
              </p>

              <Link
                href="/weather"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              >
                Open Weather Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Start Exploring APIs</h2>

        <p className="mb-8">
          Experience real-time dashboards built with Next.js.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/crypto"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
          >
            Crypto Dashboard
          </Link>

          <Link
            href="/weather"
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold"
          >
            Weather Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
