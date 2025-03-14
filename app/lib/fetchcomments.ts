export async function fetchComments() {
    const res = await fetch("/api/get-comments"); // New API route
    if (!res.ok) throw new Error("Failed to fetch comments");
    return await res.json();
  }
  