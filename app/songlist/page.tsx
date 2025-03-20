import { Suspense } from "react";
import SongList from "./SongList";
import { getData } from "../lib/data";

export default async function SongListWrapper() {
    console.log('getData is called');
  const { songlist } = await getData();
  console.log('from inside getsonglist', songlist);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SongList songlist={songlist} />
    </Suspense>
  );
}

