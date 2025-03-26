"use client";
import { redirect } from 'next/navigation'
import { useState } from "react";

type Comment = {
  slug: string;
  name: string;
  location: string;
  comment: string;
  date: string;
};

export default function CommentForm({
  slug,
  
}: {
  slug: string;
  // onNewComment: () => void;
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
      date: new Date().toISOString(),
      slug,
      name,
      location,
      comment,
    };

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newComment }),
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
    } finally {
      console.log("Finally");
      setIsSubmitting(false);
      redirect('/blog')
    }
  };

  return (
    <form id="comment" onSubmit={handleSubmit}>
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