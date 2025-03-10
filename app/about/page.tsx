// import Image from "next/image";
import styles from "../page.module.css";
import Image from "next/image"; 
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'; 



export default function About() {
  return (
    <div>
    <div className={styles.backgroundCamaro}></div>
    
    <section className={styles.pageInfoWhiteJustified}>
    <p>
    Emerging in 2018 from the wilds of Lanark and Frontenac Counties, 
    Open Road Band have carved a niche in the local scene that resonates with
     fans of all ages. With electrifying versions of classic and modern favourites, 
     this five-man band carries their torch high. 
   </p>
  
   <p>
   The venues they typically perform at range from local bars and halls to larger festivals, 
   each setting providing a unique backdrop for their electrifying shows. They have built a loyal fan base,
    with audience members often expressing how the band brings back cherished memories and a sense of nostalgia. 
    The chemistry among the band members translates into an infectious energy that captivates everyone 
    in attendance, leaving audiences eager for the next performance. 
   </p>
   
   <p>
   Come hit the open road with us!
   </p>
    </section>
    
      <section className={styles.otherWhiteHeadings}>

        <h2>
          OPEN ROAD BAND IS:
        </h2>

      </section>

      <div className={styles.bioImage}>
       <Image
                 src="/biobrett.webp"
                 alt="drummer Brett Stinson"
                 width={800} 
                 height={400} 
                 style={{
                 width: "clamp(100px, 40vw, 600px)", 
                 height: "auto"
                 }}
                 priority
               />

               <p>
                Brett Stinson- Drums/Percussion
               </p>
      </div>

      <div className={styles.bioImage}>
       <Image
                 src="/biodave.webp"
                 alt="Vocalist and Guitarist Dave Roberts"
                 width={800} 
                 height={400} 
                 style={{
                 width: "clamp(100px, 40vw, 600px)", 
                 height: "auto"
                 }}
                 priority
               />

               <p>
                David Roberts- Vocals/Guitar
               </p>
      </div>

      <div className={styles.bioImage}>
       <Image
                 src="/bioDennis.webp"
                 alt="Lead Guitarist Dennis Larocque"
                 width={800} 
                 height={400} 
                 style={{
                 width: "clamp(100px, 40vw, 600px)", 
                 height: "auto"
                 }}
                 priority
               />

               <p>
                Dennis Larocque- Guitar/Harmonica/Vocals
               </p>
      </div>

      <div className={styles.bioImage}>
       <Image
                 src="/biojim.webp"
                 alt="Keyboards and vocals Jim Roberts"
                 width={800} 
                 height={400} 
                 style={{
                 width: "clamp(100px, 40vw, 600px)", 
                 height: "auto"
                 }}
                 priority
               />

               <p>
                Jim Roberts- Keys/Vocals/Tambourine
               </p>
      </div>
      
      <div className={styles.bioImage}>
       <Image
                 src="/bioterry.webp"
                 alt="Bassist and Back up vocalist Terry Reynolds"
                 width={800} 
                 height={400} 
                 style={{
                 width: "clamp(100px, 40vw, 600px)", 
                 height: "auto"
                 }}
                 priority
               />

               <p>
                Terry Reynolds- Bass Guitar/ Vocals
               </p>
      </div>
      
    </div>
    
  );
}
