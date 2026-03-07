import { Content } from "../types/content";

export default function ContentTable({ data, onEdit, onDelete }: any) {
  const loading = !data;

  return (
    <div className="max-w-4xl mx-auto mt-6 bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Content List</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Body</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {loading &&
              [...Array(3)].map((_, i) => (
                <tr key={i} className="animate-pulse">
                  <td className="px-6 py-4">
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="h-4 bg-gray-200 rounded w-48"></div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="h-4 bg-gray-200 rounded w-20 mx-auto"></div>
                  </td>
                </tr>
              ))}

            {data?.length === 0 && (
              <tr>
                <td colSpan={3} className="text-center py-10 text-gray-500">
                  No content found
                </td>
              </tr>
            )}

            {data?.map((item: Content) => (
              <tr key={item.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-800">
                  {item.title}
                </td>

                <td className="px-6 py-4 text-gray-600">{item.body}</td>

                <td className="px-6 py-4 flex justify-center gap-3">
                  <button
                    onClick={() => onEdit(item)}
                    className="px-3 py-1 text-sm bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(item.id)}
                    className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
