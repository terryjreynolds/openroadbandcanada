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
}

export default function SocialModal({ postTitle, slug }: SocialModalProps) {

  console.log("postTitle:", postTitle);
 
  // useEffect(() => {
  //  const modalTitle = document.getElementById(postTitle);
  //  console.log("modal opened for:", modalTitle);
  // }, [postTitle]);

  const handleFBClick = () => {
    console.log("Share FB clicked for post", postTitle);
    console.log('the slug for FB is:', slug);
    const postUrl = `localhost:3000/blog/${slug}`; // Replace with your actual blog post URL structure
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;
    window.open(facebookShareUrl, "_blank", "noopener,noreferrer");
    console.log("Sharing to Facebook:", postUrl);
  };

  return (
    <div>
      
      
      <h5>{postTitle}</h5>
      
        <ul className={styles.socialModalContainer}>
          <li>
            <button onClick={handleFBClick} className={styles.socialModalButton}>
              <FontAwesomeIcon className={styles.socialFontSize} icon={faSquareFacebook} />
                   Share on Facebook
            </button>
            
          </li>
          <li>
            <button className={styles.socialModalButton}>
            <FontAwesomeIcon className={styles.socialFontSize} icon={faSquareXTwitter} />
                Share on X
            </button>

          </li>
          <li>
            <button className={styles.socialModalButton}>
            <FontAwesomeIcon className={styles.socialFontSize} icon={faEnvelope} />
                 Share via Email
            </button>
          </li>
          <li>
            <button className={styles.socialModalButton}>
            <FontAwesomeIcon className={styles.socialFontSize} icon={faLink} />
                 Copy Link
            </button>
          </li>
        </ul>
     
    </div>
  );
}