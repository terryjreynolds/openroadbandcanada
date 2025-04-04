"use client";
import styles from "../page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLink, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { useEffect } from "react";
// interface SocialModalProps {
//   shareSelected: boolean;
//   setShareSelected: (value: boolean) => void;
// }


interface SocialModalProps {
  postTitle: string; 
  slug: string;
  content: string;
}

export default function SocialModal({ postTitle, slug, content}: SocialModalProps) {

  console.log("postTitle:", postTitle);
 
  // useEffect(() => {
  //  const modalTitle = document.getElementById(postTitle);
  //  console.log("modal opened for:", modalTitle);
  // }, [postTitle]);

  const handleFBClick = () => {
    console.log("Share FB clicked for post", postTitle);
    console.log('the slug for FB is:', slug);
    console.log('the content for FB is:', content);
    const tempPostUrl = "https://www.smashingmagazine.com/"//updte this with your live domain once in production
    const postUrl = `localhost:3000/blog/${slug}`; // Replace with your actual blog post URL structure
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(tempPostUrl)}`;
    window.open(facebookShareUrl, "_blank", "noopener,noreferrer");
    console.log("Sharing to Facebook:", postUrl);
  };

  return (
    <div>
      
      <title>
      <h5>{postTitle}</h5>
      </title>
      
      
        <ul className={styles.socialModalContainer}>
          <li>
            <button onClick={handleFBClick} className={styles.socialModalButton}>
              <FontAwesomeIcon className={styles.socialFontSize} icon={faSquareFacebook} />
                   Share on Facebook
            </button>
            
          </li>
          <li>
            {/* <button className={styles.socialModalButton}> */}
            {/* <a className="twitter-share-button"
            href="https://twitter.com/intent/tweet?text=${postTitle}"
            data-size="large">
           Share on X</a> */}
             
             {/* <a
  className="twitter-share-button"
  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${postTitle} - ${content}`)}
  &url=${encodeURIComponent(`http://localhost:3000/blog/${slug}`)}`}//updte this with your live domain once in production
  data-size="large"
  target="_blank"
  rel="noopener noreferrer"
>
  <button>
    <FontAwesomeIcon className={styles.socialFontSize} icon={faSquareXTwitter} />
    Share on X
  </button>
</a> */}

{/* Using smashing magazine to test image meta data. Replace with above once in production */}
<a
  className="twitter-share-button"
  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${postTitle} - ${content}`)}
  &url=${encodeURIComponent("https://www.smashingmagazine.com")}`}
  data-size="large"
  target="_blank"
  rel="noopener noreferrer"
>
  <button>
    <FontAwesomeIcon className={styles.socialFontSize} icon={faSquareXTwitter} />
    Share on X
  </button>
</a>
          

          </li>
          <li>
  <button
    className={styles.socialModalButton}
    onClick={() => {
      const subject = encodeURIComponent(`Check out this post: ${postTitle}`);
      const body = encodeURIComponent(`${content}\n\nRead more here: http://localhost:3000/blog/${slug}`);
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
    }}
  >
    <FontAwesomeIcon className={styles.socialFontSize} icon={faEnvelope} />
    Share via Email
  </button>
</li>
<li>
  <button
    className={styles.socialModalButton}
    onClick={() => {
      const postUrl = `http://localhost:3000/blog/${slug}`; // Replace with your live domain in production
      navigator.clipboard.writeText(postUrl).then(() => {
        alert("Link copied to clipboard!");
      }).catch((err) => {
        console.error("Failed to copy link: ", err);
      });
    }}
  >
    <FontAwesomeIcon className={styles.socialFontSize} icon={faLink} />
    Copy Link
  </button>
</li>
        </ul>
     
    </div>
  );
}