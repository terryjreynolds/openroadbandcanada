"use client";

import { useState } from "react";

type Comment = {
  name: string;
  location: string;
  comment: string;
  date: string;
  rollback?: boolean;
};

export default function CommentForm({
  slug,
  onNewComment,
}: {
  slug: string;
  onNewComment: (newComment: Comment) => void;
}) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const newComment: Comment = {
      name,
      location,
      comment,
      date: new Date().toISOString(),
    };

    // Optimistic update
    onNewComment({ ...newComment });

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, ...newComment }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit comment");
      }

      const data = await res.json();
      console.log("Success:", data);

      // Reset form fields after success
      setName("");
      setLocation("");
      setComment("");
    } catch (err) {
      console.error("Error submitting comment:", err);
      setError(err instanceof Error ? err.message : "Unknown error occurred");

      // Rollback optimistic update on error
      onNewComment({ ...newComment, rollback: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <textarea
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
