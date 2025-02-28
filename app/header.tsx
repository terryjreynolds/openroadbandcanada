import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'; 



export default function Header() {
  return (
    //overlay
    <div >
      <div>
        <div >
       
          <a target="_blank" 
          href="https://www.facebook.com/openroadbandcanada/" 
          rel="noopener noreferrer"
          >
          <FontAwesomeIcon className={styles.socialmedia} icon={faFacebookF} />
          </a>

          <a target="_blank" 
          href="https://www.instagram.com/openroadbandcanada/" 
          rel="noopener noreferrer"
          >
          <FontAwesomeIcon className={styles.socialmedia} icon={faInstagram} />
          </a>

          <a target="_blank" 
          href="https://www.youtube.com/@openroadband6510/featured" 
          rel="noopener noreferrer"
          >
          <FontAwesomeIcon className={styles.socialmedia} icon={faYoutube} />
          </a>
          
        </div>
      <main className={styles.main}>
        <Image
          // className={styles.logo}
          src="/headerplate.webp"
          alt="band logo"
          width={180}
          height={38}
          priority
        />
       
      </main>
      <div className={styles.menu}>
      <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/events">Events</Link>
        <Link href="/video">Video</Link>
        <Link href="/photos">Photos</Link>
        <Link href="/songlist">SongList</Link>
        <Link href="/contact">Contact</Link>
      </div>

      </div>
      
    </div>
    
  );
}
