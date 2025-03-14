"use server";

import fs from "fs/promises"; // ✅ Use the promise-based fs module
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app", "content", "blog");

export async function getPosts() {
  const fileNames = await fs.readdir(postsDirectory);
  
  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: fileName.replace(/\.md$/, ""),
        data,
        content,
      };
    })
  );

  // ✅ Sort by post date
  return posts.sort(
    (a, b) =>
      new Date(b.data.postDate).getTime() - new Date(a.data.postDate).getTime()
  );
}
