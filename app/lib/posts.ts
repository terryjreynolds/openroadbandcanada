import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
    slug: string;
    title: string;
    image: string;
    description: string;
    date: string;
    content: string;
  };  

  const postsDirectory = path.join(process.cwd(), "app", "content", "blog");


export function getPosts(): Post[] {
    const fileNames = fs.readdirSync(postsDirectory);
  
    const posts = fileNames.map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
     
  
      return {
        slug: fileName.replace(/\.md$/, ""),
        data,
        content,
      };
    });
  
    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  };
}
