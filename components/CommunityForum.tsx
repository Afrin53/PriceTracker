'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Comment = {
  _id: string;
  productId: string;
  username: string;
  message: string;
  parentId?: string | null;
  likes: number;
  createdAt: string;
};

const CommunityForum = ({ productId }: { productId: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [parentId, setParentId] = useState<string | null>(null);
  const [likedComments, setLikedComments] = useState<string[]>([]); // local tracking

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comments?productId=${productId}`);
        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.error("Failed to load comments", error);
      }
    };

    fetchComments();
  }, [productId]);

  const handlePost = async () => {
    if (!username || !message) return;

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, username, message, parentId }),
      });

      const newComment = await res.json();
      setComments([newComment, ...comments]);
      setMessage('');
      setUsername('');
      setParentId(null);
    } catch (error) {
      console.error("Failed to post comment", error);
    }
  };

  const handleLike = async (commentId: string) => {
    try {
      await fetch(`/api/comments/${commentId}/like`, { method: 'PATCH' });
      setComments((prev) =>
        prev.map((c) =>
          c._id === commentId ? { ...c, likes: c.likes + 1 } : c
        )
      );
      setLikedComments((prev) => [...prev, commentId]);
    } catch (error) {
      console.error("Failed to like comment", error);
    }
  };

  const renderComments = (parent: string | null = null, level = 0) => {
    return comments
      .filter((c) => c.parentId === parent)
      .map((c) => {
        const isLiked = likedComments.includes(c._id);

        return (
          <div key={c._id} className={`ml-${level * 4} border-l border-gray-200 pl-4 py-3`}>
            <p className="font-semibold text-secondary">{c.username}</p>
            <p className="text-sm text-black">{c.message}</p>

            <div className="flex gap-4 text-sm mt-1 text-gray-600 items-center">
              <button onClick={() => setParentId(c._id)} className="hover:text-blue-600">
                Reply
              </button>

              <button
                onClick={() => !isLiked && handleLike(c._id)}
                className="flex items-center gap-1"
              >
              <Image
                src={isLiked ? '/assets/icons/like-filled.svg' : '/assets/icons/black-heart.svg'}
                alt="like"
                width={16}
                height={16}
                className={`transition duration-300 ${isLiked ? 'animate-bounceOnce' : ''}`}
               />

             <span>({c.likes})</span>
            </button>
             </div>

            {renderComments(c._id, level + 1)}
          </div>
        );
      });
  };

  return (
    <div className="mt-12 w-full">
      <h3 className="text-2xl font-semibold text-secondary mb-4">Community Forum</h3>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your name"
          className="p-2 rounded-md border border-gray-300"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          placeholder={parentId ? "Reply..." : "Share your thoughts..."}
          className="p-2 rounded-md border border-gray-300"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {parentId && (
          <p className="text-xs text-gray-400">
            Replying to a comment.{' '}
            <button
              className="text-blue-500 underline ml-1"
              onClick={() => setParentId(null)}
            >
              Cancel
            </button>
          </p>
        )}
        <button
          onClick={handlePost}
          className="bg-primary-orange text-white py-2 px-4 rounded-md w-fit"
        >
          Post
        </button>
      </div>

      <div className="mt-6">
        {comments.length > 0 ? (
          renderComments()
        ) : (
          <p className="text-sm text-gray-500 mt-4">No comments yet. Be the first!</p>
        )}
      </div>
    </div>
  );
};

export default CommunityForum;
















