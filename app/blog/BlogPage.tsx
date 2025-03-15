'use client';
import Image from 'next/image';
import styles from "../page.module.css";
interface Post {
  slug: string;
  data: {
    postDate: string;
    title: string;
    description: string;
    image: string;
  };
  content: string;
}

interface Comment {
  id: string;
  postId: string;
  text: string;
}

export default function BlogPage({
  posts,
  comments,
}: {
  posts: Post[];
  comments: Comment[];
}) {
  console.log('Posts:', posts);
  console.log('Comments:', comments);

  return (
    <div className={styles.backgroundCamaro}>
      
      {posts.map((post) => (
        <div key={post.slug}>
          <h2 className={styles.blogYellowHeadings}>
     NEWS
   </h2>
          <h2>{post.data.title}</h2>
          <div className={styles.blogImage}>
          <Image
      src={post.data.image}
      alt={post.data.description}
      width={300}
      height={100}
      style={{
        width: "clamp(100px, 35vw, 300px)",
        height: "auto",
      }}
      priority
    />
          </div>
      
        



          <p>{post.data.postDate}</p>
          <ul>
            {comments
              .filter((comment) => comment.postId === post.slug)
              .map((comment) => (
                <li key={comment.id}>{comment.text}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
