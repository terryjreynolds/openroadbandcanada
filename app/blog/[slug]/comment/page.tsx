import { getPostBySlug } from "../../../lib/posts";
import CommentForm from "../../../components/CommentForm";
import Link from "next/link";
import styles from "../../../page.module.css";


export default async function CommentPage({ params }: { params: { slug: string } }) {
  // Await the params to ensure they are resolved
  const { slug } = await params;

  if (!slug) {
    return <div>Loading...</div>;
  }

  const post = await getPostBySlug(slug);
  console.log("Post:", post);

  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div>
      <div className={styles.backgroundBand}></div> 
      <h2>{`${post.data.postDate} — ${post.data.title}`}</h2>
      <p>{post.content}</p>

      <CommentForm slug={slug} onNewComment={(newComment: { id: string; content: string; author: string; }) => console.log(newComment)} />

      <Link href="/blog">
        <button>Back to Blog</button>
      </Link>
    </div>
  );
}
