import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    //overlay
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          // className={styles.logo}
          src="/hugelicence.webp"
          alt="band logo"
          width={180}
          height={38}
          priority
        />
       
      </main>
      <div className={styles.menu}>
        <a>
          Home
        </a>
        <a>
          About Us
        </a>
        <a>
          Blog
        </a>
        <a>
          Events
        </a>
        <a>
          Video
        </a>
        <a>
          Photos
        </a>
        <a>
          Song List
        </a>
        <a>
          Contact
        </a>
      </div>
      <div>
        Just Drive It!
      </div>
      <div>
        The Great Home of the Soul is the Open Road...!
      </div>
      <div>
        D.H. Lawrence
      </div>
    </div>
    
  );
}
