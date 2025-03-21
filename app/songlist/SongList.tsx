'use client';
// import SongListWrapper from "../page";
// import Image from "next/image";
import styles from "../page.module.css";
import ReactMarkdown from "react-markdown";
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

export default function SongList({
  songlist,
}: {
  songlist: SongList[];
})  {

  console.log("i'm in Songlist");
console.log('songlist:', songlist);
  return (
    <div>
      <div className={styles.backgroundCamaro}></div>
    
      <article>
      <h2 className={styles.blogYellowHeadings}>
        {songlist[0].data.title}
      </h2>
      <div className={styles.songListUl}>
      <ReactMarkdown>{songlist[0].content}</ReactMarkdown>
      </div>
      
       
        <p>{songlist[0].data.description}</p>
      </article>
      
      
      
    </div>
    
  );
}
