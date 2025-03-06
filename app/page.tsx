// import Image from "next/image";
"use client";  
import { useEffect, useState } from "react";
import styles from "./page.module.css";
// import Header from "./header";
// import Footer from "./footer";
// import Image from 'next/image';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'; 



export default function Home() {

  //stacking background images and toggling classes to fade in and out every 4s
  const [currentIndex, setCurrentIndex] = useState(0);
  const backgrounds = ["bg1", "bg2", "bg3"]; // Class names for images

  useEffect(() => {
    const totalBackgrounds = backgrounds.length; 
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalBackgrounds);
    }, 4000);
    return () => clearInterval(interval);
  }, [backgrounds.length]); 

  return (
<>
    {/* Background stays fixed */}
    <div className={styles.fixedbackground}>
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`${styles.backgroundImage} ${styles[bg]}`}
          style={{ opacity: index === currentIndex ? 1 : 0 }}
        />
      ))}
    </div>

    
    <div className={styles.pagecontent}>
      <h1>JUST DRIVE IT!</h1>
    </div>
  </>
  );
}
