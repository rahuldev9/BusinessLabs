import { useState, useEffect } from "react";

export default function ContentForm({ onSubmit, editData }: any) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setBody(editData.body);
    }
  }, [editData]);

  const submit = async () => {
    if (!title || !body) return;

    setLoading(true);

    await onSubmit({ title, body });

    setLoading(false);
    setTitle("");
    setBody("");
  };

  return (
    <div className="max-w-xl bg-white shadow-lg rounded-xl p-6 border border-gray-200 mb-6">
      <h2 className="text-xl font-semibold mb-5 text-gray-800">
        {editData ? "Edit Content" : "Create Content"}
      </h2>

      <div className="space-y-4">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />

        <textarea
          placeholder="Body"
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />

        <button
          onClick={submit}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition flex justify-center items-center gap-2"
        >
          {loading && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}

          {loading ? "Saving..." : editData ? "Update Content" : "Save Content"}
        </button>
      </div>
    </div>
  );
}
