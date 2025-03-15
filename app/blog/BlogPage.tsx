'use client';
import Image from 'next/image';
import Link from "next/link";
import styles from "../page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
interface Post {
  slug: string;
  data: {
    postDate: string;
    title: string;
    description: string;
    image: string;
    eventDate: string;
  };
  content: string;
}

interface Comment {
  Date: string;
  Slug: string;
  Name: string;
  Location: string;
  Comment: string;
}

export default function BlogPage({
  posts,
  comments,
}: {
  posts: Post[];
  comments: Comment[];
}) {
  console.log('Postsha:', posts);
  console.log('Commentsha:', comments);

  return (
    <div >
      <div className={styles.backgroundCamaro}></div>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2 className={styles.blogYellowHeadings}>
     NEWS
   </h2>
   <h2>{`${post.data.eventDate}-- ${post.data.title}`}</h2>
          <article className={styles.blogContent}>
          <p>{post.content}</p>
          </article>
        
          <div className={styles.blogImage}>
          <Image
      src={post.data.image}
      alt={post.data.description}
      width={600}
      height={400}
      style={{
        width: "clamp(200px, 35vw, 600px)",
        height: "auto",
      }}
      priority
    />
          </div>
          <small>{`posted: ${post.data.postDate}`}</small>
          <section className={styles.blogCommentReveal}>
          <div className={styles.blogCommentReveal}>
          
          <Link href={`/blog/${post.slug}/comment`}>
            <button>Leave a Comment</button>
          </Link>

<FontAwesomeIcon icon={faShareFromSquare} className={styles.blogShareIcon} />
<h5 className={styles.blogShareText}>SHARE</h5>
</div>
          </section>
          <h2>Comments</h2>
          <ul>
          {comments
              .filter((comment) => comment.Slug === post.slug)
              .map((comment) => (
                <li key={`${comment.Date}-${comment.Name}`}>
                  <strong>{comment.Date}:{comment.Name}</strong> from <em>{comment.Location}</em> said: {comment.Comment}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
