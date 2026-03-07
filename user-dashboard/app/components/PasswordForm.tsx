"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type Profile = {
  name?: string;
  email?: string;
  image?: string | null;
  password?: string;
};

export default function PasswordForm() {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("profile");

    if (stored) {
      setProfile(JSON.parse(stored));
    } else {
      setProfile({});
    }

    setLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!profile) return;

    // If password exists → verify old password
    if (profile.password) {
      if (oldPass !== profile.password) {
        setMsg("Old password is incorrect");
        return;
      }
    }

    // Confirm match
    if (newPass !== confirm) {
      setMsg("Passwords do not match");
      return;
    }

    const updatedProfile = {
      ...profile,
      password: newPass,
    };

    localStorage.setItem("profile", JSON.stringify(updatedProfile));
    setProfile(updatedProfile);
    router.replace("/dashboard");
    setMsg(
      profile.password
        ? "Password updated successfully"
        : "Password created successfully",
    );

    setOldPass("");
    setNewPass("");
    setConfirm("");
  };

  if (loading) {
    return (
      <div className="max-w-xl mx-auto">
        <div className="bg-white shadow-md rounded-xl p-6 space-y-4 animate-pulse">
          <div className="h-12 bg-gray-200 rounded-lg"></div>
          <div className="h-12 bg-gray-200 rounded-lg"></div>
          <div className="h-12 bg-gray-200 rounded-lg"></div>
          <div className="h-10 w-40 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
  }

  const hasPassword = profile?.password;

  return (
    <div className="max-w-xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 md:p-8 space-y-5"
      >
        <h2 className="text-lg font-semibold">
          {hasPassword ? "Change Password" : "Create Password"}
        </h2>

        {/* Old password only if already exists */}
        {hasPassword && (
          <input
            type="password"
            placeholder="Old Password"
            value={oldPass}
            onChange={(e) => setOldPass(e.target.value)}
            className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        )}

        <input
          type="password"
          placeholder="New Password"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          {hasPassword ? "Update Password" : "Create Password"}
        </button>

        {msg && (
          <p
            className={`text-sm ${
              msg.includes("success") ? "text-green-600" : "text-red-500"
            }`}
          >
            {msg}
          </p>
        )}
      </form>
    </div>
  );
}
