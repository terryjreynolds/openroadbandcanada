// import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header";
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'; 



export default function Home() {
  return (
    //overlay
    <div className={styles.page}>
<div >
      <Header />
      </div>
<div className={styles.pagetext}>
<strong>
<span>
JUST DRIVE IT!
</span>
</strong>
<h2>
The Great Home of the Soul is the Open Road...!
</h2>
<h2>
D.H. Lawrence
</h2>
</div>

    </div>
  );
}
