import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { slug, name, location, comment } = await req.json();

    // Send to Google Sheets (or store it elsewhere)
    // Example: sendToGoogleSheets(slug, name, location, comment);

    console.log({ slug, name, location, comment });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting comment:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
