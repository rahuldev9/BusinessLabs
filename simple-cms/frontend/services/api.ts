const API_URL = "http://localhost:8000/content";

export async function getContent() {
  const res = await fetch(API_URL + "/");
  return res.json();
}

export async function createContent(data: any) {
  await fetch(API_URL + "/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function updateContent(id: number, data: any) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function deleteContent(id: number) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}
