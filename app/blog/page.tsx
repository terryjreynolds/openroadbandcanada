import Link from "next/link";
import { getPosts } from "../lib/posts";
import styles from "../page.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";



const POSTS_PER_PAGE = 2;

export default async function BlogPage({ searchParams }: { searchParams?: { page?: string } }) {
  const allPosts = getPosts();
  console.log('allposts', allPosts);
  const currentPage = Number((await searchParams)?.page) || 1;
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const posts = allPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);
  console.log('post', posts);
  return (
    <div>
      <div className={styles.backgroundCamaro}></div> 
      <h1 className={styles.blogYellowHeadings}>NEWS</h1>
      {posts.map((post) => (
       
        <div key={post.slug}>
          
          <h2>{`${post.data.eventDate}-- ${post.data.title}`}</h2>

          <Image
                    src={post.data.image}
                    alt={post.data.title}
                    width={800}
                    height={400}
                    style={{
                      width: "clamp(200px, 35vw, 600px)",
                      height: "auto",
                    }}
                    priority
                  />
          <p>{post.content}</p>
          <small>{`posted: ${post.data.postDate}`}</small>
          
          <div className={styles.blogCommentReveal}>
          
          <Link href={`/blog/${post.slug}/comment`}>
            <button>Leave a Comment</button>
          </Link>

<FontAwesomeIcon icon={faShareFromSquare} className={styles.blogShareIcon} />
<h5 className={styles.blogShareText}>SHARE</h5>
</div>

        </div>
      )) }

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
