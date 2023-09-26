import React from "react";
import { useNavigate } from "react-router";

export function PostCard({ post }) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card-header">{post.title}</div>
      <div className="card-body">
        <div className="card-preview-text">{post.body}</div>
      </div>
      <div className="card-footer">
        <button
          className="btn"
          onClick={() => {
            navigate(`/posts/${post.id}`);
          }}
        >
          View
        </button>
      </div>
    </div>
  );
}
