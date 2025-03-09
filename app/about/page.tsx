// import Image from "next/image";
import styles from "../page.module.css";
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
        
      
      
    </div>
    
  );
}
