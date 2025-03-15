import { getPosts } from "./posts";
import { fetchComments } from "./fetchcomments";

export async function getData() {
  try {
    console.log('im in getData');
    const posts = await getPosts();
    console.log("Fetched posts:", posts);

    const comments = await fetchComments();
    console.log("Fetched comments:", comments);

    if (!posts || !comments) throw new Error("Data fetching failed");

    return {
      posts,
      comments,
    };
  } catch (error) {
    console.error("Error in getData:", error);
    throw error;
  }
}

