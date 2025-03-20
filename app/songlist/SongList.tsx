'use client';
import SongListWrapper from "./page";
// import Image from "next/image";
import styles from "./page.module.css";
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'; 

interface SongList {
  slug: string;
  data: {
    title: string;
    updated: string;
    description: string;
  };
  content: string;
}

export default function BlogPage({
  songlist,
}: {
  songlist: SongList[];
})  {

  console.log("i'm in Songlist");
console.log('songlist:', songlist);
  return (
    <div>
    

      <title>
        {songlist[0].data.title}
      </title>
        <ul>
          {songlist[0].content}
        </ul>
        <p>{songlist[0].description}</p>
      
      
    </div>
    
  );
}
