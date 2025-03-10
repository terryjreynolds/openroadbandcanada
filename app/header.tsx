"use client";
import { usePathname } from "next/navigation"; 
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'; 
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function Header() {


  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isHome) {
      setAnimate(true);
    }
  }, [isHome]);

  return (

    
    <div>
    
      <div className={styles.page}>

        {/* hamburger nav menu bars visible online at media query sizes */}
        <nav className={styles.navbar}>
      <button onClick={() => setIsOpen(!isOpen)} className="hamburgerMenuButton">
      <FontAwesomeIcon className={styles.hamburgerIcon} icon={faBars} />

      </button>


      <div className={`hamburgerMenu ${isOpen ? "hamburgerMenu-open" : ""}`}>

      <ul id="hamburgerMenu">

        <li>
        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
        <Link href="/" onClick={() => setIsOpen(false)}>About Us</Link>
        </li>
        <li>
        <Link href="/" onClick={() => setIsOpen(false)}>Blog</Link>
        </li>
        <li>
        <Link href="/" onClick={() => setIsOpen(false)}>Events</Link>
        </li>
        <li>
        <Link href="/" onClick={() => setIsOpen(false)}>Video</Link>
        </li>
        <li>
        <Link href="/" onClick={() => setIsOpen(false)}>Photos</Link>
        </li>
        <li>
        <Link href="/" onClick={() => setIsOpen(false)}>Song List</Link>
        </li>
        <li>
        <Link href="/" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>

       
    </ul>
    
    </div>
     
     {/* Overlay to Close on Click Outside */}
     {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
     
    </nav>
        
        <div className={`${styles["socials"]} ${animate ? styles["socials-animate"] : ""}`} >
       
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
      <main className={`${styles["plate"]} ${animate ? styles["plate-animate"] : ""}`}>
        <Image
          src="/headerplate.webp"
          alt="band logo"
          width={800} 
          height={400} 
          style={{
          width: "clamp(200px, 50vw, 800px)", 
          height: "auto"
          }}
          priority
        />
       
      </main>
      <div className={`${styles["menu"]} ${animate ? styles["menu-animate"] : ""}`}>
      <Link href="/" >Home</Link>
        <Link href="/about" >About Us</Link>
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
