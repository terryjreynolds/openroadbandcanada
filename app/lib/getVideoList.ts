import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getVideoList() {
  const filePath = path.join(process.cwd(), "app/content/videos/video-list.md");
  console.log("File Path:", filePath); // Debugging: Check the resolved file path

  const fileContent = fs.readFileSync(filePath, "utf-8");
  console.log("File Content:", fileContent); // Debugging: Check the raw file content

  // Parse the Markdown file
  const { content } = matter(fileContent);
  console.log("Content:", content); // Debugging: Check the body content

  // Split the content into an array of URLs
  const videoUrls = content
    .replace(/\r/g, "") // Remove carriage return characters (for Windows compatibility)
    .split("\n") // Split content into lines
    .map((line) => line.trim()) // Remove extra spaces
    .filter((line) => line.startsWith("- ")) // Keep lines that start with "- "
    .map((line) => line.replace(/^- /, "")); // Remove the leading "- " to extract the URL

  console.log("Extracted Video URLs:", videoUrls); // Debugging: Check the extracted URLs
  return videoUrls;
}
