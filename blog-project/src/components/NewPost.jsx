import React from "react";
import { PostForm } from "../forms/PostForm";

export function NewPost() {
  return (
    <div className="container">
      <h1 className="page-title">Create New Post</h1>
      <span className="page-subtitle">
        <PostForm />
      </span>
    </div>
  );
}
