import { Suspense } from "react";
import BlogPage from "./BlogPage";
import { getData } from "../lib/data";

export default async function BlogWrapper() {
    console.log('getData is called');
  const { posts, comments } = await getData();
  console.log('from inside getData', posts, comments);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPage posts={posts} comments={comments}/>
    </Suspense>
  );
}

