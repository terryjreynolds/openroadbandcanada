import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
  );
  if (!response.ok) return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });

  const data = await response.json();
  return NextResponse.json(data);
}
