import { getPostBySlug } from "../../lib/posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import styles from "../../page.module.css";
import Image from "next/image";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) return notFound();

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      images: [post.image],
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div>
      <h1>{post.title}</h1>
      <div className={styles.blogImage}>
<Image
src={post.image}
alt={post.title}
width={800} 
height={400} 
style={{
width: "clamp(200px, 35vw, 600px)", 
height: "auto"
}}
priority
/>
</div>
      
      <p>{post.description}</p>
      <article  className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content }} />

      {/* Sharing Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigator.share?.({
            title: post.title,
            text: post.description,
            url: `${window.location.origin}/blog/${post.slug}`,
          })}
          disabled={!navigator.share}
        >
          Share
        </button>
      </div>
    </div>
  );
}
