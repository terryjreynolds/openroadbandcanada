import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPreviousEvents() {
  // Ensure this code runs only on the server side
  if (typeof window !== "undefined") {
    throw new Error("getEvents can only be called on the server side.");
  }

  const filePath = path.join(process.cwd(), "app/content/events/previousEvents.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Parse the Markdown file
  const { content } = matter(fileContent);

  // Convert the content into an array of event objects
  const events = content
    .replace(/\r/g, "") // Remove carriage return characters (for Windows compatibility)
    .split("\n- ") // Split by YAML list items (lines starting with "- ")
    .filter((line) => line.trim() !== "") // Remove empty lines
    .map((line) => {
      // Parse each YAML-like line into an object
      const [dateLine, eventLine, locationLine] = line.split("\n").map((l) => l.trim());
      return {
        date: dateLine.replace("date: ", "").replace(/"/g, ""),
        event: eventLine.replace("event: ", "").replace(/"/g, ""),
        location: locationLine.replace("location: ", "").replace(/"/g, ""),
      };
    });

  return events;
}