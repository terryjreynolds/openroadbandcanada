"use server";

import fs from "fs/promises"; // ✅ Use the promise-based fs module
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app", "content", "blog");

// ✅ Get all posts
export async function getPosts() {
  console.log('im in getPosts');
  const fileNames = await fs.readdir(postsDirectory);
  console.log('filenames', fileNames);
  console.log("postsDirectory", postsDirectory);
  
  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: fileName.replace(/\.md$/, ""),
        data: {
          postDate: data.postDate || "Unknown Date", // Ensure required fields
          eventDate: data.eventDate || "Unknown Date",
          title: data.title || "Untitled",
          description: data.description,
          image: data.description,
          ...data, // Include any other fields
        },
        content,
      };
    })
  );

  console.log('posts', posts);

  // ✅ Sort by post date
  return posts.sort(
    (a, b) =>
      new Date(b.data.postDate).getTime() - new Date(a.data.postDate).getTime()
  );
}


// ✅ Get a single post by slug
export async function getPostBySlug(slug: string) {
  const posts = await getPosts(); // Use cached results if possible
  return posts.find((post) => post.slug === slug) || null;
}
