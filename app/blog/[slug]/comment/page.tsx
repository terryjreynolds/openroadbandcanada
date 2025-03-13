import { getPostBySlug } from "@/lib/posts";
import CommentForm from "@/components/CommentForm";
import Link from "next/link";

export default async function CommentPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) return <p>Post not found.</p>;

  return (
    <div>
      <h2>{`${post.data.eventDate} — ${post.data.title}`}</h2>
      <p>{post.content}</p>

      <CommentForm slug={params.slug} />

      <Link href="/blog">
        <button>Back to Blog</button>
      </Link>
    </div>
  );
}
