import { NextResponse } from "next/server";

export async function GET() {
  console.log('im in getcomments');
  const url = process.env.GOOGLE_SHEETS_GET_URL as string;
  const response = await fetch(url
  );
  if (!response.ok) return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });

  const data = await response.json();
  console.log('apidata:', data);
  return NextResponse.json(data);
}
