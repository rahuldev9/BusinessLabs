"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type Profile = {
  name?: string;
  image?: string | null;
};

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("profile");
    if (stored) setProfile(JSON.parse(stored));
  }, []);

  const navItem = (route: string) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium relative ${
      pathname === route
        ? "bg-blue-50 text-blue-600"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  const activeBar = (route: string) =>
    pathname === route
      ? "absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-r"
      : "";

  const getTitle = () => {
    if (pathname.includes("profile")) return "My Profile";
    if (pathname.includes("security")) return "Security";
    if (pathname.includes("activity")) return "Activity";
    return "Dashboard";
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-white shadow z-40">
        <button
          onClick={() => setOpen(true)}
          className="text-xl p-2 rounded hover:bg-gray-100"
        >
          ☰
        </button>

        <h1 className="font-semibold text-blue-600">{getTitle()}</h1>

        <Link href="/dashboard/profile">
          {profile?.image ? (
            <img
              src={profile.image}
              className="w-9 h-9 rounded-full object-cover"
            />
          ) : (
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
              👤
            </div>
          )}
        </Link>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-white z-40 transform transition-transform duration-300 flex flex-col
  ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}
      >
        {/* Logo */}
        <div className="p-6 text-xl font-bold text-blue-600">User Panel</div>

        {/* Navigation */}
        <nav className="px-4 space-y-2 flex-1">
          <Link
            href="/dashboard/profile"
            onClick={() => setOpen(false)}
            className={navItem("/dashboard/profile")}
          >
            <span className={activeBar("/dashboard/profile")} />
            👤 My Profile
          </Link>

          <Link
            href="/dashboard/security"
            onClick={() => setOpen(false)}
            className={navItem("/dashboard/security")}
          >
            <span className={activeBar("/dashboard/security")} />
            🔒 Security
          </Link>

          <Link
            href="/dashboard/activity"
            onClick={() => setOpen(false)}
            className={navItem("/dashboard/activity")}
          >
            <span className={activeBar("/dashboard/activity")} />
            📊 Activity
          </Link>
        </nav>

        {/* Bottom Profile Card */}
        <Link
          href="/dashboard/profile"
          className="mt-auto p-4 border-t-gray-800 flex items-center gap-3 hover:bg-gray-50"
        >
          {profile?.image ? (
            <img
              src={profile.image}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              👤
            </div>
          )}

          <div>
            <p className="text-sm font-medium">{profile?.name || "User"}</p>
            <p className="text-xs text-gray-500">View Profile</p>
          </div>
        </Link>
      </aside>
    </>
  );
}
