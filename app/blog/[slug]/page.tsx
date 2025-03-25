import { getPostBySlug } from "../../lib/posts";
import { notFound } from "next/navigation";
import styles from "../../page.module.css";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  return {
    title: post.data.title,
    description: post.data.description,
    openGraph: {
      title: post.data.title,
      description: post.data.description,
      images: [post.data.image],
      url: `http://localhost:3000/blog/${post.slug}`, // Replace with your live domain in production
      type: "article",
    },
  };
}

// Default export for the blog post page
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <div>
      <h1>{post.data.title}</h1>
      <div>
        <ReactMarkdown
          components={{
            img: ({ src, alt }) => (
              <Image
                src={src || ""}
                alt={alt || ""}
                width={800}
                height={400}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            ),
            p: ({ children }) => <p className={styles.paragraph}>{children}</p>,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      {/* Sharing Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() =>
            navigator.share?.({
              title: post.data.title,
              text: post.data.description,
              url: `${window.location.origin}/blog/${post.slug}`,
            })
          }
          disabled={!navigator.share}
        >
          Share
        </button>
      </div>
    </div>
  );
}