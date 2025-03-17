import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log('Im in POST');
    // Parse the request body
    const body = await req.json();
    console.log("Received body:", body);

    // Get the Google Sheets endpoint URL from environment variables
    const googleSheetsUrl = process.env.GOOGLE_SHEETS_ENDPOINT_URL as string;
    console.log("Sending request to:", googleSheetsUrl);

    // Send the data to the Google Sheets endpoint
    const response = await fetch(googleSheetsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`Failed to submit: ${response.statusText}`);
    }

    // Parse the response from Google Sheets
    const result = await response.json();
    console.log("Raw response from Google Sheets:", result);

    // Check the response status
    console.log("Response status:", response.status);

    // If the response indicates failure, throw an error
    if (result.status !== "success") {
      throw new Error(`Failed to submit: ${response.statusText}`);
    }

    // Return a success response using NextResponse.json()
    return NextResponse.json({ message: "Comment submitted successfully", result });
  } catch (error) {
    console.error("Error submitting comment:", error);

    // Return a failure response using NextResponse.json() with a status code of 500
    return NextResponse.json(
      { message: "Failed to submit comment" },
      { status: 500 }
    );
  }
}