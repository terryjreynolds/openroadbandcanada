"use client";

import { useEffect, useState } from "react";
import { fetchComments } from "../lib/fetchcomments";
import { getPosts } from "../lib/posts";

export default function BlogPage() {
  const [comments, setComments] = useState<Record<string, any[]>>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadComments = async () => {
      try {
        const fetchedComments = await fetchComments();
        setComments(fetchedComments);
      } catch (err) {
        console.error("Failed to fetch comments:", err);
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      }
    };

    loadComments();
  }, []); // ✅ Runs only after initial render

  const posts = getPosts();

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.data.title}</h2>
          <p>{post.content}</p>
          <h3>Comments</h3>
          {comments[post.slug]?.length ? (
            comments[post.slug].map((comment, index) => (
              <div key={index}>
                <p>
                  <strong>{comment.name}</strong> ({comment.location}) -{" "}
                  {new Date(comment.date).toLocaleString()}
                </p>
                <p>{comment.comment}</p>
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      ))}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}
