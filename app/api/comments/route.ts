import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    
    const body = await req.json();
    console.log("Received body:", body);

    const googleSheetsUrl = "";
    console.log("Sending request to:", googleSheetsUrl);

    const response = await fetch(googleSheetsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json(); // <- Use .text() to debug raw response
console.log("Raw response from Google Sheets:", result);


    console.log("Response status:", response.status);

    if (result.status !== "success") {
      throw new Error(`Failed to submit: ${response.statusText}`);
    }

    return NextResponse.json({ message: "Comment submitted successfully", result });
  } catch (error) {
    console.error("Error submitting comment:", error);
    return NextResponse.json(
      { message: "Failed to submit comment" },
      { status: 500 }
    );
  }
}
