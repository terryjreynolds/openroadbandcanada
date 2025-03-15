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

  const post = await getPostBySlug(slug);
  console.log('post',post);
 
 

  if (!post) return notFound();

  return {
    title: post.data.title,
    description: post.data.description,
    openGraph: {
      images: [post.data.image],
    },
  };
}

export async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
 
  if (!post) return notFound();
  

  return (
    <div>
     
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
