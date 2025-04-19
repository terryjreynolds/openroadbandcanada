
import { Suspense } from "react";
import VideoPage from "../components/videoPage";
import { getVideoList } from "../lib/getVideoList";

export default async function VideoWrapper() {
  const urls = await getVideoList();
  console.log('vid urls', urls);

  return (
    <Suspense fallback={<div>Loading...</div>}>
        
        <VideoPage urls={urls} />
            
    </Suspense>
  );
}