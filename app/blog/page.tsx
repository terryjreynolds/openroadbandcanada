import styles from "../page.module.css";
import Image from "next/image"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'; 



export default function Blog() {
  return (
    <div>
     
     <div className={styles.backgroundCamaro}></div>
     <h2 className={styles.blogYellowHeadings}>
    NEWS
  </h2>

    <article>
    
    <header className={styles.blogWhiteHeadings}>
    <h3>
    Open Road Band hosts May-hem at The Mill 
    </h3>
    </header>
    
      <section className={styles.blogParagraphs}>    
    <p>
We have mostly private bookings for 2024, but here is your chance to hit the Open Road with us for an evening of musical
 Mayhem at beautiful Codes Mill on the Park in Perth on Saturday, May 11th, from 8PM-12AM! 
</p>
<p>Tickets available as detailed below. We hope to see you there!</p>

<div className={styles.blogImage}>
<Image
                     src="/blogimages/05-11-24mayhemmill.webp"
                     alt="flyer for mayhem at the mill"
                     width={800} 
                     height={400} 
                     style={{
                     width: "clamp(200px, 35vw, 600px)", 
                     height: "auto"
                     }}
                     priority
                   />
</div>
<time>
  <h6>
    posted: 2/21/25
  </h6>
</time>
<div className={styles.blogCommentReveal}>
<button className={styles.blogCommentRevealButton}>
  LEAVE A COMMENT
</button>
<FontAwesomeIcon icon={faShareFromSquare} className={styles.blogShareIcon} />
<h5 className={styles.blogShareText}>SHARE</h5>
</div>

</section>

    </article>
      
      
    </div>
    
  );
}
