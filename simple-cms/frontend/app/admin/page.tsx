"use client";

import { useEffect, useState } from "react";
import ContentForm from "../../components/ContentForm";
import ContentTable from "../../components/ContentTable";
import {
  getContent,
  createContent,
  deleteContent,
  updateContent,
} from "../../services/api";

export default function AdminPage() {
  const [content, setContent] = useState([]);
  const [editing, setEditing] = useState<any>(null);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const data = await getContent();
    setContent(data);
  };

  const handleCreate = async (data: any) => {
    if (editing) {
      await updateContent(editing.id, data);
      setEditing(null);
    } else {
      await createContent(data);
    }

    loadContent();
  };

  const handleDelete = async (id: number) => {
    await deleteContent(id);
    loadContent();
  };

  const handleEdit = (item: any) => {
    setEditing(item);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin CMS</h1>

      <ContentForm onSubmit={handleCreate} editData={editing} />

      <ContentTable
        data={content}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}
