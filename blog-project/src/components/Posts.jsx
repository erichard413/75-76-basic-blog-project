import React from "react";
import { useLoaderData } from "react-router";
import { PostCard } from "./PostCard";
import { useNavigate } from "react-router";

export function Posts() {
  // const navigate = useNavigate();
  const posts = useLoaderData();
  return (
    <div className="container">
      <h1 className="page-title" style={{ display: "inline-block" }}>
        Posts
      </h1>
      {/* <button
        onClick={() => {
          navigate("/posts/new");
        }}
        className="btn"
        style={{ display: "block", float: "right" }}
      >
        New Post
      </button> */}
      <div className="card-grid">
        {posts?.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
