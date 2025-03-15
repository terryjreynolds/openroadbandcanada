export async function fetchComments() {
  const url = process.env.GOOGLE_SHEETS_ENDPOINT_URL!;
  console.log("Fetching comments from:", url);

  const res = await fetch(url);

  if (!res.ok) throw new Error(`Failed to fetch comments: ${res.statusText}`);

  const json = await res.json(); // Directly parse JSON
  console.log("Fetched Comments:", json);

  return json;
}



  