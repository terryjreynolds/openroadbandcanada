import Link from "next/link";
import { getPosts } from "../lib/posts";
import styles from "../page.module.css";



const POSTS_PER_PAGE = 2;

export default async function BlogPage({ searchParams }: { searchParams?: { page?: string } }) {
  const allPosts = getPosts();
  const currentPage = Number((await searchParams)?.page) || 1;
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const posts = allPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <div>
       <div className={styles.backgroundCamaro}></div> 
      <h1 className={styles.blogYellowHeadings}>NEWS</h1>
      {posts.map((post) => (
        <div key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <h2 className={styles.blogWhiteHeadings}>{post.title}</h2>
          </Link>
          <p>{post.content}</p>
          <small>{post.date}</small>
        </div>
      ))}

      <div>
        {currentPage > 1 && (
          <Link href={`/blog?page=${currentPage - 1}`}>Previous</Link>
        )}
        {currentPage < totalPages && (
          <Link href={`/blog?page=${currentPage + 1}`}>Next</Link>
        )}
      </div>
    </div>
  );
}
