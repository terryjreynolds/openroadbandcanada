'use client';
import Image from 'next/image';
import Link from "next/link";
import styles from "../page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import SocialModal from "../components/SocialModal";


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

function removeTime(dateString: string): string {
  // Use a regular expression to match the date part
  const dateOnly = dateString.replace(/(\d{4}-\d{2}-\d{2})T\d{2}:\d{2}:\d{2}.\d{3}Z/, '$1');
  return dateOnly;
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

  const [lastCommentDate, setLastCommentDate] = useState('');
  const [shareSelected, setShareSelected] = useState(false);
 
  function isWithinOneMinute(dateString: string): boolean {
    const commentDate = new Date(dateString);
    const now = new Date();
    const diffInMilliseconds = Math.abs(now.getTime() - commentDate.getTime());
    const diffInMinutes = diffInMilliseconds / (1000 * 60);
    console.log(diffInMinutes);
    return diffInMinutes <= 1;
  }

  const handleClick = () => {
    alert('Button clicked!');
    setShareSelected(true);
  };

  useEffect(() => {
    if (comments.length > 0) {
      const lastComment = comments[comments.length - 1];
      console.log('lastComment:', lastComment);
      setLastCommentDate(lastComment.Date);
    }
  }, [comments]);

  useEffect(() => {
    if (lastCommentDate && isWithinOneMinute(lastCommentDate)) {
      const element = document.getElementById(lastCommentDate);
      if (element) {
        const offset = 600; // Adjust this value to set the desired offset
        const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [lastCommentDate]);


  return (
    <div >
      <div className={styles.backgroundCamaro}></div>
      <h2 className={styles.blogYellowHeadings}>
     NEWS
   </h2>
      {posts.map((post) => (
        <div key={post.slug}>
          
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
<button onClick={handleClick}>
<FontAwesomeIcon icon={faShareFromSquare} className={styles.blogShareIcon} />
<h5 className={styles.blogShareText} >SHARE</h5>
</button>

<div className={styles.SocialModal}>
        <SocialModal  />
      </div>

</div>
          </section>
          <h2>Comments</h2>
          <ul>
          {comments
              .filter((comment) => comment.Slug === post.slug)
              .map((comment) => (
                <li key={`${comment.Date}-${comment.Name}`} id={comment.Date}>
                  <strong>{removeTime(comment.Date)}--{comment.Name}</strong> from <em>{comment.Location}</em> said: {comment.Comment}
                </li>
              ))}
          </ul>
         
        </div>
      ))}
    </div>
  );
}
