import { getPosts } from "./posts";
import { fetchComments } from "./fetchcomments";
import { getSonglist } from "./getsonglist";

export async function getData() {
  try {
    console.log('im in getData');
    const posts = await getPosts();
    console.log("Fetched posts:", posts);

    const comments = await fetchComments();
    console.log("Fetched comments:", comments);

    const songlist = await getSonglist();
    console.log("fetched songlist:", songlist);

    if (!posts || !comments || !songlist) throw new Error("Data fetching failed");

    return {
      posts,
      comments,
      songlist,
    };
  } catch (error) {
    console.error("Error in getData:", error);
    throw error;
  }
}

