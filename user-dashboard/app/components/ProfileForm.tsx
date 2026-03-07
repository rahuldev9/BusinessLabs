"use client";

import { useState, useEffect } from "react";

type ProfileData = {
  name: string;
  email: string;
  image: string | null;
};

export default function ProfileForm() {
  const [profile, setProfile] = useState<ProfileData>({
    name: "",
    email: "",
    image: null,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("profile");

    if (saved) {
      setProfile(JSON.parse(saved));
    } else {
      setProfile({
        name: "John Doe",
        email: "john@email.com",
        image: null,
      });
    }

    setTimeout(() => {
      setLoading(false);
    }, 500); // small delay for skeleton visibility
  }, []);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProfile((prev) => ({
          ...prev,
          image: reader.result as string,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem("profile", JSON.stringify(profile));

    alert("Profile saved successfully");
  };

  // Skeleton Loader
  if (loading) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 space-y-6 animate-pulse">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-200"></div>
            <div className="h-6 w-32 bg-gray-200 rounded"></div>
          </div>

          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
            <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
          </div>

          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
            <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
          </div>

          <div className="h-12 w-32 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 md:p-8 space-y-6"
      >
        {/* Avatar */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {profile.image ? (
            <img
              src={profile.image}
              alt="profile"
              className="w-20 h-20 rounded-full object-cover"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              👤
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600">Upload Photo</label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="text-sm"
            />
          </div>
        </div>

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-600">Full Name</label>

          <input
            className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-600">Email Address</label>

          <input
            type="email"
            className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
        </div>

        {/* Button */}
        <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Save Changes
        </button>
      </form>
    </div>
  );
}
