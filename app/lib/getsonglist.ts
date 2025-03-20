"use server";

import fs from "fs/promises"; // ✅ Use the promise-based fs module
import path from "path";
import matter from "gray-matter";

const songlistDirectory = path.join(process.cwd(), "app", "content", "songlist");

// ✅ Get songlist
export async function getSonglist() {
  console.log('im in getSonglist');
  const fileNames = await fs.readdir(songlistDirectory);
  console.log('filenames', fileNames);
  console.log("songlistDirectory", songlistDirectory);
  
  const songlist = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(songlistDirectory, fileName);
      const fileContents = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: fileName.replace(/\.md$/, ""),
        data: {
          title: data.title || "Unknown Title", // Ensure required fields
          updated: data.updated || "Unknown Date",
          description: data.description,
          ...data, // Include any other fields
        },
        content,
      };
    })
  );

  console.log('songlist', songlist);

  // ✅ Sort by post date
//   return posts.sort(
//     (a, b) =>
//       new Date(b.data.postDate).getTime() - new Date(a.data.postDate).getTime()
//   );

return (
  songlist
  );


}


// ✅ Get a single post by slug
// export async function getPostBySlug(slug: string) {
//   const posts = await getPosts(); // Use cached results if possible
//   return posts.find((post) => post.slug === slug) || null;
// }
