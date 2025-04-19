// components/VideoPage.tsx

import styles from "../page.module.css";

type Props = {
  urls: string[];
};

export default function VideoPage({ urls }: { urls: string[] }) {
  return (
    

    
    <main className={styles.videoPage}>
      <div className={styles.backgroundCamaro}></div>
      <h1 className={styles.videoTitle}>Our Videos</h1>
      <div className={styles.videoGrid}>
        {urls.map((url, index) => (
          <iframe
            key={index}
            src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="video-item"
          ></iframe>
        ))}
      </div>
    </main>
    
  );
}


