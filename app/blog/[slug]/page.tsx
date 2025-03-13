import { getPostBySlug } from "../../lib/posts";
import { notFound } from "next/navigation";
import styles from "../../page.module.css";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const post = getPostBySlug(params.slug);


export async function generateMetadata({ params }: { params: { slug: string } }) {
  // Await the params object since it's now a promise in Next.js 15
  const { slug } = await params;

  const post = getPostBySlug(slug);
  console.log('post',post);
 
 

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
      <div>
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          style={{
            width: "clamp(200px, 35vw, 600px)",
            height: "auto",
          }}
          priority
        />
      </div>

      <p>{post.description}</p>

      {/* Use react-markdown for post content */}
      <div >
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
            p: ({ children }) => <p className={styles.paragraph}>{children}</p>, // Custom styling for paragraphs
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
              title: post.title,
              text: post.description,
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
