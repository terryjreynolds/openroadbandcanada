"use client";
// import { usePathname } from "next/navigation"; 
// import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'; 
// import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function Header() {

  return (

    
    <div>
      <div className={styles.exitModalButton}>
      <button onClick{}>
        <strong><h3>X</h3></strong>
      </button>
      </div>
      
     <section>
      <ul>
      <li>
      <button>
      <FontAwesomeIcon icon={faSquareFacebook} />
      </button>
      </li>
      <li>
      <button>
      <FontAwesomeIcon icon={faSquareFacebook} />
      </button>
      </li>
      <li>
      <button>
      <FontAwesomeIcon icon={faSquareFacebook} />
      </button>
      </li>
      </ul>
      
      </section>
      
  
   </div>
      
    
    
  );
}
