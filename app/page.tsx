// import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header";
import Footer from "./footer";
// import Image from 'next/image';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'; 



export default function Home() {
  return (
    //overlay
    <div className={styles.fixedbackground}>
<div>
      <Header />
      </div>

<div>
{/* <Image
      src={'/ecotaybandpic.jpg'}
      alt="Band photo at Ecotay"
      width={1000} 
      height={800} 
      blurDataURL="data:..." 
      placeholder="blur" // Optional blur-up while loading
      
    /> */}
</div>
      

      



<div>
  <Footer/>
</div>

    </div>
  );
}
