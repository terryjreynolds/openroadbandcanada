import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  data: {
    title: string;
    eventDate: string;
    postDate: string;
    image: string;
    description: string;
  };
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
      data: data as Post["data"], // ✅ Type assertion for TypeScript
      content,
    };
  });

  // ✅ Fix sorting by drilling into `data.date`
  return posts.sort(
    (a, b) =>
      new Date(b.data.postDate).getTime() - new Date(a.data.postDate).getTime()
  );
}

export function getPostBySlug(slug: string): Post {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    data: data as Post["data"], // ✅ Type assertion for TypeScript
    content,
  };
}

