// components/VideoPage.tsx
type Props = {
  urls: string[];
};

export default function VideoPage({ urls }: { urls: string[] }) {
  return (
    <main className="video-page">
      <h1 className="video-title">Our Videos</h1>
      <div className="video-grid">
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


